"use client";

import { Fragment, useState, type CSSProperties, type ReactNode } from "react";
import { M, type Block, type Screen } from "./data";

// Port of the module explorer from the supplied page. Cell shorthand in tables:
// "ok:Text" / "wr:" / "er:" / "in:" / "nt:" = status pill, "btn:Text" = button.

/** The authored strings contain a little inline markup (<b> and <a>); render it as elements. */
function Rich({ html }: { html: string }) {
  const parts = html.split(/(<b>.*?<\/b>|<a>.*?<\/a>)/g);
  return (
    <>
      {parts.map((p, i) => {
        const b = /^<b>(.*)<\/b>$/.exec(p);
        if (b) return <b key={i}>{b[1]}</b>;
        const a = /^<a>(.*)<\/a>$/.exec(p);
        if (a) return <a key={i}>{a[1]}</a>;
        return <Fragment key={i}>{p}</Fragment>;
      })}
    </>
  );
}

function Cell({ v }: { v: string }) {
  const m = /^(ok|wr|er|in|nt):(.*)$/.exec(v);
  if (m) return <span className={`pill ${m[1]}`}>{m[2]}</span>;
  if (v.startsWith("btn:")) return <span className="fbtn">{v.slice(4)}</span>;
  return <Rich html={v} />;
}

