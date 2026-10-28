"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, EASE_OUT_SOFT, prefersReducedMotion } from "@/lib/motion";

/**
 * Children marked `data-stagger` pop in one after another when the group
 * scrolls into view: a short rise, a little scale, a tight delay between each.
 * Used where a grid of small items (logos) would otherwise appear all at once.
 * The transform is cleared afterwards so the items' own hover styles take over.
 */
export function StaggerIn({
  children,
  className = "",
  each = 0.055,
}: {
  children: ReactNode;
  className?: string;
  each?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-stagger]"));
    if (!items.length) return;

    gsap.set(items, { opacity: 0, y: 26, scale: 0.92 });
    const trigger = ScrollTrigger.create({
      trigger: root,
      start: "top 88%",
      once: true,
      onEnter: () =>
        gsap.to(items, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: EASE_OUT_SOFT,
          stagger: each,
          clearProps: "transform,opacity",
        }),
    });

    return () => {
      trigger.kill();
      gsap.killTweensOf(items);
      gsap.set(items, { clearProps: "transform,opacity" });
    };
  }, [each]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
