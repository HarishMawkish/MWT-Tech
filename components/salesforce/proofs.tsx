"use client";

import type { CSSProperties } from "react";
import { CountUp } from "@/components/sap-erp/CountUp";
import type { CloudStat } from "./clouds";
import { useInView } from "./hooks";

const tint = (a: number) => `rgba(var(--sf-rgb), ${a})`;

function Num({ s, className = "" }: { s: CloudStat; className?: string }) {
  return (
    <span className={className}>
      {s.prefix}
      <CountUp value={s.value} decimals={s.decimals ?? 0} />
      {s.suffix}
    </span>
  );
}

const gradText: CSSProperties = { background: "linear-gradient(180deg, #fff 10%, var(--sf))", WebkitBackgroundClip: "text", color: "transparent" };

/* ============================================ SALES: a forecast with markers */

const pts: [number, number][] = [[0, 300], [120, 268], [250, 246], [380, 204], [510, 184], [640, 132], [770, 96], [900, 52], [1000, 30]];

function smooth(p: [number, number][]) {
  let d = `M${p[0][0]} ${p[0][1]}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0]} ${c1[1]} ${c2[0]} ${c2[1]} ${p2[0]} ${p2[1]}`;
  }
  return d;
}

/** The figures as milestones along a rising forecast line. */
export function ForecastProof({ stats }: { stats: CloudStat[] }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.25);
  const line = smooth(pts);
  const marks = [1, 3, 5, 7].slice(0, stats.length);

  return (
    <div ref={ref}>
      <div className="hidden pt-44 md:block">
       <div className="relative">
        <svg viewBox="0 0 1000 340" className="block w-full" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="fc-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="var(--sf)" stopOpacity="0.45" />
              <stop offset="1" stopColor="var(--sf)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[60, 130, 200, 270].map((y) => (
            <line key={y} x1="0" x2="1000" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" strokeDasharray="2 8" />
          ))}
          <path d={`${line} L1000 340 L0 340 Z`} fill="url(#fc-fill)" style={{ opacity: seen ? 1 : 0, transition: "opacity 1.6s ease 0.6s" }} />
          <path d={line} pathLength="1" stroke="var(--sf)" strokeWidth="3.5" strokeLinecap="round" style={{ strokeDasharray: 1, strokeDashoffset: seen ? 0 : 1, transition: "stroke-dashoffset 2.4s cubic-bezier(0.23,1,0.32,1)", filter: "drop-shadow(0 0 10px var(--sf))" }} />
          {marks.map((m, i) => (
            <g key={m} style={{ opacity: seen ? 1 : 0, transition: `opacity 0.6s ease ${0.9 + i * 0.35}s` }}>
              <line x1={pts[m][0]} x2={pts[m][0]} y1={pts[m][1]} y2={pts[m][1] - 36} stroke="rgba(255,255,255,0.35)" strokeDasharray="3 4" />
              <circle cx={pts[m][0]} cy={pts[m][1]} r="14" fill={tint(0.25)} className="sf-ping" style={{ transformOrigin: "center", transformBox: "fill-box" }} />
              <circle cx={pts[m][0]} cy={pts[m][1]} r="6.5" fill="#fff" stroke="var(--sf)" strokeWidth="3" />
            </g>
          ))}
        </svg>
        {marks.map((m, i) => (
          <div
            key={m}
            className="absolute w-52 text-center transition-all duration-700"
            style={{ left: `${pts[m][0] / 10}%`, top: `${((pts[m][1] - 44) / 340) * 100}%`, opacity: seen ? 1 : 0, transform: `translate(-50%, calc(-100% + ${seen ? 0 : 14}px))`, transitionDelay: `${1 + i * 0.35}s` }}
          >
            <Num s={stats[i]} className="font-display text-5xl leading-none" />
            <p className="mt-2 text-[13px] leading-snug text-white/80">{stats[i].label}</p>
            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">{stats[i].source}</p>
          </div>
        ))}
       </div>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 md:hidden">
        {stats.map((s) => (
          <li key={s.label} className="sf-glass rounded-2xl p-6">
            <Num s={s} className="font-display text-5xl" />
            <p className="mt-3 text-sm text-white/80">{s.label}</p>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">{s.source}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ======================================================= SERVICE: ring gauges */

const R = 56;
const C = 2 * Math.PI * R;

export function GaugeProof({ stats }: { stats: CloudStat[] }) {
  const [ref, seen] = useInView<HTMLUListElement>(0.3);
  return (
    <ul ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => {
        const over = s.value > 100;
        const f = Math.min(s.value / 100, 1);
        return (
          <li key={s.label} className="sf-glass flex flex-col items-center rounded-3xl px-6 py-9 text-center">
            <div className="relative h-44 w-44">
              <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90" fill="none" aria-hidden="true">
                <circle cx="70" cy="70" r={R} stroke="rgba(255,255,255,0.09)" strokeWidth="11" />
                <circle cx="70" cy="70" r={R} stroke="var(--sf)" strokeWidth="11" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={seen ? C * (1 - f) : C} style={{ transition: `stroke-dashoffset 1.8s cubic-bezier(0.23,1,0.32,1) ${i * 0.18}s`, filter: "drop-shadow(0 0 8px var(--sf))" }} />
                {over && <circle cx="70" cy="70" r={R + 10} stroke="#fff" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="2 7" className="sap-spin" style={{ transformOrigin: "center" }} />}
              </svg>
              <div className="absolute inset-0 grid place-items-center">
                <Num s={s} className="font-display text-4xl text-white" />
              </div>
            </div>
            <p className="mt-6 text-sm leading-snug text-white/80">{s.label}</p>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">{s.source}</p>
          </li>
        );
      })}
    </ul>
  );
}

/* ================================================== MARKETING: lift meters */

export function MeterProof({ stats }: { stats: CloudStat[] }) {
  const [ref, seen] = useInView<HTMLUListElement>(0.3);
  const max = Math.max(...stats.map((s) => s.value)) * 1.25;
  return (
    <ul ref={ref} className="space-y-4">
      {stats.map((s, i) => (
        <li key={s.label} className="sf-glass rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
            <p className="max-w-xl text-lg leading-snug text-white/85">{s.label}</p>
            <Num s={s} className="font-display text-5xl leading-none sm:text-6xl" />
          </div>
          <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/[0.07]">
            <div
              className="relative h-full rounded-full"
              style={{ width: seen ? `${(s.value / max) * 100}%` : "0%", background: "linear-gradient(90deg, rgba(var(--sf-rgb),0.35), var(--sf))", boxShadow: "0 0 24px var(--sf)", transition: `width 1.8s cubic-bezier(0.23,1,0.32,1) ${i * 0.16}s` }}
            >
              <span className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 translate-x-1/2 rounded-full bg-white" style={{ boxShadow: "0 0 18px 4px var(--sf)" }} />
            </div>
          </div>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">{s.source}</p>
        </li>
      ))}
    </ul>
  );
}

/* ============================================== DATA 360: rolling odometers */

function Roll({ value, seen, delay }: { value: number; seen: boolean; delay: number }) {
  const digits = String(value).split("");
  return (
    <span className="inline-flex h-[1em] overflow-hidden leading-none" aria-label={String(value)}>
      {digits.map((d, i) => (
        <span key={i} className="relative block h-[1em] w-[0.62em] overflow-hidden" aria-hidden="true">
          <span
            className="block"
            style={{ transform: `translateY(${seen ? -Number(d) * 10 : 0}%)`, transition: `transform 1.8s cubic-bezier(0.23,1,0.32,1) ${delay + i * 0.12}s` }}
          >
            {Array.from({ length: 10 }).map((_, n) => (
              <span key={n} className="block h-[1em] text-center leading-none">{n}</span>
            ))}
          </span>
        </span>
      ))}
    </span>
  );
}

export function OdometerProof({ stats }: { stats: CloudStat[] }) {
  const [ref, seen] = useInView<HTMLUListElement>(0.3);
  return (
    <ul ref={ref} className="grid gap-5 sm:grid-cols-2">
      {stats.map((s, i) => (
        <li key={s.label} className="sf-glass relative overflow-hidden rounded-3xl p-7 sm:p-9">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--sf), transparent)" }} />
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "var(--sf)" }}>
            metric_{String(i + 1).padStart(2, "0")}
          </p>
          <p className="mt-5 flex items-end font-mono text-7xl leading-none text-white sm:text-[5.5rem]" style={{ textShadow: "0 0 40px rgba(var(--sf-rgb),0.5)" }}>
            {s.prefix}
            <Roll value={s.value} seen={seen} delay={i * 0.15} />
            <span className="text-[0.55em]" style={{ color: "var(--sf)" }}>{s.suffix}</span>
          </p>
          <p className="mt-6 max-w-sm text-base leading-snug text-white/75">{s.label}</p>
          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">{s.source}</p>
        </li>
      ))}
    </ul>
  );
}

