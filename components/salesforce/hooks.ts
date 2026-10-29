"use client";

import { useEffect, useRef, useState } from "react";

/** True once the element has scrolled into view (and stays true). */
export function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

/** Moves `index` along on a timer until the user takes over by calling `stop`. */
export function useAutoAdvance(count: number, ms: number, active: boolean) {
  const [index, setIndex] = useState(0);
  const [stopped, setStopped] = useState(false);
  useEffect(() => {
    if (!active || stopped || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), ms);
    return () => window.clearInterval(id);
  }, [active, stopped, count, ms]);
  return {
    index,
    pick: (i: number) => {
      setStopped(true);
      setIndex(i);
    },
  };
}
