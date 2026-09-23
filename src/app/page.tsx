import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import Hero from "../components/Hero";
import SiteFooter from "../components/SiteFooter";
import Team from "../components/sections/Team";
import Finances from "../components/sections/Finances";
import NextStudy from "../components/sections/NextStudy";
import Collaborate from "../components/sections/Collaborate";
import Bibliography from "../components/sections/Bibliography";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import FieldBackdrop from "../components/FieldBackdrop";

export const metadata: Metadata = {
  title: "Quantum Clinical Research CIC — The Living Field",
  description:
    "An open, not-for-profit community interest company studying energetic and biophysical medicine as a whole-organism, measurable clinical science — published openly for everyone.",
};

const MISSION_STATES = [
  { n: "01", t: "Living systems", v: "Cells, rhythms, and regulatory fields read as one interdependent living whole." },
  { n: "02", t: "Replicable method", v: "Everything we test is written down, measured, and open to independent review." },
  { n: "03", t: "Open publishing", v: "Results — including null results — published openly for everyone." },
];

const RESEARCH_ROWS = [
  ["01", "Hypothesis", "Framed precisely before data collection."],
  ["02", "Protocol", "Written down, versioned, and shared before measurement."],
  ["03", "Outcome", "Results and null results published openly."],
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <section id="mission" className="border-b border-carbon bg-field-950 py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-16 lg:grid-cols-[1.6fr_1fr] lg:items-start">
              <div>
                <SectionLabel>Mission</SectionLabel>
                <h2 className="editorial mt-8 font-display text-4xl font-medium tracking-tight md:text-5xl">
                  Open science, not closed belief
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
                  Quantum Clinical Research CIC exists to bring energetic and
                  biophysical medicine into the open — studied with rigorous,
                  replicable, openly published methods, and shared with everyone.
                </p>
              </div>
              <ol className="border-t border-carbon">
                {MISSION_STATES.map((m) => (
                  <li key={m.n} className="border-b border-carbon py-6">
                    <p className="font-mono text-xs text-water">{m.n}</p>
                    <h3 className="mt-2 font-display text-xl font-medium text-paper">{m.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{m.v}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        <section id="research" className="border-b border-carbon bg-carbon/30 py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Research</SectionLabel>
              <h2 className="editorial mt-8 font-display text-4xl font-medium tracking-tight md:text-5xl">
                Measured, published, replicated
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
                Every study records its method and outcomes so findings can be
                checked, challenged, and built upon by any researcher anywhere.
              </p>
            </div>
            <ol className="mt-16 border-t border-carbon">
              {RESEARCH_ROWS.map(([n, t, d]) => (
                <li key={n} className="grid border-b border-carbon py-8 md:grid-cols-[120px_200px_1fr]">
                  <p className="font-mono text-xs text-water">{n}</p>
                  <h3 className="font-display text-xl font-medium text-paper">{t}</h3>
                  <p className="mt-2 leading-relaxed text-mist md:mt-0">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id="vision" className="border-b border-carbon bg-carbon/40 py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <SectionLabel>Vision</SectionLabel>
            <p className="mt-8 max-w-4xl font-display text-4xl font-light leading-[1.08] tracking-tight text-paper md:text-6xl">
              A field of care that belongs to{" "}
              <em className="italic text-lumen">everyone</em>.
            </p>
          </div>
        </section>
        <Team />
        <Finances />
        <NextStudy />
        <Collaborate />
        <section id="support" className="border-t border-carbon bg-carbon/40 py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <SectionLabel>Support</SectionLabel>
            <h2 className="mt-8 font-display text-4xl font-medium tracking-tight md:text-5xl">
              Help us fund open research
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              Quantum Clinical Research CIC is not-for-profit. Your support keeps
              our studies open, independent, and free to read.
            </p>
            <a
              href="mailto:hello@qcr.cic"
              className="mt-10 inline-block rounded-full bg-water px-8 py-3 font-medium text-ink transition hover:opacity-90"
            >
              Get in touch
            </a>
          </div>
        </section>
        <Bibliography />
      </main>
      <SiteFooter />
    </>
  );
}
