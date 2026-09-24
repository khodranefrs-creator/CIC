import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#F3EFE3] text-[#11110E]">
      <div className="mx-auto max-w-[92rem] px-6 pb-24 pt-24 md:px-14 md:pb-40 md:pt-36">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#8A8778]">
          Quantum Clinical Research CIC
        </p>
        <h1 className="mt-12 max-w-[16ch] font-display text-[clamp(2.6rem,9.5vw,7.5rem)] font-medium leading-[0.98] tracking-[-0.03em] text-[#11110E]">
          The whole human is the living field.
        </h1>
        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5 md:col-start-8">
            <p className="max-w-md text-[15px] leading-[1.7] text-[#4C4B42]">
              An open, not-for-profit community interest company studying
              energetic and biophysical medicine as a whole-organism, measurable
              clinical science — published openly for everyone.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
              <Link
                href="#mission"
                className="text-xs font-medium uppercase tracking-[0.22em] text-[#11110E] transition-colors hover:text-[#1AA08F]"
              >
                Mission
              </Link>
              <Link
                href="#support"
                className="text-xs font-medium uppercase tracking-[0.22em] text-[#11110E] transition-colors hover:text-[#1AA08F]"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-24 hidden items-end justify-between border-t border-[#11110E]/15 pt-5 md:flex md:mt-36">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8A8778]">
            Independent research institute
          </p>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8A8778]">
            Established &middot; Not-for-profit &middot; Published openly
          </p>
        </div>
      </div>
    </section>
  );
}
