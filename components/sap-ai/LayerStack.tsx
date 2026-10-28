"use client";

import { useEffect, useRef, useState } from "react";
import type { StackLayer } from "./types";

// Height of each slab above the one below it, and how far the chosen slab lifts.
const GAP = 58;
const LIFT = 36;

/**
 * SAP Business AI as a stack you can take apart. Point at a layer on the left
 * and its slab lifts out of the stack and lights up while the explanation
 * changes. With no input it steps through the layers by itself, pausing as
 * soon as you point at it, and never autoplays under reduced motion.
 */
export function LayerStack({ layers, label = "Layers" }: { layers: StackLayer[]; label?: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const visible = useRef(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => (visible.current = e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (visible.current) setActive((a) => (a + 1) % layers.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [paused]);

  const layer = layers[active];

  return (
    <div
      ref={rootRef}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16"
    >
      {/* ---- selector + explanation ---- */}
      <div>
        <ul className="space-y-2" role="tablist" aria-label={label}>
          {layers.map((l, i) => {
            const on = i === active;
            return (
              <li key={l.id}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border px-5 py-4 text-left transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    on
                      ? "border-[#7fd9b4]/40 bg-[#7fd9b4]/[0.07] shadow-[0_20px_40px_-26px_rgba(127,217,180,0.7)]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <span
                    className={`w-16 shrink-0 font-display text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                      on ? "text-[#7fd9b4]" : "text-white/35"
                    }`}
                  >
                    {l.tag}
                  </span>
                  <span className={`font-display text-lg transition-colors ${on ? "text-white" : "text-white/65"}`}>
                    {l.name}
                  </span>
                  {/* progress bar for the autoplay step */}
                  {on && !paused && (
                    <span aria-hidden="true" className="sap-step-bar absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[#7fd9b4]" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div key={layer.id} role="tabpanel" className="sap-rise mt-7 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <p className="text-base leading-relaxed text-white/80">{layer.blurb}</p>
          <ul className="mt-5 space-y-3">
            {layer.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-white/65">
                <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-[#7fd9b4]" aria-hidden="true">
                  <path d="M4 10.5L8 14.5L16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---- the stack ---- */}
      <div aria-hidden="true" className="relative mx-auto h-[24rem] w-full max-w-[32rem] [perspective:1400px]">
        <div className="absolute inset-0 grid place-items-center">
          <div
            className="relative h-60 w-60 sm:h-64 sm:w-64"
            style={{ transformStyle: "preserve-3d", transform: "rotateX(58deg) rotateZ(-38deg)" }}
          >
            {layers.map((l, i) => {
              const on = i === active;
              // Layer 0 (Joule Work) is the top slab.
              const z = (layers.length - 1 - i) * GAP + (on ? LIFT : 0);
              return (
                <div
                  key={l.id}
                  className={`absolute inset-0 rounded-3xl border transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    on
                      ? "border-[#7fd9b4]/80 bg-[#0e3a2b]/90 shadow-[0_0_60px_rgba(127,217,180,0.45)]"
                      : "border-white/15 bg-[#07130e]/85"
                  }`}
                  style={{ transform: `translateZ(${z}px)` }}
                >
                  {/* slab surface: a faint grid, brighter when active */}
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(127,217,180,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(127,217,180,0.14) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                      opacity: on ? 1 : 0.4,
                      transition: "opacity 0.8s ease",
                    }}
                  />
                  <span
                    className={`absolute bottom-4 left-5 font-display text-xs font-bold uppercase tracking-[0.24em] transition-colors duration-700 ${
                      on ? "text-[#7fd9b4]" : "text-white/35"
                    }`}
                  >
                    {l.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
