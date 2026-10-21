# Redesign prompt for Claude Code (audit our site → redesign → full-partner positioning)

Paste everything between the lines into Claude Code, opened in the unzipped `bellona-handoff` folder.

---

You're redesigning the website of **Bellona** (https://bellonaagency.com, EN + Persian). Work in three moves: **audit our real site → redesign it with the design system in this folder → expand the positioning into a complete digital partner.**

Read first: `CLAUDE.md`, `BRIEF.md`, `assets/motion/MOTION.md` and the mockups in `reference/` (HomeBWO, LogoMotion, PersianType).

The visual system is fixed and must not be redesigned:
- black · white · orange
- the cube-stack logo with the animated hero
- Plus Jakarta Sans + Estedad

## Step 1: audit our current site (no code yet)
- Crawl https://bellonaagency.com and its Persian version: every page, section and FAQ.
- Write `content/AUDIT.md` with:
  - Every real content block: headline, copy, CTA.
  - For each block, a verdict: **keep**, **sharpen**, **merge** or **drop**, with a one-line reason.
  - The most useful data to carry forward: real stats (100+ automations, 24/7, 80% time saved, 3X), services, industries, process, Lead→Revenue flow, Traditional team vs Bellona comparison, founders, FAQ, contact details.
- Flag anything that looks like mock or illustrative data, such as the hero dashboard numbers ($847K, 2,847 leads…). These must not appear as real results.
- Note weak spots on the current site, for example:
  - the hero is blank until JS loads
  - emoji icons
  - a logo that is too small
  - copy that only talks about AI

## Step 2: inspiration from https://dmazing.studio (structure only)
Study its home page for layout and interaction patterns, then list in `content/INSPIRATION.md` which ones you'll adapt and where. Patterns worth considering:
- a huge, light-weight centred headline
- round icon buttons in the header, plus a "book a call" pill with an avatar
- a rating or proof pill under the hero
- a 3D object on a tiled floor (ours is the cube logo on the isometric grid)
- a playful "who we are" statement
- a project grid with tag chips ("We made these. Yes, really.")
- a dead-simple 3-step process
- numbered benefits 01–05
- a team row
- a services list with one-liners
- chat-style testimonials ("Several people are typing…")
- plan/engagement cards
- an FAQ
- a contact form with "what do you need" and budget chips

**Do not copy** their copy, brand, illustrations, images or code. Adapt the ideas into the Bellona design language.

## Step 3: new positioning and sitemap
Bellona is now a **complete digital partner**, not only an AI-automation shop.
- Tagline: **BUILD · AUTOMATE · GROW** (fa: بساز · خودکار کن · رشد کن).
- Write copy (EN + FA) for these five pillars:
  1. **Website design:** UI/UX, landing pages, CMS, conversion-focused design.
  2. **Full-stack development:** web apps, dashboards, internal tools, APIs, integrations, maintenance.
  3. **AI agents & automation:** the current core; reuse the real copy from the audit.
  4. **Marketing & growth:** campaigns, SEO/content, lead-generation systems.
  5. **Business development:** market and competitor research, go-to-market planning, sales process and CRM setup, partnerships, growth strategy.
- Add a **"Your complete partner"** story: one team from idea to growth. The journey is **Strategy → Design → Build → Automate → Grow → Support**. Show it as a horizontal (desktop) / vertical (mobile) step track on the home page and on its own `/partner` page.
- Add **engagement models** as cards, with prices as placeholders:
  - Project
  - Monthly growth partnership
  - Dedicated / fractional team
- Proposed sitemap:
  - `/` home
  - `/services` plus one page per pillar
  - `/partner`
  - `/industries`
  - `/work` (case-study template)
  - `/about` (founders, story)
  - `/contact`
  - the same routes under `/fa` (RTL)
- Rules:
  - **Never invent** clients, testimonials, prices, results or team members. Use `[PLACEHOLDER]` and list every open item in `content/TODO-OWNER.md`.
  - Ask me before making any claim you can't source from the current site.
- **Stop here and show me** AUDIT.md, INSPIRATION.md, the sitemap and the new copy. Wait for my approval.

## Step 4: build
- **Stack:** Next.js (App Router) + TypeScript + Tailwind.
- **Languages:** i18n with `/` (en) and `/fa` (rtl). All copy lives in `content/en.ts` and `content/fa.ts`.
- **Brand:** tokens from BRIEF.md and self-hosted fonts.
- **Logo:** `assets/logo` SVGs as-is.
- **Home:** follow `reference/HomeBWO.dc.html`, then weave in:
  - the approved audit content
  - the partner journey
  - the five pillars
  - industries
  - the Lead→Revenue flow
  - the Traditional vs Bellona comparison
  - founders
  - FAQ
  - engagement models
- **Hero animation:** `HeroMark` exactly per MOTION.md: intro, then random shuffle; reduced motion; pause off-screen; mobile move pool.
- **Contact form:** pillar chips, budget, message. Server action with zod and a honeypot. Post to `LEAD_WEBHOOK_URL` (our own n8n/Make automations), with a Resend email fallback.
- **Booking:** link or embed from `BOOKING_URL`.
- **SEO:**
  - bilingual metadata with hreflang
  - sitemap and robots
  - OG images
  - `ProfessionalService` and `FAQPage` JSON-LD
- **Analytics:** optional, via `NEXT_PUBLIC_ANALYTICS_ID`, tracking CTA and form events.
- Write `.env.example`.

## Step 5: quality
- Responsive at 360 / 768 / 1280 / 1440.
- Keyboard and screen-reader pass.
- Lighthouse 95+ on mobile.
- `npm run lint && npm run build` clean.
- Write a README covering: run, edit content, add a case study, deploy to Vercel.

**How we work:** stop after each step, show what changed and keep the dev server running so I can review in the browser. Business decisions (pricing, claims, names, which services to feature first) are mine. Ask, don't guess.

---
