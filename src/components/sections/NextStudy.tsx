import type { ReactNode } from "react";
import Section from "../Section";
import Reveal from "../Reveal";

type ColProps = { k: string; v: ReactNode };

const COLS: ColProps[] = [
  {
    k: "Research area",
    v: "To be announced. The exact question is still in design review, and we will publish the full protocol — including outcome measures — before any participant is enrolled.",
  },
  {
    k: "Status",
    v: "In preparation. No study begins until the method, budget regulator, and review path are all open and agreed.",
  },
  {
    k: "Method",
    v: "Open protocol, pre-registered, published either way. We report what we find — not what we hoped to find.",
  },
  {
    k: "Timeline",
    v: "Announced once the protocol is finalised. We do not promise dates we cannot yet back with a real plan.",
  },
];

export default function NextStudy() {
  return (
    <Section
      id="study"
      label="The science ahead"
      tone="core"
      title="Our next planned study"
      intro="A placeholder while the protocol is in design review. Every detail — the question, the method, the budget, who is involved — will be published here in full before we enrol a single participant."
    >
      <div className="grid gap-3 border border-paper-deep bg-paper-deep md:grid-cols-2">
        {COLS.map((c, i) => (
          <Reveal key={c.k} delay={i * 80}>
            <div className="flex h-full flex-col bg-core-ink p-8">
              <p className="lab-label text-lumen">{c.k}</p>
              <p className="mt-4 text-sm leading-relaxed text-mist">{c.v}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
