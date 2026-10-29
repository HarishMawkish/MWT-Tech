"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up to `value` the first time it scrolls into view. */
export function CountUp({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

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
        const step = (now: number) => {
          const p = Math.min((now - start) / 1500, 1);
          setN((1 - Math.pow(1 - p, 4)) * value);
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
      {n.toFixed(decimals)}
    </span>
  );
}
