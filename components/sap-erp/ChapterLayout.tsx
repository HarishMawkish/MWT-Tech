"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { PageSection } from "../sap-ai/types";

/**
 * A long page set out like a report: a numbered chapter index in the left
 * margin that stays put and tracks where you are, with the chapters running down
 * the right. It borrows from the editorial layouts of consultancy sites such as
 * McKinsey and Accenture, where the table of contents is part of the page.
 * The index is hidden on small screens, where the chapters simply run on.
 */
export function ChapterLayout({ chapters, children }: { chapters: PageSection[]; children: ReactNode }) {
  const [active, setActive] = useState(chapters[0].id);

  useEffect(() => {
    const els = chapters.map((c) => document.getElementById(c.id)).filter((e): e is HTMLElement => !!e);
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current = els[0]?.id ?? chapters[0].id;
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
  }, [chapters]);

  const index = Math.max(0, chapters.findIndex((c) => c.id === active));

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-14 px-6 lg:grid-cols-[13rem_1fr] lg:px-8">
      <aside className="relative hidden lg:block">
        <nav aria-label="Chapters" className="sticky top-32 py-24">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/35">In this page</p>
          <div className="relative">
            <span aria-hidden="true" className="absolute bottom-1 left-[5px] top-1 w-px bg-white/10" />
            <span
              aria-hidden="true"
              className="absolute left-[5px] top-1 w-px bg-[#7fd9b4] shadow-[0_0_10px_rgba(127,217,180,0.8)] transition-[height] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ height: `calc((100% - 0.5rem) * ${chapters.length > 1 ? index / (chapters.length - 1) : 0})` }}
            />
            <ol className="space-y-5">
              {chapters.map((c, i) => {
                const on = c.id === active;
                const passed = i <= index;
                return (
                  <li key={c.id}>
                    <a href={`#${c.id}`} aria-current={on ? "true" : undefined} className="group relative flex items-start gap-4">
                      <span
                        className={`relative z-10 mt-1 block h-[11px] w-[11px] shrink-0 rounded-full border transition-all duration-500 ${
                          passed ? "border-[#7fd9b4] bg-[#7fd9b4]" : "border-white/25 bg-black"
                        } ${on ? "scale-125 shadow-[0_0_12px_rgba(127,217,180,0.9)]" : ""}`}
                      />
                      <span>
                        <span className={`block font-display text-[11px] font-bold tracking-[0.2em] ${on ? "text-[#7fd9b4]" : "text-white/30"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`block text-sm leading-snug transition-colors duration-300 ${
                            on ? "font-semibold text-white" : "text-white/50 group-hover:text-white/80"
                          }`}
                        >
                          {c.label}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        </nav>
      </aside>

      <div className="min-w-0">{children}</div>
    </div>
  );
}
