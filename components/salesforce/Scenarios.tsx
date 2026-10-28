"use client";

import { useRef } from "react";
import type { CloudScenario } from "./clouds";
import { Spot } from "./parts";

/**
 * A rail of scenario cards that scrolls sideways and snaps; arrows for people
 * without a trackpad. The cards sit on a common baseline, and the one you point
 * at grows taller rather than floating up, so nothing ever crosses the edge of the
 * scrolling rail (which would clip it). Each slot has a fixed height equal to the
 * tallest a card gets, so growing never moves anything else on the page.
 */
export function Scenarios({ items }: { items: CloudScenario[] }) {
  const rail = useRef<HTMLUListElement>(null);
  const go = (dir: 1 | -1) => rail.current?.scrollBy({ left: dir * 380, behavior: "smooth" });

  return (
    <div>
      <ul
        ref={rail}
        className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 [scrollbar-width:none] lg:-mx-8 lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((s, i) => (
          <li key={s.title} className="flex h-[28rem] w-[82%] shrink-0 snap-start items-end sm:w-[22rem]">
            <Spot className="sf-glass group flex h-[24rem] w-full flex-col rounded-[1.75rem] p-7 transition-[height,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:h-[28rem] hover:border-[rgba(var(--sf-rgb),0.6)] focus-within:h-[28rem]">
              <span className="font-display text-7xl leading-none text-white/[0.09] transition-colors duration-500 group-hover:text-[color:var(--sf)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-auto block pt-8 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--sf)" }}>
                {s.tag}
              </span>
              <h3 className="mt-3 font-display text-2xl leading-tight text-white">{s.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/65 transition-colors duration-500 group-hover:text-white/80">{s.body}</p>
            </Spot>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-3">
        {([-1, 1] as const).map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => go(d)}
            aria-label={d === 1 ? "Next scenarios" : "Previous scenarios"}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:border-[color:var(--sf)] hover:bg-[rgba(var(--sf-rgb),0.2)] hover:text-white active:scale-95"
          >
            <span aria-hidden="true">{d === 1 ? "→" : "←"}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
