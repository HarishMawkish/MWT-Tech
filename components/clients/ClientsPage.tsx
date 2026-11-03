"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";
import type { CaseDetail, Client, ClientCard, PlatformKey } from "./data";
import { clients, platforms } from "./data";
import "./clients.css";

const logo = (c: ClientCard) => `/images/clients/${c.id}.png`;
const platformKeys = Object.keys(platforms) as PlatformKey[];

function readHash(): string | null {
  const m = window.location.hash.match(/^#case\/([\w-]+)/);
  return m ? m[1] : null;
}

function Card({ c }: { c: ClientCard }) {
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

/** What sits behind the registration form and while a case study loads. It holds no real content. */
function CaseSkeleton() {
  const lines = (widths: string[]) => widths.map((w, i) => <i key={i} className="c-sk" style={{ width: w }} />);
  return (
    <div aria-hidden="true">
      <div className="c-cols">
        <div>
          <div className="c-box">{lines(["46%", "100%", "92%", "70%", "100%", "84%"])}</div>
          <div className="c-box">{lines(["30%", "78%"])}</div>
        </div>
        <div>
          <div className="c-box">{lines(["38%", "86%", "74%", "92%", "68%", "80%"])}</div>
          <div className="c-box">{lines(["44%", "90%", "72%", "84%", "64%"])}</div>
        </div>
        <div>
          <div className="c-box">{lines(["40%", "96%", "82%", "100%", "76%", "90%", "70%"])}</div>
        </div>
      </div>
      <div className="c-res c-res-sk">
        {[0, 1, 2, 3].map((n) => (
          <div key={n}>{lines(["58%", "88%"])}</div>
        ))}
      </div>
    </div>
  );
}

type FieldName = "name" | "company" | "email" | "consent";
const FIELDS: FieldName[] = ["name", "company", "email", "consent"];
const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type PendingCode = { email: string; resendAt: number };

/** "k7mq4txp" or "K7MQ-4TXP " both become "K7MQ-4TXP"; anything that cannot be part of a code is dropped. */
function formatTyped(raw: string) {
  const c = raw.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
  return c.length > 4 ? `${c.slice(0, 4)}-${c.slice(4)}` : c;
}

/** Step two: the visitor types the code we emailed. Everything here survives leaving the page to open their mail. */
function CodeStep({
  pending,
  setPending,
  onUnlocked,
}: {
  pending: PendingCode;
  setPending: (p: PendingCode | null) => void;
  onUnlocked: () => void;
}) {
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const wait = Math.max(0, Math.ceil((pending.resendAt - now) / 1000));
  const clock = `${Math.floor(wait / 60)}:${String(wait % 60).padStart(2, "0")}`;

  async function post(path: string, body?: unknown) {
    const res = await fetch(`/api/case-study-access/${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body ?? {}),
    });
    const data = (await res.json().catch(() => ({}))) as { error?: string; code?: string; email?: string; resendIn?: number };
    return { res, data };
  }

  async function verify(e: FormEvent) {
    e.preventDefault();
    if (busy) return;
    if (code.replace("-", "").length < 8) {
      setError("Please enter the 8-character code from the email.");
      return;
    }
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const { res, data } = await post("verify", { code });
      if (res.ok) {
        trackEvent("generate_lead", { form: "case_study_access" });
        onUnlocked();
        return;
      }
      if (data.code === "restart") {
        setPending(null);
        return;
      }
      setError(data.error || "Something went wrong. Please try again.");
    } catch {
      setError("We couldn't reach our server. Please try again shortly.");
    }
    setBusy(false);
  }

  async function resend() {
    if (busy || wait > 0) return;
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const { res, data } = await post("resend");
      if (res.ok) {
        setCode("");
        setNotice("We've sent you a new code. Only the newest one works.");
        setPending({ email: data.email || pending.email, resendAt: Date.now() + (data.resendIn ?? 120) * 1000 });
      } else if (data.code === "restart") {
        setPending(null);
        return;
      } else {
        if (data.code === "wait" && data.resendIn) setPending({ ...pending, resendAt: Date.now() + data.resendIn * 1000 });
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("We couldn't reach our server. Please try again shortly.");
    }
    setBusy(false);
  }

  async function changeEmail() {
    await fetch("/api/case-study-access", { method: "DELETE" }).catch(() => undefined);
    setPending(null);
  }

  return (
    <form className="c-form c-fade" noValidate onSubmit={verify}>
      <div className="c-lock" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#17694b" strokeWidth="2">
          <rect x="2.5" y="4.5" width="15" height="11" rx="2" />
          <path d="M3 6l7 5 7-5" />
        </svg>
      </div>
      <h2>Check your email</h2>
      <p>
        We sent an 8-character code to <b>{pending.email}</b>. Enter it here to open the case studies. If you don&apos;t see it,
        check your junk folder.
      </p>
      <div className="c-f">
        <label htmlFor="c-code">Verification code</label>
        <input
          type="text"
          id="c-code"
          className="c-code"
          value={code}
          onChange={(e) => setCode(formatTyped(e.target.value))}
          autoComplete="one-time-code"
          autoCapitalize="characters"
          autoCorrect="off"
          spellCheck={false}
          placeholder="XXXX-XXXX"
          maxLength={12}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "c-code-err" : undefined}
        />
        {error ? (
          <span className="c-err" id="c-code-err" role="alert">
            {error}
          </span>
        ) : null}
        {notice ? (
          <span className="c-note" role="status">
            {notice}
          </span>
        ) : null}
      </div>
      <button type="submit" className="btn pri" disabled={busy}>
        {busy ? "Checking…" : "Open the case studies →"}
      </button>
      <div className="c-sub">
        <button type="button" className="c-linkbtn" onClick={resend} disabled={busy || wait > 0}>
          {wait > 0 ? `Send a new code in ${clock}` : "Send a new code"}
        </button>
        <button type="button" className="c-linkbtn" onClick={changeEmail} disabled={busy}>
          Wrong email?
        </button>
      </div>
    </form>
  );
}

/** The registration form shown in place of a case study. The server makes every real decision; this only helps the visitor. */
function AccessForm({
  caseId,
  onUnlocked,
  pending,
  setPending,
}: {
  caseId: string;
  onUnlocked: () => void;
  pending: PendingCode | null;
  setPending: (p: PendingCode | null) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [formError, setFormError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      email: String(fd.get("email") || ""),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") || ""),
      caseId,
    };

    const found: Partial<Record<FieldName, string>> = {};
    if (payload.name.trim().length < 2) found.name = "Please enter your name.";
    if (payload.company.trim().length < 2) found.company = "Please enter your company name.";
    if (!payload.email.trim()) found.email = "Please enter your company email.";
    else if (!EMAIL_SHAPE.test(payload.email.trim())) found.email = "Please enter a valid email address.";
    if (!payload.consent) found.consent = "Please tick the box so we can contact you about this request.";
    setFormError("");
    setErrors(found);
    const first = FIELDS.find((f) => found[f]);
    if (first) {
      (e.currentTarget.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    setBusy(true);
    try {
      const res = await fetch("/api/case-study-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; field?: string; email?: string; resendIn?: number };
      if (res.ok) {
        // The details passed our checks and a code is on its way. Access opens once the code is entered.
        setPending({ email: data.email || "your email", resendAt: Date.now() + (data.resendIn ?? 120) * 1000 });
        setBusy(false);
        return;
      }
      const message = data.error || "Something went wrong. Please try again.";
      if (data.field && FIELDS.includes(data.field as FieldName)) setErrors({ [data.field]: message });
      else setFormError(message);
    } catch {
      setFormError("We couldn't reach our server. Please try again shortly.");
    }
    setBusy(false);
  }

  const fieldProps = (f: FieldName) => ({
    "aria-invalid": errors[f] ? true : undefined,
    "aria-describedby": errors[f] ? `c-${f}-err` : undefined,
  });
  const err = (f: FieldName) =>
    errors[f] ? (
      <span className="c-err" id={`c-${f}-err`} role="alert">
        {errors[f]}
      </span>
    ) : null;

  if (pending) return <CodeStep pending={pending} setPending={setPending} onUnlocked={onUnlocked} />;

  return (
    <form className="c-form c-fade" noValidate onSubmit={submit}>
      <div className="c-lock" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#17694b" strokeWidth="2">
          <rect x="4" y="9" width="12" height="9" rx="2" />
          <path d="M7 9V6a3 3 0 0 1 6 0v3" />
        </svg>
      </div>
      <h2>Read the full case study</h2>
      <p>Tell us who you are and we&apos;ll open this case study, and every other one on this page.</p>
      <div className="c-hp" aria-hidden="true">
        <label>
          Leave this empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="c-f">
        <label htmlFor="c-name">Your name</label>
        <input type="text" id="c-name" name="name" autoComplete="name" maxLength={100} {...fieldProps("name")} />
        {err("name")}
      </div>
      <div className="c-f">
        <label htmlFor="c-co">Company name</label>
        <input type="text" id="c-co" name="company" autoComplete="organization" maxLength={120} {...fieldProps("company")} />
        {err("company")}
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
          maxLength={254}
          {...fieldProps("email")}
        />
        {err("email")}
      </div>
      <label className="c-cons">
        <input type="checkbox" id="c-ok" name="consent" {...fieldProps("consent")} />
        <span>
          I agree that Mawkish Technologies may contact me about this request, as described in its{" "}
          <span className="c-priv">privacy notice</span>.
        </span>
      </label>
      {err("consent")}
      {formError ? (
        <span className="c-err c-err-form" role="alert">
          {formError}
        </span>
      ) : null}
      <button type="submit" className="btn pri" disabled={busy}>
        {busy ? "Sending your code…" : "Continue →"}
      </button>
      <p className="c-fine">
        Please use your company email. Personal addresses such as Gmail or Yahoo can&apos;t be accepted. We&apos;ll email
        you a code to confirm it&apos;s yours.
      </p>
    </form>
  );
}

type Access = "checking" | "locked" | "open";

/** Clients and case studies, from the supplied page: the body only. The site's own header and footer wrap it, untouched. */
export function ClientsPage({ fontClass }: { fontClass: string }) {
  const [caseId, setCaseId] = useState<string | null>(null);
  const [fp, setFp] = useState<"all" | PlatformKey>("all");
  const [fc, setFc] = useState("all");
  // Whether this browser has already registered. Asked of the server once, the first time a case study is opened.
  const [access, setAccess] = useState<Access>("checking");
  // A code has been emailed to this browser and is waiting to be typed in (also true after a reload or a trip to the mail app).
  const [pending, setPending] = useState<PendingCode | null>(null);
  const [details, setDetails] = useState<Record<string, CaseDetail>>({});
  const [failedId, setFailedId] = useState<string | null>(null);

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

  // Has this browser registered before? The server remembers (a signed cookie), so returning visitors go straight in.
  useEffect(() => {
    if (!caseId || access !== "checking") return;
    let live = true;
    fetch("/api/case-study-access", { cache: "no-store" })
      .then((r) => r.json())
      .then((d: { unlocked?: boolean; pending?: { email: string; resendIn: number } }) => {
        if (!live) return;
        if (d.pending) setPending({ email: d.pending.email, resendAt: Date.now() + d.pending.resendIn * 1000 });
        setAccess(d.unlocked ? "open" : "locked");
      })
      .catch(() => live && setAccess("locked"));
    return () => {
      live = false;
    };
  }, [caseId, access]);

  // Once open, the case study's body comes from the server, which sends it only to registered browsers.
  useEffect(() => {
    if (!caseId || access !== "open" || details[caseId] || failedId === caseId) return;
    let live = true;
    fetch(`/api/case-studies/${encodeURIComponent(caseId)}`, { cache: "no-store" })
      .then(async (r) => {
        if (!live) return;
        if (r.status === 403) return setAccess("locked"); // the registration lapsed or was withdrawn
        if (!r.ok) return setFailedId(caseId);
        const d = (await r.json()) as CaseDetail;
        if (live) setDetails((prev) => ({ ...prev, [caseId]: d }));
      })
      .catch(() => live && setFailedId(caseId));
    return () => {
      live = false;
    };
  }, [caseId, access, details, failedId]);

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

  const detail = current ? details[current.id] : undefined;
  const full: Client | null = current && detail ? { ...current, ...detail } : null;
  const locked = access === "locked";
  const loadFailed = !!current && failedId === current.id && !full;

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
                <div className={`c-wrap ${locked ? "c-locked" : ""}`} aria-busy={!full && !locked && !loadFailed}>
                  <div className="c-body" aria-hidden={full ? undefined : true} inert={!full}>
                    {full ? (
                      <CaseBody c={full} />
                    ) : loadFailed ? (
                      <div className="c-box c-retry" role="alert">
                        <p>We couldn&apos;t load this case study just now.</p>
                        <button type="button" className="btn sec" onClick={() => setFailedId(null)}>
                          Try again
                        </button>
                      </div>
                    ) : (
                      <CaseSkeleton />
                    )}
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

                  {locked ? (
                    <div className="c-gate">
                      <AccessForm key={current.id} caseId={current.id} onUnlocked={() => setAccess("open")} pending={pending} setPending={setPending} />
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}
