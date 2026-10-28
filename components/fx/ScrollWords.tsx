"use client";

import { useEffect, useRef, type ElementType } from "react";
import { gsap, prefersReducedMotion } from "@/lib/motion";

/**
 * Text that lights up word by word as you scroll through it — the reading
 * position is the animation. Scrubbed, so scrolling back dims it again.
 * Used for a single statement per page; a whole page of it would be tiring.
 */
export function ScrollWords({
  children,
  as: Tag = "h2",
  className = "",
}: {
  children: string;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return;
    const words = root.querySelectorAll<HTMLElement>("[data-word]");

    const tween = gsap.fromTo(
      words,
      { opacity: 0.16 },
      {
        opacity: 1,
        ease: "none",
        stagger: 0.12,
        scrollTrigger: { trigger: root, start: "top 82%", end: "bottom 48%", scrub: 0.6 },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(words, { clearProps: "opacity" });
    };
  }, []);

  const words = children.split(" ");
  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i}>
          <span data-word className="inline-block">
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
