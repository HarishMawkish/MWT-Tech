type Stop = { id: string; label: string; headline: string };

/**
 * The seven migration assistants as stops on a metro line: a light runs along
 * the line and each stop glows as it passes. Point at (or tab to) a stop to open
 * its description. On a phone the line turns vertical and every description is
 * simply shown. Pure CSS, rendered on the server.
 */
export function MetroLine({ stops }: { stops: readonly Stop[] }) {
  const n = stops.length;
  return (
    <div className="relative">
      <ol className="relative grid grid-cols-1 gap-8 lg:grid-cols-7 lg:gap-0">
        {/* the line: dim track, plus a lit stretch that travels along it */}
        <span aria-hidden="true" className="absolute bottom-2 left-[13px] top-2 w-px bg-white/12 lg:inset-x-[7.14%] lg:bottom-auto lg:left-auto lg:top-[13px] lg:h-px lg:w-auto" />
        <span
          aria-hidden="true"
          className="sap-metro pointer-events-none absolute bottom-2 left-[12px] top-2 hidden w-0.5 lg:left-auto lg:top-[12px] lg:bottom-auto lg:block lg:h-0.5 lg:w-auto lg:inset-x-[7.14%]"
        />

        {stops.map((s, i) => (
          <li key={s.id} className="group relative pl-12 outline-none lg:pl-0 lg:pt-12 lg:text-center" tabIndex={0}>
            <span
              className="sap-stop absolute left-0 top-0 grid h-[27px] w-[27px] place-items-center rounded-full border-2 bg-black font-display text-[11px] font-bold lg:left-1/2 lg:-translate-x-1/2"
              style={{ animationDelay: `${(i / n) * 7}s` }}
            >
              {i + 1}
            </span>
            <p className="font-display text-sm font-bold uppercase leading-snug tracking-wide text-white transition-colors group-hover:text-[#7fd9b4] group-focus-visible:text-[#7fd9b4]">
              {s.label}
            </p>

            {/* phones: always visible */}
            <p className="mt-2 text-sm leading-relaxed text-white/60 lg:hidden">{s.headline}</p>

            {/* wide screens: opens above the line */}
            <div
              className="pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-1/2 z-20 hidden w-60 -translate-x-1/2 translate-y-2 rounded-2xl border border-[#7fd9b4]/35 bg-[#04100b]/95 p-4 text-left opacity-0 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 lg:block"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7fd9b4]">AI assistant</p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/80">{s.headline}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
