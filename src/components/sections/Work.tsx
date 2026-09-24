import Link from "next/link";
import { work } from "@/content/content";
import { Icon } from "@/components/icons";
import { IconBox } from "@/components/ui/IconBox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { bgClass, groupHoverTextClass } from "@/components/ui/accents";

export function Work() {
  return (
    <section id={work.id} className="section" aria-labelledby="work-heading">
      <div className="section-inner">
        <SectionHeading id="work-heading" accent="teal" className="mb-10">
          {work.heading}
        </SectionHeading>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {work.items.map((item) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              aria-label={item.title}
              className="group frame press block h-full bg-paper"
            >
              <article className="flex h-full flex-col overflow-hidden">
                <div
                  className={`strip-rule flex items-center justify-between gap-2 px-3 py-3 ${bgClass[item.fill]}`}
                >
                  <IconBox>
                    <Icon name={item.icon} />
                  </IconBox>
                  <span
                    className={`frame inline-flex shrink-0 items-center bg-paper px-2.5 py-1.5 font-sans text-[0.65rem] font-extrabold tracking-[0.06em] uppercase text-ink transition-[background-color,color] duration-[120ms] group-hover:bg-ink ${groupHoverTextClass[item.fill]}`}
                  >
                    <span className="md:hidden">{work.viewCaseStudyShort}</span>
                    <span className="hidden md:inline">{work.viewCaseStudy}</span>
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <h3 className="font-display text-2xl leading-tight">{item.title}</h3>
                  <p className="text-[0.95rem] leading-relaxed">{item.summary}</p>
                  <ul className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li key={tag}>
                        <Tag fill="paper">{tag}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
