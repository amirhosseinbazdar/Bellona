import Link from "next/link";
import type { Dict } from "@/content/types";
import { localePath } from "@/lib/i18n";
import { LogoMark } from "./LogoMark";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="fill-none stroke-current" strokeWidth={2} strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" className="fill-current" />
    </svg>
  );
}

export function Footer({ d }: { d: Dict }) {
  const { common, locale } = d;
  return (
    <footer className="on-dark bg-ink text-paper">
      <div className="wrap flex flex-col gap-10 pb-6 pt-10">
        <div className="flex flex-wrap items-end justify-between gap-8 border-t border-line-dark pt-10">
          <Link href={localePath(locale, "/")} className="hx flex items-center gap-4 rounded-2xl">
            <LogoMark variant="dark" size={72} />
            <span className="flex flex-col gap-2">
              <span className="fa-display text-[30px] font-extrabold leading-none tracking-[-0.035em]">
                {common.wordmark} <span className="font-normal text-orange">{common.agency}</span>
              </span>
              <span className="tagline text-[11px] font-semibold tracking-[0.36em] text-muted-dark rtl:text-sm">
                {common.tagline}
              </span>
            </span>
          </Link>
          <nav aria-label={common.footer.nav}>
            <ul className="flex flex-wrap gap-x-7 gap-y-3 text-[15px]">
              {common.nav.map((item) => (
                <li key={item.key}>
                  <Link href={localePath(locale, item.href)} className="text-soft-dark hover:text-orange">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-dark">
          <p>{common.footer.rights}</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <a href={`mailto:${common.email}`} className="hover:text-paper">
                <span className="sr-only">{common.footer.emailLabel}: </span>
                <span dir="ltr">{common.email}</span>
              </a>
            </li>
            {common.footer.social.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-paper" data-track="cta" data-track-label="footer_instagram">
                  <InstagramIcon />
                  {s.label}
                  <span className="sr-only"> {common.opensNewTab}</span>
                </a>
              </li>
            ))}
            <li>
              <Link href={localePath(locale, "/privacy")} className="hover:text-paper">
                {common.footer.legal.privacy}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/terms")} className="hover:text-paper">
                {common.footer.legal.terms}
              </Link>
            </li>
          </ul>
        </div>
        {/* Decorative giant wordmark, drawn as SVG so it isn't treated as body text. */}
        <svg viewBox="0 0 1000 230" aria-hidden="true" focusable="false" className="w-full select-none fill-graphite">
          <text
            x="500"
            y="196"
            textAnchor="middle"
            textLength="990"
            lengthAdjust="spacingAndGlyphs"
            className="fa-display text-[250px] font-extrabold"
          >
            {common.wordmark}
          </text>
        </svg>
      </div>
    </footer>
  );
}
