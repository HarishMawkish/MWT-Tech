"use client";

import { useEffect, useRef, useState } from "react";
import "./back-to-top.css";

const R = 21;
const C = 2 * Math.PI * R;

/**
 * Back to top, on every page of the site. Appears once the reader is more than a screen down; its ring fills as they read. Scrolling is
 * smooth unless the person prefers reduced motion. Afterwards focus moves to the page heading, so keyboard and
 * screen-reader users land where sighted users do.
 */
export function BackToTop() {
  const [show, setShow] = useState(false);
  const ring = useRef<SVGCircleElement>(null);
  const frame = useRef(0);

  useEffect(() => {
    const update = () => {
      frame.current = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      setShow(y > window.innerHeight * 1.1);
      if (ring.current) ring.current.style.strokeDashoffset = String(C * (1 - (max > 0 ? Math.min(1, y / max) : 0)));
    };
    const onScroll = () => {
      if (!frame.current) frame.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    const h1 = document.querySelector<HTMLElement>("main h1");
    if (h1) {
      h1.setAttribute("tabindex", "-1");
      h1.focus({ preventScroll: true });
    }
  };

  return (
    <button type="button" className={`mw-totop${show ? " on" : ""}`} onClick={toTop} aria-label="Back to top" tabIndex={show ? 0 : -1} aria-hidden={!show}>
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r={R} className="tt-track" />
        <circle ref={ring} cx="24" cy="24" r={R} className="tt-ring" style={{ strokeDasharray: C, strokeDashoffset: C }} />
        <path d="M24 31V17M18 23l6-6 6 6" className="tt-arrow" />
      </svg>
    </button>
  );
}