/* ================================================= AGENTFORCE: telemetry HUD */

export function HudProof({ stats }: { stats: CloudStat[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {stats.map((s, i) => (
        <li key={s.label} className="sf-glass relative overflow-hidden rounded-3xl p-7 sm:p-9">
          <span
            aria-hidden="true"
            className="sap-spin pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-60"
            style={{ background: `conic-gradient(from 0deg, transparent 0 70%, ${tint(0.35)} 100%)`, animationDuration: `${14 + i * 3}s` }}
          />
          <span aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <span aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />
          <div className="relative flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "var(--sf)" }}>
            <span className="sf-ping relative inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--sf)" }} />
            Live &middot; {String(i + 1).padStart(2, "0")}
          </div>
          <Num s={s} className="relative mt-5 block font-display text-6xl leading-none sm:text-7xl" />
          <p className="relative mt-5 max-w-sm text-[15px] leading-snug text-white/80">{s.label}</p>
          <p className="relative mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">{s.source}</p>
        </li>
      ))}
    </ul>
  );
}

/* =============================================== LOYALTY: a tier progress track */

export function TierProof({ stats }: { stats: CloudStat[] }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.3);
  const tiers = ["Member", "Gold", "Platinum"];
  return (
    <div ref={ref}>
      <div className="relative hidden md:block">
        <div className="absolute inset-x-[16.6%] top-7 h-1.5 rounded-full bg-white/[0.09]">
          <div className="h-full rounded-full" style={{ width: seen ? "100%" : "0%", background: "linear-gradient(90deg, rgba(var(--sf-rgb),0.4), var(--sf))", boxShadow: "0 0 20px var(--sf)", transition: "width 2.2s cubic-bezier(0.23,1,0.32,1)" }} />
        </div>
        <ul className="relative grid grid-cols-3">
          {stats.map((s, i) => (
            <li key={s.label} className="flex flex-col items-center px-4 text-center">
              <span className="relative grid h-16 w-16 place-items-center rounded-full border-2 font-display text-2xl text-white transition-all duration-700" style={{ borderColor: "var(--sf)", background: seen ? tint(0.5) : "#07100c", boxShadow: seen ? `0 0 40px ${tint(0.7)}` : "none", transitionDelay: `${0.5 + i * 0.6}s` }}>
                <Num s={s} />
              </span>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--sf)" }}>{tiers[i]}</p>
              <p className="mt-4 max-w-[16rem] text-base leading-snug text-white/80">{s.label}</p>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">{s.source}</p>
            </li>
          ))}
        </ul>
      </div>
      <ul className="grid gap-4 md:hidden">
        {stats.map((s) => (
          <li key={s.label} className="sf-glass flex items-center gap-5 rounded-2xl p-5">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full font-display text-xl text-white" style={{ background: tint(0.4), border: "2px solid var(--sf)" }}><Num s={s} /></span>
            <p className="text-sm leading-snug text-white/80">{s.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
