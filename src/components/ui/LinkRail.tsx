import { work, type WorkLink } from "@/content/content";
import { bgClass, type Accent } from "./accents";

type LinkRailProps = {
  links: WorkLink[];
  accent: Accent;
  orientation?: "stack" | "row";
};

export function LinkRail({
  links,
  accent,
  orientation = "stack",
}: LinkRailProps) {
  if (links.length === 0) {
    return null;
  }

  const listClass =
    orientation === "row"
      ? "flex flex-wrap gap-x-3 gap-y-3.5 pr-1.5 pb-1.5"
      : "flex flex-col gap-3 pr-1.5 pb-1.5";

  return (
    <div>
      <p className="eyebrow mb-3">{work.linksLabel}</p>
      <ul className={listClass}>
        {links.map((link) => (
          <li key={link.label} className="min-w-0">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} (${work.linkNewTab})`}
              className={`frame press inline-flex items-center gap-2 px-3 py-2 font-sans text-xs font-extrabold tracking-[0.05em] uppercase ${
                orientation === "stack" ? "w-full justify-between" : ""
              } ${link.primary ? bgClass[accent] : "bg-paper"}`}
            >
              <span>{link.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
