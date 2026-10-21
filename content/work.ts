import type { PillarId } from "./types";

/**
 * Case studies. See README › "Add a case study".
 * Order matters: the list is ranked, strongest first. `featured` projects also appear on the home page.
 *
 * status:
 *   "published"   – shown in grids, gets its own /work/[slug] page, listed in the sitemap.
 *   "placeholder" – an empty, designed slot in the grids (no link, no page).
 *   "preview"     – gets a noindex page so you can see the template; hidden from grids and the sitemap.
 *
 * Never put a number in `results` that you cannot source.
 */

export type ProjectStatus = "published" | "placeholder" | "preview";
export type ProjectTone = "ink" | "orange" | "paper" | "graphite";

export interface ProjectCopy {
  title: string;
  client: string;
  sector: string;
  summary: string;
  challenge: string;
  built: string[];
  results: { value: string; label: string }[];
  quote?: { text: string; name: string; role: string };
}

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  kind: "desktop" | "mobile";
}

export interface Project {
  slug: string;
  status: ProjectStatus;
  featured?: boolean;
  pillars: PillarId[];
  tone: ProjectTone;
  /** Live site. */
  url?: string;
  year?: string;
  /** Image under /public, e.g. "/work/acme/cover.jpg" (16:10, at least 1440px wide). */
  cover?: string;
  gallery?: ProjectImage[];
  stack?: string[];
  en: ProjectCopy;
  fa: ProjectCopy;
}

const desktop = (src: string): ProjectImage => ({ src, width: 1440, height: 900, kind: "desktop" });
const mobile = (src: string): ProjectImage => ({ src, width: 780, height: 1688, kind: "mobile" });

