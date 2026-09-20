"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "#top", label: "The field" },
  { href: "#mission", label: "Why this exists" },
  { href: "#approach", label: "The lens" },
  { href: "#treatments", label: "Conditions" },
  { href: "#research", label: "Open research" },
  { href: "#vision", label: "Vision" },
  { href: "#team", label: "Team" },
  { href: "#finances", label: "Transparency" },
  { href: "#study", label: "Next study" },
  { href: "#support", label: "Support us" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-hair-dark/60 bg-field-950/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:h-20 md:px-8">
        <Link href="#top" className="flex items-center gap-3" aria-label="Quantum Clinical Research CIC homepage">
          <Image
            src="/logo-transparent.png"
            alt="Quantum Clinical Research CIC — The Living Field"
            width={130}
            height={98}
            priority
            className="h-auto w-[130px] max-w-none object-none object-center"
            style={{ marginLeft: "-18px", marginTop: "-27px" }}
          />
          <span className="hidden sm:block">
            <span className="lab-label text-mist">Quantum Clinical</span>
            <span className="block font-serif text-sm tracking-wide text-paper">
              Research
              <span className="text-lumen"> · </span>CIC
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="lab-label text-mist transition-colors duration-300 hover:text-lumen"
            >
              {item.label}
            </Link>
          ))}
        </nav>

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
                className="lab-label py-3 text-mist transition-colors hover:text-lumen"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
