import type { ReactNode } from "react";
import type { VisualKind } from "./clouds";

// One animated illustration per cloud, drawn in HTML and SVG so it stays sharp at
// any size and costs nothing to load. Each reads its colour from --sf, which the
// page sets from the cloud's accent. Nothing here is interactive; it is pure
// motion that explains what the product does.

const A = "var(--sf)";
const tint = (a: number) => `rgba(var(--sf-rgb), ${a})`;

function Frame({ label, children, className = "" }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div className={`sf-glass relative overflow-hidden rounded-[1.75rem] ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">{label}</span>
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="sf-ping absolute inline-flex h-full w-full rounded-full" style={{ background: A }} />
          <span className="relative h-2 w-2 rounded-full" style={{ background: A }} />
        </span>
      </div>
      {children}
    </div>
  );
}

const bar = (w: string, o = 0.14) => (
  <span className="block h-1.5 rounded-full" style={{ width: w, background: `rgba(255,255,255,${o})` }} />
);

/* ---------------------------------------------------------------- Sales */
function Pipeline() {
  const cols = [
    { name: "Prospect", n: 3 },
    { name: "Qualify", n: 2 },
    { name: "Propose", n: 2 },
    { name: "Won", n: 1 },
  ];
  return (
    <Frame label="Pipeline">
      <div className="p-5">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Forecast</p>
            <p className="font-display text-3xl text-white">$4.2M</p>
          </div>
          <svg viewBox="0 0 140 44" className="h-11 w-28 shrink-0 sm:w-36" fill="none" aria-hidden="true">
            <path d="M2 38 C22 36 30 22 50 24 S78 30 92 16 S118 8 138 4" pathLength="1" className="sf-draw" stroke={A} strokeWidth="2.4" strokeLinecap="round" style={{ filter: `drop-shadow(0 0 6px ${tint(0.8)})` }} />
          </svg>
        </div>

        <div className="grid grid-cols-4 gap-[0.6rem]">
          {cols.map((c, ci) => (
            <div key={c.name} className="relative min-h-[11rem] rounded-xl bg-white/[0.035] p-2">
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/45">{c.name}</p>
              <div className="space-y-2">
                {Array.from({ length: c.n }).map((_, i) => (
                  <div key={i} className="rounded-lg border border-white/10 bg-white/[0.04] p-2">
                    {bar("70%", 0.2)}
                    <div className="mt-1.5">{bar("45%", 0.1)}</div>
                  </div>
                ))}
              </div>
              {ci === 0 && (
                <div
                  className="sf-deal absolute inset-x-2 top-[2.1rem] z-10 rounded-lg border p-2 shadow-lg"
                  style={{ borderColor: tint(0.7), background: `linear-gradient(135deg, ${tint(0.35)}, ${tint(0.12)})`, boxShadow: `0 10px 30px -10px ${tint(0.8)}` }}
                >
                  {bar("80%", 0.55)}
                  <div className="mt-1.5">{bar("50%", 0.3)}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="sf-cycle mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium text-white/85" style={{ borderColor: tint(0.45), background: tint(0.12) }}>
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: A }} />
          Agent flagged a stalled deal and drafted the follow-up
        </div>
      </div>
    </Frame>
  );
}

/* -------------------------------------------------------------- Service */
function Console() {
  const cases = [0, 1, 2, 3];
  return (
    <Frame label="Service console">
      <div className="grid gap-0 sm:grid-cols-[0.8fr_1.25fr]">
        <div className="hidden space-y-2 border-r border-white/10 p-4 sm:block">
          {cases.map((i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg border p-2" style={{ borderColor: i === 1 ? tint(0.6) : "rgba(255,255,255,0.08)", background: i === 1 ? tint(0.12) : "rgba(255,255,255,0.03)" }}>
              <span className="h-6 w-6 shrink-0 rounded-full bg-white/15" />
              <span className="min-w-0 flex-1 space-y-1.5">
                {bar("85%", 0.22)}
                {bar("55%", 0.1)}
              </span>
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: i === 1 ? A : "rgba(255,255,255,0.2)" }} />
            </div>
          ))}
        </div>

        <div className="flex min-h-[16rem] flex-col justify-end gap-3 p-4 text-[11.5px] leading-snug sm:min-h-[18rem]">
          <div className="sf-cycle max-w-[85%] self-start rounded-2xl rounded-bl-sm bg-white/10 px-3.5 py-2 text-white/85" style={{ animationDelay: "0s" }}>
            Hi, my order hasn&apos;t arrived and it was due Tuesday.
          </div>
          <div className="sf-cycle flex gap-1 self-end rounded-2xl rounded-br-sm px-3.5 py-3" style={{ animationDelay: "0.9s", background: tint(0.25) }} aria-hidden="true">
            {[0, 1, 2].map((d) => (
              <span key={d} className="sf-dot h-1.5 w-1.5 rounded-full bg-white" style={{ animationDelay: `${d * 0.16}s` }} />
            ))}
          </div>
          <div className="sf-cycle max-w-[88%] self-end rounded-2xl rounded-br-sm px-3.5 py-2 text-white" style={{ animationDelay: "1.8s", background: `linear-gradient(135deg, ${tint(0.55)}, ${tint(0.3)})` }}>
            I found it. It cleared customs this morning and arrives tomorrow. I&apos;ve added a delivery alert for you.
          </div>
          <div className="sf-cycle inline-flex items-center gap-2 self-end rounded-full border px-3 py-1.5 font-semibold text-white" style={{ animationDelay: "2.9s", borderColor: tint(0.6), background: tint(0.14) }}>
            <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden="true">
              <path d="M2.5 6.4l2.2 2.2 4.8-5" stroke={A} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Case resolved by agent
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------------ Marketing */
function Journey() {
  const channels = [
    { y: 58, label: "Email" },
    { y: 148, label: "SMS" },
    { y: 238, label: "WhatsApp" },
    { y: 328, label: "Ads" },
  ];
  return (
    <Frame label="Journey canvas">
      <svg viewBox="0 0 520 390" className="block w-full" fill="none" role="img" aria-label="A customer segment splits into email, SMS, WhatsApp and ad messages">
        <defs>
          <linearGradient id="jg" x1="0" x2="1">
            <stop offset="0" stopColor={A} stopOpacity="0.9" />
            <stop offset="1" stopColor={A} stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <rect x="22" y="160" width="104" height="64" rx="14" fill={tint(0.16)} stroke={A} strokeOpacity="0.7" />
        <text x="74" y="188" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Segment</text>
        <text x="74" y="206" textAnchor="middle" fill="#fff" fillOpacity="0.55" fontSize="11">High value</text>

        <path d="M126 192 H190" stroke="url(#jg)" strokeWidth="1.6" className="sf-flow" />
        <path d="M214 168 L238 192 L214 216 L190 192 Z" fill={tint(0.2)} stroke={A} strokeOpacity="0.85" />
        <text x="214" y="196" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">AI</text>

        {channels.map((c, i) => {
          const d = `M238 192 C300 192 310 ${c.y} 366 ${c.y}`;
          return (
            <g key={c.label}>
              <path d={d} stroke="url(#jg)" strokeWidth="1.6" className="sf-flow" style={{ animationDelay: `${i * 0.2}s` }} />
              <circle r="3.4" fill="#fff" style={{ filter: `drop-shadow(0 0 5px ${A})` }}>
                <animateMotion dur={`${2.6 + i * 0.35}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} path={d} />
              </circle>
              <rect x="366" y={c.y - 22} width="130" height="44" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
              <circle cx="388" cy={c.y} r="9" fill={tint(0.25)} stroke={A} strokeOpacity="0.7" />
              <text x="408" y={c.y + 4} fill="#fff" fontSize="14" fontWeight="600">{c.label}</text>
              <circle cx="478" cy={c.y} r="3" fill={A} className="sf-twinkle" style={{ animationDelay: `${i * 0.6}s` }} />
            </g>
          );
        })}
        <text x="214" y="262" textAnchor="middle" fill="#fff" fillOpacity="0.5" fontSize="11.5">Campaign Agent picks the next best move</text>
      </svg>
    </Frame>
  );
}

