import type { CSSProperties } from "react";

const SIZE = 520;
const C = SIZE / 2;
const RADIUS = 188;

// Lines of business named on SAP's Business AI pages.
const nodes = [
  { label: "Finance", angle: -90 },
  { label: "Supply chain", angle: -30 },
  { label: "Procurement", angle: 30 },
  { label: "Manufacturing", angle: 90 },
  { label: "HR", angle: 150 },
  { label: "Customer", angle: 210 },
].map((n) => {
  const a = (n.angle * Math.PI) / 180;
  return { ...n, x: C + Math.cos(a) * RADIUS, y: C + Math.sin(a) * RADIUS };
});

/**
 * Original illustration of the idea at the heart of SAP Business AI: one
 * assistant at the centre coordinating agents that work across the business.
 * Pulses travel out along each link; the rings turn slowly. Pure SVG + CSS, so
 * it renders on the server and costs nothing to run. Decorative.
 */
export function OrchestrationVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[34rem] select-none">
      {/* soft light behind everything */}
      <div className="absolute inset-[8%] rounded-full bg-[#1c6b51]/30 blur-3xl" />

      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="sap-hub" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#7fd9b4" />
            <stop offset="100%" stopColor="#1c6b51" />
          </radialGradient>
          <linearGradient id="sap-link" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7fd9b4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7fd9b4" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* turning rings */}
        <g className="sap-spin origin-center" style={{ transformBox: "fill-box" }}>
          <circle cx={C} cy={C} r="244" fill="none" stroke="rgba(127,217,180,0.18)" strokeWidth="1" strokeDasharray="2 10" />
        </g>
        <g className="sap-spin-rev origin-center" style={{ transformBox: "fill-box" }}>
          <circle cx={C} cy={C} r="132" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="1 7" />
        </g>
        <circle cx={C} cy={C} r={RADIUS} fill="none" stroke="rgba(127,217,180,0.1)" strokeWidth="1" />

        {/* links + travelling pulses */}
        {nodes.map((n, i) => (
          <g key={n.label}>
            <line
              x1={C}
              y1={C}
              x2={n.x}
              y2={n.y}
              stroke="url(#sap-link)"
              strokeWidth="1.4"
              strokeDasharray="4 6"
              className="sap-dash"
              style={{ animationDelay: `${-i * 0.6}s` }}
            />
            <circle r="3.5" fill="#ffffff" style={{ filter: "drop-shadow(0 0 6px #7fd9b4)" }}>
              <animateMotion
                dur="3.2s"
                begin={`${i * 0.55}s`}
                repeatCount="indefinite"
                path={`M${C} ${C} L${n.x.toFixed(1)} ${n.y.toFixed(1)}`}
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
              />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.8;1" dur="3.2s" begin={`${i * 0.55}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        {/* hub */}
        <circle cx={C} cy={C} r="64" fill="rgba(127,217,180,0.12)" className="sap-breathe" />
        <circle cx={C} cy={C} r="46" fill="url(#sap-hub)" style={{ filter: "drop-shadow(0 0 22px rgba(127,217,180,0.55))" }} />
      </svg>

      {/* hub label */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-lg font-bold tracking-tight text-[#02140d]">
        Joule
      </div>

      {/* agent nodes */}
      {nodes.map((n, i) => (
        <div
          key={n.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${(n.x / SIZE) * 100}%`, top: `${(n.y / SIZE) * 100}%` }}
        >
          <div
            className="sap-float flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 shadow-[0_10px_30px_-10px_rgba(127,217,180,0.5)] backdrop-blur-md sm:px-4 sm:text-xs"
            style={{ animationDelay: `${-i * 0.9}s` } as CSSProperties}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#7fd9b4] shadow-[0_0_8px_#7fd9b4]" />
            {n.label}
          </div>
        </div>
      ))}
    </div>
  );
}
