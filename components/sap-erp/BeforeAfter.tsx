"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

export type Side = { label: string; title: string; points: readonly string[] };

const clamp = (v: number) => Math.min(92, Math.max(8, v));

function Points({ side, tone }: { side: Side; tone: "before" | "after" }) {
  return (
    <>
      <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${tone === "after" ? "text-[#7fd9b4]" : "text-white/40"}`}>
        {side.label}
      </p>
      <h3 className="mt-3 font-display text-2xl text-white sm:text-3xl">{side.title}</h3>
      <ul className="mt-6 space-y-4">
        {side.points.map((p) => (
          <li key={p} className={`flex items-start gap-3 text-sm leading-relaxed ${tone === "after" ? "text-white/85" : "text-white/55"}`}>
            {tone === "after" ? (
              <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-[#7fd9b4]" aria-hidden="true">
                <path d="M4 10.5L8 14.5L16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-white/35" aria-hidden="true">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
            {p}
          </li>
        ))}
      </ul>
    </>
  );
}

/**
 * Before and after, as a slider you drag (or move with the arrow keys): the
 * on-premises side on the left, the cloud side revealed from the right. The
 * image-comparison slider is a familiar pattern from transformation case
 * studies. Phones get the two sides stacked, since a slider needs width.
 */
export function BeforeAfter({ before, after }: { before: Side; after: Side }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  const fromX = (x: number) => {
    const r = box.current?.getBoundingClientRect();
    if (r) setPos(clamp(((x - r.left) / r.width) * 100));
  };
  const down = (e: PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setDragging(true);
    fromX(e.clientX);
  };
  const move = (e: PointerEvent) => {
    if (dragging) fromX(e.clientX);
  };
  const key = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => clamp(p - 4));
    else if (e.key === "ArrowRight") setPos((p) => clamp(p + 4));
    else if (e.key === "Home") setPos(8);
    else if (e.key === "End") setPos(92);
    else return;
    e.preventDefault();
  };

  return (
    <>
      {/* wide screens: the slider */}
      <div
        ref={box}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
        className="relative hidden h-[26rem] cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[2rem] border border-white/10 md:block"
      >
        <div className="absolute inset-0 bg-[#0c0e0d]">
          <div className="max-w-[46%] p-10 lg:p-12">
            <Points side={before} tone="before" />
          </div>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0f4030] via-[#0a2a1f] to-[#04100b]"
          style={{ clipPath: `inset(0 0 0 ${pos}%)`, transition: dragging ? "none" : "clip-path 0.5s cubic-bezier(0.23,1,0.32,1)" }}
        >
          <div className="ml-auto max-w-[46%] p-10 lg:p-12">
            <Points side={after} tone="after" />
          </div>
        </div>

        {/* handle */}
        <div
          role="slider"
          tabIndex={0}
          aria-label="Compare on premises with Cloud ERP Private"
          aria-valuemin={8}
          aria-valuemax={92}
          aria-valuenow={Math.round(pos)}
          onKeyDown={key}
          className="group absolute inset-y-0 z-10 -ml-px w-0.5 bg-[#7fd9b4] shadow-[0_0_16px_rgba(127,217,180,0.8)] outline-none"
          style={{ left: `${pos}%`, transition: dragging ? "none" : "left 0.5s cubic-bezier(0.23,1,0.32,1)" }}
        >
          <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-[#7fd9b4] bg-black text-[#7fd9b4] shadow-[0_0_24px_rgba(127,217,180,0.6)] transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path d="M9 6l-5 6 5 6M15 6l5 6-5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      {/* phones: both sides, stacked */}
      <div className="space-y-4 md:hidden">
        <div className="rounded-[2rem] border border-white/10 bg-[#0c0e0d] p-7">
          <Points side={before} tone="before" />
        </div>
        <div className="rounded-[2rem] border border-[#7fd9b4]/30 bg-gradient-to-br from-[#0f4030] to-[#04100b] p-7">
          <Points side={after} tone="after" />
        </div>
      </div>
    </>
  );
}
