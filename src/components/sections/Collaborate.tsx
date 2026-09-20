import Section from "../Section";
import Reveal from "../Reveal";

const WAYS = [
  {
    k: "Commission a study",
    v: "Fund clean, open research on a question you care about — under the same open-method contract we hold ourselves to. Honest placeholders until we agree scope together.",
  },
  {
    k: "Host a protocol",
    v: "Offer your practice, cohort, or community as a study site. We match method to reality, never the other way around.",
  },
  {
    k: "Join the bibliography",
    v: "Send us verified references to the archive above. Poorly cited claims stay out — the ledger only grows when a source checks out.",
  },
];

export default function Collaborate() {
  return (
    <Section
      id="collaborate"
      label="Research must be a field, not a silo"
      tone="dark"
      title="Commission or collaborate with us"
      intro="If your question needs real, open evidence — we can design and run that study together. These seats are real; the terms below are the standard we held even before the first grant."
    >
      <div className="grid gap-px border border-hair-dark bg-hair-dark md:grid-cols-3">
        {WAYS.map((w, i) => (
          <Reveal key={w.k} delay={i * 90}>
            <article className="flex h-full flex-col bg-field-900 p-8">
              <p className="lab-label text-lumen">{w.k}</p>
              <p className="mt-4 text-sm leading-relaxed text-mist">{w.v}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-2xl border border-hair-dark bg-field-900 p-8 md:p-10">
        <p className="lab-label text-lumen">Start the conversation</p>
        <form
          className="mt-6 grid gap-5"
          action="mailto:hello@qcr.cic"
          method="get"
          encType="text/plain"
        >
          <p className="text-sm leading-relaxed text-mist">
            Write to{" "}
            <a href="mailto:hello@qcr.cic" className="text-lumen underline-offset-4 hover:underline">
              hello@qcr.cic
            </a>{" "}
            with the study you have in mind. This mailbox is a real door — the
            reply is a person, and the offer is open for the asking.
          </p>
          <input
            type="email"
            name="subject"
            placeholder="Your email"
            className="w-full border border-hair-dark bg-field-950 px-4 py-3 text-paper outline-none placeholder:text-mist/60 focus:border-lumen"
          />
          <textarea
            name="body"
            rows={4}
            placeholder="The question you want evidence for"
            className="w-full resize-none border border-hair-dark bg-field-950 px-4 py-3 text-paper outline-none placeholder:text-mist/60 focus:border-lumen"
          />
          <button
            type="submit"
            className="justify-self-start rounded-full bg-lumen px-8 py-3 text-sm font-medium text-field-950 transition hover:opacity-90"
          >
            Open a conversation
          </button>
        </form>
      </div>
    </Section>
  );
}
