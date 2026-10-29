"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AREAS, D, TYPES, type Item } from "./data";

// Port of the AI Catalog from the supplied page: the hero with its search, the filterable catalog, the detail card
// and the shortlist. The markup, the wording and the behaviour are the page's own; only the script became React.

type FacetKey = "area" | "type" | "status" | "lic";

const FACETS: { key: FacetKey; title: string; get: (x: Item) => string; vals: string[] }[] = [
  { key: "area", title: "Business area", get: (x) => x.a, vals: AREAS },
  { key: "type", title: "Type", get: (x) => TYPES[x.t], vals: Object.values(TYPES) },
  { key: "status", title: "Availability", get: (x) => x.s, vals: ["GA", "Beta", "Early adopter"] },
  { key: "lic", title: "Licence", get: (x) => x.l, vals: ["Included", "Premium AI", "Check with us", "Platform"] },
];
const LABEL: Record<string, string> = { GA: "Generally available", Beta: "Beta", "Early adopter": "Early adopter" };
const STORE_KEY = "mk-ai-shortlist";

type Filters = { area: string[]; type: string[]; status: string[]; lic: string[]; qw: boolean };
const NO_FILTERS: Filters = { area: [], type: [], status: [], lic: [], qw: false };

const shortText = (w: string) => (w.length > 130 ? w.slice(0, w.lastIndexOf(" ", 127)) + "…" : w);
const sinceText = (src: string) =>
  src === "Built in" ? "Built into SAP Cloud ERP" : src === "Available" ? "Available on SAP BTP" : /^\d{4}$/.test(src) ? "Release " + src : src;

const COUNT_ALL = D.length;
const COUNT_AGENTS = D.filter((x) => x.t === "agent" || x.t === "assist").length;
const COUNT_GA = D.filter((x) => x.s === "GA").length;
const COUNT_QW = D.filter((x) => x.qw).length;

