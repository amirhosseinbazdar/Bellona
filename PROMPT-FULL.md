# Full-site prompt for Claude Code

Paste everything between the lines into Claude Code, opened in the unzipped `bellona-handoff` folder.

---

You're building the new website for **Bellona** (current site: https://bellonaagency.com, with a Persian version). Bellona is expanding from "AI & automation" into a full-service digital agency with four pillars:

1. **Website design:** UI/UX, landing pages, CMS sites
2. **Full-stack development:** web apps, dashboards, internal tools, APIs, integrations
3. **AI agents & automation:** the current core offer
4. **Marketing & business development:** growth marketing, SEO/content, lead-generation systems, sales pipeline & CRM, go-to-market and partnerships

Tagline: **BUILD · AUTOMATE · GROW** (fa: بساز · خودکار کن · رشد کن).

**Read first:** `CLAUDE.md`, `BRIEF.md`, `assets/motion/MOTION.md`, then the mockups in `reference/` (HomeBWO = home page, LogoMotion = hero animation, PersianType = Persian typography and RTL). The visual system is fixed: black · white · orange, the cube-stack logo, Plus Jakarta Sans + Estedad. Do not redesign it.

## Phase 0: content audit (no code yet)
1. Fetch https://bellonaagency.com and its Persian version. List every real piece of content in `content/AUDIT.md`:
   - headlines and copy
   - services
   - "How Bellona Works" steps
   - "From Lead to Revenue"
   - "Built for Your Sector" industries
   - "Traditional Team vs Bellona AI" comparison
   - founders
   - FAQ
   - stats (100+ automations, 24/7, 80% time saved, 3X)
   - CTAs and contact details
2. Mark each item **keep / rewrite for the new positioning / drop**.
   - The dashboard numbers in the current hero mockup (12 agents, 2,847 leads, $847K…) are illustrative. Do not present them as real results.
3. Propose the sitemap and the copy for the new pillars, in EN and FA. **Never invent** clients, testimonials, prices, case-study results or team members. Use `[PLACEHOLDER]` and list every open item in `content/TODO-OWNER.md`.
4. Show me the audit and sitemap. **Wait for my approval.**

## Phase 1: foundation
Set up the project:
- **Stack:** Next.js (App Router) + TypeScript + Tailwind.
- **Brand:** tokens from BRIEF.md and self-hosted fonts.
- **Languages:** i18n with `/` (en) and `/fa` (rtl). All copy lives in `content/en.ts` and `content/fa.ts`; no hard-coded strings in components.
- **Layout:** header and footer exactly as in the mockup.

## Phase 2: home page
- Build HomeBWO section by section, using the approved real copy.
- Add sections from the current site that still fit: industries, Lead→Revenue flow, Traditional vs Bellona comparison, FAQ, founders. Restyle them in the new design language.
- Build the `HeroMark` animation exactly per MOTION.md: intro, then random shuffle; reduced motion; pause off-screen; mobile move pool.

## Phase 3: inner pages
- `/services` overview, plus one page per pillar: `/services/web-design`, `/services/full-stack`, `/services/ai-automation`, `/services/growth`.
  - Each pillar page has: problem → what we deliver → process → deliverables list → related pillars → CTA.
- `/industries` page
- `/process` page
- `/about` page (founders, story)
- `/work` page: case-study template with placeholders
- `/contact` page

## Phase 4: make it work like an automation agency's site
- **Contact / "start a project" form:** service chips, budget, message. Use a server action with validation (zod) and honeypot spam protection. Send to the env var `LEAD_WEBHOOK_URL` (so our own automations, such as n8n/Make, can pick leads up), with an email fallback via Resend (`RESEND_API_KEY`). Show success and error states.
- **"Book a 30-min free call":** an embed or link from env var `BOOKING_URL` (Cal.com / Calendly).
- **SEO:**
  - per-page metadata in both languages, with hreflang
  - sitemap.xml and robots.txt
  - OG images
  - schema.org `ProfessionalService` and `FAQPage` JSON-LD
- **Analytics:** load only if the env var `NEXT_PUBLIC_ANALYTICS_ID` is set. Track CTA clicks and form submits as events.
- Write `.env.example` with every variable documented.

## Phase 5: quality and deploy
- Responsive at 360 / 768 / 1280 / 1440.
- Keyboard and screen-reader check.
- Lighthouse 95+ on mobile.
- `npm run lint && npm run build` clean.
- Write a README covering: run locally, edit content, add a case study, deploy to Vercel.

**How we work:** stop after each phase, show me what changed, and run the dev server so I can check it in the browser. Ask me when something is a business decision (pricing, claims, names). Don't guess.

---
