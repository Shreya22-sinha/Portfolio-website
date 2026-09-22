import type { ReactNode } from "react";
import type { IconName } from "@/content/content";

type IconProps = {
  name: IconName;
  className?: string;
};

function Svg({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={`size-5 ${className}`.trim()}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function Icon({ name, className }: IconProps) {
  switch (name) {
    case "payments":
      return (
        <Svg className={className}>
          <rect x="3" y="6" width="18" height="12" />
          <path d="M3 10h18" />
          <path d="M7 15h4" />
        </Svg>
      );
    case "ml":
      return (
        <Svg className={className}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M8 7l3 3M16 7l-3 3M8 17l3-3M16 17l-3-3" />
        </Svg>
      );
    case "research":
      return (
        <Svg className={className}>
          <path d="M7 3h8l4 4v14H7z" />
          <path d="M15 3v4h4" />
          <path d="M10 12h6M10 16h6" />
        </Svg>
      );
    case "teaching":
      return (
        <Svg className={className}>
          <path d="M4 19V7l8-3 8 3v12" />
          <path d="M8 10v9" />
          <path d="M4 19h16" />
          <path d="M12 8v11" />
        </Svg>
      );
    case "fraud":
      return (
        <Svg className={className}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
          <path d="M9 12l2 2 4-4" />
        </Svg>
      );
    case "traffic":
      return (
        <Svg className={className}>
          <rect x="8" y="2" width="8" height="16" />
          <circle cx="12" cy="6" r="1.4" />
          <circle cx="12" cy="10" r="1.4" />
          <circle cx="12" cy="14" r="1.4" />
          <path d="M10 18v4M14 18v4" />
        </Svg>
      );
    case "integrity":
      return (
        <Svg className={className}>
          <path d="M4 16V8h6l2 3h8v5" />
          <path d="M4 16h16" />
          <path d="M8 16v3M16 16v3" />
        </Svg>
      );
    case "arrow":
      return (
        <Svg className={className}>
          <path d="M7 17L17 7" />
          <path d="M9 7h8v8" />
        </Svg>
      );
    default:
      return null;
  }
}

export function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`size-6 ${className}`.trim()}
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`size-6 ${className}`.trim()}
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
