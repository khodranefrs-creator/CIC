import Section from "../Section";
import Reveal from "../Reveal";

const ROWS = [
  { k: "Legal form", v: "Community Interest Company (CIC), limited by guarantee" },
  { k: "Assets", v: "All assets locked. None can be distributed for private gain." },
  { k: "Surplus", v: "Reinvested 100% into the next study, openly accounted" },
  { k: "Remuneration", v: "Published in full — directors' pay is a matter of public record" },
];

export default function Finances() {
  return (
    <Section
      id="finances"
      label="Transparency"
      tone="light"
      title="Every pound is accountable"
      intro="Not-for-profit is a promise we make before anyone gives us a penny. We publish how money moves, and we are bound by CIC law to keep that promise."
    >
      <div className="overflow-hidden border border-hair-light">
        {ROWS.map((r, i) => (
          <Reveal key={r.k} delay={i * 70}>
            <div className="grid gap-2 border-b border-hair-light p-6 last:border-b-0 md:grid-cols-[14rem_1fr] md:gap-6 md:p-8">
              <p className="lab-label text-core-deep">{r.k}</p>
              <p className="editorial text-lg text-ink">{r.v}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
