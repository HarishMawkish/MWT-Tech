"use client";

import { useEffect, useRef, useState } from "react";
import type { Step } from "../sap-ai/types";

/**
 * A horizontal road to go-live. When it scrolls into view a bright line runs
 * the length of it and each milestone lights as the line reaches it. Stacks
 * vertically on phones. Shown complete without JS or with reduced motion.
 */
export function StepperH({ steps }: { steps: readonly Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [live, setLive] = useState(false);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setLive(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setOn(true);
        io.disconnect();
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const shown = !live || on;
  const n = steps.length;

  return (
    <ol ref={ref} className="relative grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6">
      {/* the road: a dim track and a bright line that runs along it */}
      <span aria-hidden="true" className="absolute left-[19px] top-5 bottom-5 w-px bg-white/10 lg:inset-x-5 lg:bottom-auto lg:h-px lg:w-auto" />
      <span
        aria-hidden="true"
        className="absolute left-[19px] top-5 bottom-5 w-px origin-top bg-gradient-to-b from-[#7fd9b4] to-[#1c6b51] shadow-[0_0_14px_rgba(127,217,180,0.8)] transition-transform duration-[2200ms] ease-[cubic-bezier(0.65,0,0.35,1)] lg:inset-x-5 lg:bottom-auto lg:h-px lg:w-auto lg:origin-left lg:bg-gradient-to-r"
        style={{ transform: shown ? "scale(1)" : "scale(0)" }}
      />
      {steps.map((s, i) => (
        <li key={s.title} className="relative pl-14 lg:pl-0 lg:pt-14">
          <span
            className={`absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border font-display text-sm font-bold transition-all duration-700 ${
              shown
                ? "border-[#7fd9b4] bg-[#0e3a2b] text-[#7fd9b4] shadow-[0_0_0_5px_rgba(127,217,180,0.1),0_0_22px_rgba(127,217,180,0.45)]"
                : "border-white/20 bg-black text-white/40"
            }`}
            style={{ transitionDelay: live ? `${(i / n) * 1900}ms` : "0ms" }}
          >
            {i + 1}
          </span>
          <h3 className="font-display text-xl text-white">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/65">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
