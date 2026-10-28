"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/motion";

/**
 * Sticky card stack. Each child is a `[data-stack-card]` that pins near the
 * top as you scroll; the next one slides up over it. As a card is covered it
 * recedes (scales down slightly, dims) so the pile reads as depth instead of
 * cards just overlapping. The pinning itself is plain CSS `position: sticky`
 * (see the page), so with JS off or reduced motion the stack still works,
 * just without the recede.
 */
export function StackedCards({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-stack-card]"));
      const triggers: ScrollTrigger[] = [];

      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        const inner = card.querySelector<HTMLElement>("[data-stack-inner]");
        const shade = card.querySelector<HTMLElement>("[data-stack-shade]");
        if (!inner) return;
        const stickyTop = parseFloat(getComputedStyle(card).top) || 0;

        // Runs while the next card travels from the bottom of the screen up to
        // where this one is pinned.
        const tween = gsap.to(inner, {
          scale: 0.94,
          ease: "none",
          scrollTrigger: {
            trigger: next,
            start: "top bottom",
            end: `top ${stickyTop}px`,
            scrub: true,
          },
        });
        const dim = shade
          ? gsap.to(shade, {
              opacity: 0.6,
              ease: "none",
              scrollTrigger: { trigger: next, start: "top bottom", end: `top ${stickyTop}px`, scrub: true },
            })
          : null;
        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
        if (dim?.scrollTrigger) triggers.push(dim.scrollTrigger);
      });

      return () => {
        triggers.forEach((t) => t.kill());
        gsap.set(root.querySelectorAll("[data-stack-inner], [data-stack-shade]"), { clearProps: "all" });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
