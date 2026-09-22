import Link from "next/link";
import { work, type WorkItem } from "@/content/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { bgClass } from "@/components/ui/accents";

type CaseStudyProps = {
  item: WorkItem;
};

export function CaseStudy({ item }: CaseStudyProps) {
  return (
    <article className="section">
      <div className="section-inner max-w-3xl">
        <p className="mb-8">
          <Link href={work.backHref} className="eyebrow">
            {work.backLabel}
          </Link>
        </p>

        <div className={`frame mb-8 px-4 py-3 ${bgClass[item.fill]}`}>
          <ul className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li key={tag}>
                <Tag fill="paper">{tag}</Tag>
              </li>
            ))}
          </ul>
        </div>

        <SectionHeading as="h1" accent={item.fill} className="mb-10">
          {item.title}
        </SectionHeading>

        <div className="flex flex-col gap-10">
          {item.sections.map((section) => (
            <section key={section.heading} aria-labelledby={slugify(section.heading)}>
              <h2
                id={slugify(section.heading)}
                className="font-display mb-3 text-2xl leading-tight"
              >
                {section.heading}
              </h2>
              <p className="prose-body text-base">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
