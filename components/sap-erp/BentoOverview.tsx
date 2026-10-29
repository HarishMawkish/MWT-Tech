import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "./CountUp";
import { photos, promises, whoFor } from "./grow-data";

/**
 * The overview as a bento grid, the layout Linear and Vercel made familiar:
 * cells of different sizes and weights instead of four equal cards, so the page
 * has a hierarchy. The big cell leads with the promise that matters most.
 */
export function BentoOverview() {
  const [fast, ai, depth, cost] = promises;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
      {/* lead cell: a photograph with the headline promise over it */}
      <Reveal className="md:col-span-4 md:row-span-2">
        <div className="group relative h-full min-h-[24rem] overflow-hidden rounded-[2rem] border border-white/10">
          <Image
            src={photos.overview.src}
            alt={photos.overview.alt}
            fill
            sizes="(min-width: 768px) 66vw, 100vw"
            className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#1c6b51]/25 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
          <div className="relative flex h-full flex-col justify-end p-8 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7fd9b4]">01 · {fast.title}</p>
            <h3 className="mt-3 max-w-md font-display text-4xl text-white sm:text-5xl">Weeks, not months.</h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">{fast.body}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={80} className="md:col-span-2">
        <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-7">
          <svg viewBox="0 0 64 64" className="sap-float h-12 w-12 text-[#7fd9b4]" fill="none" aria-hidden="true">
            <path d="M32 6l5.5 15.5L53 27l-15.5 5.5L32 48l-5.5-15.5L11 27l15.5-5.5L32 6Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M50 40l2 5.5 5.5 2-5.5 2L50 55l-2-5.5-5.5-2 5.5-2 2-5.5Z" fill="currentColor" opacity="0.7" />
          </svg>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7fd9b4]">02</p>
          <h3 className="mt-1 font-display text-xl text-white">{ai.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/65">{ai.body}</p>
        </div>
      </Reveal>

      <Reveal delay={140} className="md:col-span-2">
        <div className="relative h-full overflow-hidden rounded-[2rem] border border-[#7fd9b4]/25 bg-[#7fd9b4]/[0.05] p-7">
          <div className="flex items-end gap-6">
            <div>
              <p className="font-display text-5xl font-bold leading-none text-[#7fd9b4]">
                <CountUp value={190} />+
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/55">countries</p>
            </div>
            <div>
              <p className="font-display text-5xl font-bold leading-none text-white">
                <CountUp value={25} />+
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/55">industries</p>
            </div>
          </div>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7fd9b4]">03 · {depth.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-white/65">{depth.body}</p>
        </div>
      </Reveal>

      <Reveal delay={60} className="md:col-span-3">
        <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-7 sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7fd9b4]">04</p>
              <h3 className="mt-1 font-display text-xl text-white">{cost.title}</h3>
            </div>
            {/* a fixed price tag: scope in, surprises out */}
            <svg viewBox="0 0 64 64" className="h-12 w-12 shrink-0 text-white/70" fill="none" aria-hidden="true">
              <path d="M8 10h22l26 26-18 18L12 28 8 10Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
              <circle cx="21" cy="22" r="3.5" fill="currentColor" />
            </svg>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">{cost.body}</p>
        </div>
      </Reveal>

      <Reveal delay={120} className="md:col-span-3">
        <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.02] p-7 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">A strong fit for</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {whoFor.map((w) => (
              <li
                key={w}
                className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 text-sm text-white/80 transition-colors hover:border-[#7fd9b4]/50 hover:text-white"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
