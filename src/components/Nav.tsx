"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import { nav, site } from "@/content/content";

export function Nav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const media = window.matchMedia("(min-width: 768px)");
    const onViewport = () => {
      if (media.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    media.addEventListener("change", onViewport);
    return () => {
      window.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onViewport);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-paper nav-rule">
      <nav
        className="section-inner relative z-50 flex h-16 items-center justify-between px-5 md:grid md:h-[4.25rem] md:grid-cols-[auto_1fr_auto] md:px-8"
        aria-label={nav.menuLabel}
      >
        <Link
          href="/"
          className="frame press relative z-10 inline-flex size-10 items-center justify-center bg-paper font-display text-sm tracking-wide"
        >
          {site.monogram}
        </Link>

        <ul className="hidden items-center justify-center gap-1 md:flex">
          {nav.links.map((link, index) => (
            <li key={link.href} className="flex items-center">
              {index > 0 ? (
                <span className="mx-3 text-ink" aria-hidden="true">
                  ·
                </span>
              ) : null}
              <Link
                href={link.href}
                className="eyebrow px-1 py-2 text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <span className="hidden size-10 md:block" aria-hidden="true" />

        <button
          type="button"
          className="frame press inline-flex size-10 items-center justify-center bg-paper md:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? nav.closeMenu : nav.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open ? (
        <div
          id={panelId}
          className="fixed inset-0 z-30 flex flex-col bg-paper px-5 pt-24 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={nav.menuLabel}
        >
          <ul className="flex flex-col gap-2">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display block py-3 text-4xl leading-none"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
