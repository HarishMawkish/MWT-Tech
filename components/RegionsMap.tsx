"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { WORLD_MAP } from "@/lib/world-map";
import { WORLD_MAP_FINE } from "@/lib/world-map-fine";
import { BORDERS_PATH, LAND_PATH } from "@/lib/world-outline";
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

// How far the camera pushes in on each market. The Gulf neighbours need the
// most: UAE and Oman are only ~2 degrees apart, so they only separate cleanly
// once the map is magnified roughly eightfold.
const ZOOM: Record<string, number> = {
  "Sri Lanka": 4.5,
  India: 3.2,
  KSA: 4.5,
  UAE: 8,
  Oman: 8,
  USA: 2.4,
  Switzerland: 5,
};

// A marker is "under" the pointer when it is within this many screen pixels.
const HIT_RADIUS = 26;

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

/** One path of zero-length round-capped strokes = one dot per land cell. */
function dotPath(grid: { cols: number; data: readonly string[] }) {
  const cell = W / grid.cols;
  let d = "";
  grid.data.forEach((row, r) => {
    for (let c = 0; c < row.length; c++) {
      if (row[c] === "1") d += `M${((c + 0.5) * cell).toFixed(1)} ${((r + 0.5) * cell).toFixed(1)}h0`;
    }
  });
  return d;
}

/**
 * Regional footprint as a dot-matrix world map with a camera. Colombo is the
 * hub and a route runs from it to each market. Choosing a market (from the
 * list or by clicking its marker) glides the camera in on it, so neighbours
 * that overlap at world scale (UAE / Oman) spread apart and become easy to
 * pick. Hovering the map highlights the *nearest* marker to the pointer, not
 * whichever happens to be on top. Every market's status, presence and focus
 * is also listed beside the map, so nothing depends on the map alone.
 */
