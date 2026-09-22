import Link from "next/link";
import type { ReactNode } from "react";
import { bgClass, type Accent } from "./accents";

type ButtonProps = {
  href: string;
  children: ReactNode;
  fill?: Accent;
  className?: string;
};

function isInternal(href: string) {
  return (
    (href.startsWith("/") || href.startsWith("#")) &&
    !href.endsWith(".pdf")
  );
}

export function Button({
  href,
  children,
  fill = "clay",
  className = "",
}: ButtonProps) {
  const classes =
    `frame press eyebrow inline-flex items-center justify-center px-5 py-3 ${bgClass[fill]} ${className}`.trim();

  if (isInternal(href)) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
