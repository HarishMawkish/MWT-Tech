"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, EASE_OUT, prefersReducedMotion } from "@/lib/motion";

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A number that rolls into place like a mechanical odometer: each digit is a
 * tall strip of 0-9 that slides until the right figure sits in the window.
 * Digits settle one after another, rightmost first, so the number "lands".
 * Screen readers get the plain number; the strips are decoration.
 */
export function StatCounter({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const digits = String(Math.max(0, Math.round(value))).split("").map(Number);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const strips = Array.from(root.querySelectorAll<HTMLElement>("[data-strip]"));
    const target = (el: HTMLElement) => -Number(el.dataset.digit) * 10;

    if (prefersReducedMotion()) {
      strips.forEach((s) => gsap.set(s, { yPercent: target(s) }));
      return;
    }

    gsap.set(strips, { yPercent: 0 });
    const trigger = ScrollTrigger.create({
      trigger: root,
      start: "top 92%",
      once: true,
      onEnter: () => {
        strips.forEach((strip, i) => {
          // Rightmost digit starts first and spins the furthest.
          const fromRight = strips.length - 1 - i;
          gsap.fromTo(
            strip,
            { yPercent: 0 },
            {
              yPercent: target(strip),
              duration: 1.5 + i * 0.15,
              delay: fromRight * 0.08,
              ease: EASE_OUT,
            },
          );
        });
      },
    });

    return () => {
      trigger.kill();
      gsap.killTweensOf(strips);
    };
  }, [value]);

  return (
    <span ref={rootRef} className={`mw-tabular inline-flex items-baseline ${className}`} aria-label={`${value}${suffix}`}>
      {digits.map((d, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block h-[1.08em] overflow-hidden align-bottom leading-[1.08]"
        >
          <span data-strip data-digit={d} className="block will-change-transform">
            {DIGITS.map((n) => (
              <span key={n} className="block h-[1.08em]">
                {n}
              </span>
            ))}
          </span>
        </span>
      ))}
      {suffix && <span aria-hidden="true">{suffix}</span>}
    </span>
  );
}
