"use client";

import { useEffect, useRef } from "react";
import { gsap, hasFinePointer, prefersReducedMotion } from "@/lib/motion";

const INTERACTIVE = "a[href], button, [role='button'], summary, label, select, [data-cursor='grow']";
const TEXT_FIELD = "input, textarea";

/**
 * A soft green ring that trails the pointer, with a precise dot at its centre.
 * It grows over anything clickable and steps aside over text fields. It sits
 * *beside* the system cursor rather than replacing it, so nothing is lost if
 * it fails to load. Mouse and trackpad only — touch never sees it.
 */
export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot || !hasFinePointer() || prefersReducedMotion()) return;

    gsap.set([ring, dot], { xPercent: -50, yPercent: -50, opacity: 0 });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });
    const dotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" });

    let visible = false;
    const show = () => {
      if (visible) return;
      visible = true;
      gsap.to([ring, dot], { opacity: 1, duration: 0.3 });
    };
    const hide = () => {
      visible = false;
      gsap.to([ring, dot], { opacity: 0, duration: 0.3 });
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      show();
      ringX(e.clientX);
      ringY(e.clientY);
      dotX(e.clientX);
      dotY(e.clientY);

      const target = e.target instanceof Element ? e.target : null;
      const overText = !!target?.closest(TEXT_FIELD);
      const overLink = !overText && !!target?.closest(INTERACTIVE);
      gsap.to(ring, {
        scale: overLink ? 1.9 : overText ? 0 : 1,
        duration: 0.35,
        ease: "power3.out",
        overwrite: "auto",
      });
      ring.dataset.active = overLink ? "true" : "false";
      gsap.to(dot, { scale: overLink ? 0.4 : overText ? 0 : 1, duration: 0.25, overwrite: "auto" });
    };
    const onDown = () => gsap.to(ring, { scale: 0.8, duration: 0.15, overwrite: "auto" });

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerdown", onDown, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerdown", onDown);
      document.documentElement.removeEventListener("pointerleave", hide);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[200] hidden [@media(hover:hover)_and_(pointer:fine)]:block">
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-9 w-9 rounded-full border border-mw-glow/60 transition-[background-color,border-color] duration-300 data-[active=true]:border-mw-glow data-[active=true]:bg-mw-glow/15"
      />
      <div ref={dotRef} className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-mw-glow" />
    </div>
  );
}
