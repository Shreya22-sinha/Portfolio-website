import Link from "next/link";
import { work, type CaseStudyFigure, type WorkItem } from "@/content/content";
import { Figure } from "@/components/ui/Figure";
import { FigureRow } from "@/components/ui/FigureRow";
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
              {section.figures?.map((figure, index) => (
                <div key={`${section.heading}-${index}`} className="mt-6">
                  <CaseStudyFigures figure={figure} />
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

function CaseStudyFigures({ figure }: { figure: CaseStudyFigure }) {
  if (figure.kind === "single") {
    return (
      <Figure
        src={figure.image.src}
        alt={figure.image.alt}
        caption={figure.image.caption ?? ""}
        width={figure.image.width}
        height={figure.image.height}
      />
    );
  }

  if (figure.kind === "grid") {
    const sizes =
      figure.columns === 2
        ? "(max-width: 768px) calc(100vw - 48px), 360px"
        : "(max-width: 768px) calc(100vw - 48px), 240px";
    const grid =
      figure.columns === 2
        ? "grid grid-cols-1 gap-5 md:grid-cols-2"
        : "grid grid-cols-1 gap-5 md:grid-cols-3";

    return (
      <div className={grid}>
        {figure.images.map((image) => (
          <Figure
            key={image.src}
            src={image.src}
            alt={image.alt}
            caption={image.caption ?? ""}
            width={image.width}
            height={image.height}
            sizes={sizes}
          />
        ))}
      </div>
    );
  }

  return (
    <FigureRow
      images={figure.images}
      caption={figure.caption}
      columns={figure.columns}
      contain={figure.contain}
    />
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
