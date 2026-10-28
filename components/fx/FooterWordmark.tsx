"use client";

import { useRef, type PointerEvent } from "react";

/**
 * The company name, set enormous across the foot of the page. A pool of green
 * light follows the pointer through the letters; at rest they sit as a faint
 * outline. Decorative (the name is already in the footer as real text).
 */
export function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      aria-hidden="true"
      onPointerMove={onMove}
      className="mw-footer-wordmark select-none overflow-hidden pt-10 text-center font-display font-extrabold uppercase leading-[0.8] tracking-[-0.04em]"
      style={{ fontSize: "clamp(3.5rem, 15.5vw, 15rem)" }}
    >
      Mawkish
    </div>
  );
}
