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

      <div className="relative mx-auto max-w-7xl px-5 pt-32 md:px-8 md:pt-40 lg:grid lg:grid-cols-[45fr_55fr] lg:items-center lg:gap-12 lg:px-10 lg:pt-0 lg:min-h-[660px]">
        <div className="py-16 lg:py-24">
          <Reveal>
            <p className="lab-label inline-flex items-center gap-3 text-lumen">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-lumen" />
              A not-for-profit community interest company
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1
              id="hero-title"
              className="editorial mt-8 max-w-2xl text-5xl leading-[1.02] tracking-tight text-paper sm:text-[3.75rem] lg:text-[4.4rem]"
            >
              The whole human is the{" "}
              <em className="italic text-lumen">living field</em>.
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="editorial mt-8 max-w-xl text-lg leading-relaxed text-mist md:text-xl">
              Quantum Clinical Research CIC is an open, not-for-profit institute
              for whole-organism, biophysical and bioelectric clinical research.
              We study the body as one integrated living system — and we publish
              everything we learn openly, for the benefit of all.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#mission"
                className="rounded-full bg-core px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-core-deep"
              >
                Why this exists
              </a>
              <a
                href="#support"
                className="rounded-full border border-core px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-core transition-colors duration-300 hover:bg-core hover:text-paper"
              >
                Support the work
              </a>
            </div>
          </Reveal>

          <Reveal delay={440}>
            <ol className="mt-20 divide-y divide-hair-dark/40 border-y border-hair-dark/40">
              {PRINCIPLES.map((p) => (
                <li key={p.n} className="py-5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-lumen/60">{p.n}</span>
                    <div>
                      <h2 className="font-serif text-lg tracking-wide text-paper">{p.t}</h2>
                      <p className="mt-1 max-w-sm text-sm leading-relaxed text-mist">{p.d}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:flex lg:justify-end">
          <div className="relative w-full max-w-none lg:h-[560px] lg:w-auto lg:flex-1">
            <HeroField />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
