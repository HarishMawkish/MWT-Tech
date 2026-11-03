"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Scroll reveal for the homepage, scoped to the .hp stylesheet.
 *
 * Content is visible by default and only hidden once the observer is wired
 * up, so a JS failure leaves a readable page rather than a blank one.
 */
export function Rv({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  /** Stagger within a group. Keep to 30–80ms steps. */
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("rv");

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        // Named "rv-in", not "in": `.in` is this stylesheet's layout
        // container (max-width + auto margins + padding), and reusing that
        // name here silently applied container sizing to every revealed
        // element.
        el.classList.add("rv-in");
        io.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -56px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={delay ? ({ "--d": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
