"use client";

import { useEffect, useRef, useState } from "react";
import type { CloudCapability } from "./clouds";
import { useInView } from "./hooks";

const tint = (a: number) => `rgba(var(--sf-rgb), ${a})`;

function Chips({ items, mono = false }: { items?: string[]; mono?: boolean }) {
  if (!items?.length) return null;
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((d) => (
        <li key={d} className={`rounded-full border px-3 py-1 text-xs font-medium text-white/85 ${mono ? "font-mono" : ""}`} style={{ borderColor: tint(0.45), background: tint(0.1) }}>
          {d}
        </li>
      ))}
    </ul>
  );
}

/* ================================================== DATA 360: the data flow */

const zones = [
  { id: "In", title: "Sources", note: "Where data lives" },
  { id: "Core", title: "Data 360", note: "One trusted profile" },
  { id: "Out", title: "Activation", note: "Where it gets used" },
];

/** Left to right: data comes in from where it lives, is unified in the middle, and goes out to wherever it is needed. */
export function DataFlow({ items }: { items: CloudCapability[] }) {
  const [sel, setSel] = useState(0);
  const cur = items[sel];

  return (
    <div>
      <div className="grid items-stretch gap-4 md:grid-cols-[1fr_3.5rem_1.15fr_3.5rem_1fr] md:gap-0">
        {zones.map((z, zi) => (
          <div key={z.id} className="contents">
            <div
              className="relative rounded-3xl border p-5 sm:p-6"
              style={{
                borderColor: z.id === "Core" ? tint(0.65) : "rgba(255,255,255,0.1)",
                background: z.id === "Core" ? `radial-gradient(120% 90% at 50% 0%, ${tint(0.22)}, rgba(255,255,255,0.02))` : "rgba(255,255,255,0.025)",
                boxShadow: z.id === "Core" ? `0 40px 90px -50px ${tint(0.9)}` : "none",
              }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">{z.note}</p>
              <p className="mt-1 font-display text-2xl text-white">{z.title}</p>
              {z.id === "Core" && (
                <span aria-hidden="true" className="sf-ping absolute right-5 top-5 h-3 w-3 rounded-full" style={{ background: "var(--sf)" }} />
              )}
              <ul className="mt-5 space-y-3">
                {items.map((c, i) =>
                  c.group === z.id ? (
                    <li key={c.title}>
                      <button
                        type="button"
                        onPointerEnter={(e) => e.pointerType === "mouse" && setSel(i)}
                        onClick={() => setSel(i)}
                        aria-pressed={sel === i}
                        className="group flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5"
                        style={{
                          borderColor: sel === i ? "var(--sf)" : "rgba(255,255,255,0.12)",
                          background: sel === i ? tint(0.3) : "rgba(6,14,11,0.7)",
                          boxShadow: sel === i ? `0 0 40px -6px ${tint(0.7)}` : "none",
                        }}
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-xs font-bold text-white" style={{ background: tint(0.35) }}>{i + 1}</span>
                        <span className="min-w-0">
                          <span className="block font-display text-lg leading-tight text-white">{c.title}</span>
                          <span className="block truncate text-[11px] text-white/50">{c.tag}</span>
                        </span>
                      </button>
                    </li>
                  ) : null,
                )}
              </ul>
            </div>
            {zi < zones.length - 1 && (
              <svg viewBox="0 0 56 40" className="mx-auto hidden h-10 w-14 self-center md:block" fill="none" aria-hidden="true">
                <path d="M2 20h46" stroke="var(--sf)" strokeWidth="2" className="sf-flow" />
                <path d="M42 12l10 8-10 8" stroke="var(--sf)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div key={sel} className="sap-rise mt-8 grid gap-6 rounded-3xl border p-7 sm:p-9 lg:grid-cols-[0.6fr_1.4fr]" style={{ borderColor: tint(0.5), background: `linear-gradient(160deg, ${tint(0.13)}, rgba(255,255,255,0.02))`, animationDuration: "0.5s" }}>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--sf)" }}>
            {zones.find((z) => z.id === cur.group)?.title} &middot; {cur.tag}
          </p>
          <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl">{cur.title}</h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-white/75">{cur.body}</p>
          <Chips items={cur.details} />
        </div>
      </div>
    </div>
  );
}

/* ================================================== AGENTFORCE: the agent run */

const kinds = ["TRIGGER", "ROUTE", "REASON", "RETRIEVE", "GUARD", "HANDOFF"];

/**
 * A run log, printed line by line when it scrolls into view: the way an agent
 * actually works, step by step, with the step you point at expanded.
 */
export function AgentTrace({ items }: { items: CloudCapability[] }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.25);
  const [shown, setShown] = useState(0);
  const [open, setOpen] = useState(0);
  const [run, setRun] = useState(0);
  const touched = useRef(false);

  useEffect(() => {
    if (!seen) return;
    setShown(0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(items.length);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(i);
      if (!touched.current) setOpen(i - 1);
      if (i >= items.length) window.clearInterval(id);
    }, 900);
    return () => window.clearInterval(id);
  }, [seen, run, items.length]);

  const cur = items[Math.min(open, items.length - 1)];

  return (
    <div ref={ref} className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
      <div className="sf-glass overflow-hidden rounded-[1.75rem] font-mono">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-[11px] text-white/50">
          <span className="flex items-center gap-2">
            <span className="sf-ping relative inline-block h-2 w-2 rounded-full" style={{ background: "var(--sf)" }} />
            agent.run &middot; case-change event
          </span>
          <button
            type="button"
            onClick={() => {
              touched.current = false;
              setRun((r) => r + 1);
            }}
            className="rounded-md border border-white/15 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            Replay
          </button>
        </div>
        <ol className="p-3 sm:p-4">
          {items.map((c, i) => {
            const visible = i < shown;
            const on = open === i && visible;
            return (
              <li key={c.title} className="transition-all duration-500" style={{ opacity: visible ? 1 : 0.12, transform: visible ? "none" : "translateY(6px)" }}>
                <button
                  type="button"
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse" && visible) {
                      touched.current = true;
                      setOpen(i);
                    }
                  }}
                  onClick={() => {
                    touched.current = true;
                    setOpen(i);
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors duration-300"
                  style={{ background: on ? tint(0.16) : "transparent" }}
                >
                  <span className="w-12 shrink-0 text-[11px] tabular-nums text-white/35">00:0{i}.{(i * 3 + 2) % 10}</span>
                  <span className="w-[4.9rem] shrink-0 rounded px-2 py-1 text-center text-[10px] font-bold tracking-wider text-black" style={{ background: on ? "var(--sf)" : tint(0.55) }}>
                    {kinds[i % kinds.length]}
                  </span>
                  <span className={`min-w-0 flex-1 truncate text-[13px] ${on ? "text-white" : "text-white/70"}`}>
                    {c.title} <span className="text-white/35">&mdash; {c.tag}</span>
                  </span>
                  <span aria-hidden="true" className="text-xs transition-transform duration-300" style={{ color: "var(--sf)", transform: on ? "rotate(90deg)" : "none" }}>
                    &#9656;
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="ml-[4.6rem] max-w-xl pb-3 pr-3 font-sans text-sm leading-relaxed text-white/65 sm:ml-[7.4rem]">{c.body}</p>
                  </div>
                </div>
              </li>
            );
          })}
          <li className="flex items-center gap-2 px-3 py-3 text-[12px] text-white/45">
            <span style={{ color: "var(--sf)" }}>&gt;</span>
            {shown >= items.length ? "run complete" : "working"}
            <span className="inline-block h-3.5 w-1.5 animate-pulse" style={{ background: "var(--sf)" }} />
          </li>
        </ol>
      </div>

      <div key={open} className="sap-rise self-start rounded-[1.75rem] border p-7 lg:sticky lg:top-28" style={{ borderColor: tint(0.5), background: `linear-gradient(160deg, ${tint(0.14)}, rgba(255,255,255,0.02))`, animationDuration: "0.45s" }}>
        <p className="font-mono text-[11px] font-bold tracking-wider" style={{ color: "var(--sf)" }}>
          STEP {Math.min(open, items.length - 1) + 1} / {items.length} &middot; {kinds[Math.min(open, items.length - 1) % kinds.length]}
        </p>
        <h3 className="mt-3 font-display text-3xl text-white">{cur.title}</h3>
        <p className="mt-1 text-sm text-white/55">{cur.tag}</p>
        <p className="mt-5 leading-relaxed text-white/75">{cur.body}</p>
        <Chips items={cur.details} mono />
      </div>
    </div>
  );
}

/* ========================================== LOYALTY: the rewards wallet */

const tones = [
  ["#ff7a59", "#ffb347"],
  ["#ff5e7e", "#ff9a6b"],
  ["#ff8a4c", "#ffc371"],
  ["#f7587a", "#ff8e53"],
  ["#ff6b4a", "#ffa94d"],
  ["#ff7f50", "#ffcc70"],
];

/**
 * A wallet of cards. The card in front lifts and tilts when you point at it, as if
 * it were being drawn out of the wallet, and clicking it sends it away and brings
 * the next one forward. Clicking a card behind brings that one forward instead.
 */
export function RewardWallet({ items }: { items: CloudCapability[] }) {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const n = items.length;
  const cur = items[active];

  const next = () => {
    if (leaving !== null) return;
    setLeaving(active);
    window.setTimeout(() => {
      setActive((a) => (a + 1) % n);
      setLeaving(null);
    }, 480);
  };

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
      <div>
        <div className="relative mx-auto h-[26rem] w-full max-w-[28rem] sm:h-[29rem]">
          {items.map((c, i) => {
            const d = (i - active + n) % n;
            const [a, b] = tones[i % tones.length];
            const front = d === 0;
            const drawn = front && hover === i && leaving === null;
            const away = leaving === i;
            let transform = `translateY(${d * 38}px) scale(${1 - d * 0.045})`;
            if (drawn) transform = "translateY(-34px) rotate(-3.2deg) scale(1.02)";
            if (away) transform = "translateY(-150%) rotate(-9deg) scale(1.04)";
            return (
              <button
                key={c.title}
                type="button"
                onPointerEnter={() => setHover(i)}
                onPointerLeave={() => setHover((h) => (h === i ? null : h))}
                onFocus={() => setHover(i)}
                onBlur={() => setHover((h) => (h === i ? null : h))}
                onClick={() => (front ? next() : setActive(i))}
                aria-label={front ? `${c.title}. Show the next card` : `Bring ${c.title} to the front`}
                className="absolute left-0 right-0 top-0 mx-auto h-[13.5rem] w-full max-w-[26rem] origin-bottom-left overflow-hidden rounded-[1.6rem] p-6 text-left text-white outline-none transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:ring-2 focus-visible:ring-white sm:h-[15rem]"
                style={{
                  zIndex: away ? n + 1 : n - d,
                  transform,
                  transitionDuration: drawn ? "450ms" : away ? "480ms" : "700ms",
                  opacity: away ? 0 : d > 4 ? 0 : 1,
                  cursor: front ? "pointer" : "pointer",
                  background: `linear-gradient(135deg, ${a}, ${b})`,
                  boxShadow: drawn
                    ? "0 55px 90px -30px rgba(255,122,89,0.9)"
                    : front
                      ? "0 40px 80px -30px rgba(255,122,89,0.75)"
                      : "0 20px 40px -24px rgba(0,0,0,0.7)",
                  filter: front ? "none" : `brightness(${1 - d * 0.1})`,
                }}
              >
                <span aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
                {/* a glint that crosses the card as it is drawn out */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-all duration-[900ms] ease-out"
                  style={{ left: drawn ? "130%" : "-60%", opacity: drawn ? 1 : 0 }}
                />
                <span className="relative flex items-start justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">Member card {String(i + 1).padStart(2, "0")}</span>
                  <span className="h-7 w-10 rounded-md bg-white/30" />
                </span>
                <span className="relative mt-8 block font-display text-3xl leading-tight drop-shadow-sm transition-opacity duration-500 sm:mt-10 sm:text-[2rem]" style={{ opacity: front ? 1 : 0 }}>{c.title}</span>
                <span className="relative mt-2 block text-sm font-medium text-white/85 transition-opacity duration-500" style={{ opacity: front ? 1 : 0 }}>{c.tag}</span>
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 pb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  <span>{front ? "Click for the next card" : "Programme"}</span>
                  <span>{String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div key={active} className="sap-rise" style={{ animationDuration: "0.5s" }}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--sf)" }}>{cur.tag}</p>
        <h3 className="mt-3 font-display text-4xl text-white sm:text-5xl">{cur.title}</h3>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">{cur.body}</p>
        {cur.details && (
          <ul className="mt-6 grid max-w-md grid-cols-2 gap-3">
            {cur.details.map((d) => (
              <li key={d} className="relative rounded-xl border border-dashed px-4 py-3 text-center text-sm font-semibold text-white" style={{ borderColor: tint(0.6), background: tint(0.1) }}>
                <span aria-hidden="true" className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-black" />
                <span aria-hidden="true" className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-black" />
                {d}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-8 flex gap-2" aria-hidden="true">
          {items.map((_, i) => (
            <span key={i} className="h-1 flex-1 rounded-full transition-colors duration-500" style={{ background: i === active ? "var(--sf)" : "rgba(255,255,255,0.14)" }} />
          ))}
        </div>
      </div>
    </div>
  );
}
