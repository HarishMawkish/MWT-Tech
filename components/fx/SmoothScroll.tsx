"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/motion";

let instance: Lenis | null = null;

/**
 * Inertial scrolling. The page glides to a stop instead of jumping per wheel
 * notch, and ScrollTrigger is fed from the same position so scrubbed
 * animations stay locked to what the user sees. Switched off for reduced
 * motion, and paused whenever something else locks the page (the splash
 * loader, the photo viewer) so the page can't scroll behind them.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, anchors: true });
    instance = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const syncLock = () => {
      const locked =
        document.documentElement.classList.contains("mw-loading-lock") ||
        document.body.style.overflow === "hidden";
      if (locked) lenis.stop();
      else lenis.start();
    };
    syncLock();
    const observer = new MutationObserver(syncLock);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });

    return () => {
      observer.disconnect();
      gsap.ticker.remove(tick);
      lenis.destroy();
      instance = null;
    };
  }, []);

  // New page, new scroll position — and ScrollTrigger needs to re-measure.
  useEffect(() => {
    instance?.scrollTo(0, { immediate: true });
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
