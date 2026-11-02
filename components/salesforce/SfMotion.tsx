"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * One observer for the whole page. Elements marked data-r rise in as they enter view; siblings marked with a
 * --d index arrive in a short stagger. Content is visible until this runs, and nothing hides at all for people
 * who prefer reduced motion (the CSS only animates under prefers-reduced-motion: no-preference).
 */
export function SfMotion() {
  // Moving between Salesforce pages keeps this component mounted, so it re-runs on every new address.
  const pathname = usePathname();
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".sf");
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-r]"));

    // Anything already on screen when the page loads is shown at once, before the hidden state applies,
    // so the first view never blinks.
    const vh = window.innerHeight;
    for (const el of items) {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add("seen");
    }
    root.classList.add("js");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("seen");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    for (const el of items) if (!el.classList.contains("seen")) io.observe(el);
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
