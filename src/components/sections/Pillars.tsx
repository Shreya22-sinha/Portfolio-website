import { pillars, pillarsHeading } from "@/content/content";
import { Icon } from "@/components/icons";
import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";

export function Pillars() {
  return (
    <section className="section flush-top" aria-labelledby="pillars-heading">
      <div className="section-inner">
        <h2 id="pillars-heading" className="sr-only">
          {pillarsHeading}
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={index === 2 ? "md:-rotate-[1deg]" : undefined}
            >
              <Card
                fill={pillar.fill}
                as="article"
                className="flex h-full flex-col gap-4 p-5"
              >
                <IconBox>
                  <Icon name={pillar.icon} />
                </IconBox>
                <h3 className="eyebrow">{pillar.title}</h3>
                <p className="text-[0.95rem] leading-relaxed">{pillar.body}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
