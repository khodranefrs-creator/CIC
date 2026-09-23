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
  title: "Quantum Clinical Research CIC",
  description:
    "An open, not-for-profit community interest company studying energetic and biophysical medicine as a whole-organism, measurable clinical science â€” published openly for everyone.",
};

const MISSION_INDEX = [
  { n: "01", k: "Living systems", v: "Cells, rhythms, and regulatory fields understood as interdependent wholes." },
  { n: "02", k: "Replicable method", v: "Every protocol written down, measured, and shared for independent review." },
  { n: "03", k: "Open publishing", v: "Results â€” including null results â€” published openly for everyone." },
];

const TREATMENTS_INDEX = [
  { n: "01", k: "Acupuncture", v: "Tracing the living field along classical meridians, measured not assumed." },
  { n: "02", k: "Homeopathy", v: "Ultra-diluted preparations studied for replicable signal, not belief." },
  { n: "03", k: "Bioenergetics", v: "Energetic modalities logged with the same rigour as any clinical tool." },
  { n: "04", k: "Herbal medicine", v: "Whole-plant preparations, standardised and published for review." },
];

const RESEARCH_PATH = [
  { n: "05", k: "Hypothesis", v: "Framed precisely before data collection, so the question is never moved after the fact." },
  { n: "06", k: "Protocol", v: "Written down, peer-reviewed, versioned â€” open before measurement begins." },
  { n: "07", k: "Outcome", v: "Results and null results published openly for independent review." },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <section
          id="mission"
          className="border-b border-carbon bg-field-950 py-28"
          aria-labelledby="mission-title"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <Reveal>
                  <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-air">
                    Mission
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <h1
                    id="mission-title"
                    className="editorial mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-paper md:text-6xl"
                  >
                    Whole-organism medicine,{" "}
                    <em className="italic text-lumen">studied openly</em>
                  </h1>
                </Reveal>
                <Reveal delay={240}>
                  <p className="mt-10 max-w-2xl text-lg leading-relaxed text-mist">
                    Quantum Clinical Research CIC exists to bring energetic
                    and biophysical medicine into the open â€” studied with
                    rigorous, replicable, openly published methods. We study
                    the body as a living field, never a machine of isolated
                    parts.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={320}>
                <ol className="border-t border-carbon">
                  {MISSION_INDEX.map((m) => (
                    <li
                      key={m.n}
                      className="flex gap-8 border-b border-carbon py-8"
                    >
                      <span className="font-mono text-xs leading-6 text-lumen">
                        {m.n}
                      </span>
                      <div>
                        <h3 className="text-xl font-medium text-paper">{m.k}</h3>
                        <p className="mt-2 max-w-sm leading-relaxed text-mist">{m.v}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>
        <section
          id="approach"
          aria-labelledby="approach-title"
          className="relative overflow-hidden border-b border-carbon bg-field-950 py-28"
        >
          <FieldBackdrop />
          <div className="relative mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <Reveal>
                  <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-air">
                    Approach
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <h2
                    id="approach-title"
                    className="editorial font-display text-4xl font-medium leading-tight tracking-tight text-paper md:text-5xl"
                  >
                    Whole-organism coherence
                  </h2>
                </Reveal>
                <Reveal delay={240}>
                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist">
                    We study the person as one living field â€” cells, rhythms,
                    and environment read as one interdependent whole. No
                    subsystem is measured apart from the whole that carries
                    it.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={320}>
                <div
                  className="border-t border-carbon"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 400 340"
                    className="h-auto w-full text-lumen"
                    role="img"
                    aria-label="Abstract whole-organism coherence: concentric biological rhythms around a single living field"
                  >
                    {[40, 64, 88, 112, 136].map((r) => (
                      <circle
                        key={r}
                        cx="200"
                        cy="170"
                        r={r}
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity={0.28}
                        strokeWidth="0.6"
                        strokeDasharray={r % 3 === 0 ? "3 2" : "4 1"}
                      />
                    ))}
                    {[Math.cos, Math.sin].map(() => null)}
                    {[
                      [0, Math.PI / 3, 2 * Math.PI / 3, Math.PI, 4 * Math.PI / 3, 5 * Math.PI / 3],
                    ].map(() => null)}
                    <circle cx="200" cy="170" r="10" fill="currentColor" fillOpacity="0.9" />
                    <circle cx="200" cy="170" r="22" fill="none" stroke="currentColor" strokeWidth="0.6" />
                    <g stroke="currentColor" strokeOpacity="0.45" strokeWidth="0.6" fill="none">
                      <path d="M200 60 C 210 90, 232 96, 224 122" />
                      <path d="M336 96 C 320 120, 304 150, 288 176" />
                      <path d="M200 82 C 176 100, 150 130, 118 146" />
                      <path d="M300 246 C 280 240, 258 222, 240 208" />
                      <path d="M96 210 C 124 224, 148 240, 168 258" />
                    </g>
                    {[
                      [62, 96, "rhythm"], [318, 120, "field"], [104, 200, "cell"], [286, 258, "trace"],
                    ].map(([x, y, t]) => (
                      <g key={t}>
                        <circle cx={x} cy={y} r="2.4" fill="currentColor" fillOpacity="0.7" />
                        <text x={Number(x) + 10} y={Number(y) + 5} fontSize="10" fill="currentColor" fillOpacity="0.6" fontFamily="monospace">
                          {t}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
        <section
          id="treatments"
          aria-labelledby="treatments-title"
          className="border-b border-carbon py-24"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-air">
                Treatments
              </p>
              <h2
                id="treatments-title"
                className="mt-8 font-display text-4xl font-medium tracking-tight md:text-5xl"
              >
                Practices studied, not promised
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
                We study the energetic and biophysical practices people
                actually use â€” measuring what happens, and publishing the
                record either way.
              </p>
            </div>
            <div className="mt-16 max-w-4xl">
              {TREATMENTS_INDEX.map((t) => (
                <div
                  key={t.n}
                  className="flex flex-col gap-2 border-b border-carbon py-8 md:flex-row md:items-baseline md:gap-10"
                >
                  <p className="w-12 shrink-0 font-mono text-sm text-lumen">{t.n}</p>
                  <h3 className="w-56 shrink-0 text-xl font-medium text-paper">{t.k}</h3>
                  <p className="leading-relaxed text-mist">{t.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="research"
          className="border-b border-carbon py-24"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-air">
                Research
              </p>
              <h2 className="mt-8 font-display text-4xl font-medium tracking-tight md:text-5xl">
                Measured, published, replicated
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
                Every study records its method and outcomes so findings can
                be checked, challenged, and built upon by any researcher
                anywhere.
              </p>
            </div>
            <div className="mt-16 max-w-4xl border-t border-carbon">
              {RESEARCH_PATH.map((r) => (
                <div
                  key={r.k}
                  className="flex flex-col gap-2 border-b border-carbon py-8 md:flex-row md:items-baseline md:gap-10"
                >
                  <p className="w-12 shrink-0 font-mono text-sm text-lumen">{r.n}</p>
                  <h3 className="w-56 shrink-0 text-xl font-medium text-paper">{r.k}</h3>
                  <p className="leading-relaxed text-mist">{r.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="vision"
          className="border-b border-carbon bg-field-950 py-28"
          aria-labelledby="vision-title"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="relative">
              <div className="brutalist-frame border border-carbon p-6 md:p-10">
                <Reveal>
                  <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-air">
                    Vision
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <h2
                    id="vision-title"
                    className="editorial max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight text-paper md:text-6xl"
                  >
                    A field of care that belongs to{" "}
                    <em className="italic text-lumen">everyone</em>
                  </h2>
                </Reveal>
                <Reveal delay={240}>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist">
                    We grow the evidence for energetic and biophysical
                    medicine openly â€” funded openly, held open, and published
                    for the benefit of all.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        <Team />
        <Finances />
        <NextStudy />
        <Collaborate />
        <section
          id="support"
          className="border-b border-carbon bg-field-950 py-28"
          aria-labelledby="support-title"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="relative">
              <div className="brutalist-frame border border-carbon p-6 md:p-10">
                <Reveal>
                  <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-air">
                    Support
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <h2
                    id="support-title"
                    className="editorial max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight text-paper md:text-5xl"
                  >
                    Help fund open research
                  </h2>
                </Reveal>
                <Reveal delay={240}>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist">
                    QCR CIC is not-for-profit. Your support keeps our studies
                    open, independent, and free to read â€” for everyone.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        <Bibliography />
      </main>
      <SiteFooter />
    </>
  );
}



