"use client";

import { useEffect, useMemo, useState } from "react";
import type { Client, PlatformKey } from "./data";
import { clients, platforms } from "./data";
import "./clients.css";

const logo = (c: Client) => `/images/clients/${c.id}.png`;
const platformKeys = Object.keys(platforms) as PlatformKey[];

function readHash(): string | null {
  const m = window.location.hash.match(/^#case\/([\w-]+)/);
  return m ? m[1] : null;
}

function Card({ c }: { c: Client }) {
  return (
    <a className="c-card c-fade" href={`#case/${c.id}`} aria-label={`${c.n}: read the case study`}>
      <div className="c-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo(c)} alt={`${c.n} logo`} loading="lazy" />
        {c.st ? <span className="c-st">{c.st}</span> : null}
      </div>
      <div className="c-meta">
        <h3>{c.n}</h3>
        <span className="c-where">
          {c.ind} · {c.co}
        </span>
        <div className="c-prods">
          {c.prods.map((p) => (
            <span key={p[0]} className={p[1]}>
              {p[0]}
            </span>
          ))}
        </div>
        <span className="c-more">
          Read the case study <i>→</i>
        </span>
      </div>
    </a>
  );
}

function CaseBody({ c }: { c: Client }) {
  const facts: [string, string][] = c.r.length ? c.r.map((r) => [r[0], r[1]]) : c.f;
  return (
    <>
      <div className="c-cols">
        <div>
          <div className="c-box">
            <div className="c-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo(c)} alt={`${c.n} logo`} />
            </div>
            <p>{c.about}</p>
            <div className="c-facts">
              {c.f.map((f) => (
                <div key={f[1]}>
                  <b>{f[0]}</b>
                  <span>{f[1]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="c-box">
            <span className="c-k">Platform</span>
            <div className="c-plat">{c.plat}</div>
          </div>
        </div>
        <div>
          <div className="c-box">
            <span className="c-k">{c.mh}</span>
            <ul className="c-list2">
              {c.mods.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="c-box">
            <span className="c-k">{c.ah || "Business areas resolved"}</span>
            <ul className="c-list2 c-ok">
              {c.areas.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="c-box">
            <span className="c-k">{c.ih}</span>
            <ul className="c-rows">
              {c.ints.map((i) => (
                <li key={i[0]}>
                  <b>{i[0]}</b>: {i[1]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="c-res" style={{ gridTemplateColumns: `repeat(${Math.min(4, facts.length)},minmax(0,1fr))` }}>
        {facts.map((r) => (
          <div key={r[1]}>
            <b>{r[0]}</b>
            <span>{r[1]}</span>
          </div>
        ))}
      </div>
    </>
  );
}

/** Clients and case studies, from the supplied page: the body only. The site's own header and footer wrap it, untouched. */
export function ClientsPage({ fontClass }: { fontClass: string }) {
  const [caseId, setCaseId] = useState<string | null>(null);
  const [fp, setFp] = useState<"all" | PlatformKey>("all");
  const [fc, setFc] = useState("all");

  useEffect(() => {
    let prev: string | null = null;
    const route = () => {
      const id = readHash();
      setCaseId(id);
      if (id) window.scrollTo(0, 0);
      else if (prev && window.location.hash === "#clients") {
        const g = document.getElementById("c-groups");
        if (g) window.scrollTo(0, g.getBoundingClientRect().top + window.scrollY - 140);
      }
      prev = id;
    };
    route();
    window.addEventListener("hashchange", route);
    return () => window.removeEventListener("hashchange", route);
  }, []);

  const current = caseId ? (clients.find((c) => c.id === caseId) ?? null) : null;

  useEffect(() => {
    document.title = current ? `${current.n} case study | Mawkish` : "Clients | Mawkish";
  }, [current]);

  const countries = useMemo(() => {
    const s = new Set<string>();
    clients.forEach((c) => c.co.split(" and ").forEach((x) => s.add(x)));
    return s.size;
  }, []);

  const groups = platformKeys
    .filter((k) => fp === "all" || fp === k)
    .map((k) => ({ k, list: clients.filter((c) => c.p === k && (fc === "all" || c.co.includes(fc))) }))
    .filter((g) => g.list.length);
  const total = groups.reduce((n, g) => n + g.list.length, 0);

  const idx = current ? clients.indexOf(current) : -1;
  const prev = idx > -1 ? clients[(idx - 1 + clients.length) % clients.length] : null;
  const next = idx > -1 ? clients[(idx + 1) % clients.length] : null;

  return (
    <div className={`cl ${current ? "c-in-case" : ""} ${fontClass}`}>
      <div id="top" className="c-js">
        {/* CLIENT LIST */}
        <div className="c-list">
          <section className="hero c-hero">
            <div className="in">
              <div className="crumbs">
                <a href="/">Home</a> / Clients
              </div>
              <span className="eyebrow">Our clients</span>
              <h1>
                Companies that run on what <em>we&apos;ve built.</em>
              </h1>
              <p className="lede">
                From tea exporters and food makers to conglomerates and electrical manufacturers, these are some of the
                companies we&apos;ve taken to SAP and Salesforce, in Sri Lanka and India. Select a client to read how we
                did it.
              </p>
              <div className="c-stats">
                <div>
                  <b>{clients.length}</b>
                  <span>clients featured</span>
                </div>
                <div>
                  <b>3</b>
                  <span>platforms: RISE, GROW and Salesforce</span>
                </div>
                <div>
                  <b>{countries}</b>
                  <span>countries: Sri Lanka and India</span>
                </div>
              </div>
            </div>
          </section>

          <section className="light" id="clients">
            <div className="in">
              <div className="c-bar">
                <div className="c-chips" role="group" aria-label="Filter by platform">
                  <button type="button" aria-pressed={fp === "all"} onClick={() => setFp("all")}>
                    All<small>{clients.length}</small>
                  </button>
                  {platformKeys.map((k) => (
                    <button key={k} type="button" aria-pressed={fp === k} onClick={() => setFp(k)}>
                      {platforms[k]}
                      <small>{clients.filter((c) => c.p === k).length}</small>
                    </button>
                  ))}
                </div>
                <div className="c-chips" role="group" aria-label="Filter by country">
                  {[
                    ["all", "All countries"],
                    ["Sri Lanka", "Sri Lanka"],
                    ["India", "India"],
                  ].map(([v, label]) => (
                    <button key={v} type="button" aria-pressed={fc === v} onClick={() => setFc(v)}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div id="c-groups">
                {groups.map((g) => (
                  <div className="c-group" key={g.k}>
                    <h2>
                      {platforms[g.k]}
                      <span>
                        {g.list.length} {g.list.length === 1 ? "client" : "clients"}
                      </span>
                    </h2>
                    <div className="c-grid">
                      {g.list.map((c) => (
                        <Card key={c.id} c={c} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="c-empty" style={{ display: total ? "none" : "block" }}>
                No clients match these filters.
              </p>
            </div>
          </section>

          <section>
            <div className="in">
              <div className="cta-band">
                <div>
                  <span className="eyebrow">Your project next</span>
                  <h2>Let&apos;s talk about what you want to change.</h2>
                  <p className="lede">
                    Tell us where you are today and where you want to be. We&apos;ll share how companies like yours made
                    the move, and what it would take for you.
                  </p>
                  <div style={{ marginTop: 28 }}>
                    <a href="/contact" className="btn pri">
                      Schedule a consultation →
                    </a>
                  </div>
                </div>
                <ul>
                  <li>SAP Cloud ERP, RISE and GROW with SAP</li>
                  <li>Salesforce clouds and integration</li>
                  <li>Sri Lanka and India delivery</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* CASE STUDY VIEW */}
        <div className="c-case" aria-live="polite">
          {current ? (
            <section className="light">
              <div className="in">
                <div className="c-top">
                  <a className="c-back" href="#clients">
                    ‹ All clients
                  </a>
                  <span className="c-count">
                    {platforms[current.p]} · {current.co}
                  </span>
                </div>
                <span className="eyebrow">
                  {current.st ? "Implementation in progress" : "Client case study"} · {current.ind}
                </span>
                <h1>
                  {current.n}: {current.t}
                </h1>
                <div className="c-wrap c-locked">
                  <div className="c-body" aria-hidden="true" inert>
                    <CaseBody c={current} />
                    <div className="c-cta">
                      <a href="/contact" className="btn pri">
                        Talk to us about a similar project →
                      </a>
                      <a href="#clients" className="btn sec">
                        All clients
                      </a>
                    </div>
                    {prev && next ? (
                      <div className="c-next">
                        <a href={`#case/${prev.id}`}>‹ {prev.n}</a>
                        <a href={`#case/${next.id}`}>{next.n} ›</a>
                      </div>
                    ) : null}
                  </div>

                  <div className="c-gate">
                    {/* Placeholder gate: the form is deliberately inert for now. It sends nothing, unlocks nothing and goes nowhere. */}
                    <form className="c-form c-fade" noValidate onSubmit={(e) => e.preventDefault()}>
                      <div className="c-lock" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#17694b" strokeWidth="2">
                          <rect x="4" y="9" width="12" height="9" rx="2" />
                          <path d="M7 9V6a3 3 0 0 1 6 0v3" />
                        </svg>
                      </div>
                      <h2>Read the full case study</h2>
                      <p>Tell us who you are and we&apos;ll open this case study, and every other one on this page.</p>
                      <div className="c-f">
                        <label htmlFor="c-name">Your name</label>
                        <input type="text" id="c-name" name="name" autoComplete="name" />
                      </div>
                      <div className="c-f">
                        <label htmlFor="c-co">Company name</label>
                        <input type="text" id="c-co" name="company" autoComplete="organization" />
                      </div>
                      <div className="c-f">
                        <label htmlFor="c-em">Company email</label>
                        <input
                          type="email"
                          id="c-em"
                          name="email"
                          autoComplete="email"
                          inputMode="email"
                          placeholder="you@yourcompany.com"
                        />
                      </div>
                      <label className="c-cons">
                        <input type="checkbox" id="c-ok" name="consent" />
                        <span>
                          I agree that Mawkish Technologies may contact me about this request, as described in its{" "}
                          <span className="c-priv">privacy notice</span>.
                        </span>
                      </label>
                      <button type="button" className="btn pri" aria-disabled="true">
                        Open the case study →
                      </button>
                      <p className="c-fine">
                        Please use your company email. Personal addresses such as Gmail or Yahoo can&apos;t be accepted.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}
