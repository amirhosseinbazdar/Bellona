import type { MetadataRoute } from "next";
import { en } from "@/content/en";
import { projects } from "@/content/work";
import { localePath } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

// Only real, indexable pages (no placeholder case studies, no legal stubs until they have text).
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services",
    ...en.pillars.items.map((p) => `/services/${p.slug}`),
    "/partner",
    "/industries",
    "/work",
    ...projects.filter((p) => p.status === "published").map((p) => `/work/${p.slug}`),
    "/about",
    "/contact",
  ];
  const now = new Date();
  return paths.flatMap((path) =>
    (["en", "fa"] as const).map((locale) => ({
      url: `${siteUrl}${localePath(locale, path)}`,
      lastModified: now,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.7 : 0.8,
      alternates: {
        languages: {
          en: `${siteUrl}${localePath("en", path)}`,
          fa: `${siteUrl}${localePath("fa", path)}`,
        },
      },
    })),
  );
}
