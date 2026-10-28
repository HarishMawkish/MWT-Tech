"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { WORLD_MAP } from "@/lib/world-map";
import type { Region } from "@/lib/site-data";

const W = 1000;
const H = (W * WORLD_MAP.rows) / WORLD_MAP.cols;

// Where each market sits on the map, as [latitude, longitude]. The content
// (status, presence, focus) comes from site-data; only placement lives here.
const COORDS: Record<string, [number, number]> = {
  "Sri Lanka": [7.87, 80.77],
  India: [20.6, 78.9],
  KSA: [23.9, 45.1],
  UAE: [23.4, 53.8],
  USA: [39.8, -98.6],
  Oman: [21.5, 55.9],
  Switzerland: [46.8, 8.2],
};

function project([lat, lon]: [number, number]) {
  return {
    x: ((lon + 180) / 360) * W,
    y: ((WORLD_MAP.latMax - lat) / (WORLD_MAP.latMax - WORLD_MAP.latMin)) * H,
  };
}

/** A curved route from `a` to `b`, bowed upward like a flight path. */
function arc(a: { x: number; y: number }, b: { x: number; y: number }) {
  const dist = Math.hypot(b.x - a.x, b.y - a.y);
  const cx = (a.x + b.x) / 2;
  const cy = Math.min(a.y, b.y) - dist * 0.28;
  return `M${a.x.toFixed(1)} ${a.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

/**
 * Regional footprint as a dot-matrix world map. Colombo is the hub; a route
 * runs from it to each market and the selected one lights up with a bead
 * travelling along it. Every market's status, presence and focus is listed
 * beside the map, so nothing depends on hovering a tiny marker. Selecting a
 * row (hover with a mouse, tap on touch) and the map stay in sync.
 */
export function RegionsMap({ regions }: { regions: Region[] }) {
  const [active, setActive] = useState(0);

  const dots = useMemo(() => {
    const cell = W / WORLD_MAP.cols;
    let d = "";
    WORLD_MAP.data.forEach((row, r) => {
      for (let c = 0; c < row.length; c++) {
        if (row[c] === "1") d += `M${((c + 0.5) * cell).toFixed(1)} ${((r + 0.5) * cell).toFixed(1)}h0`;
      }
    });
    return d;
  }, []);

  const hubIndex = Math.max(
    0,
    regions.findIndex((r) => r.presence === "Headquarters"),
  );
  const points = regions.map((r) => (COORDS[r.region] ? project(COORDS[r.region]) : null));
  const hub = points[hubIndex];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.55fr_1fr] lg:gap-8">
      {/* ---- the map ---- */}
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#030a07] p-4 sm:p-7">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-mw-mint/20 blur-3xl"
          />

          <div className="relative" style={{ aspectRatio: `${W} / ${H}` }}>
            {/* Land: one path of zero-length round-capped strokes = one dot each. */}
            <div className="mw-map-dots absolute inset-0">
              <svg viewBox={`0 0 ${W} ${H}`} className="h-full w-full" aria-hidden="true">
                <path d={dots} stroke="rgba(127,217,180,0.3)" strokeWidth="3.6" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* Routes from the hub. */}
            <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
              {hub &&
                points.map((p, i) =>
                  p && i !== hubIndex ? (
                    <path
                      key={regions[i].region}
                      d={arc(hub, p)}
                      fill="none"
                      stroke={i === active ? "none" : "rgba(255,255,255,0.14)"}
                      strokeWidth="1.2"
                      strokeDasharray="2 6"
                    />
                  ) : null,
                )}
              {hub && points[active] && active !== hubIndex && (
                <g key={active}>
                  <path
                    d={arc(hub, points[active]!)}
                    pathLength={1}
                    fill="none"
                    stroke="#7fd9b4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="mw-arc-draw"
                    style={{ filter: "drop-shadow(0 0 5px rgba(127,217,180,0.9))" }}
                  />
                  <circle r="4" fill="#ffffff" className="mw-arc-bead" style={{ filter: "drop-shadow(0 0 6px #7fd9b4)" }}>
                    <animateMotion dur="2.2s" repeatCount="indefinite" path={arc(hub, points[active]!)} />
                  </circle>
                </g>
              )}
            </svg>

            {/* Markers. Decorative duplicates of the list, so hidden from assistive tech. */}
            {regions.map((r, i) => {
              const p = points[i];
              if (!p) return null;
              const isActive = i === active;
              const isHub = i === hubIndex;
              return (
                <span
                  key={r.region}
                  aria-hidden="true"
                  className="absolute"
                  style={{ left: `${(p.x / W) * 100}%`, top: `${(p.y / H) * 100}%` }}
                >
                  <span
                    style={{ "--i": i } as CSSProperties}
                    className="mw-chip absolute left-0 top-0 block -translate-x-1/2 -translate-y-1/2"
                  >
                    <span
                      onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
                      onClick={() => setActive(i)}
                      className="relative grid h-7 w-7 cursor-pointer place-items-center"
                    >
                      {(isActive || isHub) && (
                        <span className="mw-marker-ping absolute h-3 w-3 rounded-full bg-mw-glow/60" />
                      )}
                      <span
                        className={`relative block rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                          r.activeMarket
                            ? "bg-mw-glow shadow-[0_0_12px_rgba(127,217,180,0.9)]"
                            : "border border-white/60 bg-black"
                        } ${isActive ? "h-3.5 w-3.5" : "h-2.5 w-2.5"}`}
                      />
                    </span>
                    {isActive && (
                      <span className="mw-result pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-black/75 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                        {r.region}
                      </span>
                    )}
                  </span>
                </span>
              );
            })}
          </div>

          {/* Legend: the same two words the list uses. */}
          <div className="relative mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/60">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-mw-glow shadow-[0_0_8px_rgba(127,217,180,0.9)]" />
              Active
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full border border-white/60 bg-black" />
              Expansion
            </span>
          </div>
        </div>
      </Reveal>

      {/* ---- the list: all the information, always visible ---- */}
      <ul className="space-y-2.5">
        {regions.map((r, i) => {
          const isActive = i === active;
          return (
            <li key={r.region}>
              <Reveal delay={i * 60}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(i)}
                  onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`group relative w-full overflow-hidden rounded-2xl border px-5 py-4 text-left transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    isActive
                      ? "border-mw-glow/40 bg-mw-glow/[0.07] shadow-[0_18px_40px_-24px_rgba(127,217,180,0.6)]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-y-3 left-0 w-[3px] rounded-full bg-mw-glow shadow-[0_0_12px_rgba(127,217,180,0.8)] transition-all duration-500 ${
                      isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                    }`}
                  />
                  <span className="flex items-center justify-between gap-3">
                    <span
                      className={`font-display text-lg transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/70"
                      }`}
                    >
                      {r.region}
                    </span>
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                        r.activeMarket ? "bg-mw-mint/10 text-mw-glow" : "bg-white/5 text-white/50"
                      }`}
                    >
                      <span className="relative flex h-1.5 w-1.5">
                        {r.activeMarket && (
                          <span className="absolute inline-flex h-full w-full rounded-full bg-mw-glow opacity-60 motion-safe:animate-ping" />
                        )}
                        <span
                          className={`relative h-1.5 w-1.5 rounded-full ${r.activeMarket ? "bg-mw-glow" : "bg-white/30"}`}
                        />
                      </span>
                      {r.activeMarket ? "Active" : "Expansion"}
                    </span>
                  </span>
                  <span className="mt-1.5 block text-sm text-white/75">{r.presence}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-white/50">{r.focus}</span>
                </button>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
