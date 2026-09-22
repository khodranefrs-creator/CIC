import Section from "../Section";
import Reveal from "../Reveal";

const ENTRIES = [
  {
    label: "Foundations of the field",
    note: "Verified references will be added here as the index is assembled. Nothing appears until it has been read in full and checked against its original source.",
  },
  {
    label: "Biophysical measurement",
    note: "Verified references will be added here — on instruments, repeatability, and what a signal can honestly be claimed to mean.",
  },
  {
    label: "Clinical and open-science practice",
    note: "Verified references will be added here — on protocol design, pre-registration, and publishing results either way.",
  },
];

export default function Bibliography() {
  return (
    <Section
      id="bibliography"
      label="The evidence archive"
      tone="light"
      title="Scientific bibliography"
      intro="A living index of the literature we actually rely on. Entries are added only once read and verified — an empty shelf is more honest than a borrowed one."
    >
      <div className="border-t border-hair-light">
        {ENTRIES.map((e, i) => (
          <Reveal key={e.label} delay={i * 80}>
            <div className="grid gap-3 border-b border-hair-light py-10 md:grid-cols-[14rem_1fr] md:gap-8">
              <p className="lab-label text-core-deep">{e.label}</p>
              <p className="text-sm leading-relaxed text-ink">{e.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
