import { z } from "zod";

export const NEED_IDS = ["web", "product", "ai", "growth", "bizdev", "unsure"] as const;
export const MODEL_IDS = ["project", "partnership", "team"] as const;

export const leadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.email().trim().max(200),
  company: z.string().trim().max(160).optional().default(""),
  message: z.string().trim().max(4000).optional().default(""),
  needs: z.array(z.enum(NEED_IDS)).min(1).max(NEED_IDS.length),
  model: z.enum(MODEL_IDS).optional(),
  industry: z.string().trim().max(40).optional(),
  locale: z.enum(["en", "fa"]),
  page: z.string().trim().max(200).optional().default(""),
});

export type Lead = z.infer<typeof leadSchema>;

export type LeadField = "name" | "email" | "needs" | "message";

export interface LeadState {
  status: "idle" | "success" | "invalid" | "error";
  /** Increments on every server response so the form can re-mount with the returned values. */
  attempt: number;
  errors?: Partial<Record<LeadField, true>>;
  values?: Partial<Record<"name" | "email" | "company" | "message", string>> & { needs?: string[] };
}

export const initialLeadState: LeadState = { status: "idle", attempt: 0 };
