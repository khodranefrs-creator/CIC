import type { CSSProperties } from "react";

type LivingMarkProps = {
  className?: string;
  style?: CSSProperties;
  title?: boolean;
};

/**
 * THE LIVING FIELD — provisional institutional mark.
 * No institutional logo was supplied to this build, so an original "living
 * field" mark is drawn inline: three radiating energy paths (the clinical
 * coexistence of research, light and life) over a subtle luminous ground.
 * Swap the inner content for the real logo asset when it arrives.
 */
export default function LivingMark({ className = "", style, title = true }: LivingMarkProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      className={className}
      style={style}
    >
      {title && <title>Quantum Clinical Research CIC — The Living Field mark</title>}
      {/* luminous ground */}
      <circle cx="20" cy="20" r="17.5" fill="rgb(var(--flare-dark) / 0.14)" />
      <circle cx="20" cy="20" r="17.5" stroke="rgb(var(--flare-dark) / 0.25)" strokeWidth="1" />
      {/* energy paths radiating outward */}
      <path
        d="M20 14 C21 16 21 18 20 20 C19 22 19 24 20 26"
        stroke="var(--lumen)"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M13.5 17 C16 18.5 18.5 18.5 20 20 C21.5 21.5 24 21.5 26.5 23"
        stroke="var(--lumen)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M13.5 14.5 C16 16 18 15.5 20 17 C22 18.5 24 18 26.5 19.5"
        stroke="var(--lumen)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
      {/* photon node */}
      <circle cx="20" cy="20" r="5.5" fill="var(--field-950)" stroke="var(--lumen)" strokeWidth="1.2" />
      <circle cx="20" cy="20" r="1.6" fill="var(--lumen)" />
    </svg>
  );
}