/* ------------------------------------------------------------- Data 360 */
function Graph() {
  const sources = ["CRM", "Web", "Store", "App", "Service", "Ads"];
  const cx = 260;
  const cy = 190;
  const R = 148;
  return (
    <Frame label="Unified profile">
      <svg viewBox="0 0 520 380" className="block w-full" fill="none" role="img" aria-label="Six data sources flow into one unified customer profile">
        {[70, 108, 146].map((r, i) => (
          <circle key={r} cx={cx} cy={cy} r={r} stroke="rgba(255,255,255,0.07)" strokeDasharray="2 6" />
        ))}
        {sources.map((s, i) => {
          const a = (i / sources.length) * Math.PI * 2 - Math.PI / 2;
          const x = Number((cx + Math.cos(a) * R).toFixed(2));
          const y = Number((cy + Math.sin(a) * R * 0.93).toFixed(2));
          const d = `M${x.toFixed(1)} ${y.toFixed(1)} L${cx} ${cy}`;
          return (
            <g key={s}>
              <path d={d} stroke={A} strokeOpacity="0.5" strokeWidth="1.4" className="sf-flow" style={{ animationDelay: `${i * 0.15}s` }} />
              <circle r="3.2" fill="#fff" style={{ filter: `drop-shadow(0 0 5px ${A})` }}>
                <animateMotion dur={`${2.4 + (i % 3) * 0.4}s`} begin={`${i * 0.35}s`} repeatCount="indefinite" path={d} />
              </circle>
              <circle cx={x} cy={y} r="22" fill="#06120d" stroke="rgba(255,255,255,0.22)" />
              <circle cx={x} cy={y} r="22" fill={tint(0.14)} />
              <text x={x} y={y + 4} textAnchor="middle" fill="#fff" fontSize="11.5" fontWeight="700">{s}</text>
            </g>
          );
        })}
        <circle cx={cx} cy={cy} r="40" fill={tint(0.22)} className="sf-ping" style={{ transformOrigin: "center", transformBox: "fill-box" }} />
        <circle cx={cx} cy={cy} r="40" fill="#06120d" stroke={A} strokeWidth="1.6" />
        <circle cx={cx} cy={cy - 9} r="9" fill={A} fillOpacity="0.9" />
        <path d={`M${cx - 17} ${cy + 22} a17 15 0 0 1 34 0`} fill={A} fillOpacity="0.9" />
        <text x={cx} y={cy + 64} textAnchor="middle" fill="#fff" fontSize="12.5" fontWeight="700" letterSpacing="1.4">ONE PROFILE</text>
      </svg>
    </Frame>
  );
}