export const projects: Project[] = [
  {
    slug: "konjed",
    status: "published",
    featured: true,
    pillars: ["product", "web"],
    tone: "ink",
    url: "https://konjed.top",
    cover: "/work/konjed/cover.jpg",
    gallery: [desktop("/work/konjed/shot-1.jpg"), desktop("/work/konjed/shot-2.jpg"), mobile("/work/konjed/mobile.jpg")],
    en: {
      title: "Konjed",
      client: "Konjed",
      sector: "Education · Gamified learning",
      summary: "A gamified learning platform where teenagers build life skills by playing: games, missions, achievements and a showcase of their own projects.",
      challenge:
        "Konjed teaches life skills such as money management, problem solving and entrepreneurship. The product had to feel like a game first and a course second, in Persian and on any screen.",
      built: [
        "A cinematic landing experience set in an illustrated game world",
        "A game arcade of skill-based mini games",
        "Missions, points and achievements that reward progress",
        "A skill school and a showcase of learners' projects",
      ],
      results: [],
    },
    fa: {
      title: "کنجد",
      client: "کنجد",
      sector: "آموزش · یادگیری گیمیفای‌شده",
      summary: "پلتفرم یادگیری گیمیفای‌شده‌ای که نوجوان‌ها در آن با بازی، مهارت‌های زندگی را یاد می‌گیرند: بازی، مأموریت، دستاورد و ویترین پروژه‌های خودشان.",
      challenge:
        "کنجد مهارت‌هایی مثل مدیریت پول، حل مسئله و کارآفرینی را آموزش می‌دهد. محصول باید اول حس بازی می‌داد و بعد حس کلاس؛ به فارسی و روی هر صفحه‌نمایشی.",
      built: [
        "تجربه‌ی ورود سینمایی در یک دنیای بازی تصویرسازی‌شده",
        "آرکید بازی با مینی‌گیم‌های مهارتی",
        "مأموریت، امتیاز و دستاورد برای پاداش دادن به پیشرفت",
        "مدرسه‌ی مهارت و ویترین پروژه‌های مهارت‌آموزها",
      ],
      results: [],
    },
  },
  {
    slug: "nira-perfume",
    status: "published",
    featured: true,
    pillars: ["web", "product"],
    tone: "paper",
    url: "https://niraperfume.com",
    cover: "/work/nira-perfume/cover.jpg",
    gallery: [
      desktop("/work/nira-perfume/shot-1.jpg"),
      desktop("/work/nira-perfume/shot-2.jpg"),
      desktop("/work/nira-perfume/shot-3.jpg"),
      mobile("/work/nira-perfume/mobile.jpg"),
    ],
    en: {
      title: "Nira Perfume",
      client: "Nira",
      sector: "Retail · Fragrance",
      summary: "An online home for Nira's fragrances: original perfumes, a curated collection and custom scents designed for companies.",
      challenge:
        "Nira sells original fragrances and creates custom perfumes for brands. The site needed to present both with the calm, premium feel of a luxury house, in Persian.",
      built: [
        "A brand-led storefront with the Nira collection",
        "A dedicated section for custom corporate perfumes",
        "Gallery and archive pages",
        "Product search and shopping cart",
      ],
      results: [],
    },
    fa: {
      title: "عطر نیرا",
      client: "نیرا",
      sector: "فروشگاهی · عطر",
      summary: "خانه‌ی آنلاین رایحه‌های نیرا: عطرهای اورجینال، مجموعه‌ی منتخب و عطرهای اختصاصی که برای شرکت‌ها طراحی می‌شود.",
      challenge: "نیرا عطر اورجینال می‌فروشد و برای برندها عطر اختصاصی می‌سازد. سایت باید هر دو را با حس آرام و لوکس یک خانه‌ی عطر، به فارسی، نشان می‌داد.",
      built: ["ویترین فروشگاهی با محوریت برند و مجموعه‌ی نیرا", "بخش اختصاصی ساخت عطر سازمانی", "صفحه‌های گالری و آرشیو", "جست‌وجوی محصول و سبد خرید"],
      results: [],
    },
  },
  {
    slug: "microshamim",
    status: "published",
    featured: true,
    pillars: ["web"],
    tone: "orange",
    url: "https://microshamim-rosy.vercel.app",
    cover: "/work/microshamim/cover.jpg",
    gallery: [desktop("/work/microshamim/shot-1.jpg"), desktop("/work/microshamim/shot-2.jpg"), mobile("/work/microshamim/mobile.jpg")],
    en: {
      title: "Microshamim",
      client: "Shamim innovation micro-factory",
      sector: "Innovation hub · Education",
      summary: "The website for Shamim's innovation micro-factory: a space for young women with a skill school, co-working space, content studio and events.",
      challenge:
        "Microshamim brings learning, co-working and content production under one roof. The site had to explain every space clearly and still feel bold and youthful.",
      built: [
        "A playful, collage-style art direction",
        "Pages for the skill school, co-working space, content studio and events",
        "A request-to-use-the-space call to action throughout",
        "A magazine section",
      ],
      results: [],
    },
    fa: {
      title: "میکروشمیم",
      client: "میکروکارخانه نوآوری شمیم",
      sector: "مرکز نوآوری · آموزش",
      summary: "سایت میکروکارخانه نوآوری شمیم: فضایی برای دختران و زنان جوان با مدرسه‌ی مهارت، فضای کار اشتراکی، استودیو تولید محتوا و رویدادها.",
      challenge: "میکروشمیم یادگیری، کار اشتراکی و تولید محتوا را زیر یک سقف آورده است. سایت باید همه‌ی فضاها را روشن توضیح می‌داد و همچنان جسور و جوان می‌ماند.",
      built: ["طراحی هنری بازیگوش با حال‌وهوای کلاژ", "صفحه‌های مدرسه‌ی مهارت، فضای کار اشتراکی، استودیو محتوا و رویدادها", "دعوت به درخواست استفاده از فضا در سراسر سایت", "بخش مجله"],
      results: [],
    },
  },
  {
    slug: "codechee",
    status: "published",
    pillars: ["product", "web"],
    tone: "graphite",
    url: "https://codechee.ir",
    cover: "/work/codechee/cover.jpg",
    gallery: [
      desktop("/work/codechee/shot-1.jpg"),
      desktop("/work/codechee/shot-2.jpg"),
      desktop("/work/codechee/shot-3.jpg"),
      desktop("/work/codechee/shot-4.jpg"),
      mobile("/work/codechee/mobile.jpg"),
    ],
    en: {
      title: "Codechee",
      client: "Codechee",
      sector: "Education · Programming & AI",
      summary: "A platform that teaches programming and AI to students through play, with learning paths, gameplay, quizzes and an escape room.",
      challenge:
        "Codechee teaches Python, data, AI and cybersecurity to school students. Learning had to feel like play, with clear levels and visible progress.",
      built: [
        "Gamified learning paths (Starcamps) with levelled courses",
        "Gameplay, quiz and escape-room sections",
        "Programmes for schools and events such as Sharif Cup",
        "Student accounts with progress tracking",
      ],
      results: [],
    },
    fa: {
      title: "کدچی",
      client: "کدچی",
      sector: "آموزش · برنامه‌نویسی و هوش مصنوعی",
      summary: "پلتفرمی که برنامه‌نویسی و هوش مصنوعی را با بازی به دانش‌آموزان یاد می‌دهد؛ با مسیرهای آموزشی، گیم‌پلی، کوییز و اتاق فرار.",
      challenge: "کدچی پایتون، داده، هوش مصنوعی و امنیت سایبری را به دانش‌آموزان آموزش می‌دهد. یادگیری باید حس بازی می‌داد، با سطح‌های روشن و پیشرفتی که دیده شود.",
      built: ["مسیرهای یادگیری گیمیفای‌شده (استارکمپ) با دوره‌های سطح‌بندی‌شده", "بخش‌های گیم‌پلی، کوییز و اتاق فرار", "برنامه‌هایی برای مدارس و رویدادهایی مثل شریف کاپ", "حساب کاربری دانش‌آموز با پیگیری پیشرفت"],
      results: [],
    },
  },
  {
    // Template preview at /work/example (noindex). Copy this entry to add a case study.
    slug: "example",
    status: "preview",
    pillars: ["web", "ai"],
    tone: "ink",
    year: "[YEAR]",
    stack: ["[TOOL]", "[TOOL]", "[TOOL]"],
    en: {
      title: "[PROJECT NAME]",
      client: "[CLIENT]",
      sector: "[SECTOR]",
      summary: "[ONE-LINE SUMMARY: what we built and for whom]",
      challenge: "[THE CHALLENGE: two or three sentences on the situation before Bellona]",
      built: ["[WHAT WE BUILT 1]", "[WHAT WE BUILT 2]", "[WHAT WE BUILT 3]"],
      results: [
        { value: "[X]", label: "[SOURCED RESULT]" },
        { value: "[Y]", label: "[SOURCED RESULT]" },
      ],
      quote: { text: "[CLIENT QUOTE]", name: "[NAME]", role: "[ROLE, COMPANY]" },
    },
    fa: {
      title: "[نام پروژه]",
      client: "[مشتری]",
      sector: "[حوزه]",
      summary: "[خلاصه‌ی یک‌خطی: چه ساختیم و برای چه کسی]",
      challenge: "[چالش: دو سه جمله درباره‌ی وضعیت قبل از بلونا]",
      built: ["[چه ساختیم ۱]", "[چه ساختیم ۲]", "[چه ساختیم ۳]"],
      results: [
        { value: "[X]", label: "[نتیجه‌ی مستند]" },
        { value: "[Y]", label: "[نتیجه‌ی مستند]" },
      ],
      quote: { text: "[نقل‌قول مشتری]", name: "[نام]", role: "[نقش، شرکت]" },
    },
  },
];

/** Grid items: published (in ranked order), then any placeholder slots. */
export const gridProjects = () => [
  ...projects.filter((p) => p.status === "published"),
  ...projects.filter((p) => p.status === "placeholder"),
];

/** Home page: the featured projects, in ranked order. */
export const featuredProjects = () => projects.filter((p) => p.status === "published" && p.featured);

/** Slugs that get a /work/[slug] page. */
export const pageProjects = () => projects.filter((p) => p.status !== "placeholder");
