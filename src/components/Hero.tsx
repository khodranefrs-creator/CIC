import Reveal from "./Reveal";
import FieldBackdrop from "./FieldBackdrop";
import HeroField from "./HeroField";

const PRINCIPLES = [
  { n: "01", t: "Whole organism — no subsystems", d: "We study the person as one integrated biophysical and bioelectric system." },
  { n: "02", t: "Open everything", d: "Protocols, data and findings published openly, for the benefit of all." },
  { n: "03", t: "No private profit", d: "A not-for-profit community interest company; surplus funds the research." },
  { n: "04", t: "One living hypothesis", d: "The whole person is the living field we work to understand." },
];

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-field-950"
    >
      <FieldBackdrop />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 md:px-10 md:pt-44 lg:grid lg:min-h-[680px] lg:grid-cols-[42fr_58fr] lg:items-center lg:gap-16 lg:pb-0 lg:pt-24">
        <div className="relative z-10">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-air">
              <span className="inline-block h-2 w-2 rounded-full bg-lumen/80" />
              Quantum Clinical Research CIC — est. 2023
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1
              id="hero-title"
              className="mt-10 font-display text-[2.75rem] font-light leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-[4.5rem]"
            >
              The whole human is the <em className="font-serif italic text-lumen">living field</em>.
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist">
              Quantum Clinical Research CIC is an open, not-for-profit institute
              for whole-organism, biophysical and bioelectric clinical research.
              We study the body as one integrated living system — and we publish
              everything we learn openly, for the benefit of all.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 font-mono text-[12px] uppercase tracking-[0.25em] text-air">
              <a href="#mission" className="border-b border-lumen/40 pb-1 text-lumen transition-colors hover:border-lumen">
                Why this exists
              </a>
              <a href="#support" className="border-b border-air/30 pb-1 text-paper transition-colors hover:border-lumen hover:text-lumen">
                Support the work
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative z-10 mt-16 lg:mt-0">
          <div className="relative aspect-[4/3] w-full lg:h-[560px] lg:aspect-auto">
            <HeroField />
            <div className="pointer-events-none absolute inset-0 flex items-end justify-between px-2 pb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-air/60">
              <span>Field observation</span>
              <span>Living system</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 border-t border-white/5">
        <div className="mx-auto grid max-w-7xl gap-px px-6 py-0 md:px-10 md:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p) => (
            <div key={p.n} className="border-r border-white/5 py-8 pr-8 last:border-r-0">
              <p className="font-mono text-[11px] tracking-[0.2em] text-air">{p.n}</p>
              <h3 className="mt-4 font-display text-lg font-medium text-paper">{p.t}</h3>
              <p className="mt-3 pr-4 text-sm leading-relaxed text-mist">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
