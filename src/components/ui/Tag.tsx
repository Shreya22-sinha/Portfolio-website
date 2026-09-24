import Link from "next/link";
import type { ReactNode } from "react";
import { bgClass, type Accent } from "./accents";

type TagProps = {
  children: ReactNode;
  fill?: Accent;
  className?: string;
  press?: boolean;
  href?: string;
};

function isInternal(href: string) {
  return (
    (href.startsWith("/") || href.startsWith("#")) && !href.endsWith(".pdf")
  );
}

export function Tag({
  children,
  fill = "paper",
  className = "",
  press = false,
  href,
}: TagProps) {
  const classes =
    `frame ${press ? "press" : ""} eyebrow inline-flex items-center px-3 py-1.5 ${href ? "cursor-pointer" : ""} ${bgClass[fill]} ${className}`.trim();

  if (href && isInternal(href)) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <span className={classes}>{children}</span>;
}
