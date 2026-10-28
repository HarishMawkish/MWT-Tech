const tiles = [
  { label: "Period close", d: "M0 32 L20 27 L40 29 L60 18 L80 21 L100 9 L120 12" },
  { label: "Order flow", d: "M0 34 L20 23 L40 27 L60 14 L80 19 L100 10 L120 4" },
  { label: "Time & payroll", d: "M0 22 L20 26 L40 15 L60 19 L80 10 L100 15 L120 6" },
];
const bars = [38, 52, 45, 66, 58, 78, 70, 92];
const rows = ["Invoice matched", "Order released", "Payroll run ready", "Close task completed"];
const modules = ["Finance", "Supply chain", "HR"];

// Capabilities you can switch on later, floating around the edges of the window.
const addOns = [
  { label: "+ AI agents", pos: "-right-2 top-10 sm:-right-8" },
  { label: "+ Extensions", pos: "-left-2 top-[46%] sm:-left-10" },
  { label: "+ Integrations", pos: "-right-2 bottom-24 sm:-right-10" },
];

/**
 * A stylised ERP window for the GROW hero, in the spirit of the product-UI
 * heroes on Stripe and Linear: the thing itself, not a diagram of it. It shows
 * no figures (those would be invented), only shapes: sparklines drawing,
 * bars rising, the three starting modules lighting in turn, and the add-ons
 * that arrive later switching on around the edges. Decorative.
 */
export function DashboardMock() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-4xl select-none">
      <div className="absolute inset-x-[8%] -bottom-6 top-[20%] rounded-full bg-[#1c6b51]/35 blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/14 bg-[#05100b]/95 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9),0_0_0_1px_rgba(127,217,180,0.06)]">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">Cloud ERP</span>
          <div className="ml-auto flex gap-1.5">
            {modules.map((m, i) => (
              <span
                key={m}
                className="sap-tab rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-[11px]"
                style={{ animationDelay: `${i * 2.4}s` }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-[1fr_15rem] sm:p-5">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {tiles.map((t, i) => (
                <div key={t.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
                  <p className="truncate text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45 sm:text-[11px]">{t.label}</p>
                  <svg viewBox="0 0 120 40" className="mt-3 h-10 w-full overflow-visible sm:h-12" fill="none">
                    <path d={t.d} stroke="rgba(127,217,180,0.18)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d={t.d}
                      pathLength={1}
                      stroke="#7fd9b4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sap-line"
                      style={{ animationDelay: `${i * 0.35}s`, filter: "drop-shadow(0 0 5px rgba(127,217,180,0.7))" }}
                    />
                  </svg>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <span
                      className="sap-fill block h-full origin-left rounded-full bg-[#7fd9b4]"
                      style={{ width: `${55 + i * 15}%`, animationDelay: `${i * 0.3}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex h-28 items-end gap-2 sm:h-36">
                {bars.map((h, i) => (
                  <span
                    key={i}
                    className="sap-bar flex-1 rounded-t-md bg-gradient-to-t from-[#1c6b51] to-[#7fd9b4]"
                    style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <ul className="hidden space-y-2 sm:block">
            {rows.map((r, i) => (
              <li
                key={r}
                className="sap-row-in flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 text-xs text-white/70"
                style={{ animationDelay: `${0.4 + i * 0.5}s` }}
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-[#7fd9b4]">
                  <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M6.5 10.4l2.4 2.4 4.6-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {addOns.map((a, i) => (
        <span
          key={a.label}
          className={`sap-switch-on absolute whitespace-nowrap rounded-full border border-dashed px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] backdrop-blur-md sm:px-4 sm:text-xs ${a.pos}`}
          style={{ animationDelay: `${i * 1.6}s` }}
        >
          {a.label}
        </span>
      ))}
    </div>
  );
}
