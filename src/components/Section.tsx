import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  tone?: "dark" | "light" | "core";
  className?: string;
};

const TONES = {
  dark: "bg-field-900 text-paper",
  core: "bg-core-ink text-paper",
  light: "bg-paper text-ink",
} as const;

const ACCENT = {
  dark: "text-lumen",
  core: "text-lumen",
  light: "text-core-deep",
} as const;

export default function Section({ id, label, title, intro, children, tone = "dark", className = "" }: SectionProps) {
  const isLight = tone === "light";
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-24 py-20 md:py-28 ${TONES[tone]} ${className}`}>
      <div className={`mx-auto max-w-6xl px-5 md:px-8 ${isLight ? "field-grid-light" : "field-grid-dark"}`}>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className={`lab-label font-mono ${ACCENT[tone]}`}>{label}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id={`${id}-title`}
              className={`editorial font-serif mt-5 text-3xl font-medium leading-tight tracking-tight md:text-5xl ${isLight ? "text-ink" : "text-paper"}`}
            >
              {title}
            </h2>
          </Reveal>
          {intro ? (
            <Reveal delay={160}>
              <p className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${isLight ? "text-mist-deep" : "text-mist"}`}>
                {intro}
              </p>
            </Reveal>
          ) : null}
        </div>
        {children ? <div className="mt-14">{children}</div> : null}
      </div>
    </section>
  );
}
