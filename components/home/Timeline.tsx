"use client";

import { useEffect, useRef } from "react";
import { methodology } from "@/lib/site-data";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/motion";

/**
 * The methodology as a rail that fills as you scroll: each step lights up in
 * turn when the rail reaches it, so the order of the process is felt rather
 * than read. Horizontal on desktop, vertical on phones. Until JS runs (or with
 * reduced motion) every step simply shows as lit.
 */
export function Timeline() {
  const rootRef = useRef<HTMLDivElement>(null);
  const fillXRef = useRef<HTMLSpanElement>(null);
  const fillYRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const fillX = fillXRef.current;
    const fillY = fillYRef.current;
    if (!root || !fillX || !fillY || prefersReducedMotion()) return;

    const steps = Array.from(root.querySelectorAll<HTMLElement>("[data-step]"));
    root.dataset.ready = "true";

    const update = (progress: number) => {
      fillX.style.transform = `scaleX(${progress})`;
      fillY.style.transform = `scaleY(${progress})`;
      steps.forEach((step, i) => {
        // A step lights as the rail's head reaches its node.
        const reached = progress >= i / steps.length + 0.02;
        step.classList.toggle("is-active", reached);
      });
    };
    update(0);

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const st = ScrollTrigger.create({
        trigger: root,
        start: "top 78%",
        end: "top 30%",
        scrub: 0.4,
        onUpdate: (self) => update(self.progress),
      });
      return () => st.kill();
    });
    mm.add("(max-width: 1023px)", () => {
      const st = ScrollTrigger.create({
        trigger: root,
        start: "top 70%",
        end: "bottom 62%",
        scrub: 0.4,
        onUpdate: (self) => update(self.progress),
      });
      return () => st.kill();
    });

    return () => {
      mm.revert();
      delete root.dataset.ready;
    };
  }, []);

  return (
    <div ref={rootRef} className="mw-timeline relative">
      {/* connecting rail: a dim track with a bright fill on top of it */}
      <div className="pointer-events-none absolute left-[18px] top-3 h-[calc(100%-24px)] w-px bg-white/10 lg:left-0 lg:top-3 lg:h-px lg:w-full">
        <span
          ref={fillYRef}
          className="absolute inset-0 origin-top bg-gradient-to-b from-mw-glow to-mw-secondary shadow-[0_0_12px_rgba(127,217,180,0.8)] lg:hidden"
          style={{ transform: "scaleY(1)" }}
        />
        <span
          ref={fillXRef}
          className="absolute inset-0 hidden origin-left bg-gradient-to-r from-mw-secondary to-mw-glow shadow-[0_0_12px_rgba(127,217,180,0.8)] lg:block"
          style={{ transform: "scaleX(1)" }}
        />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6">
        {methodology.map((m) => (
          <div key={m.step} data-step className="mw-step relative pl-12 lg:pl-0 lg:pt-12">
            <div
              data-node
              className="absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full border border-mw-glow/40 bg-mw-void text-xs font-semibold tracking-wider text-white/85 lg:left-0 lg:top-0"
            >
              {m.step}
            </div>
            <div data-body>
              <h3 className="font-display text-2xl text-white">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{m.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
