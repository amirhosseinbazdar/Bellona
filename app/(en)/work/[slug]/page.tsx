// Generated route wrapper: page content lives in components/pages, copy in content/{en,fa}.ts.
import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/pages/OtherPages";
import { pageProjects } from "@/content/work";
import { pageMetadata } from "@/lib/metadata";

const locale = "en";
type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return pageProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = pageProjects().find((p) => p.slug === slug);
  if (!project) return {};
  const c = project[locale];
  return pageMetadata({
    locale,
    path: `/work/${slug}`,
    title: c.title,
    description: c.summary,
    noindex: project.status !== "published",
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <CaseStudyPage locale={locale} slug={slug} />;
}
