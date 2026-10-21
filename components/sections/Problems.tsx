import type { CSSProperties } from "react";
import type { Dict } from "@/content/types";
import { Rich } from "../Rich";
import { MiniCube, VoxelArt } from "../voxel/Voxel";
import { PILLAR_MODEL } from "../voxel/models";
import { Eyebrow, StickySplit } from "../ui";
import { pillarShort } from "./Work";

/** "Sound familiar?": the live site's pain points, extended to every pillar. Heading stays put. */
export function Problems({ d }: { d: Dict }) {
  const { problems } = d;
  return (
    <section aria-labelledby="problems-title" className="section pt-0">
      <StickySplit
        head={
          <>
            <Eyebrow>{problems.eyebrow}</Eyebrow>
            <h2 id="problems-title" className="t-h2-sm">
              <Rich text={problems.title} />
            </h2>
            <p className="t-lead text-body">
              <Rich text={problems.close} />
            </p>
          </>
        }
      >
        <ul className="grid gap-4 md:grid-cols-2">
          {problems.cards.map((c, i) => (
            <li
              key={c.title}
              data-reveal=""
              style={{ "--d": i % 2 } as CSSProperties}
              className="card lift group flex flex-col gap-5 border border-line p-7 hover:border-ink"
            >
              <div className="flex items-start justify-between gap-4">
                <VoxelArt model={PILLAR_MODEL[c.pillar]} className="h-32 w-auto" />
                <span className="chip bg-surface text-ink">{pillarShort(d, c.pillar)}</span>
              </div>
              <h3 className="t-h3">{c.title}</h3>
              {/* Bullets only, to keep the home page scannable; the full quotes live on the AI page. */}
              <ul className="mt-auto flex flex-col gap-2 border-t border-line pt-5">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px] text-muted">
                    <MiniCube className="mt-1.5 size-3 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </StickySplit>
    </section>
  );
}
