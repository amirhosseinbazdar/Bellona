import Image from "next/image";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import type { Locale } from "@/content/types";
import { gridProjects, pageProjects, projects } from "@/content/work";
import { stepNum } from "@/lib/format";
import { getDict } from "@/lib/i18n";
import { BreadcrumbLd } from "../JsonLd";
import { Rich } from "../Rich";
import { Contact } from "../sections/Contact";
import { Faq } from "../sections/Faq";
import { Industries } from "../sections/Industries";
import { Journey } from "../sections/Journey";
import { Start } from "../sections/Start";
import { Team } from "../sections/Team";
import { Compare, Why } from "../sections/Why";
import { pillarShort, ProjectCard } from "../sections/Work";
import { ArrowIcon, Chips, Eyebrow, LLink, PageHero } from "../ui";
import { WorkFilter } from "../WorkFilter";
import { RollText } from "../RollText";
import { VoxelArt } from "../voxel/Voxel";

export function PartnerPage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const p = d.pages.partner;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.h1} sub={p.sub} />
      <section aria-label={p.eyebrow} className="wrap grid gap-4 pb-8 lg:grid-cols-2">
        <div className="card flex flex-col gap-5 border border-line p-8 sm:p-10">
          <h2 className="t-h2-sm">
            <Rich text={p.problem.title} accent="accent-ink" />
          </h2>
          <p className="t-lead text-body">{p.problem.text}</p>
        </div>
        <div className="on-dark card flex flex-col gap-5 bg-ink p-8 text-paper sm:p-10">
          <h2 className="t-h2-sm">
            <Rich text={p.fix.title} />
          </h2>
          <p className="t-lead text-soft-dark">{p.fix.text}</p>
        </div>
      </section>
      <Journey d={d} full />
      <section aria-label={d.why.compare.caption} className="section">
        <div className="wrap flex flex-col gap-10">
          <h2 className="t-h2-sm">
            <Rich text={d.why.title} accent="accent-ink" />
          </h2>
          <Compare d={d} />
        </div>
      </section>
      <Faq d={d} />
      <Contact d={d} />
      <BreadcrumbLd d={d} trail={[{ name: d.meta.partner.title, path: "/partner" }]} />
    </>
  );
}

export function IndustriesPage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const p = d.pages.industries;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.h1} sub={p.sub} />
      <Industries d={d} full />
      <Contact d={d} />
      <BreadcrumbLd d={d} trail={[{ name: d.meta.industries.title, path: "/industries" }]} />
    </>
  );
}

export function WorkPage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const p = d.pages.work;
  const items = gridProjects();
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.h1} sub={p.sub} />
      <section aria-label={d.meta.work.title} className="wrap flex flex-col gap-10 pb-24">
        <WorkFilter
          label={d.work.filterLabel}
          allLabel={d.work.filterAll}
          options={d.pillars.items.map((x) => ({ id: x.id, label: x.short }))}
        >
          {items.map((proj) => (
            <li key={proj.slug} data-pillars={proj.pillars.join(" ")}>
              <ProjectCard project={proj} d={d} headingLevel="h2" />
            </li>
          ))}
        </WorkFilter>
        <p className="text-lg text-muted">{p.emptyNote}</p>
      </section>
      <Contact d={d} />
      <BreadcrumbLd d={d} trail={[{ name: d.meta.work.title, path: "/work" }]} />
    </>
  );
}

