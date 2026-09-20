import Reveal from "./Reveal";
import FieldBackdrop from "./FieldBackdrop";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-field-950"
    >
      <FieldBackdrop />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">
        <Reveal>
          <p className="lab-label inline-flex items-center gap-3 text-lumen">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-lumen" />
            A not-for-profit community interest company
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1
            id="hero-title"
            className="editorial mt-8 max-w-4xl text-4xl leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl"
          >
            The whole human is the{" "}
            <em className="italic text-lumen">living field</em>.
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="editorial mt-8 max-w-2xl text-lg leading-relaxed text-mist md:text-xl">
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
              className="rounded-full border border-core text-core transition-colors duration-300 hover:bg-core hover:text-paper"
              style={{ padding: "1rem 1.75rem", fontFamily: "var(--font-plex), monospace", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
            >
              Support the work
            </a>
          </div>
        </Reveal>

        <Reveal delay={440}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-hair-dark bg-hair-dark md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-field-950 p-6 md:p-8">
                <dd className="font-mono text-3xl text-lumen">{s.value}</dd>
                <dd className="mt-2 text-sm text-mist">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

const stats = [
  { value: "100%", label: "of surplus funds the research" },
  { value: "Open", label: "protocols, data and findings" },
  { value: "0", label: "shareholders · no private profit" },
  { value: "1", label: "living hypothesis · whole person" },
];
