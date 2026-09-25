"use client";

import { useEffect, useRef, useState } from "react";
import { contact } from "@/content/content";

export function EmailContact() {
  const { label, address, href, linkAria, copyLabel, copiedLabel, copyAria } =
    contact.email;
  const at = address.indexOf("@");
  const local = at === -1 ? address : address.slice(0, at);
  const domain = at === -1 ? "" : address.slice(at);
  const [copied, setCopied] = useState(false);
  const addressRef = useRef<HTMLAnchorElement>(null);
  const copiedTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copiedTimer.current !== null) {
        window.clearTimeout(copiedTimer.current);
      }
    };
  }, []);

  function flashCopied() {
    setCopied(true);
    if (copiedTimer.current !== null) {
      window.clearTimeout(copiedTimer.current);
    }
    copiedTimer.current = window.setTimeout(() => {
      setCopied(false);
      copiedTimer.current = null;
    }, 2000);
  }

  function selectAddress() {
    const node = addressRef.current;
    if (!node) {
      return;
    }
    node.focus();
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection?.removeAllRanges();
    selection?.addRange(range);
  }

  function copyWithTextarea() {
    const textarea = document.createElement("textarea");
    textarea.value = address;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    if (!ok) {
      throw new Error("execCommand copy failed");
    }
  }

  async function copyAddress() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(address);
      } else {
        copyWithTextarea();
      }
      flashCopied();
    } catch {
      try {
        copyWithTextarea();
        flashCopied();
      } catch {
        selectAddress();
      }
    }
  }

  return (
    <div className="frame press flex h-full min-w-0 items-center justify-between gap-3 bg-paper px-4 py-4">
      <div className="min-w-0 flex-1">
        <p className="eyebrow">{label}</p>
        <a
          ref={addressRef}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={linkAria}
          className="mt-1 block text-xs font-semibold leading-snug [overflow-wrap:anywhere]"
        >
          {local}
          <wbr />
          {domain}
        </a>
      </div>
      <button
        type="button"
        aria-label={copyAria}
        className="eyebrow shrink-0"
        onClick={copyAddress}
      >
        {copied ? copiedLabel : copyLabel}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? copiedLabel : ""}
      </span>
    </div>
  );
}
