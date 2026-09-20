import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
};

export default function SectionLabel({ children, className = "", tone = "dark" }: SectionLabelProps) {
  const accent = tone === "dark" ? "bg-lumen" : "bg-core";
  const text = tone === "dark" ? "text-lumen" : "text-core-deep";

  return (
    <p className={`lab-label flex items-center gap-3 ${text} ${className}`}>
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${accent} animate-pulse`} aria-hidden="true" />
      {children}
    </p>
  );
}
