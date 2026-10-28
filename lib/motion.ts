import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register once, on the client only — every motion component imports from here
// so plugin registration can never be forgotten or run twice.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/** Shared easing curves (see the animation skill): strong ease-out for entrances. */
export const EASE_OUT = "expo.out";
export const EASE_OUT_SOFT = "power3.out";

export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** True only for a real mouse/trackpad — touch devices fire false hovers. */
export function hasFinePointer(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

/**
 * Runs `cb` once the splash loader has gone. The loader locks the page with a
 * class on <html> (see SiteLoader); entrance animations that played behind it
 * would be finished before anyone could see them.
 */
export function whenLoaderDone(cb: () => void): () => void {
  let cancelled = false;
  let observer: MutationObserver | null = null;
  const root = document.documentElement;

  // Two frames: SiteLoader's effect (which adds the lock class) must run first.
  const raf = requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      if (cancelled) return;
      if (!root.classList.contains("mw-loading-lock")) {
        cb();
        return;
      }
      observer = new MutationObserver(() => {
        if (root.classList.contains("mw-loading-lock")) return;
        observer?.disconnect();
        if (!cancelled) cb();
      });
      observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    }),
  );

  return () => {
    cancelled = true;
    cancelAnimationFrame(raf);
    observer?.disconnect();
  };
}
