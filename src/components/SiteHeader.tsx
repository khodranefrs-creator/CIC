"use client";

import { useState } from "react";
import Link from "next/link";

const NAV = [
  { href: "#top", label: "Research", active: true },
  { href: "#mission", label: "About" },
  { href: "#approach", label: "Studies" },
  { href: "#vision", label: "Collaborate" },
  { href: "#support", label: "Support" },
];

function FieldMark() {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
      className="h-11 w-11 text-lumen"
    >
      <rect
        x="0.5"
        y="0.5"
        width="43"
        height="43"
        stroke="currentColor"
        strokeOpacity="0.4"
      />
      <rect
        x="0.5"
        y="0.5"
        width="43"
        height="43"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeDasharray="1 5"
      />
      <path
        d="M8 28 C 14 16, 22 38, 36 16"
        stroke="currentColor"
        strokeOpacity="0.9"
      />
      <path
        d="M8 20 C 16 34, 26 10, 36 26"
        stroke="currentColor"
        strokeOpacity="0.3"
      />
      <circle cx="8" cy="28" r="1.6" fill="currentColor" />
      <circle cx="36" cy="16" r="1.6" fill="currentColor" />
      <circle cx="22" cy="27" r="count" fill="currentColor" />
      <circle cx="14" cy="18" r="count" fill="currentColor" stroke="currentColor" strokeOpacity="0.4" />
      <circle cx="29" cy="14" r="count" fill="currentColor" stroke="currentColor" strokeOpacity="0.4" />
    </svg>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hair-dark/70 bg-field-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-[84px] max-w-[90rem] items-center justify-between gap-10 px-6 md:px-12">
        <Link
          href="#top"
          className="flex shrink-0 items-center gap-4"
          aria-label="Quantum Clinical Research CIC — the Living Field homepage"
        >
          <FieldMark />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[19px] font-medium tracking-tight text-paper">
              Quantum Clinical Research
            </span>
            <span className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-lumen">
              CIC · community interest company
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-9 lg:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={`font-mono text-[12px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                item.active
                  ? "text-lumen"
                  : "text-mist hover:text-paper"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#support"
          className="hidden shrink-0 items-center border border-hair-dark px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:border-lumen hover:text-lumen md:inline-flex"
        >
          Support our research <span aria-hidden="true">→</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-hair-dark text-lumen lg:hidden"
        >
          <span className={`h-px w-5 bg-current transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-hair-dark bg-field-950 lg:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-6">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 font-mono text-[13px] uppercase tracking-[0.16em] ${
                  item.active ? "text-lumen" : "text-mist"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#support"
              onClick={() => setOpen(false)}
              className="py-3 font-mono text-[13px] uppercase tracking-[0.16em] text-paper"
            >
              Support our research <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
