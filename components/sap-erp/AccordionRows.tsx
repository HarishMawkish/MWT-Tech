"use client";

import { useState } from "react";

/**
 * Numbered rows that open on click, one at a time: the classic accordion, set
 * large, as consultancy and agency sites use it for "what we do". Deliberately
 * click-driven (unlike the hover panels elsewhere) so a long list stays calm.
 */
export function AccordionRows({ items }: { items: readonly { title: string; body: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <ul className="border-t border-white/10">
      {items.map((it, i) => {
        const on = open === i;
        return (
          <li key={it.title} className="border-b border-white/10">
            <button
              type="button"
              aria-expanded={on}
              aria-controls={`acc-${i}`}
              onClick={() => setOpen(on ? -1 : i)}
              className="group flex w-full items-center gap-5 py-6 text-left sm:gap-8"
            >
              <span
                className={`w-10 shrink-0 font-display text-sm font-bold tabular-nums tracking-widest transition-colors duration-300 ${
                  on ? "text-[#7fd9b4]" : "text-white/30"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`flex-1 font-display text-xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] sm:text-3xl ${
                  on ? "translate-x-1 text-white" : "text-white/55 group-hover:text-white/80"
                }`}
              >
                {it.title}
              </span>
              <span
                aria-hidden="true"
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                  on ? "rotate-45 border-[#7fd9b4] bg-[#7fd9b4] text-[#02140d]" : "border-white/20 text-white/60 group-hover:border-white/50"
                }`}
              >
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              id={`acc-${i}`}
              role="region"
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden pl-[3.75rem] pr-14 text-base leading-relaxed text-white/65 sm:pl-[4.5rem]">
                <span className="block pb-7">{it.body}</span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