export function CaseStudyPage({ locale, slug }: { locale: Locale; slug: string }) {
  const d = getDict(locale);
  const project = pageProjects().find((p) => p.slug === slug);
  if (!project) notFound();
  const c = project[locale];
  const cs = d.work.caseStudy;
  const published = projects.filter((p) => p.status === "published");
  const idx = published.findIndex((p) => p.slug === slug);
  const next = idx >= 0 && published.length > 1 ? published[(idx + 1) % published.length] : null;

  return (
    <>
      {project.status === "preview" && (
        <p role="note" className="wrap mt-6">
          <span className="block rounded-2xl bg-surface px-5 py-3 text-sm font-semibold text-muted">{cs.previewNotice}</span>
        </p>
      )}
      <PageHero eyebrow={c.sector} title={c.title} sub={c.summary}>
        <dl className="grid grid-cols-2 gap-6 border-t border-line pt-6 sm:grid-cols-4">
          {[
            [cs.client, c.client],
            [cs.sector, c.sector],
            ...(project.year ? [[cs.year, project.year]] : []),
            [cs.services, project.pillars.map((id) => pillarShort(d, id)).join(locale === "fa" ? "، " : ", ")],
            ...(c.partner ? [[cs.partner, c.partner]] : []),
          ].map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1">
              <dt className="t-eyebrow text-orange-text">{k}</dt>
              <dd className="font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ink self-start"
            data-track="cta"
            data-track-label={`work_visit_${project.slug}`}
          >
            <RollText>{cs.visit}</RollText>
            <ArrowIcon />
            <span className="sr-only"> {d.common.opensNewTab}</span>
          </a>
        )}
      </PageHero>
      <div className="wrap">
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[28px] bg-ink sm:rounded-[40px]">
          {project.cover ? (
            <Image src={project.cover} alt={c.title} fill priority sizes="(min-width: 1280px) 1232px, 100vw" className="object-cover object-top" />
          ) : project.model ? (
            <VoxelArt model={project.model} className="h-1/2 w-auto" gap="stroke-ink" swap={{ k: "w" }} anim="rise" label={c.title} />
          ) : (
            <span className="font-mono text-[13px] text-muted-dark">{d.work.placeholderImage}</span>
          )}
        </div>
      </div>
      <section className="section">
        <div className="wrap grid gap-16 lg:grid-cols-[1fr_1.6fr]">
          <h2 className="t-h2-sm">{cs.challenge}</h2>
          <p className="t-lead text-body">{c.challenge}</p>
          <h2 className="t-h2-sm">{cs.built}</h2>
          <ul className="rule-list flex flex-col border-y border-line">
            {c.built.map((b, i) => (
              <li key={`${b}-${i}`} className="flex gap-6 py-5 text-lg">
                <span className="font-mono text-sm text-orange-text">{stepNum(i, locale)}</span>
                {b}
              </li>
            ))}
          </ul>
          {c.results.length > 0 && (
            <>
              <h2 className="t-h2-sm">{cs.results}</h2>
              <dl className="grid gap-6 sm:grid-cols-2">
                {c.results.map((r, i) => (
                  <div key={`${r.label}-${i}`} className="flex flex-col-reverse gap-2 rounded-[28px] bg-surface p-7">
                    <dt className="text-muted">{r.label}</dt>
                    <dd className="t-num text-6xl text-orange">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </>
          )}
          {project.stack && (
            <>
              <h2 className="t-h2-sm">{cs.stack}</h2>
              <Chips items={project.stack} />
            </>
          )}
        </div>
      </section>
      {project.gallery && project.gallery.length > 0 && (
        <section aria-labelledby="gallery-title" className="section bg-surface">
          <div className="wrap flex flex-col gap-10">
            <h2 id="gallery-title" className="t-h2-sm">
              {cs.gallery}
            </h2>
            <ul className="grid gap-5 lg:grid-cols-[2fr_1fr]">
              <li className="flex flex-col gap-5">
                {project.gallery
                  .filter((g) => g.kind === "desktop")
                  .map((g, i) => (
                    <div key={g.src} data-reveal="" style={{ "--d": i } as CSSProperties} className="overflow-hidden rounded-[24px] bg-paper">
                      <Image src={g.src} alt={`${c.title} ${i + 2}`} width={g.width} height={g.height} sizes="(min-width: 1024px) 800px, 100vw" className="h-auto w-full" />
                    </div>
                  ))}
              </li>
              <li className="flex flex-col gap-5 lg:sticky lg:top-8 lg:self-start">
                {project.gallery
                  .filter((g) => g.kind === "mobile")
                  .map((g) => (
                    <div key={g.src} data-reveal="" className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[36px] border-8 border-ink bg-ink">
                      <Image src={g.src} alt={`${c.title} mobile`} width={g.width} height={g.height} sizes="360px" className="h-auto w-full" />
                    </div>
                  ))}
              </li>
            </ul>
          </div>
        </section>
      )}
      {c.quote && (
        <section aria-label={cs.quote} className="section bg-surface">
          <figure className="wrap flex max-w-4xl flex-col gap-6">
            <blockquote className="t-statement">&ldquo;{c.quote.text}&rdquo;</blockquote>
            <figcaption className="text-muted">
              <strong className="text-ink">{c.quote.name}</strong> · {c.quote.role}
            </figcaption>
          </figure>
        </section>
      )}
      <nav aria-label={cs.back} className="wrap flex flex-wrap justify-between gap-4 py-16">
        <LLink locale={locale} href="/work" className="btn btn-outline">
          <RollText>{cs.back}</RollText>
        </LLink>
        {next && (
          <LLink locale={locale} href={`/work/${next.slug}`} className="btn btn-ink">
            <RollText>
              {cs.next}: {next[locale].title}
            </RollText>
            <ArrowIcon />
          </LLink>
        )}
      </nav>
      <Contact d={d} />
      <BreadcrumbLd
        d={d}
        trail={[
          { name: d.meta.work.title, path: "/work" },
          { name: c.title, path: `/work/${project.slug}` },
        ]}
      />
    </>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const p = d.pages.about;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.h1}>
        <p className="t-statement max-w-4xl pt-6">
          <Rich text={d.who.text} />
        </p>
      </PageHero>
      <section aria-labelledby="story-title" className="section pt-8">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div className="flex flex-col gap-4">
            <Eyebrow>{p.storyTitle}</Eyebrow>
            <h2 id="story-title" className="sr-only">
              {p.storyTitle}
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            {p.story.map((para) => (
              <p key={para} className="t-lead text-body">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
      <Team d={d} />
      <Why d={d} withCompare={false} />
      <Contact d={d} />
      <BreadcrumbLd d={d} trail={[{ name: d.meta.about.title, path: "/about" }]} />
    </>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const p = d.pages.contact;
  return (
    <>
      <Contact d={d} asH1 title={p.h1} sub={p.sub} />
      <section aria-labelledby="next-title" className="pt-24 lg:pt-32">
        <div className="wrap">
          <h2 id="next-title" className="t-h2-sm">
            {p.nextTitle}
          </h2>
        </div>
        <Start d={d} headingLevel="h3" />
      </section>
      <BreadcrumbLd d={d} trail={[{ name: d.meta.contact.title, path: "/contact" }]} />
    </>
  );
}

export function LegalPage({ locale, kind }: { locale: Locale; kind: "privacy" | "terms" }) {
  const d = getDict(locale);
  return (
    <>
      <PageHero eyebrow={d.pages.legal.eyebrow} title={d.meta[kind].title} />
      <section className="wrap pb-32">
        <p className="t-lead max-w-3xl text-body">{d.pages.legal.body}</p>
        <p className="mt-6 text-muted">
          <a href={`mailto:${d.common.email}`} dir="ltr" className="font-semibold underline underline-offset-4">
            {d.common.email}
          </a>
        </p>
      </section>
    </>
  );
}
