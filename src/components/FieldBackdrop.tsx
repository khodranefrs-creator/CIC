type WaveStrip = {
  top: string;
  height: string;
  duration: string;
  delay: string;
  opacity: number;
  dash: string;
};

const WAVES: WaveStrip[] = [
  { top: "34%", height: "9rem", duration: "15s", delay: "0s", opacity: 0.34, dash: "60 26" },
  { top: "46%", height: "7rem", duration: "20s", delay: "-4s", opacity: 0.26, dash: "42 20" },
  { top: "56%", height: "6rem", duration: "24s", delay: "-9s", opacity: 0.2, dash: "84 34" },
  { top: "64%", height: "5rem", duration: "30s", delay: "-15s", opacity: 0.16, dash: "30 22" },
];

const PHOTONS = [
  { left: "12%", top: "22%", dur: "9s", delay: "0s", size: 4 },
  { left: "30%", top: "40%", dur: "11s", delay: "-3s", size: 3 },
  { left: "52%", top: "18%", dur: "12s", delay: "-6s", size: 5 },
  { left: "68%", top: "36%", dur: "10s", delay: "-2s", size: 3 },
  { left: "84%", top: "26%", dur: "13s", delay: "-8s", size: 4 },
];

/**
 * Scientific field backdrop for dark grounds. Pure presentational layer:
 * layered field-drift/breathe/sweep motion over the coordinate grid, plus
 * propagating wave strips. aria-hidden, no content.
 */
export default function FieldBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {/* coordinate grid */}
      <div className="field-grid-dark absolute inset-0" />

      {/* drifting luminous fields */}
      <div
        className="absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-core/20 blur-[110px]"
        style={{ animation: "field-breathe 18s ease-in-out infinite" }}
      />
      <div
        className="absolute -left-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-lumen/15 blur-[100px]"
        style={{ animation: "field-drift 22s ease-in-out infinite" }}
      />
      <div
        className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-photon/10 blur-[90px]"
        style={{ animation: "field-sweep 14s ease-in-out infinite" }}
      />

      {/* propagating wave strips */}
      {WAVES.map((w, i) => (
        <div
          key={i}
          className="absolute inset-x-0 overflow-hidden"
          style={{ top: w.top, height: w.height, opacity: w.opacity }}
        >
          <svg
            className="h-full w-[200%]"
            preserveAspectRatio="none"
            viewBox="0 0 200 100"
            style={{ animation: `wave-propagate ${w.duration} linear infinite`, animationDelay: w.delay }}
          >
            <path
              d="M0 50 C 25 10, 50 90, 75 50 S 125 90, 150 50 S 200 10, 200 50"
              fill="none"
              stroke="var(--lumen)"
              strokeWidth="1.5"
              strokeDasharray={w.dash}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      ))}

      {/* drifting photons (light motes) */}
      {PHOTONS.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-lumen"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 12px 2px rgb(var(--flare-dark) / 0.55)",
            animation: `photon-drift ${p.dur}s ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      {/* vignette to settle the field */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-field-950" />
    </div>
  );
}
