"use client";

import { useEffect, useRef, type ElementType } from "react";
import { gsap, ScrollTrigger, EASE_OUT, prefersReducedMotion, whenLoaderDone } from "@/lib/motion";

type Part = { text: string; className?: string };

/**
 * Headline that rises into view word by word from behind a mask. The text is
 * real, selectable text in the DOM the whole time (nothing is rendered to a
 * canvas), so search engines and screen readers read it as one heading.
 *
 * `on="load"` waits for the splash loader (hero); `on="view"` waits for the
 * heading to scroll into view.
 */
export function SplitHeading({
  parts,
  as: Tag = "h2",
  on = "view",
  delay = 0,
  className = "",
}: {
  parts: Part[];
  as?: ElementType;
  on?: "load" | "view";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return;
    const words = root.querySelectorAll<HTMLElement>("[data-word]");

    gsap.set(words, { yPercent: 115 });
    const play = () =>
      gsap.to(words, {
        yPercent: 0,
        duration: 1.1,
        ease: EASE_OUT,
        stagger: 0.07,
        delay,
      });

    let cleanup: () => void;
    if (on === "load") {
      cleanup = whenLoaderDone(play);
    } else {
      const trigger = ScrollTrigger.create({ trigger: root, start: "top 88%", once: true, onEnter: play });
      cleanup = () => trigger.kill();
    }

    return () => {
      cleanup();
      gsap.killTweensOf(words);
      gsap.set(words, { clearProps: "transform" });
    };
  }, [on, delay]);

  return (
    <Tag ref={ref} className={className}>
      {parts.map((part, p) =>
        part.text.split(" ").map((word, w, all) => (
          <span key={`${p}-${w}`}>
            {/* The padding/negative-margin pair gives descenders room inside the mask without shifting layout. */}
            <span className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom">
              <span data-word className={`inline-block will-change-transform ${part.className ?? ""}`}>
                {word}
              </span>
            </span>
            {w < all.length - 1 || p < parts.length - 1 ? " " : null}
          </span>
        )),
      )}
    </Tag>
  );
}
