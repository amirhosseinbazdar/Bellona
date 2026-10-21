import Image from "next/image";
import { clientLogos } from "@/content/proof";
import type { Dict } from "@/content/types";
import { Rich } from "../Rich";
import { Eyebrow, LLink } from "../ui";

/** Client logo strip. Renders nothing until content/proof.ts has real logos. */
export function ClientStrip({ d }: { d: Dict }) {
  if (!clientLogos.length) return null;
  return (
    <section aria-label={d.proofStrip.label} className="border-y border-line-soft py-8">
      <div className="wrap flex flex-wrap items-center justify-between gap-6">
        <p className="text-[15px] text-muted">{d.proofStrip.label}</p>
        <ul className="flex flex-wrap items-center gap-8">
          {clientLogos.map((logo) => (
            <li key={logo.name}>
              <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} className="h-8 w-auto opacity-80 grayscale" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Who({ d }: { d: Dict }) {
  return (
    <section aria-labelledby="who-title" className="section border-t border-line-soft">
      <div className="wrap flex flex-wrap items-end justify-between gap-12">
        <div data-reveal="" className="flex max-w-[960px] flex-[1_1_640px] flex-col gap-6">
          <Eyebrow>
            <span id="who-title">{d.who.eyebrow}</span>
          </Eyebrow>
          <p className="t-statement">
            <Rich text={d.who.text} />
          </p>
        </div>
        <LLink locale={d.locale} href="/about" className="btn btn-outline" track="who_story">
          {d.who.cta}
        </LLink>
      </div>
    </section>
  );
}