export function RegionsMap({ regions }: { regions: Region[] }) {
  const [active, setActive] = useState(0);
  const [world, setWorld] = useState(true); // true = whole-world camera
  const [hover, setHover] = useState<number | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const markerRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const intentTimer = useRef<number | undefined>(undefined);

  const coarse = useMemo(() => dotPath(WORLD_MAP), []);
  const fine = useMemo(() => dotPath(WORLD_MAP_FINE), []);

  const hubIndex = Math.max(
    0,
    regions.findIndex((r) => r.presence === "Headquarters"),
  );
  const points = regions.map((r) => (COORDS[r.region] ? project(COORDS[r.region]) : null));
  const hub = points[hubIndex];

  // ---- camera ------------------------------------------------------------
  const k = world ? 1 : (ZOOM[regions[active]?.region] ?? 3);
  const focus = points[active] ?? { x: W / 2, y: H / 2 };
  const clampT = (v: number) => Math.min(0, Math.max(1 - k, v));
  const tx = clampT(0.5 - (focus.x / W) * k) * 100;
  const ty = clampT(0.5 - (focus.y / H) * k) * 100;
  const zoomed = k > 1;

  const select = (i: number) => {
    window.clearTimeout(intentTimer.current);
    setActive(i);
    setWorld(false);
  };

  // Hovering a list row selects it, but only after a short pause, so dragging
  // the pointer down the list doesn't whip the camera around.
  const selectSoon = (i: number) => {
    window.clearTimeout(intentTimer.current);
    intentTimer.current = window.setTimeout(() => select(i), 160);
  };
  useEffect(() => () => window.clearTimeout(intentTimer.current), []);

  /** Index of the marker nearest the pointer, if one is close enough. */
  const nearest = (clientX: number, clientY: number) => {
    let best = -1;
    let bestDist = HIT_RADIUS;
    markerRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const d = Math.hypot(clientX - (r.left + r.width / 2), clientY - (r.top + r.height / 2));
      if (d < bestDist) {
        best = i;
        bestDist = d;
      }
    });
    return best >= 0 ? best : null;
  };

  const stageStyle: CSSProperties = {
    transform: `translate(${tx}%, ${ty}%) scale(${k})`,
    transformOrigin: "0 0",
  };
  const camera =
    "transition-transform duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none";

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.55fr_1fr] lg:gap-8">
      {/* ---- the map ---- */}
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#030a07] p-4 sm:p-7">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-mw-mint/20 blur-3xl"
          />

          {/* The viewport: the stage inside it is what the camera moves. */}
          <div
            ref={mapRef}
            className={`relative overflow-hidden rounded-2xl ${hover !== null ? "cursor-pointer" : ""}`}
            style={{ aspectRatio: `${W} / ${H}` }}
            onPointerMove={(e) => {
              if (e.pointerType !== "mouse") return;
              const n = nearest(e.clientX, e.clientY);
              if (n !== hover) setHover(n);
            }}
            onPointerLeave={() => setHover(null)}
            onClick={(e) => {
              const n = nearest(e.clientX, e.clientY);
              if (n !== null) select(n);
            }}
          >
            <div className={`absolute inset-0 ${camera}`} style={stageStyle}>
              {/* Land. The coarse grid reads best from far away; the finer one
                  takes over once the camera is in close. */}
              <div className="mw-map-dots absolute inset-0">
                <svg
                  viewBox={`0 0 ${W} ${H}`}
                  className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${zoomed ? "opacity-0" : "opacity-100"}`}
                  aria-hidden="true"
                >
                  <path d={coarse} stroke="rgba(127,217,180,0.3)" strokeWidth="3.6" strokeLinecap="round" fill="none" />
                </svg>
                <svg
                  viewBox={`0 0 ${W} ${H}`}
                  className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${zoomed ? "opacity-40" : "opacity-0"}`}
                  aria-hidden="true"
                >
                  <path d={fine} stroke="rgba(127,217,180,0.34)" strokeWidth="2.1" strokeLinecap="round" fill="none" />
                </svg>
              </div>

              {/* Coastline and country borders, only once zoomed in: they let you
                  see where one country ends and the next begins (UAE / Oman). */}
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${zoomed ? "opacity-100" : "opacity-0"}`}
                aria-hidden="true"
              >
                <path
                  d={LAND_PATH}
                  fill="rgba(127,217,180,0.09)"
                  stroke="rgba(127,217,180,0.75)"
                  strokeLinejoin="round"
                  style={{ strokeWidth: 0.9 / k }}
                />
                <path
                  d={BORDERS_PATH}
                  fill="none"
                  stroke="rgba(255,255,255,0.28)"
                  strokeLinejoin="round"
                  style={{ strokeWidth: 0.7 / k, strokeDasharray: `${3 / k} ${2.5 / k}` }}
                />
              </svg>

              {/* Routes from the hub. Widths are divided by the zoom so lines
                  keep the same on-screen thickness whatever the camera does. */}
              <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
                {hub &&
                  points.map((p, i) =>
                    p && i !== hubIndex ? (
                      <path
                        key={regions[i].region}
                        d={arc(hub, p)}
                        fill="none"
                        stroke={i === active ? "none" : "rgba(255,255,255,0.14)"}
                        style={{ strokeWidth: 1.2 / k, strokeDasharray: `${2 / k} ${6 / k}` }}
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
                      strokeLinecap="round"
                      className="mw-arc-draw"
                      style={{ strokeWidth: 2 / k, filter: "drop-shadow(0 0 5px rgba(127,217,180,0.9))" }}
                    />
                    <circle r={4 / k} fill="#ffffff" className="mw-arc-bead" style={{ filter: "drop-shadow(0 0 6px #7fd9b4)" }}>
                      <animateMotion dur="2.2s" repeatCount="indefinite" path={arc(hub, points[active]!)} />
                    </circle>
                  </g>
                )}
              </svg>

              {/* Markers: decorative duplicates of the list (aria-hidden). They
                  are counter-scaled so they stay the same size on screen. */}
              {regions.map((r, i) => {
                const p = points[i];
                if (!p) return null;
                const isActive = i === active;
                const isHover = i === hover;
                const isHub = i === hubIndex;
                return (
                  <span
                    key={r.region}
                    aria-hidden="true"
                    className="pointer-events-none absolute"
                    style={{ left: `${(p.x / W) * 100}%`, top: `${(p.y / H) * 100}%` }}
                  >
                    <span className={`absolute left-0 top-0 block ${camera}`} style={{ transform: `scale(${1 / k})` }}>
                      <span
                        ref={(el) => {
                          markerRefs.current[i] = el;
                        }}
                        style={{ "--i": i } as CSSProperties}
                        className="mw-chip absolute left-0 top-0 block -translate-x-1/2 -translate-y-1/2"
                      >
                        <span className="relative grid h-7 w-7 place-items-center">
                          {(isActive || isHub) && (
                            <span className="mw-marker-ping absolute h-3 w-3 rounded-full bg-mw-glow/60" />
                          )}
                          {isHover && !isActive && (
                            <span className="absolute h-6 w-6 rounded-full border border-white/50" />
                          )}
                          <span
                            className={`relative block rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                              r.activeMarket
                                ? "bg-mw-glow shadow-[0_0_12px_rgba(127,217,180,0.9)]"
                                : "border border-white/60 bg-black"
                            } ${isActive ? "h-3.5 w-3.5" : isHover ? "h-3 w-3" : "h-2.5 w-2.5"}`}
                          />
                        </span>
                        {(isActive || isHover) && (
                          <span
                            className={`mw-result pointer-events-none absolute left-5 top-0 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur-md ${
                              isActive
                                ? "border-white/20 bg-black/80 text-white"
                                : "z-10 border-white/10 bg-black/65 text-white/80"
                            }`}
                          >
                            {r.region}
                          </span>
                        )}
                      </span>
                    </span>
                  </span>
                );
              })}
            </div>

            {/* Back out to the whole world. Only offered once zoomed in. */}
            <button
              type="button"
              aria-label="Show the whole world map"
              onClick={(e) => {
                e.stopPropagation();
                setWorld(true);
              }}
              className={`absolute right-2 top-2 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/60 text-white/80 backdrop-blur-md transition-all duration-500 hover:border-mw-glow hover:text-mw-glow ${
                zoomed ? "scale-100 opacity-100" : "pointer-events-none scale-75 opacity-0"
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
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
                  onClick={() => select(i)}
                  onPointerEnter={(e) => e.pointerType === "mouse" && selectSoon(i)}
                  onPointerLeave={() => window.clearTimeout(intentTimer.current)}
                  onFocus={() => select(i)}
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
