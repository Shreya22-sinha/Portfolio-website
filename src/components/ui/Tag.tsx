import type { ReactNode } from "react";
import { bgClass, type Accent } from "./accents";

type TagProps = {
  children: ReactNode;
  fill?: Accent;
  className?: string;
  press?: boolean;
};

export function Tag({
  children,
  fill = "paper",
  className = "",
  press = false,
}: TagProps) {
  return (
    <span
      className={`frame ${press ? "press" : ""} eyebrow inline-flex items-center px-3 py-1.5 ${bgClass[fill]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