/* ----------------------------------------------------------- Agentforce */
function Agent() {
  const steps = ["Understand the request", "Retrieve the order from CRM", "Update the case", "Reply and close"];
  return (
    <Frame label="Agent reasoning">
      <div className="relative grid items-center gap-6 p-5 sm:min-h-[22rem] sm:grid-cols-[1fr_1.15fr] sm:gap-2">
        <div className="relative grid min-h-[11rem] place-items-center sm:min-h-0">
          <span className="sf-ping absolute h-36 w-36 rounded-full" style={{ background: tint(0.22) }} aria-hidden="true" />
          <span className="sf-ping absolute h-36 w-36 rounded-full" style={{ background: tint(0.14), animationDelay: "1.2s" }} aria-hidden="true" />
          <span className="sap-float relative grid h-28 w-28 place-items-center rounded-full" style={{ background: `radial-gradient(circle at 32% 28%, #fff, ${A} 38%, rgba(var(--sf-rgb),0.25) 78%)`, boxShadow: `0 0 70px ${tint(0.7)}` }}>
            <svg viewBox="0 0 24 24" className="h-9 w-9 text-black/70" fill="currentColor" aria-hidden="true">
              <path d="M12 2l2.2 6.3L21 10.5l-6.8 2.2L12 20l-2.2-7.3L3 10.5l6.8-2.2L12 2Z" />
            </svg>
          </span>
          <span className="sf-cycle absolute -left-1 top-2 max-w-[9rem] rounded-2xl rounded-bl-sm border border-white/15 bg-black/60 px-3 py-2 text-[10.5px] text-white/85 backdrop-blur">
            Where is my order?
          </span>
        </div>

        <ol className="space-y-2.5">
          {steps.map((s, i) => (
            <li key={s} className="sf-tick flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[11.5px] font-medium text-white/90" style={{ animationDelay: `${i * 1.2}s` }}>
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full" style={{ background: tint(0.3), border: `1px solid ${tint(0.7)}` }}>
                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" aria-hidden="true">
                  <path d="M2.5 6.4l2.2 2.2 4.8-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {s}
            </li>
          ))}
          <li className="flex flex-wrap gap-2 pt-1" aria-hidden="true">
            {["Sales", "Service", "Slack"].map((c) => (
              <span key={c} className="rounded-full border px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-wider text-white/70" style={{ borderColor: tint(0.4) }}>
                {c}
              </span>
            ))}
          </li>
        </ol>
      </div>
    </Frame>
  );
}

