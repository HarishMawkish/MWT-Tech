"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger, prefersReducedMotion } from "@/lib/motion";

/**
 * A numbered list that reads like a spotlight moving down the page: the row
 * near the middle of the screen is lit, the others step back. Until JS runs
 * (or with reduced motion) every row is shown at full strength.
 */
export function FocusList({ items }: { items: string[] }) {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = ref.current;
    if (!list || prefersReducedMotion()) return;

    const rows = Array.from(list.querySelectorAll<HTMLElement>("[data-focus-row]"));
    list.dataset.ready = "true";
    const triggers = rows.map((row) =>
      ScrollTrigger.create({
        trigger: row,
        start: "top 64%",
        end: "bottom 36%",
        toggleClass: { targets: row, className: "is-focus" },
      }),
    );

    return () => {
      triggers.forEach((t) => t.kill());
      rows.forEach((r) => r.classList.remove("is-focus"));
      delete list.dataset.ready;
    };
  }, []);

  return (
    <ol ref={ref} className="mw-focus-list divide-y divide-white/10 border-y border-white/10">
      {items.map((text, i) => (
        <li key={text} data-focus-row className="group relative flex items-baseline gap-6 py-7 sm:gap-8">
          <span
            aria-hidden="true"
            className="mw-focus-bar absolute inset-y-0 left-0 w-[3px] origin-center scale-y-0 rounded-full bg-mw-glow shadow-[0_0_14px_rgba(127,217,180,0.7)]"
          />
          <span className="mw-focus-num w-8 shrink-0 pl-3 font-display text-sm font-semibold tracking-widest text-mw-glow">
            0{i + 1}
          </span>
          <span className="mw-focus-text text-lg font-medium leading-snug text-white/80 sm:text-2xl">{text}</span>
        </li>
      ))}
    </ol>
  );
}
