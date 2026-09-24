import Link from "next/link";

const NAV = [
  { href: "#mission", label: "Mission" },
  { href: "#approach", label: "Approach" },
  { href: "#treatments", label: "Treatments" },
  { href: "#research", label: "Research" },
  { href: "#support", label: "Support" },
];

export default function SiteHeader() {
  return (
    <header className="relative z-20 bg-[#F3EFE3]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-6 md:h-[72px] md:px-10">
        <Link
          href="#home"
          className="flex flex-col justify-center leading-none"
        >
          <span className="font-display text-[15px] font-medium tracking-tight text-[#11110E] md:text-base">
            Quantum Clinical Research CIC
          </span>
          <span className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#6B6B61]">
            Independent · Not-for-profit
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-9 md:flex"
        >
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#3A3A33] transition-colors hover:text-[#1AA08F]"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#support"
          className="hidden border-b border-[#11110E]/40 pb-0.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#11110E] transition-colors hover:border-[#1AA08F] hover:text-[#1AA08F] md:inline-block"
        >
          Support
        </Link>
        <Link
          href="#support"
          className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#11110E] md:hidden"
        >
          Support
        </Link>
      </div>
    </header>
  );
}