function Render({ b }: { b: Block }): ReactNode {
  switch (b.t) {
    case "kpis":
      return (
        <div className={`tiles${b.items.length === 2 ? " n2" : ""}`}>
          {b.items.map(([h, s, k, u, c]) => (
            <div className="tile" key={h}>
              <div>
                <div className="h">{h}</div>
                <div className="s">{s}</div>
              </div>
              <div className={`k ${c}`}>
                {k}
                <small>{u}</small>
              </div>
            </div>
          ))}
        </div>
      );
    case "table": {
      const r = b.r ?? [];
      return (
        <div className="card-f" style={{ overflowX: "auto" }}>
          <div className="h">{b.h}</div>
          <table className="ftab">
            <thead>
              <tr>
                {b.cols.map((c, i) => (
                  <th key={i} className={r.includes(i) ? "r" : undefined}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((c, i) => (
                    <td key={i} className={r.includes(i) ? "r" : undefined}>
                      <Cell v={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    case "bars":
      return (
        <div className="card-f">
          <div className="h">{b.h}</div>
          <div className="hb">
            {b.items.map(([l, v, c]) => (
              <div className="b" key={l}>
                <span>{l}</span>
                <div className="tr">
                  <i className={c} style={{ width: `${((v / b.max) * 100).toFixed(1)}%` }} />
                </div>
                <span>
                  {v}
                  {b.unit || ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    case "cols": {
      const all = b.vals.concat(b.plan ?? []);
      const max = Math.max(...all.map(Math.abs));
      const hasNeg = b.vals.some((v) => v < 0);
      // with negatives, draw from a baseline at 40% height
      const base = hasNeg ? 40 : 0;
      const span = hasNeg ? 60 : 100;
      return (
        <div className="card-f">
          <div className="h">{b.h}</div>
          <div className="cols">
            {hasNeg && <div style={{ position: "absolute", left: 0, right: 0, bottom: `${base}%`, borderTop: "1px solid #9aa0a6" }} />}
            {b.vals.map((v, i) => {
              const hgt = (Math.abs(v) / max) * (hasNeg ? (v < 0 ? base : span) : 100);
              const style: CSSProperties = hasNeg
                ? v < 0
                  ? { height: `${hgt}%`, position: "absolute", top: `${100 - base}%`, borderRadius: "0 0 3px 3px" }
                  : { height: `${hgt}%`, position: "absolute", bottom: `${base}%` }
                : { height: `${hgt}%` };
              return (
                <div className="c" key={i}>
                  <i className={v < 0 ? "neg" : ""} style={style} />
                  {b.plan && <em style={{ bottom: `${((b.plan[i] / max) * 100).toFixed(1)}%` }} />}
                </div>
              );
            })}
          </div>
          <div className="cols-x">
            {b.labels.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <div className="legend">
            {b.legend.map(([c, l]) => (
              <span key={l}>
                <b className={c} />
                {l}
              </span>
            ))}
          </div>
        </div>
      );
    }
    case "list":
      return (
        <div className="card-f">
          <div className="h">{b.h}</div>
          {b.rows.map(([l, v]) => (
            <div className="row" key={l}>
              <span>{l}</span>
              <Cell v={v} />
            </div>
          ))}
        </div>
      );
    case "joule":
      return (
        <div className="joule">
          <div className="jh">
            <i />
            Joule
          </div>
          <div className="msgs">
            {b.m.map(([w, t], i) => (
              <div className={`bub ${w}`} key={i}>
                <Rich html={t} />
              </div>
            ))}
          </div>
        </div>
      );
  }
}

/** A table/joule or bars/list pair sits side by side; KPI rows always span the width. */
function Layout({ blocks }: { blocks: Block[] }) {
  const out: ReactNode[] = [];
  let i = 0;
  while (i < blocks.length) {
    const a = blocks[i];
    const n = blocks[i + 1];
    if (n && a.t !== "kpis" && n.t !== "kpis" && (n.t === "joule" || n.t === "list") && a.t !== "table") {
      out.push(
        <div className="grid2" key={i}>
          <Render b={a} />
          <Render b={n} />
        </div>,
      );
      i += 2;
    } else {
      out.push(<Fragment key={i}>{<Render b={a} />}</Fragment>);
      i += 1;
    }
  }
  return <>{out}</>;
}

function ScreenView({ s }: { s: Screen }) {
  return (
    <div className="screen" id="mxScreen" role="img" aria-label={`Illustration of the SAP Fiori app ${s.app}`}>
      <div className="shell">
        <span className="sap">SAP</span>
        <span className="t">{s.app}</span>
        <span className="search">Search apps, products, documents…</span>
        <span className="joule-btn" />
        <span className="av">{s.av}</span>
      </div>
      <div className="body-pad">
        <Layout blocks={s.b} />
      </div>
    </div>
  );
}

export function ModuleExplorer() {
  const [mi, setMi] = useState(0);
  const [si, setSi] = useState(0);
  const m = M[mi];
  const s = m.screens[si];

  return (
    <>
      <div className="mx-tabs" role="tablist" aria-label="Business areas" id="mxTabs">
        {M.map((x, i) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            aria-selected={i === mi}
            onClick={() => {
              setMi(i);
              setSi(0);
            }}
          >
            {x.name}
          </button>
        ))}
      </div>
      <div className="mx">
        <div className="mx-copy" id="mxCopy">
          <h3>{m.name}</h3>
          <p className="tagline">{m.tag}</p>
          <ul>
            {m.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="explain" id="mxExplain" aria-live="polite">
            <div className="lab">
              What you&apos;re looking at · {si + 1} of {m.screens.length}
            </div>
            <h4>{s.h}</h4>
            <p>{s.p}</p>
          </div>
          <a className="watch" href={`https://www.youtube.com/watch?v=${m.video.id}`} target="_blank" rel="noopener">
            <span className="pl">
              <svg width="12" height="12" viewBox="0 0 12 12">
                <path d="M3 1.5v9l7.5-4.5z" fill="#fff" />
              </svg>
            </span>
            {m.video.t}
          </a>
        </div>
        <figure style={{ margin: 0 }}>
          <div className="apps" role="tablist" aria-label="Screens" id="mxApps">
            {m.screens.map((x, i) => (
              <button key={x.app} type="button" role="tab" aria-selected={i === si} onClick={() => setSi(i)}>
                <i>{i + 1}</i>
                {x.app}
              </button>
            ))}
          </div>
          <ScreenView s={s} />
          <figcaption className="caption" style={{ color: "var(--muted)" }}>
            Illustrations of SAP Fiori apps in SAP Cloud ERP, simplified. App names are SAP&apos;s. Sample data.
          </figcaption>
        </figure>
      </div>
    </>
  );
}
