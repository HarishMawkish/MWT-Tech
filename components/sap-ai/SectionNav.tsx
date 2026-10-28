"use client";

import { useEffect, useRef, useState } from "react";
import { sections } from "./data";

/**
 * In-page navigation that stays under the site header and lights up the
 * section you are reading. A long page needs a map; this is the quiet kind: a
 * thin bar of anchors with a sliding underline rather than a second menu.
 */
export function SectionNav() {
  const [active, setActive] = useState<string>(sections[0].id);
  const listRef = useRef<HTMLUListElement>(null);
  const [bar, setBar] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter((e): e is HTMLElement => !!e);
    if (!els.length) return;

    // A section counts as "current" once its top crosses the upper third.
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.32;
      let current = els[0].id;
      for (const el of els) if (el.getBoundingClientRect().top <= line) current = el.id;
      setActive(current);
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

  // Slide the underline under the active link.
  useEffect(() => {
    const link = listRef.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!link) return;
    setBar({ left: link.offsetLeft, width: link.offsetWidth });
    // Keep the active link in view on narrow screens.
    link.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[5.6rem] z-40 border-y border-white/10 bg-black/70 backdrop-blur-xl backdrop-saturate-150"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul
          ref={listRef}
          className="relative flex gap-1 overflow-x-auto py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {sections.map((s) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                data-id={s.id}
                aria-current={active === s.id ? "true" : undefined}
                className={`block min-h-11 whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                  active === s.id ? "text-[#7fd9b4]" : "text-white/55 hover:text-white"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 h-[2px] rounded-full bg-[#7fd9b4] shadow-[0_0_10px_rgba(127,217,180,0.9)] transition-[left,width] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ left: bar.left, width: bar.width }}
          />
        </ul>
      </div>
    </nav>
  );
}
