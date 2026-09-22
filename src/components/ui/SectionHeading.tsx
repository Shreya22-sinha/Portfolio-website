import type { Accent } from "./accents";

type SectionHeadingProps = {
  children: string;
  accent?: Accent;
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
};

export function SectionHeading({
  children,
  accent = "clay",
  as: Tag = "h2",
  className = "",
  id,
}: SectionHeadingProps) {
  const parts = children.trim().split(/\s+/);
  const last = parts.at(-1) ?? children;
  const rest = parts.slice(0, -1).join(" ");

  return (
    <Tag
      id={id}
      className={`font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] tracking-tight ${className}`.trim()}
    >
      {rest ? `${rest} ` : null}
      <span className="underline-bar" data-accent={accent}>
        {last}
      </span>
    </Tag>
  );
}
