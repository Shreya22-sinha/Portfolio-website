import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/case-study/CaseStudy";
import { getWorkBySlug, site, work } from "@/content/content";

export function generateStaticParams() {
  return work.items.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkBySlug(slug);

  if (!item) {
    return { title: "Work" };
  }

  return {
    title: item.title,
    description: item.summary,
    openGraph: {
      title: `${item.title} — ${site.name}`,
      description: item.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} — ${site.name}`,
      description: item.summary,
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main id="main">
      <CaseStudy item={item} />
    </main>
  );
}
