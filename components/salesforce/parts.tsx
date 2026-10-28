"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/** The cloud mark: one outline, filled from the page's accent. */
export function CloudMark({ className = "h-8 w-8", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 48 32" className={className} style={style} fill="none" aria-hidden="true">
      <path
        d="M12.5 29h24a9.5 9.5 0 0 0 1.4-18.9A13 13 0 0 0 13 8.4 10.3 10.3 0 0 0 12.5 29Z"
        fill="rgba(var(--sf-rgb),0.22)"
        stroke="var(--sf)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A card that lights up wherever the pointer is on it. */
export function Spot({ children, className = "", as: Tag = "div" }: { children: ReactNode; className?: string; as?: "div" | "li" | "article" }) {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} onPointerMove={onMove} className={`sf-spot ${className}`}>
      {children}
    </Tag>
  );
}

/** A thin line across the top of the window showing how far down the page you are. */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(window.scrollY / h, 1) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
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
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]">
      <div
        ref={bar}
        className="h-full origin-left"
        style={{ transform: "scaleX(0)", background: "linear-gradient(90deg, rgba(var(--sf-rgb),0.2), var(--sf), #fff)", boxShadow: "0 0 14px var(--sf)" }}
      />
    </div>
  );
}

/**
 * A statement that lights up word by word as it crosses the screen, so reading it
 * and scrolling become the same gesture.
 */
export function ScrollStatement({ text }: { text: string }) {
  const wrap = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-w]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spans.forEach((s) => (s.style.opacity = "1"));
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the block's top reaches 85% down the screen, 1 when its bottom reaches 45%.
      const p = Math.min(Math.max((vh * 0.85 - r.top) / (r.height + vh * 0.4), 0), 1);
      const lit = p * spans.length * 1.12;
      spans.forEach((s, i) => {
        const o = Math.min(Math.max(lit - i, 0), 1);
        s.style.opacity = String(0.16 + o * 0.84);
        s.style.filter = o < 1 ? `blur(${(1 - o) * 1.6}px)` : "none";
      });
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
    <p ref={wrap} className="text-balance font-display text-[1.65rem] leading-[1.28] text-white sm:text-4xl lg:text-[3.1rem] lg:leading-[1.2]">
      {words.map((w, i) => (
        <span key={i} data-w className="inline-block pr-[0.28em] transition-[filter] duration-200" style={{ opacity: 0.16 }}>
          {w}
        </span>
      ))}
    </p>
  );
}

/** FAQ accordion, one open at a time, height animated without measuring. */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <ul className="divide-y divide-white/10 border-y border-white/10">
      {items.map((f, i) => {
        const on = open === i;
        return (
          <li key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(on ? -1 : i)}
              aria-expanded={on}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className={`font-display text-xl transition-colors duration-300 sm:text-2xl ${on ? "text-white" : "text-white/70 group-hover:text-white"}`}>{f.q}</span>
              <span
                aria-hidden="true"
                className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                  borderColor: on ? "var(--sf)" : "rgba(255,255,255,0.2)",
                  background: on ? "rgba(var(--sf-rgb),0.2)" : "transparent",
                  transform: on ? "rotate(45deg)" : "none",
                }}
              >
                <span className="absolute h-px w-3.5 bg-white" />
                <span className="absolute h-3.5 w-px bg-white" />
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className={`max-w-3xl pb-7 text-base leading-relaxed text-white/65 transition-all duration-500 ${on ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}>{f.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/** A vertical timeline whose line fills, and whose stops light, as you scroll through it. */
export function Timeline({ steps }: { steps: { title: string; body: string }[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      setP(Math.min(Math.max((vh * 0.62 - r.top) / r.height, 0), 1));
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

  const n = steps.length;
  const at = (i: number) => (i + 0.35) / n;

  return (
    <ol ref={ref} className="relative pl-14 sm:pl-20">
      {steps.map((s, i) => {
        const lit = p >= at(i);
        // How far the line has travelled from this number down to the next one.
        const reach = i < n - 1 ? Math.min(Math.max((p - at(i)) / (at(i + 1) - at(i)), 0), 1) : 0;
        return (
          <li key={s.title} className={`relative ${i < n - 1 ? "pb-14 sm:pb-16" : ""}`}>
            {/* The connector to the next number. It is drawn as part of this step, from the exact
                centre of this circle to the exact centre of the next, so the two can never drift apart. */}
            {i < n - 1 && (
              <span aria-hidden="true" className="pointer-events-none absolute -left-14 top-5 flex h-full w-10 justify-center sm:-left-20 sm:top-7 sm:w-14">
                <span className="relative block h-full w-0.5 overflow-hidden rounded-full bg-white/[0.12]">
                  <span
                    className="absolute inset-0 origin-top"
                    style={{ transform: `scaleY(${reach})`, background: "linear-gradient(180deg, var(--sf), rgba(var(--sf-rgb),0.55))", boxShadow: "0 0 10px var(--sf)" }}
                  />
                </span>
              </span>
            )}
            <span
              className="absolute -left-14 top-0 z-10 grid h-10 w-10 place-items-center rounded-full border font-display text-sm transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] sm:-left-20 sm:h-14 sm:w-14 sm:text-lg"
              style={{
                borderColor: lit ? "var(--sf)" : "rgba(255,255,255,0.18)",
                // an opaque base under the tint, so the line never shows through the circle
                background: lit ? "linear-gradient(rgba(var(--sf-rgb),0.3), rgba(var(--sf-rgb),0.3)), #050a08" : "#050a08",
                color: lit ? "#fff" : "rgba(255,255,255,0.45)",
                boxShadow: lit ? "0 0 32px rgba(var(--sf-rgb),0.55)" : "none",
                transform: lit ? "scale(1)" : "scale(0.88)",
              }}
            >
              {i + 1}
            </span>
            <div className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${lit ? "translate-x-0 opacity-100" : "translate-x-3 opacity-40"}`}>
              <h3 className="font-display text-2xl text-white sm:text-4xl">{s.title}</h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">{s.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
