import type { CSSProperties } from "react";
import type { Dict } from "@/content/types";
import { Rich } from "../Rich";
import { VoxelArt } from "../voxel/Voxel";
import { INDUSTRY_MODEL } from "../voxel/models";
import { ArrowIcon, Chips, Eyebrow, LLink, StickySplit } from "../ui";

/**
 * Home: heading held in place beside a 2-column card grid.
 * `full` (on /industries): 3-column grid with "what we'd build" chips and anchors.
 */
export function Industries({ d, full = false }: { d: Dict; full?: boolean }) {
  const { industries, locale } = d;

  const cards = (
    <ul className={`grid gap-4 sm:grid-cols-2 ${full ? "lg:grid-cols-3" : ""}`}>
      {industries.items.map((ind, i) => (
        <li
          key={ind.id}
          id={full ? ind.id : undefined}
          data-reveal=""
          style={{ "--d": i % (full ? 3 : 2) } as CSSProperties}
          className={`card lift group flex scroll-mt-6 flex-col gap-5 p-7 ${full ? "border border-line" : "bg-paper"}`}
        >
          <VoxelArt model={INDUSTRY_MODEL[ind.id] ?? "stack"} className="h-40 w-auto self-start sm:h-48" gap="stroke-paper" />
          <h3 className="t-h3">{ind.title}</h3>
          <p className="flex-grow leading-relaxed text-muted">{ind.text}</p>
          {full && (
            <div className="flex flex-col gap-3">
              <p className="t-eyebrow text-orange-text">{industries.buildLabel}</p>
              <Chips items={ind.build} />
            </div>
          )}
          <LLink
            locale={locale}
            href={`/contact?industry=${ind.id}`}
            className="inline-flex items-center gap-2 self-start font-semibold underline-offset-4 hover:text-orange-text hover:underline"
            track={`industry_${ind.id}`}
          >
            {industries.cardCta}
            <ArrowIcon size={16} />
          </LLink>
        </li>
      ))}
    </ul>
  );

  if (full) {
    return (
      <section id="industries" aria-labelledby="industries-title" className="pb-24">
        <div className="wrap flex flex-col gap-12">
          <h2 id="industries-title" className="sr-only">
            {industries.eyebrow}
          </h2>
          {cards}
          <p className="text-lg text-body">{industries.more}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="industries" aria-labelledby="industries-title" className="section bg-surface">
      <StickySplit
        head={
          <>
            <Eyebrow>{industries.eyebrow}</Eyebrow>
            <h2 id="industries-title" className="t-h2-sm">
              <Rich text={industries.title} />
            </h2>
            <p className="t-lead text-body">{industries.sub}</p>
            <p className="text-muted">{industries.more}</p>
            <LLink locale={locale} href="/industries" className="btn btn-sm btn-outline self-start">
              {industries.seeAll}
            </LLink>
          </>
        }
      >
        {cards}
      </StickySplit>
    </section>
  );
}
