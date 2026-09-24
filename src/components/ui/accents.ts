import type { Accent } from "@/content/content";

export type { Accent };

export const bgClass: Record<Accent, string> = {
  paper: "bg-paper",
  clay: "bg-clay",
  teal: "bg-teal",
  ochre: "bg-ochre",
  sage: "bg-sage",
};

export const textClass: Record<Accent, string> = {
  paper: "text-paper",
  clay: "text-clay",
  teal: "text-teal",
  ochre: "text-ochre",
  sage: "text-sage",
};

export const groupHoverTextClass: Record<Accent, string> = {
  paper: "group-hover:text-paper",
  clay: "group-hover:text-clay",
  teal: "group-hover:text-teal",
  ochre: "group-hover:text-ochre",
  sage: "group-hover:text-sage",
};
