import type { ElementType, ReactNode } from "react";
import { bgClass, type Accent } from "./accents";

type CardProps = {
  children: ReactNode;
  fill?: Accent;
  className?: string;
  as?: ElementType;
  press?: boolean;
};

export function Card({
  children,
  fill = "paper",
  className = "",
  as: Tag = "div",
  press = true,
}: CardProps) {
  return (
    <Tag
      className={`frame ${press ? "press" : ""} ${bgClass[fill]} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
