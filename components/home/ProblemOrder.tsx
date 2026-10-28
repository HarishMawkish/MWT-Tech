"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/motion";

// Share of the scroll range by which each row trails the one above it.
const STAGGER = 0.1;

// Where each item starts before it is "connected". Fixed values, not random,
// so the scattered state is the same on every visit.
const SCATTER = [
  { x: -70, y: 18, r: -4 },
  { x: 90, y: -10, r: 3 },
  { x: -40, y: 26, r: -2.5 },
  { x: 110, y: 8, r: 4.5 },
  { x: -90, y: -14, r: -3 },
  { x: 60, y: 22, r: 2 },
  { x: -30, y: -8, r: -5 },
];

/**
 * The pain points as a visual argument. Scrolling in, the items start
 * scattered and tilted, each one a separate, unconnected thing. As you scroll
 * they drift into a straight line and a rail connects them, which is exactly
 * the story the section tells: disconnected systems, made one. Without JS (or
 * with reduced motion) they simply sit in order.
 */
export function ProblemOrder({ items }: { items: string[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const railRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const rail = railRef.current;
    if (!list || !rail || prefersReducedMotion()) return;

    const rows = Array.from(list.querySelectorAll<HTMLElement>("[data-row]"));
    const ease = gsap.parseEase("power3.out");
    let spread = window.innerWidth < 640 ? 0.35 : 1; // less sideways travel on a phone

    const render = (p: number) => {
      rail.style.transform = `scaleY(${gsap.utils.clamp(0, 1, (p - 0.1) / 0.9)})`;
      rows.forEach((row, i) => {
        const s = SCATTER[i % SCATTER.length];
        // Each row settles a little after the one above it.
        const t = gsap.utils.clamp(0, 1, p * (1 + STAGGER * (rows.length - 1)) - i * STAGGER);
        const e = ease(t);
        gsap.set(row, {
          x: s.x * spread * (1 - e),
          y: s.y * (1 - e),
          rotation: s.r * (1 - e),
          opacity: 0.35 + 0.65 * e,
        });
        row.style.setProperty("--chaos", String(1 - e));
        row.classList.toggle("is-linked", t > 0.98);
      });
    };
    render(0);

    const st = ScrollTrigger.create({
      trigger: list,
      start: "top 90%",
      end: "bottom 65%",
      scrub: 0.5,
      onUpdate: (self) => render(self.progress),
      onRefresh: () => {
        spread = window.innerWidth < 640 ? 0.35 : 1;
      },
    });

    return () => {
      st.kill();
      gsap.set(rows, { clearProps: "all" });
      rows.forEach((row) => {
        row.style.removeProperty("--chaos");
        row.classList.remove("is-linked");
      });
      rail.style.transform = "";
    };
  }, []);

  return (
    <div className="relative">
      {/* The rail that "connects" everything once the items line up. */}
      <span aria-hidden="true" className="absolute bottom-6 left-[21px] top-6 w-px bg-white/10" />
      <span
        ref={railRef}
        aria-hidden="true"
        className="absolute bottom-6 left-[21px] top-6 w-px origin-top bg-gradient-to-b from-mw-glow to-mw-secondary shadow-[0_0_10px_rgba(127,217,180,0.7)]"
      />

      <ol ref={listRef} className="relative space-y-3.5">
        {items.map((text) => (
          <li
            key={text}
            data-row
            className="mw-chaos-row relative flex items-center gap-4 rounded-2xl border border-white/10 bg-[#04100b] py-4 pl-12 pr-5"
          >
            <span
              aria-hidden="true"
              className="mw-chaos-node absolute left-[14px] top-1/2 grid h-4 w-4 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-2.5 w-2.5 text-black opacity-0">
                <path d="M4 10.5L8 14.5L16 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-base leading-snug text-gray-300 sm:text-lg">{text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
