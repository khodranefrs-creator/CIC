import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import Hero from "../components/Hero";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Quantum Clinical Research CIC — The Living Field",
  description:
    "An open, not-for-profit community interest company studying energetic and biophysical medicine as a whole-organism, measurable clinical science — published openly for everyone.",
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <section
          id="mission"
          className="border-b border-carbon bg-carbon/40 py-24"
        >
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-air">
              Mission
            </p>
            <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
              Open science, not closed belief
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              Quantum Clinical Research CIC exists to bring energetic and
              biophysical medicine into the open — studied with rigorous,
              replicable, openly published methods, and shared with everyone.
            </p>
          </div>
        </section>
        <section
          id="approach"
          className="border-b border-carbon py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-air">
                Approach
              </p>
              <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
                Whole-organism coherence
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-mist">
                We study the body as a living field — cells, rhythms, and
                environment read as one interdependent whole, never as a
                machine of isolated parts.
              </p>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {[
                ["01", "Living systems", "Cells, rhythms, and regulatory fields understood as interdependent wholes."],
                ["02", "Replicable method", "Every protocol written down, measured, and shared for independent review."],
                ["03", "Open publishing", "Results — including null results — published openly for everyone."],
              ].map(([n, t, d]) => (
                <div
                  key={n}
                  className="rounded-2xl border border-carbon bg-carbon/30 p-8"
                >
                  <p className="text-sm font-medium text-water">{n}</p>
                  <h3 className="mt-3 text-xl font-medium">{t}</h3>
                  <p className="mt-3 leading-relaxed text-mist">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="treatments"
          className="border-b border-carbon bg-carbon/40 py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-air">
                Treatments
              </p>
              <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
                Practices studied, not promised
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-mist">
                We study the energetic and biophysical practices people
                actually use — measuring what happens, and publishing the
                record either way.
              </p>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {[
                ["Acupuncture", "Tracing the living field along classical meridians, measured not assumed."],
                ["Homeopathy", "Ultra-diluted preparations studied for replicable signal, not belief."],
                ["Bioenergetics", "Energetic modalities logged with the same rigour as any clinical tool."],
                ["Herbal medicine", "Whole-plant preparations, standardised and published for review."],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="rounded-2xl border border-carbon bg-carbon/30 p-8"
                >
                  <h3 className="text-xl font-medium">{t}</h3>
                  <p className="mt-3 leading-relaxed text-mist">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="research" className="border-b border-carbon py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-air">
                Research
              </p>
              <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
                Measured, published, replicated
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-mist">
                Every study records its method and outcomes so findings can be
                checked, challenged, and built upon by any researcher anywhere.
              </p>
            </div>
            <div className="mt-16 overflow-hidden rounded-2xl border border-carbon bg-carbon/30">
              <div className="grid divide-y divide-carbon md:grid-cols-3 md:divide-x md:divide-y-0">
                {[
                  ["Hypothesis", "Framed precisely before data collection."],
                  ["Protocol", "Written down, peer-reviewed, versioned."],
                  ["Outcome", "Results and null results published openly."],
                ].map(([t, d]) => (
                  <div key={t} className="p-8">
                    <p className="text-4xl font-light text-water">{t}</p>
                    <p className="mt-3 text-mist">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="vision" className="border-b border-carbon bg-carbon/40 py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-air">
              Vision
            </p>
            <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
              A field of care that belongs to everyone
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              We imagine a future where energetic medicine is welcomed into
              the evidence base — studied with rigour, funded openly, and
              available to all.
            </p>
          </div>
        </section>
        <section id="support" className="border-t border-carbon bg-carbon/40 py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-air">
              Support
            </p>
            <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
              Help us fund open research
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              Quantum Clinical Research CIC is not-for-profit. Your support
              keeps our studies open, independent, and free to read.
            </p>
            <a
              href="mailto:hello@qcr.cic"
              className="mt-10 inline-block rounded-full bg-water px-8 py-3 font-medium text-ink transition hover:opacity-90"
            >
              Get in touch
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
