"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useCases } from "./data";

/**
 * Use cases by function. A list on the left, the chosen function on the right
 * with its headline agent and the other things agents do there. Arrow keys
 * move between tabs, as on any proper tab list. Content re-enters on each
 * change so the switch registers without a heavy transition.
 */
export function UseCaseExplorer() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = useCases[active];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const last = useCases.length - 1;
    let next = i;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = i === last ? 0 : i + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
      {/* tabs: a vertical list on desktop, a scrolling row of pills on phones */}
      <div
        role="tablist"
        aria-label="Use cases by function"
        aria-orientation="vertical"
        className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {useCases.map((u, i) => {
          const on = i === active;
          return (
            <button
              key={u.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`uc-tab-${u.id}`}
              aria-selected={on}
              aria-controls="uc-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`group relative flex shrink-0 items-center gap-4 overflow-hidden rounded-2xl border px-5 py-4 text-left transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] lg:w-full ${
                on
                  ? "border-[#7fd9b4]/40 bg-[#7fd9b4]/[0.07] shadow-[0_20px_40px_-28px_rgba(127,217,180,0.7)]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-y-3 left-0 hidden w-[3px] rounded-full bg-[#7fd9b4] shadow-[0_0_12px_rgba(127,217,180,0.8)] transition-all duration-500 lg:block ${
                  on ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                }`}
              />
              <span
                className={`hidden w-6 font-display text-xs font-semibold tabular-nums tracking-widest lg:block ${
                  on ? "text-[#7fd9b4]" : "text-white/30"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`whitespace-nowrap font-display text-base transition-colors duration-300 lg:whitespace-normal ${
                  on ? "text-white" : "text-white/60 group-hover:text-white/85"
                }`}
              >
                {u.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* panel: a photo of the function at the top, then the detail */}
      <div
        id="uc-panel"
        role="tabpanel"
        aria-labelledby={`uc-tab-${current.id}`}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#04100b]"
      >
        {/* every photo is mounted and cross-faded, so switching never waits on a download */}
        <div className="relative h-44 sm:h-60">
          {useCases.map((u, i) => (
            <Image
              key={u.id}
              src={u.photo.src}
              alt={i === active ? u.photo.alt : ""}
              aria-hidden={i !== active}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className={`object-cover transition-opacity duration-700 ease-out ${i === active ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-[#1c6b51]/25 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04100b] via-[#04100b]/35 to-black/10" />
        </div>

        <div className="relative -mt-12 p-8 pt-0 sm:p-10 sm:pt-0">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#1c6b51]/30 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 right-4 font-display text-[9rem] font-extrabold leading-none text-white/[0.035] sm:text-[12rem]"
          >
            {String(active + 1).padStart(2, "0")}
          </span>

          <div key={current.id} className="sap-rise relative">
            <h3 className="font-display text-2xl text-white sm:text-3xl">{current.label}</h3>

            {current.agent && (
              <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-[#7fd9b4]/30 bg-[#7fd9b4]/[0.07] py-1.5 pl-2 pr-4">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#7fd9b4] text-[#02140d]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/85">{current.agent}</span>
              </div>
            )}

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{current.headline}</p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">Also in this area</p>
              <ul className="mt-4 space-y-3">
                {current.also.map((a, i) => (
                  <li
                    key={a}
                    className="sap-rise flex items-start gap-3 text-sm leading-relaxed text-white/70"
                    style={{ animationDelay: `${120 + i * 90}ms` }}
                  >
                    <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#7fd9b4]" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
