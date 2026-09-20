import Link from "next/link";
import Image from "next/image";

const FOOT_LINKS = [
  {
    group: "The field",
    links: [
      { href: "#mission", label: "Mission" },
      { href: "#research", label: "Why a living lens" },
      { href: "#vision", label: "The organisation" },
    ],
  },
  {
    group: "Research",
    links: [
      { href: "#treatments", label: "Clinical focus" },
      { href: "#study", label: "Next study" },
      { href: "#journals", label: "Journal archive" },
    ],
  },
  {
    group: "Get involved",
    links: [
      { href: "#support", label: "Support" },
      { href: "#team", label: "Our people" },
      { href: "#contact", label: "Collaborate" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-hair-dark bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="#top" className="inline-flex items-center gap-3">
              <Image
                src="/logo-v2-transparent.png"
                alt="Quantum Clinical Research CIC — The Living Field"
                width={133}
                height={100}
                className="h-auto w-[133px] max-w-none object-none object-center"
                style={{ marginLeft: "-20px", marginTop: "-28px" }}
              />
              <span className="leading-tight">
                <span className="block font-mono text-[0.625rem] tracking-[0.3em] text-mist">
                  QUANTUM CLINICAL
                </span>
                <span className="block font-serif text-sm tracking-[0.14em] text-paper">
                  RESEARCH CIC
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              A not-for-profit community interest company making whole-organism,
              biophysical clinical research open, legible and accessible to
              everyone.
            </p>
            <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-mist">
              Registered in England &amp; Wales
            </p>
            <p className="mt-1 font-mono text-[0.6875rem] text-mist">Company No. — pending</p>
          </div>

          {FOOT_LINKS.map((col) => (
            <nav key={col.group} aria-label={col.group}>
              <h3 className="lab-label text-lumen">{col.group}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-mist transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-hair-dark pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-mist">
            © {new Date().getFullYear()} Quantum Clinical Research CIC. All rights reserved.
          </p>
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.25em] text-mist">
            The living field — est. in progress
          </p>
        </div>
      </div>
    </footer>
  );
}
