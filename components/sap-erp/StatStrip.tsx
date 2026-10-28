import { CountUp } from "./CountUp";
import type { ProofStat } from "../sap-ai/types";

/**
 * Figures as one horizontal band, separated by hairlines, instead of a row of
 * cards: a quieter, more editorial way to set big numbers against a source.
 */
export function StatStrip({ stats }: { stats: ProofStat[] }) {
  return (
    <ul className="grid grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] md:grid-cols-3 md:divide-x md:divide-y-0">
      {stats.map((s, i) => (
        <li key={s.label} className="sap-rise relative px-8 py-9" style={{ animationDelay: `${i * 100}ms` }}>
          {s.prefix && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">{s.prefix}</p>}
          <p className={`font-display text-6xl font-bold leading-none text-[#7fd9b4] sm:text-7xl ${s.prefix ? "mt-2" : "mt-[1.5rem]"}`}>
            <CountUp value={s.value} decimals={s.decimals} />
            <span className="text-4xl sm:text-5xl">{s.suffix}</span>
          </p>
          <p className="mt-5 text-base font-medium leading-snug text-white">{s.label}</p>
          <p className="mt-2 text-xs leading-relaxed text-white/40">{s.source}</p>
        </li>
      ))}
    </ul>
  );
}
