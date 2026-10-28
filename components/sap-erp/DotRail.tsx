"use client";

import { useEffect, useState } from "react";
import type { PageSection } from "../sap-ai/types";

/**
 * Page navigation as a column of dots down the right edge, the way Apple's
 * long product pages do it: nothing across the top, just a quiet marker of where
 * you are. Each section's name appears beside its dot on hover or focus. The
 * only thing that can be pointed at is the dot itself (the names never catch
 * the pointer), so the rail never gets in the way of the page beneath it.
 * Desktop only.
 */
export function DotRail({ sections }: { sections: PageSection[] }) {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter((e): e is HTMLElement => !!e);
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let current = els[0]?.id ?? sections[0].id;
      for (const el of els) if (el.getBoundingClientRect().top <= line) current = el.id;
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [sections]);

  return (
    <nav aria-label="On this page" className="pointer-events-none fixed right-2 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <ul className="flex flex-col items-center">
        {sections.map((s) => {
          const on = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-label={s.label}
                aria-current={on ? "true" : undefined}
                className="group pointer-events-auto relative grid h-7 w-6 place-items-center"
              >
                <span
                  className={`block rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    on
                      ? "h-3 w-3 bg-[#7fd9b4] shadow-[0_0_14px_rgba(127,217,180,0.9)]"
                      : "h-2 w-2 bg-white/25 group-hover:bg-white/70"
                  }`}
                />
                <span className="pointer-events-none absolute right-full mr-2 translate-x-2 whitespace-nowrap rounded-full border border-white/10 bg-black/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                  {s.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
