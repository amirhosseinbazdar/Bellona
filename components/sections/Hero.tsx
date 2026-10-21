import type { Dict } from "@/content/types";
import { HeroMark } from "../hero/HeroMark";
import { IsoGrid } from "../hero/IsoGrid";
import { Rich } from "../Rich";
import { MiniCube } from "../voxel/Voxel";
import { ArrowIcon, LLink } from "../ui";

/**
 * Hero: headline on one side, the animated cube mark on the tiled floor on the other (desktop),
 * stacked on phones. Sized so the mark's intro is in view on first load.
 */
export function Hero({ d }: { d: Dict }) {
  const { hero, locale } = d;
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1360px] items-center gap-2 px-4 pt-8 sm:px-6 lg:min-h-[min(760px,calc(100svh-104px))] lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pt-4">
        <div className="hero-in relative z-10 flex flex-col items-center gap-5 text-center sm:gap-6 lg:items-start lg:text-start">
          <p className="tagline t-eyebrow inline-flex items-center gap-2.5 rounded-full border border-line bg-paper px-4 py-2 text-muted">
            <MiniCube className="size-3.5" />
            {hero.tagline}
          </p>
          <h1 id="hero-title" className="t-hero text-balance">
            <Rich text={hero.title} />
          </h1>
          <p className="t-lead max-w-[600px] text-body">{hero.sub}</p>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <LLink locale={locale} href="/contact" className="btn btn-primary" track="hero_start">
              {hero.primary}
              <ArrowIcon />
            </LLink>
            <LLink locale={locale} href="/work" className="btn btn-outline bg-paper" track="hero_work">
              {hero.secondary}
            </LLink>
          </div>
          <ul className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-1 rounded-[28px] bg-surface px-5 py-3 text-[15px] text-body sm:rounded-full">
            {hero.stats.map((s, i) => (
              <li key={s.label} className="flex items-center gap-4">
                {i > 0 && <span aria-hidden="true" className="hidden size-1 rounded-full bg-muted-dark sm:block" />}
                <span>
                  {s.value && <strong className="text-ink">{s.value}</strong>} {s.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative -mx-4 h-[340px] sm:-mx-6 sm:h-[460px] lg:mx-0 lg:h-[640px]">
          <IsoGrid className="absolute inset-0 size-full lg:-inset-x-24 lg:w-[calc(100%+12rem)]" />
          <div className="relative flex h-full items-center justify-center">
            <HeroMark className="h-auto w-[210px] sm:w-[290px] lg:w-[360px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
