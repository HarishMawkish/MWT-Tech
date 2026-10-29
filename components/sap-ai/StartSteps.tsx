"use client";

import { useEffect, useRef, useState } from "react";
import type { Step } from "./types";

/**
 * The five steps SAP recommends for starting with AI agents, as a rail that
 * fills as you read down it. Each step lights when it reaches the middle of the
 * screen and stays lit, so the page shows how far through the process you are.
 * Without JS (or with reduced motion) every step is simply shown.
 */
export function StartSteps({ steps: startSteps }: { steps: readonly Step[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const [lit, setLit] = useState<number>(startSteps.length); // all lit until JS takes over
  const [fill, setFill] = useState(1);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const list = listRef.current;
    if (!list || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setLive(true);
    const items = Array.from(list.querySelectorAll<HTMLElement>("[data-step]"));

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.62;
      let count = 0;
      items.forEach((el) => {
        if (el.getBoundingClientRect().top < line) count++;
      });
      setLit(count);

      // Rail head: from the first node to the last lit node.
      const first = items[0].getBoundingClientRect();
      const total = items[items.length - 1].getBoundingClientRect().top - first.top || 1;
      const head = Math.min(Math.max(line - first.top, 0), total);
      setFill(count === 0 ? 0 : Math.min(head / total, 1));
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
  }, []);

  return (
    <ol ref={listRef} className="relative">
      {/* rail: starts at the first node, ends at the last */}
      <span aria-hidden="true" className="absolute bottom-6 left-[19px] top-6 w-px bg-white/10" />
      <span
        aria-hidden="true"
        className="absolute left-[19px] top-6 w-px origin-top bg-gradient-to-b from-[#7fd9b4] to-[#1c6b51] shadow-[0_0_12px_rgba(127,217,180,0.8)]"
        style={{ height: "calc(100% - 3rem)", transform: `scaleY(${fill})` }}
      />
      {startSteps.map((s, i) => {
        const on = i < lit;
        return (
          <li key={s.title} data-step className="relative flex gap-5 pb-10 last:pb-0">
            <span
              className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border font-display text-sm font-bold transition-all duration-500 ${
                on
                  ? "border-[#7fd9b4] bg-[#0e3a2b] text-[#7fd9b4] shadow-[0_0_0_5px_rgba(127,217,180,0.1),0_0_22px_rgba(127,217,180,0.45)]"
                  : "border-white/20 bg-black text-white/40"
              }`}
            >
              {i + 1}
            </span>
            <div
              className={`pt-1 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                live && !on ? "translate-y-2 opacity-40" : "translate-y-0 opacity-100"
              }`}
            >
              <h3 className="font-display text-xl text-white">{s.title}</h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base">{s.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
