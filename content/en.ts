import type { Dict } from "./types";

/**
 * English copy. Placeholders are wrapped as [LIKE THIS]; search for "[" to find every one.
 * Sources for every claim are listed in content/AUDIT.md.
 */
export const en: Dict = {
  locale: "en",
  dir: "ltr",
  meta: {
    siteName: "Bellona",
    home: {
      title: "Bellona: Websites, Products, AI Automation & Growth",
      description:
        "One technology partner to design your website, build and launch your product, automate operations with AI agents and integrations, and grow your pipeline. Book a free strategy audit.",
    },
    services: {
      title: "Services",
      description:
        "Website design, full-stack and product development, AI agents and workflow automation, marketing and business development, from one team.",
    },
    partner: {
      title: "Your complete digital partner",
      description:
        "One team from idea to growth: strategy, design, build, automation, growth and support, with project, monthly and dedicated-team engagement models.",
    },
    industries: {
      title: "Industries",
      description:
        "Websites, software and AI automation for real estate, finance, healthcare, e-commerce, consulting and education.",
    },
    work: {
      title: "Work",
      description: "Websites, products and automation systems built by Bellona.",
    },
    about: {
      title: "About",
      description: "Meet the team behind Bellona and how we work.",
    },
    contact: {
      title: "Contact",
      description: "Tell us what you need. Book a 30-minute free call or send a request; we reply within [24 h].",
    },
    privacy: { title: "Privacy policy", description: "How Bellona handles your data." },
    terms: { title: "Terms of use", description: "Terms for using bellonaagency.com." },
    notFound: { title: "Page not found", description: "This page does not exist." },
  },

  common: {
    skip: "Skip to content",
    wordmark: "bellona",
    agency: "agency",
    tagline: "BUILD · AUTOMATE · GROW",
    homeLabel: "Bellona home",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    menuTitle: "Menu",
    primaryNav: "Primary",
    nav: [
      { key: "work", label: "Work", href: "/work" },
      { key: "services", label: "Services", href: "/services" },
      { key: "partner", label: "Partner", href: "/partner" },
      { key: "industries", label: "Industries", href: "/industries" },
      { key: "about", label: "About", href: "/about" },
      { key: "contact", label: "Contact", href: "/contact" },
    ],
    langSwitch: { label: "فارسی", hrefLang: "fa", ariaLabel: "نسخه‌ی فارسی" },
    bookCall: "Book a 30-min free call",
    bookInitial: "B",
    startProject: "Start a project",
    learnMore: "Learn more",
    backHome: "Back home",
    opensNewTab: "(opens in a new tab)",
    footer: {
      nav: "Footer",
      rights: "© 2026 Bellona. All rights reserved.",
      legal: { privacy: "Privacy", terms: "Terms" },
      emailLabel: "Email",
      social: [{ label: "Instagram", href: "https://www.instagram.com/bellona.ai" }],
    },
    email: "bellona.ai.team@gmail.com",
  },

  hero: {
    tagline: "BUILD · AUTOMATE · GROW",
    title: "Built, automated, and **growing while you sleep.**",
    sub: "One team for websites, full-stack products, AI automation, marketing and business development. We build it, automate it, and help it grow.",
    primary: "Start a project",
    secondary: "See our work",
    stats: [
      { value: "100+", label: "automations built" },
      { value: "24/7", label: "AI operations" },
      { value: "", label: "Free strategy audit" },
    ],
  },

  proofStrip: { label: "Trusted by teams in [YOUR SECTORS]" },

  who: {
    eyebrow: "WHO WE ARE",
    text: "We started by automating the work nobody wanted to do. Now we build **everything around it**: the site, the product, the ==systems== and the growth.",
    cta: "Read our story",
  },

  problems: {
    eyebrow: "SOUND FAMILIAR?",
    title: "You have ideas. You have tools.\n**You don't have a system.**",
    cards: [
      {
        pillar: "web",
        title: "A Website That Doesn't Sell",
        quote: "Your site looks fine, but it doesn't bring in leads. Visitors arrive, look around and leave without a trace.",
        bullets: ["Slow pages and unclear offers", "Forms nobody fills in", "Every change needs a developer"],
      },
      {
        pillar: "ai",
        title: "Manual Operations",
        quote:
          "You know what needs automating. But between client work and daily fires, your workflows stay half-built and your team stays overwhelmed.",
        bullets: ["Tasks repeated every single day", "Bottlenecks killing your growth", "No time to build what you planned"],
      },
      {
        pillar: "growth",
        title: "Lead & Sales Chaos",
        quote:
          "Leads come in. Follow-ups slip. Your CRM is a graveyard of missed opportunities because nobody has time to nurture properly.",
        bullets: ["Leads going cold within hours", "Follow-ups always ‘tomorrow’", "Pipeline data you can't trust"],
      },
    ],
    close: "The strategy isn't the problem. **You've never had enough systems.**",
  },

  pillars: {
    eyebrow: "WHAT WE DO",
    title: "Build. Automate. **Grow.**",
    sub: "Everything your business needs from one team. None of the chaos of five agencies.",
    cardCta: "Explore",
    items: [
      {
        id: "web",
        slug: "website-design",
        short: "Website",
        num: "01",
        stage: "BUILD",
        icon: "cube",
        title: "Website design",
        line: "Sites that look sharp, load fast and turn visitors into leads.",
        chips: ["UI/UX", "Landing pages", "CMS", "Conversion design"],
        page: {
          metaTitle: "Website design",
          metaDescription:
            "Fast, on-brand websites and landing pages designed to turn visitors into leads: UI/UX, CMS sites and conversion-focused design, in English and Persian.",
          h1: "Websites that **turn visitors into leads.**",
          sub: "Fast, clear, on-brand sites designed around one job: getting the right people to take the next step.",
          includedTitle: "What's included",
          included: [
            { title: "UI/UX design", text: "User flows, wireframes and interface design." },
            { title: "Landing pages", text: "Built for campaigns, launches and offers." },
            { title: "CMS sites", text: "Your team edits content without a developer." },
            { title: "Conversion-focused design", text: "Clear offers, strong calls to action, forms that get filled." },
            { title: "Bilingual & RTL", text: "English and Persian, done properly." },
            { title: "Performance & SEO basics", text: "Fast loads, clean markup, search-ready." },
          ],
          deliverTitle: "How we deliver",
          deliver: ["Discover", "Wireframe", "Design", "Build", "Launch", "Improve"],
          connectsTitle: "Connects with",
          connects:
            "Lead capture flows straight into AI automation and your CRM, and traffic comes in from marketing & growth.",
          faq: [
            {
              q: "Can you redesign our current site?",
              a: "Yes. We start with an audit of what works and what doesn't, then keep what earns its place.",
            },
            { q: "Which CMS do you use?", a: "[CMS CHOICE, e.g. Webflow, WordPress or a headless CMS]" },
            {
              q: "How long does a website take?",
              a: "It depends on scope. You get a firm timeline after the free strategy audit. [TYPICAL RANGE]",
            },
          ],
        },
      },
      {
        id: "product",
        slug: "full-stack-development",
        short: "Product",
        num: "02",
        stage: "BUILD",
        icon: "code",
        title: "Full-stack & product development",
        line: "Web apps, dashboards and internal tools, from database to interface, taken from MVP to launch.",
        chips: ["Web apps", "MVP & launch", "Dashboards", "APIs & integrations", "Maintenance"],
        page: {
          metaTitle: "Full-stack & product development",
          metaDescription:
            "Web apps, digital products, dashboards, internal tools, APIs and integrations, built, launched and maintained by one team.",
          h1: "Software built **around how you actually work.**",
          sub: "Web apps, digital products, dashboards and internal tools, from database to interface, plus the APIs and integrations that connect them to everything else. We take products from first version to launch, and keep them running.",
          includedTitle: "What's included",
          included: [
            { title: "Web apps", text: "Customer-facing products and portals." },
            { title: "Product development & launch", text: "From MVP to a launched, measurable product." },
            { title: "Dashboards", text: "The numbers you need, live, in one place." },
            { title: "Internal tools", text: "Replace the spreadsheet that runs your business." },
            { title: "APIs & integrations", text: "Bespoke bridges between your tools, so data moves without copy-paste." },
            { title: "Maintenance", text: "Monitoring, updates and fixes after launch." },
          ],
          deliverTitle: "How we deliver",
          deliver: ["Scope", "Architecture", "Build in sprints", "Test", "Launch", "Maintain"],
          connectsTitle: "Connects with",
          connects:
            "Your product is where AI agents do their work and where the data for growth lives.",
          faq: [
            { q: "What's your stack?", a: "[STACK]" },
            { q: "Who owns the code?", a: "[CODE OWNERSHIP TERMS]" },
            { q: "Can you take over an app you didn't build?", a: "[YES / NO / CONDITIONS]" },
          ],
        },
      },
      {
        id: "ai",
        slug: "ai-automation",
        short: "AI",
        num: "03",
        stage: "AUTOMATE",
        icon: "cycle",
        title: "AI agents & automation",
        line: "Agents, workflows and integrations that qualify leads, sync your CRM and run operations 24/7.",
        chips: ["AI agents", "Workflow automation", "Integrations", "CRM automation"],
        page: {
          metaTitle: "AI agents & workflow automation",
          metaDescription:
            "AI agents, workflow automation, lead generation systems, AI customer support, CRM automation and custom integrations that run 24/7.",
          h1: "AI systems that work **while you sleep.**",
          sub: "Agents and workflows that qualify leads, sync your CRM, answer customers and run operations around the clock.",
          includedTitle: "Six capabilities, **one system.**",
          included: [
            {
              title: "AI Agents",
              text: "Autonomous digital workers that handle repetitive tasks, outreach, and decision-making around the clock.",
            },
            {
              title: "Workflow Automation",
              text: "End-to-end process automation connecting your tools, teams, and data flows without manual handoffs.",
            },
            {
              title: "Lead Generation Systems",
              text: "Automated prospecting, enrichment, and qualification pipelines that deliver sales-ready leads daily.",
            },
            {
              title: "AI Customer Support",
              text: "Intelligent chat and voice systems that resolve inquiries instantly and escalate only when needed.",
            },
            {
              title: "CRM Automation",
              text: "Sales pipelines, follow-ups, and deal tracking automated so your team focuses on closing.",
            },
            {
              title: "Custom Integrations",
              text: "Bespoke API bridges and middleware that unify your entire business stack into one intelligent system.",
            },
          ],
          deliverTitle: "How we deliver",
          deliver: ["Audit", "Design", "Build", "Deploy", "Optimize"],
          connectsTitle: "Connects with",
          connects:
            "Agents read from your website forms and product data, write to your CRM, and hand marketing a clean, qualified pipeline.",
          faq: [
            {
              q: "How long does deployment take?",
              a: "Most systems go live within 2–4 weeks. Simple automations deploy in days; complex multi-agent systems take 4–6 weeks.",
            },
            {
              q: "Do I need technical knowledge?",
              a: "No. We build simple dashboards and provide full training. Your team uses clean interfaces while the systems handle the complexity.",
            },
            {
              q: "What platforms do you integrate with?",
              a: "200+ platforms, including Salesforce, HubSpot, Slack, n8n, Make, Zapier, and any tool with an API or webhook.",
            },
            {
              q: "How is this different from hiring?",
              a: "Hiring adds headcount and fixed monthly cost. We build systems once, and they grow with you without growing payroll at the same rate.",
            },
            {
              q: "What return can I expect?",
              a: "Many projects see lower operating costs and better key metrics within 90 days. We project the return for your case during the free audit.",
            },
          ],
        },
      },
      {
        id: "growth",
        slug: "marketing-growth",
        short: "Marketing",
        num: "04",
        stage: "GROW",
        icon: "chart",
        title: "Marketing & growth",
        line: "Campaigns, SEO and content, and lead-generation systems that bring the right clients in.",
        chips: ["Campaigns", "SEO & content", "Lead generation"],
        page: {
          metaTitle: "Marketing & growth",
          metaDescription:
            "Campaigns, SEO and content, and automated lead-generation systems that fill your pipeline and hand leads straight to sales.",
          h1: "A pipeline that **doesn't depend on luck.**",
          sub: "Campaigns, SEO and content, and lead-generation systems that bring the right clients in, and hand them straight to your sales process.",
          includedTitle: "What's included",
          included: [
            { title: "Campaigns", text: "Paid and organic, planned around one goal." },
            { title: "SEO & content", text: "Get found for what you actually sell." },
            {
              title: "Lead-generation systems",
              text: "Automated prospecting, enrichment and qualification that deliver sales-ready leads.",
            },
            { title: "Reporting", text: "One view of what's working." },
          ],
          deliverTitle: "How we deliver",
          deliver: ["Research", "Plan", "Launch", "Measure", "Improve"],
          connectsTitle: "Connects with",
          connects:
            "Leads land on a website built to convert and get followed up by AI agents automatically, so nothing goes cold.",
          faq: [
            { q: "Which channels do you run?", a: "[CHANNELS, e.g. Google Ads, Meta, LinkedIn, Instagram]" },
            {
              q: "Do you write the content too?",
              a: "[YES / NO / IN WHICH LANGUAGES]",
            },
          ],
        },
      },
      {
        id: "bizdev",
        slug: "business-development",
        short: "Biz dev",
        num: "05",
        stage: "GROW",
        icon: "compass",
        title: "Business development",
        line: "Research, go-to-market and sales systems that turn “we should grow” into a plan.",
        chips: ["Market research", "Go-to-market", "Sales & CRM", "Partnerships"],
        page: {
          metaTitle: "Business development",
          metaDescription:
            "Market and competitor research, go-to-market planning, sales process and CRM setup, partnerships and growth strategy.",
          h1: "Growth, **with a plan behind it.**",
          sub: "Market and competitor research, go-to-market planning, sales process and CRM setup, partnerships, and the strategy that ties them together.",
          includedTitle: "What's included",
          included: [
            { title: "Market & competitor research", text: "Who's out there, and where the gap is." },
            { title: "Go-to-market planning", text: "Who to sell to, with what offer, through which channel." },
            { title: "Sales process & CRM setup", text: "A pipeline your team actually trusts." },
            { title: "Partnerships", text: "Find and structure the right ones." },
            { title: "Growth strategy", text: "A quarter-by-quarter plan with owners and numbers." },
          ],
          deliverTitle: "How we deliver",
          deliver: ["Research", "Strategy", "Set up", "Launch", "Review"],
          connectsTitle: "Connects with",
          connects:
            "The plan decides what we design, build, automate and market, so every pillar works toward the same number.",
          faq: [
            {
              q: "Is this consulting or hands-on work?",
              a: "Both. We write the plan, then set up the CRM, sales process and systems that carry it out.",
            },
            { q: "Which markets do you know best?", a: "[MARKETS / REGIONS]" },
          ],
        },
      },
    ],
  },

  stats: [
    { value: "100+", label: "Automations built" },
    { value: "24/7", label: "AI operations" },
    { value: "80%", label: "Time saved" },
    { value: "3X", label: "Operational efficiency" },
  ],

  journey: {
    eyebrow: "YOUR COMPLETE PARTNER",
    title: "One team, **from idea to growth.**",
    sub: "No more juggling a designer, a dev shop, an automation freelancer and a marketing agency. One team, one plan, end to end.",
    steps: [
      {
        title: "Strategy",
        line: "Where you are, where you're going, and what to build first.",
        deliverables: ["Free strategy audit", "Roadmap", "Priorities"],
      },
      {
        title: "Design",
        line: "Interfaces and flows that look like you and convert like they should.",
        deliverables: ["User flows", "Wireframes", "UI design"],
      },
      {
        title: "Build",
        line: "Sites, products and integrations, engineered and tested.",
        deliverables: ["Website", "Web app / product", "Integrations"],
      },
      {
        title: "Automate",
        line: "AI agents and workflows take over the repetitive work.",
        deliverables: ["AI agents", "Workflows", "CRM automation"],
      },
      {
        title: "Grow",
        line: "Campaigns, content and sales systems keep the pipeline full.",
        deliverables: ["Campaigns", "Content & SEO", "Sales system"],
      },
      {
        title: "Support",
        line: "We monitor, maintain and improve, so your systems grow with you.",
        deliverables: ["Monitoring", "Optimization", "Scaling"],
      },
    ],
    cta: "See how the partnership works",
    startAnywhere:
      "Start at any step: with a strategy, with a site that needs automating, or with a product that needs customers.",
    deliverablesLabel: "What you get",
  },

  work: {
    eyebrow: "RECENT WORK",
    title: "Built, shipped, **running.**",
    sub: "Websites, products and automation systems, each one built to keep working after launch.",
    all: "All projects",
    filterLabel: "Filter projects by service",
    filterAll: "All",
    placeholderImage: "[PROJECT IMAGE]",
    placeholderNote: "Case study coming soon",
    view: "View case study",
    caseStudy: {
      client: "Client",
      sector: "Sector",
      year: "Year",
      services: "Services",
      challenge: "The challenge",
      built: "What we built",
      results: "Results",
      stack: "Stack",
      quote: "In their words",
      next: "Next project",
      back: "All projects",
      previewNotice: "Template preview: this page is not indexed and shows the layout for a future case study.",
      visit: "Visit the live site",
      gallery: "Screens",
      partner: "In collaboration with",
    },
  },

  flow: {
    eyebrow: "HOW IT CONNECTS",
    title: "From lead **to revenue.**",
    sub: "Every piece we build plugs into the next, from the first click to the closed deal.",
    unavailable: "The 3D view needs WebGL. The pipeline is listed below.",
    nodes: [
      { label: "Lead source", pillars: ["web", "growth"] },
      { label: "AI agent", pillars: ["ai"] },
      { label: "CRM", pillars: ["product", "bizdev"] },
      { label: "Automation engine", pillars: ["ai"] },
      { label: "Analytics", pillars: ["product", "growth"] },
      { label: "Revenue", pillars: ["bizdev"] },
    ],
  },

  start: {
    eyebrow: "HOW TO START",
    title: "Simple **by design.**",
    steps: [
      { title: "Book a free call", text: "Bring the problem, not the plan. We'll map it with you in 30 minutes." },
      {
        title: "Get a clear plan",
        text: "Your free strategy audit: what to build, automate and grow first, with scope and timeline.",
      },
      { title: "We build. You grow.", text: "We ship in short sprints, then monitor, improve and scale." },
    ],
  },

  industries: {
    eyebrow: "INDUSTRIES",
    title: "Built for **your sector.**",
    sub: "Websites, software and automation shaped around how your industry actually works.",
    cardCta: "Talk about your project",
    buildLabel: "What we'd build",
    workLabel: "Our work here",
    more: "Don't see your sector? We probably still fit. Ask us.",
    seeAll: "All industries",
    items: [
      {
        id: "real-estate",
        icon: "home",
        title: "Real Estate",
        text: "Lead nurturing, property matching, and client follow-ups on autopilot.",
        build: ["Listing website", "Lead nurturing", "CRM automation"],
      },
      {
        id: "finance",
        icon: "bank",
        title: "Finance",
        text: "Compliance workflows, reporting, and client onboarding at scale.",
        build: ["Client portal", "Onboarding flows", "Reporting dashboards"],
      },
      {
        id: "healthcare",
        icon: "heart",
        title: "Healthcare",
        text: "Appointment scheduling, patient intake, and admin automation.",
        build: ["Booking website", "Patient intake", "Admin automation"],
      },
      {
        id: "ecommerce",
        icon: "cart",
        title: "E-Commerce",
        text: "Inventory sync, order processing, and support automation.",
        build: ["Store & landing pages", "Inventory sync", "AI support"],
      },
      {
        id: "consulting",
        icon: "briefcase",
        title: "Consulting",
        text: "Proposal generation, client reporting, and project workflows.",
        build: ["Proposal automation", "Client reporting", "Lead generation"],
      },
      {
        id: "education",
        icon: "book",
        title: "Education",
        text: "Enrollment, student support, and content delivery systems.",
        build: ["Enrollment funnel", "Student support agent", "Course platform"],
      },
    ],
  },

  why: {
    eyebrow: "WHY BELLONA",
    title: "Stop hiring more people. **Build better systems.**",
    items: [
      {
        title: "One team, every layer",
        text: "Design, code, AI and marketing in one room, so nothing gets lost between agencies.",
      },
      { title: "Systems, not hours", text: "We build things that keep working after the invoice." },
      {
        title: "We stay after launch",
        text: "Monitoring, optimization and scaling support in every engagement, so your systems evolve with your business.",
      },
    ],
    compare: {
      caption: "Traditional team vs Bellona",
      topic: "Topic",
      traditional: "Traditional team",
      bellona: "Bellona",
      rows: [
        { topic: "Availability", traditional: "Business hours only", bellona: "24/7 for automated operations" },
        { topic: "Scale", traditional: "Hire more people", bellona: "Scale systems, not headcount" },
        { topic: "Cost", traditional: "Salaries + overhead", bellona: "Build once, keep the return" },
        { topic: "Speed", traditional: "Weeks to onboard", bellona: "Most systems live in 2–4 weeks" },
        { topic: "Consistency", traditional: "Depends on who's in today", bellona: "Same process, every time" },
        { topic: "Coordination", traditional: "Five vendors, five plans", bellona: "One team, one plan" },
      ],
    },
  },

  engage: {
    eyebrow: "WAYS TO WORK WITH US",
    title: "Pick the shape **that fits.**",
    sub: "Every engagement starts with a free strategy audit, and every one includes monitoring and support after launch.",
    includesLabel: "Includes",
    items: [
      {
        id: "project",
        name: "Project",
        tagline: "A defined scope with a clear finish line.",
        text: "Best for a website, a product launch, an automation system or a campaign.",
        price: "[PRICE]",
        priceNote: "[FROM / FIXED SCOPE]",
        includes: ["Free strategy audit", "Agreed scope & timeline", "Handover and team training", "[SUPPORT PERIOD]"],
        cta: "Start a project",
      },
      {
        id: "partnership",
        name: "Monthly growth partnership",
        tagline: "We keep building, automating and growing, month after month.",
        text: "New pages, new automations, campaigns and reporting, on one rolling roadmap.",
        price: "[PRICE]",
        priceNote: "[PER MONTH]",
        includes: ["Monthly roadmap", "Monitoring & optimization", "[SCOPE PER MONTH]", "[MINIMUM TERM]"],
        cta: "Talk about a partnership",
      },
      {
        id: "team",
        name: "Dedicated / fractional team",
        tagline: "Our people, inside your team.",
        text: "Designers, engineers and marketers working on your tools and your rhythm.",
        price: "[PRICE]",
        priceNote: "[PER MONTH]",
        includes: ["[ROLES AVAILABLE]", "[HOURS / ALLOCATION]", "Your tools, your rituals"],
        cta: "Build my team",
      },
    ],
    note: "Not sure which fits? Book a free call and we'll tell you honestly.",
    noteCta: "Book a 30-min free call",
  },

  team: {
    eyebrow: "THE TEAM",
    title: "The people **behind Bellona.**",
    sub: "Engineering, AI, design and marketing, in one team.",
    skillsLabel: "Skills",
    educationLabel: "Education",
    members: [
      {
        name: "Iman Niknam",
        initials: "IN",
        role: "Co-founder",
        founder: true,
        skills: ["Automation engineer", "AI automation specialist"],
        education: "Computer Engineering student, Sharif University of Technology",
      },
      {
        name: "Sina Razi",
        initials: "SR",
        role: "Co-founder",
        founder: true,
        skills: ["AI specialist", "Full-stack developer"],
        education: "Industrial Engineering student, Sharif University of Technology",
      },
      {
        name: "Amirhossein Bazdar",
        initials: "AB",
        role: "CTO",
        skills: ["AI manager", "Web designer", "SEO specialist"],
        education: "Computer Engineering student, Sharif University of Technology",
      },
      {
        name: "Hafez Modirrousta",
        initials: "HM",
        role: "CMO",
        skills: ["Content production", "Marketing"],
        education: "Industrial Engineering student, Sharif University of Technology",
      },
    ],
  },

  testimonials: { eyebrow: "WHAT CLIENTS SAY", title: "Straight from **the inbox.**" },

  faq: {
    eyebrow: "FAQ",
    title: "Questions? **Good.**",
    side: "Still unsure? Book a 30-min free call, or email us.",
    items: [
      {
        q: "Do you only do AI?",
        a: "No. We also design websites, build products and run marketing and business development, with automation across all of it.",
      },
      {
        q: "How long does a project take?",
        a: "Most automations go live in 2–4 weeks, simple ones in days. Website and product timelines depend on scope; you get a firm plan after the free audit.",
      },
      {
        q: "Do I need technical knowledge?",
        a: "No. We build simple dashboards and train your team.",
      },
      {
        q: "What platforms do you integrate with?",
        a: "200+ platforms, including Salesforce, HubSpot, Slack, n8n, Make, Zapier, and any tool with an API or webhook.",
      },
      {
        q: "What return can I expect?",
        a: "Many projects see lower operating costs and better key metrics within 90 days. We project the return for your case during the free strategy audit.",
      },
      {
        q: "Do you stay on after launch?",
        a: "Yes. Monitoring, optimization and scaling support are part of every engagement.",
      },
    ],
  },

  contact: {
    eyebrow: "LET'S TALK",
    title: "Ready when\n**you are.**",
    sub: "A 30-minute call to see if we fit. No pressure. We reply within [24 h].",
    bookAlt: "Prefer to pick a time?",
    emailAlt: "Or email",
    form: {
      label: "Project request",
      needLegend: "What do you need?",
      needs: [
        { id: "web", label: "Website design" },
        { id: "product", label: "Full-stack & product" },
        { id: "ai", label: "AI & automation" },
        { id: "growth", label: "Marketing & growth" },
        { id: "bizdev", label: "Business development" },
        { id: "unsure", label: "Not sure yet" },
      ],
      budgetLegend: "Budget",
      budgets: [
        { id: "b1", label: "Under 50M toman" },
        { id: "b2", label: "50–100M toman" },
        { id: "b3", label: "100–200M toman" },
        { id: "b4", label: "Over 200M toman" },
        { id: "unsure", label: "Not sure yet" },
      ],
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@company.com",
      company: "Company (optional)",
      companyPh: "Company name",
      message: "Tell us a bit about it",
      messagePh: "Where does it hurt? What would “done” look like?",
      submit: "Send request",
      sending: "Sending…",
      success: "Got it. We'll reply within [24 h].",
      error: "Something went wrong on our side. Please email us at bellona.ai.team@gmail.com.",
      errors: {
        name: "Please tell us your name.",
        email: "Please enter a valid email address.",
        needs: "Pick at least one option.",
        message: "Please keep the message under 4,000 characters.",
      },
      privacy: "We only use this to reply to you.",
      privacyLink: "Privacy policy",
      honeypot: "Leave this field empty",
    },
  },

  pages: {
    services: {
      eyebrow: "SERVICES",
      h1: "Everything you need, **from one team.**",
      sub: "Five pillars that plug into each other: the site people find you on, the product they use, the agents running in the background, and the marketing and strategy that keep the pipeline full.",
      includedLabel: "Includes",
    },
    pillar: {
      included: "What's included",
      deliver: "How we deliver",
      connects: "Connects with",
      faq: "Questions",
      otherPillars: "The other pillars",
      ctaTitle: "Let's build **yours.**",
      ctaSub: "Tell us where it hurts. We'll come back with a plan.",
      work: "Projects in this service",
      workAll: "All projects",
    },
    ai: {
      problem: {
        title: "You have ideas. You have tools. **You don't have a system.**",
        cards: [
          {
            title: "Manual Operations",
            quote:
              "You know what needs automating. But between client work and daily fires, your workflows stay half-built and your team stays overwhelmed.",
            bullets: ["Tasks repeated every single day", "Bottlenecks killing your growth", "No time to build what you planned"],
          },
          {
            title: "Lead & Sales Chaos",
            quote:
              "Leads come in. Follow-ups slip. Your CRM is a graveyard of missed opportunities because nobody has time to nurture properly.",
            bullets: ["Leads going cold within hours", "Follow-ups always ‘tomorrow’", "Pipeline data you can't trust"],
          },
          {
            title: "Broken Automations",
            quote:
              "You didn't start a business to spend weekends fixing Zapier flows or wondering why your integrations broke again.",
            bullets: ["Integrations that silently fail", "Tools that don't talk to each other", "Weekends lost to tech debt"],
          },
        ],
        close: "The strategy isn't the problem. **You've never had enough systems.**",
      },
      capabilities: {
        title: "Six capabilities, **one system.**",
        sub: "Built to remove manual work and free your team for the work only people can do.",
      },
      monday: {
        eyebrow: "IMAGINE THIS",
        title: "It's Monday morning.\n**Everything's already done.**",
        before: {
          title: "Your Monday before",
          intro: "You open your laptop. Everything hits at once:",
          items: [
            "Reply to leads manually",
            "Fix broken automation",
            "Update CRM by hand",
            "Follow up 40 contacts",
            "Build workflow (again)",
            "Process invoices",
            "Train new hire on ops",
            "Chase the developer about the website",
            "Rebuild the sales report in a spreadsheet",
          ],
          outro: "Ops pushed to “tomorrow.” Again.",
        },
        after: {
          title: "Your Monday with Bellona",
          intro: "You open your laptop. Your systems already ran overnight:",
          items: [
            "AI agents qualified leads overnight",
            "Workflows running",
            "CRM synced automatically",
            "Follow-ups sent on schedule",
            "New automation deployed",
            "Reports generated & delivered",
            "Website leads routed straight to sales",
            "Pipeline dashboard already up to date",
            "Team focused on strategy",
          ],
          outro: "That's not a dream. That's what a Bellona system is built to do.",
        },
      },
      process: {
        title: "How we **deliver.**",
        sub: "A five-step framework from audit to optimization.",
        steps: [
          {
            title: "Audit",
            text: "We map your operations, identify bottlenecks, and pinpoint the highest-ROI automation opportunities.",
          },
          {
            title: "Design",
            text: "We blueprint custom AI workflows, agent behaviors, and integration paths for your stack.",
          },
          {
            title: "Build",
            text: "We engineer your automation systems with rigorous testing and minimal disruption to daily operations.",
          },
          { title: "Deploy", text: "Systems go live integrated with your existing tools, working from day one." },
          { title: "Optimize", text: "Continuous monitoring, performance tuning, and scaling as your business evolves." },
        ],
      },
    },
    partner: {
      eyebrow: "YOUR COMPLETE PARTNER",
      h1: "Your complete **digital partner.**",
      sub: "One team from idea to growth: strategy, design, build, automation, marketing and support, working from one plan.",
      problem: {
        title: "Five agencies. **Five plans. Zero ownership.**",
        text: "The designer blames the developer. The developer waits on marketing. The automation breaks and nobody knows whose job it is. You end up managing vendors instead of your business.",
      },
      fix: {
        title: "One team. **One plan. One owner.**",
        text: "We plan the whole journey with you, then design, build, automate and grow it, and stay on to support it. One roadmap, one point of contact, one team accountable for the result.",
      },
    },
    industries: {
      eyebrow: "INDUSTRIES",
      h1: "Built for **your sector.**",
      sub: "Every industry sells, serves and reports differently. We shape the site, the software and the automation around how yours actually works.",
    },
    work: {
      eyebrow: "WORK",
      h1: "Built, shipped, **running.**",
      sub: "A selection of websites, products and automation systems. Filter by service to see what we've built in each pillar.",
      emptyNote: "More case studies are on the way.",
    },
    about: {
      eyebrow: "ABOUT",
      h1: "Engineers who got tired of **doing things twice.**",
      storyTitle: "Our story",
      story: [
        "Bellona started as an AI and automation studio: agents, workflows and integrations that take repetitive work off a team's plate and run around the clock.",
        "Building those systems kept leading to the same place. The automation needed a better website feeding it, a product to live in, and a growth plan to point it at. So we grew into a complete digital partner: one team from idea to growth.",
        "[FOUNDING YEAR, LOCATION AND ORIGIN STORY]",
      ],
      howTitle: "How we work",
    },
    contact: {
      eyebrow: "CONTACT",
      h1: "Tell us **where it hurts.**",
      sub: "Send a request or book a 30-minute free call. No full plan needed; that's what the call is for.",
      nextTitle: "What happens next",
    },
    legal: {
      eyebrow: "LEGAL",
      body: "[OWNER TO SUPPLY: full text of this policy]",
    },
    notFound: {
      title: "This page **wandered off.**",
      text: "The cubes are still stacked, though.",
      cta: "Back home",
    },
  },
};
