"use client";

import { useState } from "react";
import type { CloudCapability } from "./clouds";
import { useAutoAdvance, useInView } from "./hooks";

const tint = (a: number) => `rgba(var(--sf-rgb), ${a})`;

function Chips({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((d) => (
        <li key={d} className="rounded-full border px-3 py-1 text-xs font-medium text-white/85" style={{ borderColor: tint(0.45), background: tint(0.1) }}>
          {d}
        </li>
      ))}
    </ul>
  );
}

/* ============================================================ SALES: deal board */

const lanes = ["Capture", "Understand", "Act", "Close"];

/**
 * A pipeline board. The four lanes are the stages a deal moves through, and each
 * capability is a card in the lane where it helps. Pointing at a card moves a
 * glowing marker to its lane and opens the detail underneath.
 */
export function SalesBoard({ items }: { items: CloudCapability[] }) {
  const [sel, setSel] = useState(0);
  const cur = items[sel];
  const lane = Math.max(lanes.indexOf(cur.group ?? ""), 0);

  return (
    <div>
      {/* stage chevrons with a marker that follows the selection */}
      <div className="relative hidden md:block">
        <div className="grid grid-cols-4 gap-2">
          {lanes.map((l, i) => (
            <div
              key={l}
              className="relative flex h-12 items-center justify-between px-6 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-500"
              style={{
                clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%)",
                background: i === lane ? tint(0.35) : "rgba(255,255,255,0.05)",
                color: i === lane ? "#fff" : "rgba(255,255,255,0.5)",
              }}
            >
              <span>{l}</span>
              <span className="tabular-nums opacity-60">{items.filter((c) => c.group === l).length}</span>
            </div>
          ))}
        </div>
        <span
          aria-hidden="true"
          className="absolute -bottom-3 h-2.5 w-2.5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{ left: `calc(${lane * 25 + 12.5}% - 5px)`, background: "var(--sf)", boxShadow: "0 0 18px 4px var(--sf)" }}
        />
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-4">
        {lanes.map((l) => (
          <div key={l} className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45 md:hidden">{l}</p>
            {items.map((c, i) =>
              c.group === l ? (
                <div key={c.title}>
                <button
                  type="button"
                  onPointerEnter={(e) => e.pointerType === "mouse" && setSel(i)}
                  onClick={() => setSel(i)}
                  aria-pressed={sel === i}
                  className="group relative w-full rounded-2xl border p-5 text-left transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1"
                  style={{
                    borderColor: sel === i ? "var(--sf)" : "rgba(255,255,255,0.1)",
                    background: sel === i ? `linear-gradient(160deg, ${tint(0.22)}, rgba(255,255,255,0.03))` : "rgba(255,255,255,0.03)",
                    boxShadow: sel === i ? `0 24px 60px -28px ${tint(0.9)}` : "none",
                  }}
                >
                  <span className="flex items-center justify-between">
                    <span className="h-1.5 w-8 rounded-full" style={{ background: sel === i ? "var(--sf)" : "rgba(255,255,255,0.18)" }} />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">{c.tag}</span>
                  </span>
                  <span className="mt-4 block font-display text-xl leading-tight text-white">{c.title}</span>
                </button>
                {/* on a phone the detail opens right under the card that was tapped */}
                {sel === i && (
                  <div className="sap-rise mt-2 rounded-2xl border p-5 md:hidden" style={{ borderColor: tint(0.5), background: tint(0.1), animationDuration: "0.4s" }}>
                    <p className="text-base leading-relaxed text-white/80">{c.body}</p>
                    <Chips items={c.details} />
                  </div>
                )}
                </div>
              ) : null,
            )}
          </div>
        ))}
      </div>

      <div key={sel} className="sap-rise mt-8 hidden rounded-3xl border p-7 sm:p-9 md:block" style={{ borderColor: tint(0.5), background: `linear-gradient(160deg, ${tint(0.14)}, rgba(255,255,255,0.02))`, animationDuration: "0.5s" }}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--sf)" }}>
          {cur.group} &middot; {cur.tag}
        </p>
        <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl">{cur.title}</h3>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/75">{cur.body}</p>
        <Chips items={cur.details} />
      </div>
    </div>
  );
}

/* ====================================================== SERVICE: the console */

const statuses = ["New", "Open", "Open", "Escalated", "Open", "Resolved"];

