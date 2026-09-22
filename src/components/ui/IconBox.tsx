import type { ReactNode } from "react";

type IconBoxProps = {
  children: ReactNode;
  className?: string;
  label?: string;
};

export function IconBox({ children, className = "", label }: IconBoxProps) {
  return (
    <span
      className={`frame-flat inline-flex size-10 shrink-0 items-center justify-center bg-paper ${className}`.trim()}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      {children}
    </span>
  );
}
