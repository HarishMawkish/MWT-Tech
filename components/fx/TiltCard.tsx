"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, hasFinePointer, prefersReducedMotion } from "@/lib/motion";

/**
 * A card that leans toward the pointer in 3D while a green light follows the
 * cursor across its surface (the --mx/--my spotlight in globals.css). The tilt
 * is capped at a few degrees: enough to feel physical, not enough to make the
 * text hard to read.
 */
export function TiltCard({
  children,
  className = "",
  max = 4,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !hasFinePointer() || prefersReducedMotion()) return;

    const rx = gsap.quickTo(el, "rotationX", { duration: 0.5, ease: "power3.out" });
    const ry = gsap.quickTo(el, "rotationY", { duration: 0.5, ease: "power3.out" });
    gsap.set(el, { transformPerspective: 900 });

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      ry((px - 0.5) * 2 * max);
      rx((0.5 - py) * 2 * max);
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    const onLeave = () => {
      rx(0);
      ry(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      gsap.set(el, { clearProps: "transform" });
    };
  }, [max]);

  return (
    <div ref={ref} className={`mw-spot mw-spot--still mw-tilt-card ${className}`}>
      {children}
    </div>
  );
}