export function AiCatalogApp() {
  const [raw, setRaw] = useState("");
  const [F, setF] = useState<Filters>(NO_FILTERS);
  const [sort, setSort] = useState("qw");
  const [facetsOpen, setFacetsOpen] = useState(false);
  const [SL, setSL] = useState<string[]>([]);
  const [slLoaded, setSlLoaded] = useState(false);
  const [cur, setCur] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const det = useRef<HTMLDialogElement>(null);
  const sl = useRef<HTMLDialogElement>(null);

  const q = raw.trim().toLowerCase();

  // The shortlist is remembered in the visitor's browser.
  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORE_KEY) || "[]");
      if (Array.isArray(saved)) setSL(saved.filter((id) => D.some((x) => x.id === id)));
    } catch {
      /* unreadable: start empty */
    }
    setSlLoaded(true);
  }, []);
  useEffect(() => {
    if (!slLoaded) return;
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify(SL));
    } catch {
      /* the list just will not be remembered */
    }
  }, [SL, slLoaded]);

  function match(x: Item, skip?: string) {
    if (q) {
      const h = (x.n + " " + x.w + " " + x.k + " " + x.a).toLowerCase();
      if (!q.split(/\s+/).every((t) => h.includes(t))) return false;
    }
    if (F.qw && !x.qw) return false;
    for (const f of FACETS) {
      if (f.key === skip) continue;
      if (F[f.key].length && !F[f.key].includes(f.get(x))) return false;
    }
    return true;
  }

  const list = D.filter((x) => match(x));
  if (sort === "az") list.sort((a, b) => a.n.localeCompare(b.n));
  else if (sort === "area") list.sort((a, b) => AREAS.indexOf(a.a) - AREAS.indexOf(b.a) || a.n.localeCompare(b.n));
  else list.sort((a, b) => (b.qw || 0) - (a.qw || 0) || (a.s === "GA" ? 0 : 1) - (b.s === "GA" ? 0 : 1));

  const toggleSL = (id: string) => setSL((s) => (s.includes(id) ? s.filter((v) => v !== id) : [...s, id]));
  const toggleFacet = (key: FacetKey, v: string, on: boolean) =>
    setF((f) => ({ ...f, [key]: on ? [...f[key], v] : f[key].filter((x) => x !== v) }));
  const goToCatalog = () => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  const open = (id: string) => {
    setCur(id);
    det.current?.showModal();
  };
  const backdropClose = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) e.currentTarget.close();
  };

  const item = cur ? D.find((d) => d.id === cur) : undefined;
  const copyList = () => {
    const txt =
      "My SAP AI shortlist (Mawkish AI Catalog):\n" +
      SL.map((id, i) => {
        const x = D.find((d) => d.id === id)!;
        return i + 1 + ". " + x.n + " (" + TYPES[x.t] + ", " + x.a + ")";
      }).join("\n");
    if (navigator.clipboard)
      navigator.clipboard.writeText(txt).then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      }, () => {});
  };

  return (
    <>
      <section className="hero cat-hero">
        <div className="in">
          <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">AI &amp; Data</Link> / AI Catalog</div>
          <span className="eyebrow">Mawkish AI Catalog for SAP Cloud ERP</span>
          <h1>Find the AI that fits <em>your business.</em></h1>
          <p className="lede">SAP adds new AI to SAP Cloud ERP every quarter: features built into the apps, assistants, agents and tools to build your own. This catalog brings together what's available today, in plain language, with what each one does, what you need to use it, and how it's licensed. Shortlist the ones that interest you and we'll show you them working on processes like yours.</p>
          <div className="search">
            <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="6" fill="none" stroke="#7f938a" strokeWidth="2" /><path d="M13 13l5 5" stroke="#7f938a" strokeWidth="2" strokeLinecap="round" /></svg>
            <input id="q" type="search" placeholder="Search, for example: invoices, sales orders, close" aria-label="Search the AI catalog" autoComplete="off" value={raw} onChange={(e) => setRaw(e.target.value)} />
          </div>
          <div className="quick" aria-label="Popular searches">
            {[["invoice", "Invoices"], ["sales order", "Sales orders"], ["close", "Month-end close"], ["document", "Documents and PDFs"]].map(([v, label]) => (
              <button key={v} type="button" onClick={() => { setRaw(v); goToCatalog(); }}>{label}</button>
            ))}
            <button type="button" onClick={() => { setF((f) => ({ ...f, qw: true })); goToCatalog(); }}>Mawkish quick wins</button>
          </div>
          <div className="stats">
            <div><b id="s-all">{COUNT_ALL}</b><span>AI capabilities</span></div>
            <div><b id="s-agents">{COUNT_AGENTS}</b><span>agents and assistants</span></div>
            <div><b id="s-ga">{COUNT_GA}</b><span>generally available</span></div>
            <div><b id="s-qw">{COUNT_QW}</b><span>Mawkish quick wins</span></div>
          </div>
        </div>
      </section>

      <section className="light" id="catalog">
        <div className="in">
          <div className="cat-wrap">
            <aside className={`facets${facetsOpen ? " open" : ""}`} id="facets" aria-label="Filters">
              {FACETS.map((f) => (
                <div className="facet" key={f.key}>
                  <h3>{f.title}</h3>
                  {f.vals.map((v) => {
                    const c = D.filter((x) => match(x, f.key) && f.get(x) === v).length;
                    return (
                      <label key={v} className={c ? "" : "zero"}>
                        <input type="checkbox" checked={F[f.key].includes(v)} onChange={(e) => toggleFacet(f.key, v, e.target.checked)} />
                        {f.key === "status" ? LABEL[v] : v}
                        <span className="c">{c}</span>
                      </label>
                    );
                  })}
                </div>
              ))}
              <div className="facet">
                <h3>Our view</h3>
                <label>
                  <input type="checkbox" checked={F.qw} onChange={(e) => setF((f) => ({ ...f, qw: e.target.checked }))} />
                  Mawkish quick wins<span className="c">{D.filter((x) => x.qw && match(x, "qw")).length}</span>
                </label>
              </div>
              <button className="clear" id="clr" type="button" onClick={() => { setF(NO_FILTERS); setRaw(""); }}>Clear all filters</button>
            </aside>
            <div>
              <div className="bar">
                <button className="fbtn" id="fbtn" type="button" aria-expanded={facetsOpen} aria-controls="facets" onClick={() => setFacetsOpen((o) => !o)}>Filters</button>
                <span className="n" id="count">{list.length} <span>of {D.length}</span></span>
                <div className="chips" id="chips">
                  {q && <button type="button" onClick={() => setRaw("")}>“{q}” ×</button>}
                  {FACETS.flatMap((f) =>
                    F[f.key].map((v) => (
                      <button type="button" key={f.key + v} onClick={() => toggleFacet(f.key, v, false)}>{f.key === "status" ? LABEL[v] : v} ×</button>
                    )),
                  )}
                  {F.qw && <button type="button" onClick={() => setF((f) => ({ ...f, qw: false }))}>Quick wins ×</button>}
                </div>
                <select id="sort" aria-label="Sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="qw">Quick wins first</option>
                  <option value="az">A to Z</option>
                  <option value="area">By business area</option>
                </select>
              </div>
              <div className="grid" id="grid" aria-live="polite">
                {list.length ? (
                  list.map((x) => {
                    const on = SL.includes(x.id);
                    return (
                      <article
                        key={x.id}
                        className="ccard"
                        tabIndex={0}
                        role="button"
                        data-id={x.id}
                        aria-label={`${x.n}, open details`}
                        onClick={() => open(x.id)}
                        onKeyDown={(e) => {
                          if ((e.key === "Enter" || e.key === " ") && e.target === e.currentTarget) {
                            e.preventDefault();
                            open(x.id);
                          }
                        }}
                      >
                        <button
                          type="button"
                          className={`add${on ? " on" : ""}`}
                          aria-label={`${on ? "Remove from" : "Add to"} shortlist: ${x.n}`}
                          aria-pressed={on}
                          onClick={(e) => { e.stopPropagation(); toggleSL(x.id); }}
                        >
                          {on ? "✓" : "+"}
                        </button>
                        <div className="top"><span className={`ty ${x.t}`}>{TYPES[x.t]}</span></div>
                        <span className="area">{x.a}</span>
                        <h3>{x.n}</h3>
                        <p>{shortText(x.w)}</p>
                        <div className="foot">
                          <span className={`tag ${x.s === "GA" ? "ga" : "beta"}`}>{LABEL[x.s]}</span>
                          <span className="tag">{x.l}</span>
                          {x.qw ? <span className="tag qw">Quick win</span> : null}
                        </div>
                      </article>
                    );
                  })
                ) : (
                  <div className="empty" style={{ gridColumn: "1/-1" }}>
                    Nothing matches yet. Try fewer filters, or <a href="#book" style={{ color: "var(--green-hi)", fontWeight: 700 }}>ask us</a>: SAP adds new AI every quarter.
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="note" style={{ marginTop: "28px" }}>Based on SAP's published release information up to the 2608 release and SAP's Q3 2026 AI highlights. Availability depends on your SAP release, region, language and licence, and SAP's commercial terms change often. We confirm each item for your system before you plan on it.</p>
        </div>
      </section>

      <button type="button" className={`sl-btn${SL.length > 0 ? " show" : ""}`} id="slbtn" aria-haspopup="dialog" onClick={() => sl.current?.showModal()}>
        My shortlist <b id="slcount">{SL.length}</b>
      </button>

      <dialog className="det" id="det" ref={det} aria-labelledby="d-title" onClick={backdropClose}>
        <div className="dh">
          <button className="x" type="button" aria-label="Close" onClick={() => det.current?.close()}>×</button>
          <div id="d-top">{item && <span className={`ty ${item.t}`}>{TYPES[item.t]}</span>}</div>
          <h2 id="d-title">{item?.n}</h2>
          <div className="meta" id="d-meta">
            {item && <span className="tag">{item.a}</span>}
            {item?.qw ? <span className="tag qw">Mawkish quick win</span> : null}
          </div>
        </div>
        <div className="db">
          <div><h4>What it does</h4><p id="d-what">{item?.w}</p></div>
          <div><h4>Why it matters</h4><ul id="d-why">{item?.y.map((v) => <li key={v}>{v}</li>)}</ul></div>
          <div className="facts2">
            <div><b>Availability</b><span id="d-av">{item ? LABEL[item.s] : ""}</span></div>
            <div><b>Licence</b><span id="d-lic">{item?.l}</span></div>
            <div><b>Since</b><span id="d-src">{item ? sinceText(item.src) : ""}</span></div>
          </div>
          <div><h4>What you need</h4><p id="d-need">{item?.need}</p></div>
          <div className="mw"><h4>How Mawkish helps</h4><p id="d-mw">{item?.m}</p></div>
        </div>
        <div className="df">
          <button className="btn pri" id="d-add" type="button" onClick={() => cur && toggleSL(cur)}>{cur && SL.includes(cur) ? "Remove from shortlist" : "Add to shortlist"}</button>
          <a className="btn sec" href="#book" onClick={() => det.current?.close()}>Ask us about it</a>
        </div>
      </dialog>

      <dialog className="sl" id="sl" ref={sl} aria-labelledby="sl-title" onClick={backdropClose}>
        <div className="dh">
          <button className="x" type="button" aria-label="Close" onClick={() => sl.current?.close()}>×</button>
          <h2 id="sl-title">Your AI shortlist</h2>
          <p>Bring this list to an AI discovery session, or copy it to share with your team.</p>
        </div>
        <ol id="sl-list">
          {SL.length ? (
            SL.map((id) => {
              const x = D.find((d) => d.id === id);
              if (!x) return null;
              return (
                <li key={id}>
                  {x.n} <button type="button" onClick={() => toggleSL(id)}>remove</button>
                  <small>{TYPES[x.t]} · {x.a} · {x.l}</small>
                </li>
              );
            })
          ) : (
            <li>Your shortlist is empty.</li>
          )}
        </ol>
        <div className="df">
          <a className="btn pri" href="#book" onClick={() => sl.current?.close()}>Book a session with this list</a>
          <button className="btn sec" id="sl-copy" type="button" onClick={copyList}>{copied ? "Copied" : "Copy list"}</button>
        </div>
      </dialog>
    </>
  );
}
