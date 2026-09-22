import Link from "next/link";
import { work } from "@/content/content";
import { Icon } from "@/components/icons";
import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { bgClass } from "@/components/ui/accents";

export function Work() {
  return (
    <section id={work.id} className="section" aria-labelledby="work-heading">
      <div className="section-inner">
        <SectionHeading id="work-heading" accent="teal" className="mb-10">
          {work.heading}
        </SectionHeading>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {work.items.map((item) => (
            <Link key={item.slug} href={`/work/${item.slug}`} className="group block h-full">
              <Card fill="paper" className="flex h-full flex-col overflow-hidden">
                <div
                  className={`strip-rule flex items-center justify-between gap-3 px-4 py-3 ${bgClass[item.fill]}`}
                >
                  <IconBox>
                    <Icon name={item.icon} />
                  </IconBox>
                  <IconBox>
                    <Icon name="arrow" />
                  </IconBox>
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
                  <p className="eyebrow mt-auto pt-2">{work.viewCaseStudy}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
