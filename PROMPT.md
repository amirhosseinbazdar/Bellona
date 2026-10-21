# First message to paste into Claude Code

Paste everything between the lines into Claude Code, in a terminal opened in this folder.

---

You're building the Bellona agency website from the design handoff in this folder. Read `CLAUDE.md`, `BRIEF.md` and `assets/motion/MOTION.md` first, then look at `reference/HomeBWO.dc.html` (home page design) and `reference/LogoMotion.dc.html` (hero animation prototype).

Before writing code, show me a short plan covering:
1. the project structure
2. the components you'll create
3. how you'll port the hero animation scheduler to React

Wait for my OK.

Then build in this order, and stop for me to check after each step:
1. **Scaffold:** Next.js + TypeScript + Tailwind, brand tokens, fonts (Plus Jakarta Sans, Estedad), base layout, header and footer.
2. **Hero:** headline, buttons, stats pill, isometric grid floor, and the `HeroMark` component. It inlines `assets/motion/hero-mark.svg`, imports `assets/motion/motion.css`, plays the intro, then runs the random shuffle exactly as `MOTION.md` describes. Include reduced-motion support, pause when off-screen, and the mobile move pool.
3. **Remaining home sections:** in the order listed in BRIEF.md.
4. **Persian page:** the `/fa` RTL version, using the copy from `reference/PersianType.dc.html`.
5. **Polish:** responsive pass at 360 / 768 / 1280 / 1440, accessibility pass, then `npm run build` and a Lighthouse check.

Keep placeholders for anything BRIEF.md lists as not supplied. Run the dev server so I can preview each step.

---
