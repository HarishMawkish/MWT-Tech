"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * One observer for the whole page. Anything marked data-r rises in as it comes into view, and siblings carrying a
 * --d index arrive in a short stagger. Content is visible until this runs, and nothing hides at all for a reader who
 * has asked for less motion: the hidden state only exists inside a prefers-reduced-motion: no-preference block.
 */
export function DbMotion() {
  // Moving between Databricks pages keeps this mounted, so it has to re-run for each new address.
  const pathname = usePathname();
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".db");
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-r]"));

    // Whatever is already on screen at load is marked seen before the hidden state can apply, so the first
    // view never blinks.
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
