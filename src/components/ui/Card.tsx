import type { ElementType, ReactNode } from "react";
import { bgClass, type Accent } from "./accents";

type CardProps = {
  children: ReactNode;
  fill?: Accent;
  className?: string;
  as?: ElementType;
  press?: boolean;
  id?: string;
};

export function Card({
  children,
  fill = "paper",
  className = "",
  as: Tag = "div",
  press = true,
  id,
}: CardProps) {
  return (
    <Tag
      id={id}
      className={`frame ${press ? "press" : ""} ${bgClass[fill]} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
