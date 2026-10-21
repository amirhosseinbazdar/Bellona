import type { Locale } from "@/content/types";
import { getDict } from "@/lib/i18n";
import { Contact } from "../sections/Contact";
import { Faq } from "../sections/Faq";
import { Flow } from "../sections/Flow";
import { Hero } from "../sections/Hero";
import { Industries } from "../sections/Industries";
import { Journey } from "../sections/Journey";
import { Pillars } from "../sections/Pillars";
import { Problems } from "../sections/Problems";
import { Team } from "../sections/Team";
import { Testimonials } from "../sections/Testimonials";
import { ClientStrip, Who } from "../sections/Who";
import { Why } from "../sections/Why";
import { Work } from "../sections/Work";

export function HomePage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  return (
    <>
      <Hero d={d} />
      <ClientStrip d={d} />
      <Who d={d} />
      <Problems d={d} />
      <Pillars d={d} stats={false} />
      <Journey d={d} />
      <Work d={d} />
      <Flow d={d} />
      <Industries d={d} />
      <div className="pt-24 lg:pt-32">
        <Why d={d} withCompare={false} />
      </div>
      <Team d={d} />
      <Testimonials d={d} />
      {/* Short list on the home page; the rest live on the service pages. */}
      <Faq d={d} items={[0, 1, 4, 5].map((i) => d.faq.items[i])} />
      <Contact d={d} />
    </>
  );
}
