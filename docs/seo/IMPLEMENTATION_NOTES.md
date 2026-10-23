# SEO implementation notes

Phase A (discovery). Started 2026-10-23. Nothing in the site code has changed yet.

- **Branch:** `seo/implementation`. It starts from `font/rooyin` @ `c81018d`: Sina's redesign plus the Rooyin font with the Regular-weight fix.
- **Live site:** Render serves `de8ee74` (the same work, but with Rooyin Bold), deployed from `amirhosseinbazdar/Bellona` `main`.
- **Remote:** `origin` is now `bazdaramir/Bellona`.

## 1. How the findings were verified

The research pack (dated 2026-10-21/22) audited an **older build**. Every finding below was re-checked against the current code and against a local production build (`next build && next start`, port 3100).

The read-only scripts (in the agent's scratchpad, not the repo) did the following:
- fetched all 64 sitemap URLs;
- read status, `<title>`, meta description, canonical, hreflang, robots meta, H1s, JSON-LD types, `[...]` tokens in visible text, meta and JSON-LD string values, `<img>` alt, HTML size and inline-SVG count;
- requested the 12 old industry URLs plus kebab-case variants.

## 2. Repository map

| Area | Where | Notes |
|---|---|---|
| Framework | Next.js **16.4.2** (App Router, Turbopack), React 19.3, TypeScript 6, Tailwind 4 | `package.json` scripts: `dev`, `build`, `start`, `lint`. **No test runner, no type-check script, no CI** (`.github/` does not exist). Type-check = `npx tsc --noEmit`. |
| Routing / i18n | `app/(en)/…` and `app/(fa)/fa/…` (two root layouts); `lib/i18n.ts` (`getDict`, `localePath`) | EN at `/`, FA at `/fa`. Every route has a thin wrapper in both groups ("generated route wrapper") that calls a page component. |
| Page components | `components/pages/HomePage.tsx`, `OtherPages.tsx` (partner, industries, industry, work, case study, about, contact, legal, offers), `ServicePages.tsx` (services hub, pillar page) | |
| Sections | `components/sections/*` | Includes Sina's new `Offers.tsx`, `System.tsx` and `Who.tsx` (ClientMarquee). |
| Copy | `content/en.ts`, `content/fa.ts` (typed by `content/types.ts`); projects `content/work.ts`; owner TODOs `content/TODO-OWNER.md`; positioning `content/STRATEGY.md` | Placeholders are written `[LIKE THIS]` by design. |
| Metadata | `lib/metadata.ts` → `pageMetadata()` (canonical, hreflang en/fa/x-default=en, OG via `/api/og`, Twitter, robots) and `baseMetadata()` (title template `%s · Bellona/بلونا`) | Called from each route's `generateMetadata`. |
| JSON-LD | `components/JsonLd.tsx`: `ProfessionalServiceLd` (rendered **on every page** by `components/SiteShell.tsx:38`, with the full `OfferCatalog`), `FaqLd` (already skips answers containing `[`), `BreadcrumbLd` | |
| Sitemap | `app/sitemap.ts` | `lastModified: new Date()`, i.e. request time (TA-13 confirmed). 64 URLs, alternates included. |
| Robots | `app/robots.ts` | `User-Agent: * Allow: / Disallow: /api/` + **`Host:` line** (TA-14 confirmed). **No user-agent or host logic**, so the `Disallow: /` the research saw once was not produced by this code. It was probably an older deploy or the Render cold-start page. |
| Redirects | `next.config.ts` `redirects()` | Already permanent (308). See §4. |
| Middleware | none | In Next 16, middleware is called **`proxy.ts`** (root, `export function proxy`). P0-04 will use that. |
| Fonts | `app/fonts.ts` → files in `app/fonts/` | EN: Jakarta (variable), JetBrains Mono. FA: **Rooyin Regular** (display) + **Estedad 400/500/600/700/800/900** (six weights, not five as the research says). |
| Images | `next/image`; covers in `public/work/<slug>/` | |
| Contact form | `components/ContactForm.tsx`, `app/actions/contact.ts`, `lib/lead.ts` | Webhook → Resend → local store (`LEAD_STORE_DIR`). |
| OG images | `app/api/og/route.tsx` | |

## 3. Backlog task → file mapping (current code)

| Task | Status in current code | Files to change |
|---|---|---|
| **P0-01 / G-01** placeholders | **Open.** `[24 h]` / «[۲۴ ساعت]» in the shared contact block (`contact.sub`) on 62/64 sitemap pages, in the form success message, and in `meta.contact.description` (meta/OG/Twitter on `/contact`). About origin story (EN+FA). FAQs: website-design (CMS, `[TYPICAL RANGE]`), full-stack (stack, ownership, take-over), marketing (2), biz-dev (1). **Also, not in the research:** `/privacy` and `/terms` body text (`[OWNER TO SUPPLY…]`), linked from the footer on every page; `Engage` price placeholders (`[PRICE]`…, data only, not rendered); `placeholderImage` (only shown for a project without cover or model; none today). | `content/en.ts`, `content/fa.ts` (and possibly `content/types.ts` if a FAQ is removed) |
| P0-01 typo «برزرو» | **Already fixed.** The string no longer exists; the header reads «رزرو بررسی رایگان». | none |
| P0-02 deploy to bellonaagency.com | Ops | none |
| **P0-03** old URLs | **Mostly done.** `/industries/{finance,healthcare,consulting}` and `/fa/…` → 308 → `/industries` (single hop). `realEstate` → 308 → `/industries/real-estate`. `ecommerce` and `education` now return **200**, because real industry pages exist at those exact paths. | `next.config.ts` (only if you want a different target); add the checks to `seo:check` |
| **P0-04** non-production host | Open | new `proxy.ts` behind an env flag (e.g. `CANONICAL_HOST_REDIRECT=1`); `app/robots.ts` (drop `host`) |
| P0-05 GSC/Bing | Ops/Team | none |
| **P0-06** unsupported claims | **Mostly done** in Sina's redesign (100+, 80%, 3X, 200+, 90 days are gone). Left: "run operations **24/7**" (`content/en.ts:356` + FA twin) and the compare row "24/7 for automated operations" (`en.ts:674`, used by `Compare` on `/partner`). | `content/en.ts`, `content/fa.ts` |
| P1-01 titles/meta | Open. Titles are short and generic (e.g. `Services · Bellona`, `طراحی سایت · بلونا`); no duplicates. | `content/{en,fa}.ts` `meta.*` and per-pillar meta |
| P1-02 keyword H1s | Open. Service-page H1s are slogans (e.g. «سیستم‌هایی که کار می‌کنند وقتی تو خوابی.»). Industry H1s are just the sector name. | `content/{en,fa}.ts` `pillars.items[].page.h1`, industries; `components/ui.tsx` `PageHero` if the slogan moves to a sub-line |
| P1-03…05 expand service pages | Open (EN 391–977 words, FA 419–1,009 words incl. shared blocks) | `content/{en,fa}.ts`, `content/types.ts`, `components/pages/ServicePages.tsx` |
| P1-06 case-study outcomes | Partly. 15 case studies; results only where sourced (Dane, AI-RE OS). | `content/work.ts`, `components/pages/OtherPages.tsx` `CaseStudyPage` |
| **P1-07** internal links | **Mostly done**: each service page has "Projects in this service" (`ServicePages.tsx` `PillarWork`); case studies link their services + industry; industry pages list their case studies; Codechee is on the home page. **Missing:** service links in the footer. | `components/Footer.tsx` |
| P1-08 / G-03 entity schema | Open. `ProfessionalServiceLd` already has `@id`, `alternateName` (one value), `founder`/`employee` Persons, `sameAs` (Instagram), but a Gmail address, no `areaServed`, and the full `OfferCatalog` on every page, including legal pages. | `components/JsonLd.tsx`, `components/SiteShell.tsx`, home/service page components |
| P1-09…11 new spoke pages | Open | new `app/(en)/services/[slug]/[sub]/page.tsx` + FA twin, content, `app/sitemap.ts` |
| P1-12 education page | **Exists** (`/industries/education`, ~470 words, 6 case studies) → expand rather than create | `components/pages/OtherPages.tsx` `IndustryPage`, content |
| P1-13 guides | Open | new `app/(…)/guides/…`, content module, `Article` JSON-LD |
| G-02 AI crawler rules | Open | `app/robots.ts` |
| G-04 answer-first sections | Open | content + a small Q&A section component |
| G-05 dates and bylines | Open (guides only) | guides components |
| G-06 facts module | Open | new `content/facts.ts` |
| G-07 "how did you hear" | Open (needs approval) | `ContactForm.tsx`, `lib/lead.ts`, `app/actions/contact.ts` |
| P2-05 HTML weight | Open. `/` 433 KB / `/fa` 451 KB HTML with **112** inline `<svg>` (voxel art, icons); service pages 150–250 KB. | `components/voxel/Voxel.tsx`, `components/Icon.tsx`, sections |
| P2-05 sitemap lastmod | Open | `app/sitemap.ts` |
| P2-06 alt text | Open. Card images (`ProjectCard`) use `alt=""` (32 of 34 images on `/work`); gallery alts are "‹title› 2/3". | `components/sections/Work.tsx`, `components/pages/OtherPages.tsx`, `content/work.ts` |
| P2-07 booking CTA | `BOOKING_URL` unset, so "رزرو بررسی رایگان" goes to `/contact` | needs a decision |

## 4. Discrepancies between the research and the current code

| # | Research says | Current code / build | Decision |
|---|---|---|---|
| D1 | 32 indexable URLs; 4 case studies | **64** sitemap URLs: adds `/offers`, 4 industry pages (real-estate, education, ecommerce, media), 15 case studies (Bellona v1 removed) | Plan against the current inventory |
| D2 | «برزرو» typo | Fixed | Close TA-05 |
| D3 | Unsupported stats 100+, 80%, 3X, 200+, 90 days | Removed (redesign); "24/7" remains | P0-06 shrinks to the 24/7 wording |
| D4 | Budget brackets <50M…>200M in the form | **Removed** from the form on owner request (2026-10-22) | Cost-guide briefs that say "use Bellona's own brackets" need **fresh** price ranges from the team |
| D5 | Old `/industries/education` and `/ecommerce` → redirect | They are now real pages (200), so no redirect is needed | Keep; old URLs land on the right page in zero hops |
| D6 | Codechee missing from home; services not linked to case studies | Both done | Close TA-10/TA-11 except footer links |
| D7 | `robots.txt` sometimes `Disallow: /` | Code is unconditional `Allow`; no host/UA logic | Treat as a past deploy; keep the check in `seo:check` |
| D8 | 74 inline SVGs, ~508 KB | 112 SVGs, 433–451 KB | Still worth P2-05 |
| D9 | 5 Estedad weights | 6 Estedad weights + Rooyin + Jakarta + JetBrains | Font trimming needs your sign-off (rule 4) |
| D10 | Placeholders on 9 of 10 pages | Confirmed, plus **privacy/terms body** (not in sitemap, linked from the footer) | `seo:check` must also crawl footer-linked pages, not only the sitemap |
| D11 | — | `/offers` (new) has a promises block and offer details flagged in `TODO-OWNER.md` as "confirm before launch" | Added to the questions |
| D12 | Next.js "middleware" | Next 16 uses `proxy.ts` | Use `proxy.ts` |

## 5. Implementable now, without new facts (once you approve Phase B)

- `seo:check` script (the placeholder guard plus all §4 validations), crawling the sitemap **and** footer-linked pages.
- P0-04 `proxy.ts` behind an env flag (off by default); drop the `Host:` line.
- G-02 explicit AI-search crawler groups (training bots left as they are until you decide).
- Sitemap `lastModified` from git commit dates of the source files (or omit it).
- Footer service links.
- Schema hygiene: full entity on the home page only; other pages reference `@id`; no `OfferCatalog` on legal pages; `Service` only on its own service page.
- Descriptive alt text from existing project titles and sectors (no new claims).
- **Placeholder removal when there is no answer yet:** delete the affected Q&A or sentence in both locales. Proposed defaults, for your confirmation:
  - drop "We reply within [24 h]";
  - drop the about origin-story paragraph;
  - drop the six unanswered FAQs;
  - legal pages: keep `noindex`, but they still need real text. Until then, remove the footer links and do not ship the bracketed body.
