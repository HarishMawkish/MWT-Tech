"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/motion";

const BASE_SPEED = 70; // px per second when the page is still

/**
 * Oversized typographic band that drifts on its own and reacts to scrolling:
 * scroll faster and it speeds up and leans into the motion; scroll back and
 * it reverses. Decorative, so it is hidden from assistive tech. With reduced
 * motion it simply sits still.
 */
export function BigMarquee({ words }: { words: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    if (!track || !wrap || prefersReducedMotion()) return;

    let seq = track.scrollWidth / 2;
    let pos = 0;
    let dir = 1;
    let boost = 0;
    let visible = false;

    const measure = () => {
      seq = track.scrollWidth / 2;
    };
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { rootMargin: "200px" });
    io.observe(wrap);
    window.addEventListener("resize", measure);

    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        dir = self.direction;
        boost = Math.min(Math.abs(self.getVelocity()) / 220, 16);
      },
    });

    const skew = gsap.quickSetter(track, "skewX", "deg");
    const move = gsap.quickSetter(track, "x", "px");

    const tick = (_t: number, deltaMs: number) => {
      if (!visible) return;
      boost *= 0.93;
      pos -= dir * (BASE_SPEED + boost * 55) * (deltaMs / 1000);
      // Wrap inside one sequence length so the loop never shows a seam.
      if (pos <= -seq) pos += seq;
      if (pos > 0) pos -= seq;
      move(pos);
      skew(Math.max(-9, Math.min(9, -dir * boost * 0.55)));
    };
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      st.kill();
      io.disconnect();
      window.removeEventListener("resize", measure);
      gsap.set(track, { clearProps: "transform" });
    };
  }, []);

  const sequence = (key: string) =>
    words.map((word, i) => (
      <span key={`${key}-${i}`} className="flex shrink-0 items-center gap-[0.35em] pr-[0.35em]">
        <span className={i % 2 === 0 ? "mw-outline-text" : "mw-text-gradient"}>{word}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[0.28em] w-[0.28em] shrink-0 text-mw-glow">
          <path d="M12 1l11 11-11 11L1 12z" fill="currentColor" />
        </svg>
      </span>
    ));

  return (
    <div ref={wrapRef} aria-hidden="true" className="relative overflow-hidden bg-black py-10 sm:py-14">
      <div
        ref={trackRef}
        className="flex w-max items-center font-display font-extrabold uppercase leading-none will-change-transform"
        style={{ fontSize: "clamp(4rem, 13vw, 11rem)" }}
      >
        {sequence("a")}
        {sequence("b")}
      </div>
    </div>
  );
}
