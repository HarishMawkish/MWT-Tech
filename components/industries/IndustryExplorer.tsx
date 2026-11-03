"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ICON, INDUSTRIES, LINES, SALESFORCE, type Industry, type Platform } from "./data";

const PN: Record<Platform, string> = { sap: "SAP", sf: "Salesforce" };

function Icon({ k }: { k: string }) {
  return (
    <span className="i-ic">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: ICON[k] }}
      />
    </span>
  );
}

const platsOf = (k: string): Platform[] => (SALESFORCE[k] ? ["sap", "sf"] : ["sap"]);

/** The card grid and the slide-in guide for each industry, ported from the supplied page. */
export function IndustryExplorer() {
  const [cur, setCur] = useState<{ k: string; p: Platform } | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState<string | null>(null);

  const open = useCallback((k: string, p: Platform, push: boolean) => {
    if (!INDUSTRIES.some((x) => x.k === k)) return;
    const platform: Platform = p === "sf" && SALESFORCE[k] ? "sf" : "sap";
    setCur((prev) => {
      if (!prev) lastFocus.current = document.activeElement as HTMLElement | null;
      return { k, p: platform };
    });
    setActive(null);
    if (push) history.replaceState(null, "", `#industry-${k}${platform === "sf" ? "/salesforce" : "/sap"}`);
  }, []);

  const close = useCallback(() => {
    setCur(null);
    if (location.hash.indexOf("#industry-") === 0) history.replaceState(null, "", location.pathname + location.search);
    lastFocus.current?.focus();
  }, []);

  // A new guide always opens at its top, with focus inside the panel.
  useEffect(() => {
    if (!cur) return;
    const pn = panelRef.current;
    if (pn) {
      pn.scrollTop = 0;
      pn.focus();
    }
  }, [cur]);

  // Page scroll is locked while the guide is open.
  useEffect(() => {
    if (!cur) return;
    // The page scrolls on the html element, so both it and the body are locked; only the guide scrolls.
    const html = document.documentElement;
    const prevHtml = html.style.overflow;
    const prevBody = document.body.style.overflow;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, [cur]);

  // Escape closes the guide, and Tab stays inside it.
  useEffect(() => {
    if (!cur) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab") return;
      const pn = panelRef.current;
      if (!pn) return;
      const f = pn.querySelectorAll<HTMLElement>("button, a[href]");
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [cur, close]);

  // Deep links: #industry-food, #industry-food/sap, #industry-food/salesforce
  useEffect(() => {
    const fromHash = () => {
      const h = location.hash.match(/^#industry-(\w+)(?:\/(\w+))?/);
      if (!h) return;
      open(h[1], h[2] === "salesforce" || h[2] === "sf" ? "sf" : "sap", false);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [open]);

  const onPanelScroll = () => {
    const pn = panelRef.current;
    if (!pn) return;
    let on: string | null = null;
    pn.querySelectorAll<HTMLElement>(".i-sec").forEach((s) => {
      if (s.offsetTop - 80 <= pn.scrollTop) on = s.id;
    });
    setActive(on);
  };

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const t = e.target as HTMLElement;
    if (t === e.currentTarget || t.closest(".i-x")) return close();
    const a = t.closest<HTMLAnchorElement>(".i-nav a");
    if (a) {
      e.preventDefault();
      panelRef.current?.querySelector(a.getAttribute("href") ?? "")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="i-grid" id="i-grid">
        {INDUSTRIES.map((d) => (
          <button key={d.k} type="button" className="i-card" data-k={d.k} aria-haspopup="dialog" onClick={() => open(d.k, "sap", true)}>
            <div className="i-head">
              <Icon k={d.k} />
              <h2>{d.n}</h2>
            </div>
            <div className="i-body">
              <p className="i-p">{d.p}</p>
              <div className="i-plats">
                {platsOf(d.k).map((p) => (
                  <div key={p}>
                    <i className={p}>{PN[p]}</i>
                    <span>{LINES[p][d.k] || ""}</span>
                  </div>
                ))}
              </div>
              <div className="i-proof">
                <span className="i-n2">{SALESFORCE[d.k] ? "SAP and Salesforce guides" : "SAP guide"}</span>
                <span className="i-go">
                  Open <i>→</i>
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className={`i-ov${cur ? " open" : ""}`} id="i-ov" aria-hidden={!cur} onClick={onOverlayClick}>
        <div className="i-pn" id="i-pn" ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="i-pt" tabIndex={-1} onScroll={onPanelScroll}>
          {cur && <Guide cur={cur} active={active} onSwitch={(k, p) => open(k, p, true)} />}
        </div>
      </div>
    </>
  );
}

function Guide({ cur, active, onSwitch }: { cur: { k: string; p: Platform }; active: string | null; onSwitch: (k: string, p: Platform) => void }) {
  const d = INDUSTRIES.find((x) => x.k === cur.k) as Industry;
  const p = cur.p;
  const G = p === "sf" ? SALESFORCE[d.k] : d;
  const P = PN[p];
  const nx = INDUSTRIES[(INDUSTRIES.indexOf(d) + 1) % INDUSTRIES.length];
  const ps = platsOf(d.k);
  const other: Platform = p === "sap" ? "sf" : "sap";
  const navItems: [string, string][] = [
    ["s-ov", "Overview"],
    ["s-ch", "Challenges"],
    ["s-cap", `How ${P} handles it`],
    ["s-pr", `${P} products`],
    ["s-ai", "AI and our add-ons"],
    ["s-st", "Getting started"],
  ];

  return (
    <>
      <button type="button" className="i-x" aria-label="Close">
        ×
      </button>
      <header className="i-ph">
        <Icon k={d.k} />
        <div className="ey">{P} for your industry</div>
        <h2 id="i-pt">{d.n}</h2>
        <p>{d.p}</p>
        {ps.length > 1 ? (
          <div className="i-tabs" role="tablist" aria-label="Platform">
            {ps.map((x) => (
              <button key={x} type="button" role="tab" aria-selected={x === p} onClick={() => onSwitch(d.k, x)}>
                <b>{PN[x]}</b>
                <small>{LINES[x][d.k] || ""}</small>
              </button>
            ))}
          </div>
        ) : (
          <div className="i-tabs one">
            <span>
              <b>SAP</b>
              <small>We serve this industry with SAP</small>
            </span>
          </div>
        )}
      </header>
      <nav className="i-nav" aria-label="Guide sections">
        {navItems.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? "on" : undefined}>
            {label}
          </a>
        ))}
      </nav>

      <section className="i-sec i-intro" id="s-ov">
        <span className="k">Overview</span>
        <h3 className="t">
          How {P} fits {d.n.toLowerCase()}
        </h3>
        {G.intro.map((x) => (
          <p key={x}>{x}</p>
        ))}
        <div className="i-ed">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
            <path d="M8.5 12l2.5 2.5 4.5-5" />
          </svg>
          <div>
            <b>Recommended: {G.ed[0]}</b>
            <span>{G.ed[1]}</span>
          </div>
        </div>
      </section>

      <section className="i-sec" id="s-ch">
        <span className="k">Challenges</span>
        <h3 className="t">What we hear from businesses like yours</h3>
        <div className="i-chg">
          {G.ch.map((c) => (
            <div key={c[0]}>
              <b>{c[0]}</b>
              <span>{c[1]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="i-sec" id="s-cap">
        <span className="k">How {P} handles it</span>
        <h3 className="t">
          {P} capabilities across your {p === "sf" ? "customer journey" : "value chain"}
        </h3>
        <p className="lead">Standard {P} capabilities, step by step. We configure them to how you work.</p>
        <div className="i-cap">
          {G.cap.map((c) => (
            <div key={c[0]}>
              <h4>{c[0]}</h4>
              <ul>
                {c[1].map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="i-sec" id="s-pr">
        <span className="k">{P} products</span>
        <h3 className="t">The {P} solution behind it</h3>
        <div className="i-prod">
          {G.prod.map((x) => (
            <div key={x[0]}>
              <b>{x[0]}</b>
              <span>{x[1]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="i-sec" id="s-ai">
        <span className="k">AI and our add-ons</span>
        <h3 className="t">Insight on top, and what we add</h3>
        <div className="i-two">
          <div>
            <h4>AI and insight</h4>
            <ul className="i-list">
              {G.ai.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="i-dk">
            <h4>Where Mawkish adds to the standard</h4>
            <ul className="i-list">
              {G.ext.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="i-sec" id="s-st">
        <span className="k">Getting started</span>
        <h3 className="t">Three steps to a clear plan</h3>
        <div className="i-steps">
          {G.start.map((x) => (
            <div key={x}>{x}</div>
          ))}
        </div>
      </section>

      {ps.length > 1 && (
        <div className="i-sw">
          {p === "sap" ? "This industry also runs on Salesforce for the customer side." : "Salesforce works best with SAP as the core behind it."}{" "}
          <button type="button" onClick={() => onSwitch(d.k, other)}>
            See the {PN[other]} guide →
          </button>
        </div>
      )}

      <div className="i-pcta">
        <div>
          <b>See {P} run your processes.</b>
          <span>{p === "sf" ? "A working session on your customer journeys, with the products that fit." : "A working session on your industry, with the scope and the edition that fit."}</span>
        </div>
        <Link href="/contact">Talk to an industry expert →</Link>
      </div>

      <div className="i-pft">
        <span>
          {p === "sf"
            ? "Salesforce, Agentforce and the products named are trademarks of Salesforce, Inc."
            : "SAP and the SAP products named are trademarks of SAP SE. Edition guidance reflects SAP's current scope and is confirmed in assessment."}
        </span>
        <button type="button" onClick={() => onSwitch(nx.k, p)}>
          Next: {nx.n} →
        </button>
      </div>
    </>
  );
}
