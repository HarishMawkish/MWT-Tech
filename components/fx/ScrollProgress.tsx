"use client";

import { useEffect, useRef } from "react";

/**
 * A hairline at the very top of the viewport that fills as the page is read.
 * Pure transform + one rAF per scroll burst, so it costs nothing to run.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]">
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-mw-secondary via-mw-glow to-white"
        style={{ boxShadow: "0 0 12px rgba(127, 217, 180, 0.7)" }}
      />
    </div>
  );
}
