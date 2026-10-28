"use client";

import { useState } from "react";
import { industries } from "@/lib/site-data";
import { industryIconBySlug, IconLayers } from "./icons";

/**
 * Industries as a large typographic index. Point at a sector and it lights up
 * while the rest recede; a preview panel on the right shows its icon and
 * description. On a phone the description opens inline under the name instead
 * (tap to open). The panel and the inline text are the same content, so
 * nothing is lost at either size.
 */
export function IndustryIndex() {
  const [active, setActive] = useState(0);
  const current = industries[active];
  const CurrentIcon = industryIconBySlug[current.slug] ?? IconLayers;

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
      <ul className="border-t border-white/10">
        {industries.map((ind, i) => {
          const Icon = industryIconBySlug[ind.slug] ?? IconLayers;
          const isActive = i === active;
          return (
            <li key={ind.slug} className="border-b border-white/10">
              <button
                type="button"
                aria-expanded={isActive}
                onClick={() => setActive(i)}
                onPointerEnter={(e) => {
                  if (e.pointerType === "mouse") setActive(i);
                }}
                onFocus={() => setActive(i)}
                className="group relative flex w-full items-center gap-4 py-4 text-left sm:gap-6 sm:py-5"
              >
                {/* Green bar that grows in from the left on the active row. */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-4 top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-full bg-mw-glow shadow-[0_0_14px_rgba(127,217,180,0.8)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                  }`}
                />
                <span
                  className={`w-7 shrink-0 font-display text-xs font-semibold tracking-widest tabular-nums transition-colors duration-300 ${
                    isActive ? "text-mw-glow" : "text-white/30"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex-1 font-display text-2xl font-bold uppercase leading-none tracking-tight transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] sm:text-3xl lg:text-4xl ${
                    isActive ? "translate-x-2 text-white" : "text-white/35 group-hover:text-white/60"
                  }`}
                >
                  {ind.name}
                </span>
                <Icon
                  className={`h-6 w-6 shrink-0 transition-all duration-500 lg:hidden ${
                    isActive ? "text-mw-glow" : "text-white/25"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`hidden text-xl text-mw-glow transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] lg:block ${
                    isActive ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                  }`}
                >
                  &rarr;
                </span>
              </button>

              {/* Inline description, phones and tablets only. grid-rows 0fr→1fr
                  animates the height without measuring it in JS. */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] lg:hidden ${
                  isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden pl-[3.25rem] pr-2 text-sm leading-relaxed text-white/65">
                  <span className="block pb-5">{ind.description}</span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Preview panel, desktop only. Re-keyed on the active sector so the
          content re-enters each time the selection changes. */}
      <div className="relative hidden lg:block">
        <div className="sticky top-32">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#04100b] p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-mw-glow/10 blur-3xl"
            />
            <CurrentIcon className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 text-white/[0.04]" />

            <div key={current.slug} className="mw-result relative">
              <div className="mw-icon-tile grid h-16 w-16 place-items-center rounded-2xl text-white">
                <CurrentIcon className="h-8 w-8" />
              </div>
              <p className="mt-10 font-display text-xs font-semibold tracking-[0.22em] text-mw-glow">
                {String(active + 1).padStart(2, "0")} / {String(industries.length).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-3xl text-white">{current.name}</h3>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-white/70">{current.description}</p>
            </div>

            {/* Progress ticks: a quiet read of where you are in the list. */}
            <div className="relative mt-10 flex gap-1.5" aria-hidden="true">
              {industries.map((ind, i) => (
                <span
                  key={ind.slug}
                  className={`h-[3px] flex-1 rounded-full transition-colors duration-500 ${
                    i === active ? "bg-mw-glow" : "bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
