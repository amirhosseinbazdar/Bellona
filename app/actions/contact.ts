"use server";

import { type Lead, type LeadField, type LeadState, leadSchema } from "@/lib/lead";

const MIN_FILL_MS = 2500;

/**
 * Contact form handler.
 * 1. Bots: a filled honeypot or a sub-2.5 s submit gets a fake success and is dropped.
 * 2. Validates with zod.
 * 3. POSTs JSON to LEAD_WEBHOOK_URL (our n8n / Make automation).
 * 4. Falls back to a Resend email if the webhook is missing or fails.
 */
export async function submitLead(prev: LeadState, form: FormData): Promise<LeadState> {
  const attempt = prev.attempt + 1;
  const str = (k: string) => {
    const v = form.get(k);
    return typeof v === "string" ? v : "";
  };

  const values = {
    name: str("name"),
    email: str("email"),
    company: str("company"),
    message: str("message"),
    needs: form.getAll("needs").filter((v): v is string => typeof v === "string"),
  };

  const startedAt = Number(str("startedAt"));
  const tooFast = Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < MIN_FILL_MS;
  if (str("website") || tooFast) {
    return { status: "success", attempt };
  }

  const parsed = leadSchema.safeParse({
    ...values,
    model: str("model") || undefined,
    industry: str("industry") || undefined,
    locale: str("locale"),
    page: str("page"),
  });

  if (!parsed.success) {
    const errors: Partial<Record<LeadField, true>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "name" || key === "email" || key === "needs" || key === "message") errors[key] = true;
    }
    return { status: "invalid", attempt, errors, values };
  }

  try {
    await deliver(parsed.data);
    return { status: "success", attempt };
  } catch (err) {
    console.error("[lead] delivery failed", err);
    return { status: "error", attempt, values };
  }
}

async function deliver(lead: Lead) {
  const payload = { ...lead, source: "bellonaagency.com", receivedAt: new Date().toISOString() };
  const problems: string[] = [];

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...(process.env.LEAD_WEBHOOK_SECRET ? { "x-bellona-secret": process.env.LEAD_WEBHOOK_SECRET } : {}),
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      });
      if (res.ok) return "webhook";
      problems.push(`webhook responded ${res.status}`);
    } catch (e) {
      problems.push(`webhook error: ${(e as Error).message}`);
    }
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  const to = process.env.LEAD_TO_EMAIL;
  if (key && from && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()),
        reply_to: lead.email,
        subject: `New lead: ${lead.name}${lead.company ? ` (${lead.company})` : ""} · ${lead.needs.join(", ")}`,
        text: [
          `Name: ${lead.name}`,
          `Email: ${lead.email}`,
          `Company: ${lead.company || "-"}`,
          `Needs: ${lead.needs.join(", ")}`,
          `Engagement model: ${lead.model || "-"}`,
          `Industry: ${lead.industry || "-"}`,
          `Language: ${lead.locale}`,
          `Page: ${lead.page || "-"}`,
          "",
          lead.message || "(no message)",
          "",
          problems.length ? `Note: sent by email fallback (${problems.join("; ")})` : "",
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (res.ok) return "email";
    problems.push(`resend responded ${res.status}`);
  }

  if (process.env.NODE_ENV !== "production" && !webhook && !key) {
    // Local development without credentials: log instead of failing.
    console.info("[lead] (dev, no transport configured)", payload);
    return "dev-log";
  }

  throw new Error(problems.length ? problems.join("; ") : "No lead transport configured (LEAD_WEBHOOK_URL / RESEND_API_KEY)");
}
