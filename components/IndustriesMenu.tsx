"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Manrope } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { industriesMenu } from "@/lib/industries-menu";

// The Industries panel, laid out like the services panel: a pale sheet over the dimmed page,
// a rail of platforms on the left and the industries on the right. Content from the supplied page.
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-ind-menu", display: "swap" });
const EASE = "ease-[cubic-bezier(0.23,1,0.32,1)]";

type Tab = "all" | "sap" | "sf";
const tabs: { id: Tab; label: string; sub: string }[] = [
  { id: "all", label: "All industries", sub: "Every platform we work with" },
  { id: "sap", label: "SAP", sub: "Cloud ERP, AI and data" },
  { id: "sf", label: "Salesforce", sub: "CRM and customer experience" },
];

export function IndustriesMenu({ open, onEnter, onLeave, pathname }: { open: boolean; onEnter: () => void; onLeave: () => void; pathname: string }) {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("all");
  const intent = useRef<number | undefined>(undefined);

  // Reopen on "All industries" once the closing fade has finished.
  useEffect(() => {
    if (open) return;
    const id = window.setTimeout(() => setTab("all"), 320);
    return () => window.clearTimeout(id);
  }, [open]);
  useEffect(() => () => window.clearTimeout(intent.current), []);

  const aim = (t: Tab) => {
    window.clearTimeout(intent.current);
    if (t !== tab) intent.current = window.setTimeout(() => setTab(t), 75);
  };

  const rows = industriesMenu.filter((x) => tab === "all" || x.p.includes(tab));
  // Printing and Packaging has a page of its own; every other industry opens its guide on the Industries page.
  const hrefFor = (k: string) =>
    k === "print" ? "/industries/printing-and-packaging" : `/industries#industry-${k}${tab === "all" ? "" : tab === "sf" ? "/salesforce" : "/sap"}`;
  const onIndustries = pathname === "/industries";

  return (
    <>
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 -z-10 hidden bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,0.3),rgba(0,0,0,0.6))] transition-opacity duration-300 lg:block ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-x-0 top-full hidden origin-top transition-[opacity,transform,visibility] duration-[360ms] ${EASE} lg:block ${
          open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-3 scale-[0.985] opacity-0"
        }`}
      >
        <span aria-hidden="true" onPointerEnter={onEnter} onPointerLeave={onLeave} className={`absolute inset-x-0 -top-7 h-9 ${open ? "pointer-events-auto" : ""}`} />
        <div className="mx-auto flex max-w-7xl justify-center px-6 pt-2 lg:px-8">
          <div
            onPointerEnter={onEnter}
            onPointerLeave={onLeave}
            inert={!open}
            className={`${manrope.variable} font-[family-name:var(--font-ind-menu)] ${open ? "pointer-events-auto" : ""} relative grid w-full max-w-[80rem] grid-cols-[290px_1fr] overflow-hidden rounded-[26px] bg-[#eef2f0] text-[#12201a] shadow-[0_30px_80px_rgba(0,0,0,0.5)]`}
          >
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#1c6b51]/60 to-transparent" />

            <div className="relative z-10 space-y-0.5 bg-[#e4eae7] p-4" role="tablist" aria-label="Platform">
              {tabs.map((t) => {
                const on = t.id === tab;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onPointerEnter={() => aim(t.id)}
                    onPointerLeave={() => window.clearTimeout(intent.current)}
                    onFocus={() => setTab(t.id)}
                    // Hovering only swaps the list on the right; clicking "All industries" goes to the Industries page.
                    onClick={() => {
                      setTab(t.id);
                      if (t.id === "all") {
                        onLeave();
                        router.push("/industries");
                      }
                    }}
                    className={`block w-full rounded-xl px-4 py-3 text-left transition-colors duration-200 ${
                      on ? "bg-white shadow-[inset_3px_0_0_#1f7a5a,0_4px_14px_rgba(0,0,0,0.06)]" : "hover:bg-white/55"
                    }`}
                  >
                    <span className="block text-[13.5px] font-extrabold uppercase leading-tight tracking-[0.06em]">{t.label}</span>
                    <span className="mt-0.5 block text-[11.5px] font-medium text-[#5b6b64]">{t.sub}</span>
                  </button>
                );
              })}
            </div>

            <div className="relative z-10 flex min-h-[22rem] min-w-0 flex-col px-7 pb-6 pt-7">
              <p className="m-0 mb-4 flex flex-wrap items-baseline justify-between gap-3 border-b border-[#cfd9d4] pb-3 text-[12px] font-bold uppercase tracking-[0.2em] text-[#5b6b64]">
                {tab === "all" ? "All industries" : `Industries we serve with ${tab === "sap" ? "SAP" : "Salesforce"}`}
                <span className="text-[13.5px] font-medium normal-case tracking-normal">
                  {tab === "all" ? `${rows.length} industries, badges show the platforms we use` : `${rows.length} of ${industriesMenu.length} industries`}
                </span>
              </p>
              <div key={tab} className="sap-rise grid grid-cols-3 gap-x-5 gap-y-1" style={{ animationDuration: "0.4s" }}>
                {rows.map((x) => {
                  const body = (
                    <>
                      <span className="grid h-9 w-9 flex-none place-items-center rounded-[10px] bg-[#17694b] text-white">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-[19px] w-[19px]" dangerouslySetInnerHTML={{ __html: x.icon }} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[15px] font-bold leading-[1.3] transition-colors group-hover/i:text-[#17694b]">{x.n}</span>
                        <span className="mt-0.5 block text-[13px] leading-[1.4] text-[#5b6b64]">{tab === "all" ? x.promise : tab === "sap" ? x.sap : x.sf}</span>
                        {tab === "all" && (
                          <span className="mt-[5px] flex gap-[5px]">
                            {x.p.map((p) => (
                              <i key={p} className={`rounded px-1.5 py-px text-[10.5px] font-extrabold not-italic tracking-[0.04em] ${p === "sf" ? "bg-[#e3f1fd] text-[#0b5cab]" : "bg-[#17694b]/10 text-[#17694b]"}`}>
                                {p === "sf" ? "Salesforce" : "SAP"}
                              </i>
                            ))}
                          </span>
                        )}
                      </span>
                    </>
                  );
                  const cls = "group/i flex items-start gap-3 rounded-xl px-3 py-[11px] hover:bg-white hover:shadow-[0_4px_14px_rgba(0,0,0,0.05)] focus-visible:bg-white";
                  // On the Industries page itself a hash link opens the guide at once; elsewhere it navigates there.
                  return onIndustries && x.k !== "print" ? (
                    <a key={x.k} href={hrefFor(x.k)} onClick={onLeave} className={cls}>
                      {body}
                    </a>
                  ) : (
                    <Link key={x.k} href={hrefFor(x.k)} onClick={onLeave} className={cls}>
                      {body}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-auto pt-4">
                <Link href="/industries" className="text-[12.5px] font-extrabold uppercase tracking-[0.18em] text-[#17694b]">
                  All industries &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
