type Strip = { top: string; height: string; dur: string; delay: string; opacity: number; dash: string };
type Photon = { left: string; top: string; dur: string; delay: string; size: number };

const STRIPS: Strip[] = [
  { top: "30%", height: "10rem", dur: "14s", delay: "0s", opacity: 0.35, dash: "64 28" },
  { top: "44%", height: "8rem", dur: "19s", delay: "-5s", opacity: 0.28, dash: "40 24" },
  { top: "56%", height: "7rem", dur: "23s", delay: "-11s", opacity: 0.22, dash: "90 34" },
  { top: "66%", height: "6rem", dur: "28s", delay: "-18s", opacity: 0.16, dash: "34 26" },
];

const PHOTONS: Photon[] = [
  { left: "18%", top: "26%", dur: "9s", delay: "0s", size: 4 },
  { left: "38%", top: "48%", dur: "11s", delay: "-3s", size: 3 },
  { left: "56%", top: "30%", dur: "12s", delay: "-6s", size: 5 },
  { left: "70%", top: "52%", dur: "10s", delay: "-2s", size: 3 },
  { left: "86%", top: "34%", dur: "13s", delay: "-8s", size: 4 },
];

export default function HeroField() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[4/5] w-full max-w-[34rem] select-none overflow-hidden border border-hair-dark bg-field-900 sm:aspect-square"
    >
      {/* living field baselines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 500"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M-10 120 C 90 60, 150 180, 250 110 S 380 40, 410 120"
          stroke="var(--lumen)"
          strokeOpacity="0.4"
          strokeWidth="0.75"
        />
        <path
          d="M-10 200 C 110 150, 130 240, 240 190 S 370 150, 410 210"
          stroke="var(--lumen)"
          strokeOpacity="0.3"
          strokeWidth="0.6"
        />
        <path
          d="M-10 280 C 100 230, 160 320, 250 270 S 360 240, 410 290"
          stroke="var(--lumen)"
          strokeOpacity="0.22"
          strokeWidth="0.5"
        />
        <path
          d="M-10 360 C 120 320, 150 400, 240 350 S 370 320, 410 370"
          stroke="var(--lumen)"
          strokeOpacity="0.16"
          strokeWidth="0.5"
        />

        {/* interference nodes */}
        <g stroke="var(--lumen)" strokeWidth="0.5">
          <circle cx="150" cy="120" r="26" strokeOpacity="0.18" />
          <circle cx="150" cy="120" r="52" strokeOpacity="0.10" />
          <circle cx="255" cy="240" r="30" strokeOpacity="0.14" />
          <circle cx="255" cy="240" r="60" strokeOpacity="0.08" />
          <circle cx="320" cy="160" r="20" strokeOpacity="0.16" />
        </g>
      </svg>

      {/* propagating strips */}
      {STRIPS.map((s, i) => (
        <div
          key={i}
          className="absolute inset-x-0 overflow-hidden"
          style={{ top: s.top, height: s.height, opacity: s.opacity }}
        >
          <svg
            className="h-full w-[220%]"
            preserveAspectRatio="none"
            viewBox="0 0 220 100"
            style={{ animation: `field-sweep ${s.dur} linear infinite`, animationDelay: s.delay }}
          >
            <path
              d="M0 50 C 26 12, 52 88, 78 50 S 130 88, 156 50 S 208 12, 220 50"
              fill="none"
              stroke="var(--lumen)"
              strokeWidth="1.25"
              strokeDasharray={s.dash}
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}

      {/* focal lumen */}
      <div
        className="absolute left-1/2 top-[38%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgb(87 230 205 / 0.28) 0%, transparent 62%)" }}
      />
      <span
        className="absolute left-1/2 top-[38%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lumen"
        style={{ boxShadow: "0 0 22px 6px rgb(87 230 205 / 0.45)" }}
      />

      {/* drifting photons */}
      {PHOTONS.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-lumen"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: 0.55,
            boxShadow: "0 0 10px 2px rgb(87 230 205 / 0.5)",
            animation: `photon-drift ${p.dur} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      {/* ground settle */}
      <div className="absolute inset-0 bg-gradient-to-t from-field-950 via-transparent to-transparent" />
    </div>
  );
}
