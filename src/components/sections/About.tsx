import { about } from "@/content/content";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function About() {
  const { education, npst, research, toolkit } = about.columns;

  return (
    <section id={about.id} className="section" aria-labelledby="about-heading">
      <div className="section-inner">
        <SectionHeading id="about-heading" accent="clay" className="mb-10">
          {about.heading}
        </SectionHeading>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Card fill={education.fill} press={false} className="p-5">
            <h3 className="eyebrow mb-4">{education.heading}</h3>
            <ul className="flex flex-col gap-3">
              {education.items.map((item) => (
                <li key={item.degree} className="frame-flat bg-paper p-4">
                  <p className="font-display text-xl leading-none">{item.degree}</p>
                  <p className="mt-2 text-sm font-medium">{item.school}</p>
                  <p className="mt-1 text-sm">
                    {item.years} · {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </Card>

          <Card fill={npst.fill} press={false} className="p-5">
            <h3 className="eyebrow mb-4">{npst.heading}</h3>
            <ul className="flex flex-col gap-3">
              {npst.items.map((item) => (
                <li key={item} className="frame-flat bg-paper p-4">
                  <p className="text-sm leading-snug">{item}</p>
                </li>
              ))}
            </ul>
          </Card>

          <Card fill={research.fill} press={false} className="p-5" as="div">
            <div id={research.id} className="anchor-target">
              <h3 className="eyebrow mb-4">{research.heading}</h3>
              <ul className="flex flex-col gap-3">
                {research.items.map((item) => (
                  <li key={item.title} className="frame-flat bg-paper p-4">
                    <p className="text-sm font-medium leading-snug">{item.title}</p>
                    <p className="mt-2 text-sm">{item.note}</p>
                    <p className="mt-2 text-sm">{item.authors}</p>
                    <p className="mt-2 text-sm">
                      {item.venue}
                      <span className="mx-2" aria-hidden="true">
                        ·
                      </span>
                      <span className="eyebrow inline">{item.status}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <Card fill={toolkit.fill} press={false} className="p-5">
            <h3 className="eyebrow mb-4">{toolkit.heading}</h3>
            <ul className="flex flex-wrap gap-2">
              {toolkit.items.map((item) => (
                <li key={item}>
                  <Tag fill="paper">{item}</Tag>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
