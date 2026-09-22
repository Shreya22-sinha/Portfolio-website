import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { hero, site } from "@/content/content";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

function hasPortraitFile() {
  return existsSync(path.join(process.cwd(), "public", "portrait.jpg"));
}

export function Hero() {
  const showPortrait = hasPortraitFile();

  return (
    <section id="hero" className="section" aria-labelledby="hero-name">
      <div className="section-inner grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div className="min-w-0">
          <ul className="mb-8 flex w-full min-w-0 flex-wrap gap-x-3 gap-y-3.5">
            {hero.tags.map((tag, index) => (
              <li
                key={tag.label}
                className={`shrink-0 ${index === 0 ? "md:-rotate-[1.2deg]" : ""}`.trim()}
              >
                <Tag fill={tag.fill} press>
                  {tag.label}
                </Tag>
              </li>
            ))}
          </ul>

          <h1
            id="hero-name"
            className="font-display text-[clamp(3rem,9vw,7rem)] leading-[0.9] tracking-[-0.04em] uppercase"
          >
            {hero.name}
          </h1>

          <p className="mt-6 font-sans text-sm font-bold uppercase leading-snug tracking-[0.04em] md:text-base">
            {hero.roleLines[0]}
            <br />
            {hero.roleLines[1]}
          </p>

          <p className="prose-body mt-6 text-base font-normal md:text-[1.05rem]">
            {hero.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href} fill="clay">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} fill="paper">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[260px] pr-4 pb-4 md:max-w-[340px]">
          <div className="md:rotate-[1.3deg]">
            <div className="relative">
              <div
                className="frame absolute inset-0 translate-x-3 translate-y-3 bg-teal"
                aria-hidden="true"
              />
              <div className="frame press relative overflow-hidden bg-paper">
                {showPortrait ? (
                  <Image
                    src={site.portrait.src}
                    alt={site.portrait.alt}
                    width={340}
                    height={425}
                    quality={90}
                    priority
                    sizes="(max-width: 768px) 260px, 340px"
                    className="aspect-[4/5] h-auto w-full object-cover object-[center_30%]"
                  />
                ) : (
                  <div
                    className="flex aspect-[4/5] items-center justify-center"
                    role="img"
                    aria-label={site.portrait.alt}
                  >
                    <span className="eyebrow">{site.portrait.fallbackLabel}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
