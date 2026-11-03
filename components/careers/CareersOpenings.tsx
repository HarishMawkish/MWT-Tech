"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CAREERS_MAIL, JOBS, TEAM, type Job } from "./jobs";

const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const FILTERS: [string, string][] = [
  ["all", "All roles"],
  ["ai", "AI roles"],
  ["aiexec", "AI Execution"],
  ["sap", "SAP"],
  ["salesforce", "Salesforce"],
  ["aws", "AWS"],
  ["pmo", "Project office"],
  ["sales", "Sales"],
  ["marketing", "Marketing"],
  ["intern", "Internships"],
];

const posted = (today: Date, d: number) => {
  const x = new Date(today);
  x.setDate(x.getDate() - Math.min(13, Math.max(0, d)));
  return x;
};
const fmt = (x: Date) => `${x.getDate()} ${MON[x.getMonth()]} ${x.getFullYear()}`;
const iso = (x: Date) => {
  const z = (n: number) => (n < 10 ? "0" : "") + n;
  return `${x.getFullYear()}-${z(x.getMonth() + 1)}-${z(x.getDate())}`;
};
const ago = (d: number) => (d === 0 ? "Posted today" : d === 1 ? "Posted yesterday" : `Posted ${d} days ago`);
const mailto = (j: Job) =>
  `mailto:${CAREERS_MAIL}?subject=${encodeURIComponent(`${j.id}: ${j.t}`)}&body=${encodeURIComponent(
    `Hello Mawkish team,\n\nPlease find my CV attached for the role ${j.t} (${j.id}).\n\nName:\nPhone:\nNotice period:\n\nThank you.`,
  )}`;

function Meta({ j }: { j: Job }) {
  return (
    <div className="k-meta">
      <span className={`t-${j.team}`}>{TEAM[j.team]}</span>
      {j.ai && <span className="t-ai">AI</span>}
      <span>{j.lvl}</span>
      <span>{j.exp}</span>
      <span>{j.type}</span>
      <span>Colombo, hybrid</span>
    </div>
  );
}

