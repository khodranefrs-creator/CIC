import Section from "../Section";
import Reveal from "../Reveal";
import SectionLabel from "../SectionLabel";

const PEOPLE = [
  {
    role: "Founding director · Clinical research",
    name: "Your name here",
    bio: "A founding placeholder. This seat is reserved for the clinical researcher who anchors the programme, sets the scientific direction and answers for the evidence.",
  },
  {
    role: "Research advisor · Biophysics",
    name: "Advisor placeholder",
    bio: "Reserved for a biophysicist who can hold us to laboratory rigour — electrode physics, measurement error, and what a signal actually means.",
  },
  {
    role: "Research advisor · Regulatory & ethics",
    name: "Advisor placeholder",
    bio: "Reserved for clinical-ethics and research-governance expertise: consent, participant safety, and making sure open research stays responsible research.",
  },
  {
    role: "Research advisor · Patient & public voice",
    name: "Advisor placeholder",
    bio: "Reserved for lived-experience leadership — the people whose lives the research means to change, at the table where questions are chosen.",
  },
];

export default function Team() {
  return (
    <Section
      id="team"
      label="The people"
      tone="dark"
      title="A small team, honestly built"
      intro="Every person we add must believe the same thing: that the work exists to be shared, not to be owned. These seats are waiting to be filled by the right people — openly and without ego."
    >
      <div className="grid gap-2 border border-hair-dark bg-hair-dark md:grid-cols-2">
        {PEOPLE.map((p, i) => (
          <Reveal key={p.role} delay={i * 90}>
            <article className="flex h-full flex-col bg-field-900 p-8">
              <p className="lab-label text-lumen">{p.role}</p>
              <h3 className="editorial mt-5 text-xl text-paper md:text-2xl">{p.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-mist">{p.bio}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
