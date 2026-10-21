import type { Dict, Faq } from "@/content/types";
import { localePath } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be raw JSON; `<` is escaped so content can never close the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function ProfessionalServiceLd({ d }: { d: Dict }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#organization`,
        name: "Bellona",
        alternateName: "بلونا",
        url: `${siteUrl}${localePath(d.locale, "/")}`,
        logo: `${siteUrl}/brand/bellona-app-icon.svg`,
        image: `${siteUrl}/api/og?locale=${d.locale}`,
        email: d.common.email,
        description: d.meta.home.description,
        slogan: d.common.tagline,
        inLanguage: d.locale,
        knowsAbout: d.pillars.items.map((p) => p.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: d.meta.services.title,
          itemListElement: d.pillars.items.map((p) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: p.title,
              description: p.line,
              url: `${siteUrl}${localePath(d.locale, `/services/${p.slug}`)}`,
            },
          })),
        },
        sameAs: d.common.footer.social.map((s) => s.href),
        founder: d.team.members
          .filter((m) => m.founder)
          .map((m) => ({ "@type": "Person", name: m.name, jobTitle: m.role, knowsAbout: m.skills })),
        employee: d.team.members
          .filter((m) => !m.founder)
          .map((m) => ({ "@type": "Person", name: m.name, jobTitle: m.role, knowsAbout: m.skills })),
      }}
    />
  );
}

export function FaqLd({ items }: { items: Faq[] }) {
  // Placeholder answers ("[…]") are left out of structured data.
  const real = items.filter((f) => !f.a.includes("["));
  if (!real.length) return null;
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: real.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}

export function BreadcrumbLd({ d, trail }: { d: Dict; trail: { name: string; path: string }[] }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{ name: d.meta.siteName, path: "/" }, ...trail].map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: t.name,
          item: `${siteUrl}${localePath(d.locale, t.path)}`,
        })),
      }}
    />
  );
}