export function CareersOpenings() {
  const [filter, setFilter] = useState("all");
  const [term, setTerm] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [copied, setCopied] = useState<"idle" | "done" | "fail">("idle");
  // Dates are "today minus d", so they're worked out in the browser only (no server/client mismatch).
  const [today, setToday] = useState<Date | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    setToday(t);
  }, []);

  const jobs = useMemo(() => [...JOBS].sort((a, b) => a.d - b.d), []);
  const rows = useMemo(() => {
    const q = term.trim().toLowerCase();
    return jobs.filter((j) => {
      const okF = filter === "all" || (filter === "intern" ? j.intern : filter === "ai" ? j.ai : j.team === filter);
      const okQ = !q || `${j.t} ${j.s} ${j.a} ${j.id} ${TEAM[j.team]}`.toLowerCase().includes(q);
      return okF && okQ;
    });
  }, [jobs, filter, term]);

  const job = openId ? (jobs.find((j) => j.id === openId) ?? null) : null;

  const open = useCallback((id: string, push: boolean) => {
    setOpenId((cur) => {
      if (cur === null) lastFocus.current = document.activeElement as HTMLElement | null;
      return id;
    });
    setCopied("idle");
    if (push) history.replaceState(null, "", `#job-${id}`);
  }, []);

  const close = useCallback(() => {
    setOpenId(null);
    if (location.hash.startsWith("#job-")) history.replaceState(null, "", `${location.pathname}${location.search}#openings`);
    lastFocus.current?.focus();
  }, []);

  // Deep links: #job-<code>.
  useEffect(() => {
    const fromHash = () => {
      const m = location.hash.match(/^#job-([\w-]+)/);
      if (m && JOBS.some((j) => j.id === m[1])) open(m[1], false);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [open]);

  // Scroll lock, focus into the panel, Escape and a Tab trap while it is open.
  useEffect(() => {
    if (!job) return;
    document.documentElement.classList.add("k-lock");
    document.body.classList.add("k-lock");
    const pn = panel.current;
    if (pn) {
      pn.scrollTop = 0;
      pn.focus();
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab" || !panel.current) return;
      const fs = panel.current.querySelectorAll<HTMLElement>("button, a[href]");
      const a = fs[0];
      const z = fs[fs.length - 1];
      if (e.shiftKey && document.activeElement === a) {
        e.preventDefault();
        z.focus();
      } else if (!e.shiftKey && document.activeElement === z) {
        e.preventDefault();
        a.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("k-lock");
      document.body.classList.remove("k-lock");
      document.removeEventListener("keydown", onKey);
    };
  }, [job, close]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CAREERS_MAIL);
      setCopied("done");
      window.setTimeout(() => setCopied("idle"), 1600);
    } catch {
      setCopied("fail");
    }
  };

  return (
    <>
      <section id="openings">
        <div className="in">
          <span className="eyebrow">Open positions</span>
          <h2>Find your next role.</h2>
          <p className="lede">
            Click a role to read the full description. To apply, email your CV to{" "}
            <a className="k-mail" href={`mailto:${CAREERS_MAIL}`}>
              {CAREERS_MAIL}
            </a>{" "}
            with the job code in the subject line.
          </p>
          <div className="k-bar">
            <div className="k-chips" role="group" aria-label="Filter by team">
              {FILTERS.map(([v, label]) => (
                <button key={v} type="button" aria-pressed={filter === v} onClick={() => setFilter(v)}>
                  {label}
                </button>
              ))}
            </div>
            <label className="k-search">
              <span style={{ position: "absolute", left: -9999 }}>Search roles</span>
              <input
                type="search"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Search roles, for example FICO or Apex"
              />
            </label>
          </div>
          <p className="k-count" aria-live="polite">
            {rows.length} {rows.length === 1 ? "open position" : "open positions"}
          </p>
          <div className="k-list">
            {rows.length ? (
              rows.map((j) => {
                const p = today ? posted(today, j.d) : null;
                return (
                  <button key={j.id} type="button" className="k-job" aria-haspopup="dialog" onClick={() => open(j.id, true)}>
                    <div>
                      <h3>{j.t}</h3>
                      <p>{j.s}</p>
                      <Meta j={j} />
                    </div>
                    <div className="k-side">
                      {j.d <= 3 && <span className="k-new">NEW</span>}
                      <span className="k-date">{p && <time dateTime={iso(p)}>{fmt(p)}</time>}</span>
                      <span className="k-go">View role →</span>
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="k-empty">No roles match. Try another filter, or email your CV to {CAREERS_MAIL}.</div>
            )}
          </div>
        </div>
      </section>

      <div
        className={`k-ov${job ? " open" : ""}`}
        aria-hidden={job ? "false" : "true"}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="k-pn" ref={panel} role="dialog" aria-modal="true" aria-labelledby="k-pt" tabIndex={-1}>
          {job && (
            <>
              <header className="k-ph">
                <button type="button" className="k-x" aria-label="Close" onClick={close}>
                  ×
                </button>
                <div className="ey">
                  {TEAM[job.team]} · {job.id}
                </div>
                <h2 id="k-pt">{job.t}</h2>
                <Meta j={job} />
                <span className="k-date">
                  {ago(job.d)}
                  {today && ` · ${fmt(posted(today, job.d))}`}
                </span>
              </header>
              <div className="k-sec">
                <h3>About the role</h3>
                <p>{job.a}</p>
              </div>
              <div className="k-sec">
                <h3>What you will do</h3>
                <ul>
                  {job.r.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="k-sec">
                <h3>What you bring</h3>
                <ul>
                  {job.q.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="k-sec">
                <h3>Nice to have</h3>
                <ul>
                  {job.n.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="k-sec">
                <h3>At Mawkish, you will also</h3>
                <ul>
                  <li>Use AI tools on every task, with training and approved tools from day one</li>
                  <li>Represent the client inside Mawkish, and hold every delivery to the highest standard</li>
                  <li>Work in one team with SAP, Salesforce and cloud colleagues</li>
                  <li>Get support to earn certifications in your area</li>
                </ul>
              </div>
              <div className="k-apply">
                <b>How to apply</b>
                <p>
                  Email your CV to <code>{CAREERS_MAIL}</code> with{" "}
                  <code>
                    {job.id}: {job.t}
                  </code>{" "}
                  in the subject line.
                </p>
                <div className="row">
                  <a href={mailto(job)}>Email your CV →</a>
                  <button type="button" onClick={copy}>
                    {copied === "done" ? "Copied" : copied === "fail" ? CAREERS_MAIL : "Copy email address"}
                  </button>
                </div>
              </div>
              <p className="k-pft">Mawkish never asks candidates for payment. Role details may change as projects evolve.</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
