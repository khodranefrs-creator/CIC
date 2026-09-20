"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "#top", label: "Research", active: true },
  { href: "#mission", label: "About" },
  { href: "#approach", label: "Studies" },
  { href: "#vision", label: "Collaborate" },
  { href: "#support", label: "Support" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-hair-dark/60 bg-field-950/85 backdrop-blur-sm">
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between gap-8 px-6 md:px-10">
        <Link href="#top" className="flex shrink-0 items-center" aria-label="Quantum Clinical Research CIC homepage">
          <span className="relative block w-[200px]" aria-hidden="true">
            <Image
              src="/logo-transparent.png"
              alt=""
              width={200}
              height={98}
              priority
              className="block h-auto w-full object-contain object-left"
            />
          </span>
          <span className="sr-only">Quantum Clinical Research CIC</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={`text-[13px] leading-none transition-colors duration-300 hover:text-lumen ${
                item.active ? "border-b border-lumen pb-0.5 text-paper" : "text-mist"
              }`}
              style={{ letterSpacing: "0.02em" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#support"
          className="hidden whitespace-nowrap text-[13px] leading-none text-lumen transition-colors duration-300 hover:text-paper md:inline-flex"
          style={{ letterSpacing: "0.02em" }}
        >
          Support Our Research <span aria-hidden="true">→</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-hair-dark text-lumen lg:hidden"
        >
          <span className={`h-px w-5 bg-current transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-hair-dark bg-field-950 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-mist transition-colors hover:text-lumen"
                style={{ letterSpacing: "0.02em" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#support"
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-lumen"
              style={{ letterSpacing: "0.02em" }}
            >
              Support Our Research <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
