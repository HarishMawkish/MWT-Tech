"use client";

import { useEffect, useRef, useState } from "react";
import { proofStats } from "./data";

/** Counts up to `value` the first time it scrolls into view. */
function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(() => 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const step = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          setN(Math.round((1 - Math.pow(1 - p, 4)) * value));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums" aria-label={String(value)}>
      {n}
    </span>
  );
}

/**
 * The figures SAP itself publishes, as large numbers. Each keeps its source
 * line right underneath, because a number without a source is just decoration.
 */
export function ProofStats() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {proofStats.map((s, i) => (
        <li
          key={s.label}
          className="sap-rise group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#7fd9b4]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          />
          {s.prefix && <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-white/50">{s.prefix}</p>}
          <p className={`relative font-display text-7xl font-bold leading-none text-[#7fd9b4] ${s.prefix ? "mt-2" : "mt-[1.6rem]"}`}>
            <CountUp value={s.value} />
            <span className="text-5xl">{s.suffix}</span>
          </p>
          <p className="relative mt-5 text-lg font-medium leading-snug text-white">{s.label}</p>
          <p className="relative mt-3 text-xs leading-relaxed text-white/45">{s.source}</p>
        </li>
      ))}
    </ul>
  );
}