/**
 * A support console. Each capability is a ticket in the inbox; the open ticket
 * shows how it gets resolved, as a conversation ending in a closed case. It cycles
 * through the inbox on its own until someone takes over.
 */
export function ServiceConsole({ items }: { items: CloudCapability[] }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.3);
  const { index, pick } = useAutoAdvance(items.length, 6500, seen);
  const cur = items[index];

  return (
    <div ref={ref} className="sf-glass overflow-hidden rounded-[2rem]">
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-3.5">
        <div className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-lg" style={{ background: tint(0.25) }}>
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="M2.5 4.5h11v6h-5l-3 2.5v-2.5h-3v-6Z" stroke="var(--sf)" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-sm font-semibold text-white">Inbox</span>
          <span className="rounded-full px-2 py-0.5 text-[10px] font-bold text-black" style={{ background: "var(--sf)" }}>{items.length}</span>
        </div>
        <span className="hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:flex">
          <span className="sf-ping relative inline-block h-2 w-2 rounded-full" style={{ background: "var(--sf)" }} />
          Live
        </span>
      </div>

      <div className="grid md:grid-cols-[19rem_1fr]">
        <ul className="flex snap-x gap-2 overflow-x-auto border-b border-white/10 p-3 [scrollbar-width:none] md:block md:gap-0 md:overflow-visible md:border-b-0 md:border-r md:p-0 [&::-webkit-scrollbar]:hidden">
          {items.map((c, i) => {
            const on = i === index;
            return (
              <li key={c.title} className="w-[13.5rem] shrink-0 snap-start md:w-auto">
                <button
                  type="button"
                  onClick={() => pick(i)}
                  onPointerEnter={(e) => e.pointerType === "mouse" && pick(i)}
                  aria-pressed={on}
                  className="relative flex h-full w-full items-start gap-3 overflow-hidden rounded-xl border border-white/[0.07] px-4 py-3.5 text-left transition-colors duration-300 md:rounded-none md:border-0 md:border-b md:px-5 md:py-4"
                  style={{ background: on ? tint(0.14) : "transparent" }}
                >
                  <span className="absolute inset-y-0 left-0 w-[3px] transition-transform duration-500" style={{ background: "var(--sf)", transform: on ? "scaleY(1)" : "scaleY(0)" }} />
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-bold text-white" style={{ background: tint(on ? 0.5 : 0.22) }}>
                    {c.title.charAt(0)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className={`truncate text-sm font-semibold ${on ? "text-white" : "text-white/80"}`}>{c.title}</span>
                      <span className="text-[10px] tabular-nums text-white/40">#{4210 + i * 7}</span>
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-white/50">{c.tag}</span>
                    <span className="mt-2 inline-block rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/80" style={{ background: statuses[i] === "Resolved" ? tint(0.4) : "rgba(255,255,255,0.08)" }}>
                      {statuses[i % statuses.length]}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div key={index} className="sap-rise flex min-h-[22rem] flex-col p-5 sm:p-9 md:min-h-[26rem]" style={{ animationDuration: "0.5s" }}>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-3xl text-white sm:text-4xl">{cur.title}</h3>
            <span className="rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70" style={{ borderColor: tint(0.5) }}>{cur.tag}</span>
          </div>

          <div className="mt-7 space-y-4 text-[15px] leading-relaxed">
            <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.07] px-5 py-3 text-white/70">
              <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">Customer</span>
              Tell me about &ldquo;{cur.title}&rdquo;.
            </div>
            <div className="ml-auto max-w-[94%] rounded-2xl rounded-tr-sm px-5 py-4 text-white" style={{ background: `linear-gradient(135deg, ${tint(0.45)}, ${tint(0.2)})` }}>
              <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">Service Cloud</span>
              {cur.body}
            </div>
          </div>

          <Chips items={cur.details} />

          <div className="mt-auto pt-8">
            <span className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold text-white" style={{ borderColor: tint(0.6), background: tint(0.14) }}>
              <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                <path d="M2.5 6.4l2.2 2.2 4.8-5" stroke="var(--sf)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Case resolved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ====================================================== MARKETING: journey map */

/**
 * A campaign as a path through the page. Six stops sit along a drawn curve; the
 * path draws itself as it comes into view and a light travels along it. Point at
 * a stop to read it.
 */
export function JourneyMap({ items }: { items: CloudCapability[] }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.3);
  const [sel, setSel] = useState(0);
  const n = items.length;
  const xs = items.map((_, i) => 90 + (i * 820) / (n - 1));
  const ys = items.map((_, i) => (i % 2 === 0 ? 210 : 90));
  let d = `M${xs[0]} ${ys[0]}`;
  for (let i = 1; i < n; i++) {
    const mx = (xs[i - 1] + xs[i]) / 2;
    d += ` C${mx} ${ys[i - 1]} ${mx} ${ys[i]} ${xs[i]} ${ys[i]}`;
  }
  const cur = items[sel];

  return (
    <div ref={ref}>
      <div className="relative hidden md:block">
        <svg viewBox="0 0 1000 300" className="block w-full" fill="none" aria-hidden="true">
          <path d={d} stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          <path d={d} pathLength="1" stroke="var(--sf)" strokeWidth="3" strokeLinecap="round" style={{ strokeDasharray: 1, strokeDashoffset: seen ? 0 : 1, transition: "stroke-dashoffset 2.4s cubic-bezier(0.23,1,0.32,1)", filter: "drop-shadow(0 0 8px var(--sf))" }} />
          {seen && (
            <circle r="6" fill="#fff" style={{ filter: "drop-shadow(0 0 10px var(--sf))" }}>
              <animateMotion dur="9s" repeatCount="indefinite" path={d} />
            </circle>
          )}
        </svg>
        {items.map((c, i) => (
          <button
            key={c.title}
            type="button"
            onPointerEnter={(e) => e.pointerType === "mouse" && setSel(i)}
            onClick={() => setSel(i)}
            aria-pressed={sel === i}
            className="group absolute -translate-x-1/2 -translate-y-1/2 text-center outline-none"
            style={{ left: `${xs[i] / 10}%`, top: `${(ys[i] / 300) * 100}%` }}
          >
            <span
              className="relative grid h-14 w-14 place-items-center rounded-full border font-display text-lg text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
              style={{
                borderColor: sel === i ? "var(--sf)" : "rgba(255,255,255,0.25)",
                background: sel === i ? tint(0.45) : "#07100c",
                boxShadow: sel === i ? `0 0 40px ${tint(0.8)}` : "none",
                transform: sel === i ? "scale(1.18)" : undefined,
              }}
            >
              {sel === i && <span className="sf-orbit-pulse absolute inset-0 rounded-full" aria-hidden="true" />}
              {i + 1}
            </span>
            <span className={`absolute left-1/2 mt-3 w-32 -translate-x-1/2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${i % 2 === 0 ? "top-full" : "bottom-full mb-14"} ${sel === i ? "text-white" : "text-white/50"}`}>
              {c.title}
            </span>
          </button>
        ))}
      </div>

      <div className="md:hidden" role="group" aria-label="Campaign stops">
        <div className="relative flex items-center justify-between px-1">
          <span aria-hidden="true" className="absolute inset-x-6 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-white/10" />
          <span aria-hidden="true" className="absolute left-6 top-1/2 h-0.5 -translate-y-1/2 rounded-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" style={{ width: `calc((100% - 3rem) * ${sel / (n - 1)})`, background: "var(--sf)", boxShadow: "0 0 10px var(--sf)" }} />
          {items.map((c, i) => (
            <button
              key={c.title}
              type="button"
              onClick={() => setSel(i)}
              aria-label={`${i + 1}. ${c.title}`}
              aria-pressed={sel === i}
              className="relative z-10 grid h-11 w-11 place-items-center rounded-full border font-display text-base text-white transition-all duration-500"
              style={{ borderColor: i <= sel ? "var(--sf)" : "rgba(255,255,255,0.25)", background: i === sel ? tint(0.55) : "#07100c", boxShadow: i === sel ? `0 0 26px ${tint(0.8)}` : "none", transform: i === sel ? "scale(1.15)" : "none" }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div key={sel} className="sap-rise mx-auto mt-8 max-w-3xl rounded-3xl border p-6 text-center sm:mt-10 sm:p-9" style={{ borderColor: tint(0.5), background: `linear-gradient(180deg, ${tint(0.16)}, rgba(255,255,255,0.02))`, animationDuration: "0.5s" }}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--sf)" }}>Stop {sel + 1} &middot; {cur.tag}</p>
        <h3 className="mt-3 font-display text-2xl text-white sm:text-4xl">{cur.title}</h3>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{cur.body}</p>
        <div className="flex justify-center"><Chips items={cur.details} /></div>
      </div>
    </div>
  );
}