/* -------------------------------------------------------------- Loyalty */
function Loyalty() {
  const tiers = ["Bronze", "Silver", "Gold", "Platinum"];
  return (
    <Frame label="Member experience">
      <div className="relative p-5">
        <div className="relative overflow-hidden rounded-2xl p-5 sf-shine" style={{ background: `linear-gradient(135deg, ${tint(0.55)}, rgba(255,255,255,0.05) 70%)`, border: `1px solid ${tint(0.6)}` }}>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-white/70">Gold member</p>
              <p className="mt-1 font-display text-3xl text-white">2,840 pts</p>
              <div className="mt-3 space-y-1.5">{bar("7.5rem", 0.4)}{bar("4.5rem", 0.22)}</div>
            </div>
            <svg viewBox="0 0 100 100" className="h-24 w-24 -rotate-90" fill="none" aria-hidden="true">
              <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.18)" strokeWidth="7" />
              <circle cx="50" cy="50" r="42" stroke="#fff" strokeWidth="7" strokeLinecap="round" className="sf-ring-fill" />
            </svg>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          {tiers.map((t, i) => (
            <div key={t} className="flex flex-1 flex-col items-center gap-1.5">
              <span className="relative grid h-7 w-7 place-items-center rounded-full border text-[9px] font-bold text-white" style={{ borderColor: i <= 2 ? tint(0.9) : "rgba(255,255,255,0.2)", background: i <= 2 ? tint(0.4) : "transparent" }}>
                {i === 2 && <span className="sf-orbit-pulse absolute inset-0 rounded-full" aria-hidden="true" />}
                {i + 1}
              </span>
              <span className="text-[9.5px] text-white/55">{t}</span>
            </div>
          ))}
        </div>

        <div className="sap-float absolute right-5 top-[10.3rem] rotate-3 rounded-xl border px-3 py-2 text-[10px] font-bold text-white shadow-xl" style={{ borderColor: tint(0.7), background: "#06120d" }}>
          <span style={{ color: A }}>2&times; points</span> this weekend
        </div>
        <div className="sap-float absolute bottom-3 left-4 -rotate-2 rounded-xl border px-3 py-2 text-[10px] font-bold text-white shadow-xl" style={{ borderColor: tint(0.7), background: "#06120d", animationDelay: "1.5s" }}>
          <span style={{ color: A }}>20% off</span> picked for you
        </div>
      </div>
    </Frame>
  );
}

const visuals: Record<VisualKind, () => ReactNode> = {
  pipeline: Pipeline,
  console: Console,
  journey: Journey,
  graph: Graph,
  agent: Agent,
  loyalty: Loyalty,
};

export function HeroVisual({ kind }: { kind: VisualKind }) {
  const V = visuals[kind];
  return <V />;
}
