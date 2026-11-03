import type { CSSProperties } from "react";
import type { ScreenSpec } from "./content-types";
import { iconSrc } from "./data";

/**
 * Draws one illustrated app screen from its description. These are our own drawings with sample data, never
 * screenshots. The top bar carries the module's own icon, as MiHCM publishes it. Each block that is present is drawn in turn:
 * numbers first, then the main content, with a chat or steps panel beside it when there are two.
 */
export function Screen({ spec }: { spec: ScreenSpec }) {
  const main = (
    <>
      {spec.board && (
        <div className="kan">
          {spec.board.map((c) => (
            <div key={c.h}>
              <h5>{c.h}</h5>
              {c.cards.map((k) => (
                <div className="kc" key={k.t}>
                  <b>{k.t}</b>
                  <small>{k.s}</small>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      {spec.rows && (
        <div className="card-f">
          <div className="h">{spec.rows.title}</div>
          {spec.rows.items.map((r) => (
            <div className="row" key={r.a}>
              <span>
                {r.a}
                {r.b && <small style={{ color: "var(--app-muted)" }}> · {r.b}</small>}
              </span>
              {r.pill && <span className={`pill ${r.pill.tone}`}>{r.pill.t}</span>}
            </div>
          ))}
        </div>
      )}
      {spec.bars && (
        <div className="card-f">
          <div className="h">{spec.bars.title}</div>
          <div className="hb">
            {spec.bars.rows.map(([l, w, v, c], i) => (
              <div className="b" key={l}>
                <span>{l}</span>
                <span className="tr">
                  <i className={c} style={{ width: `${w}%`, "--i": i } as CSSProperties} />
                </span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {spec.cols && <Cols {...spec.cols} />}
    </>
  );

  const side = (
    <>
      {spec.steps && (
        <div className="card-f">
          <div className="h">{spec.steps.title}</div>
          <div className="stp">
            {spec.steps.items.map((s) => (
              <div key={s.t} className={s.state}>
                <i />
                {s.t}
              </div>
            ))}
          </div>
        </div>
      )}
      {spec.chat && (
        <div className="card-f ai">
          <div className="h">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <i style={{ width: 13, height: 13, borderRadius: "50%", display: "inline-block", background: "conic-gradient(from 200deg,#8238bf,#f16012,#253e98,#8238bf)" }} />
              {spec.chat.title}
            </span>
          </div>
          <div className="msgs">
            {spec.chat.msgs.map((m) => (
              <div className={`bub ${m.who}`} key={m.t}>
                {m.t}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );

  const hasMain = spec.board || spec.rows || spec.bars || spec.cols;
  const hasSide = spec.steps || spec.chat;

  return (
    <div className="screen" role="img" aria-label={spec.label}>
      <div className="shell">
        <span className="logo">
          {spec.icon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="app-ico" src={iconSrc(spec.icon)} alt="" width={22} height={22} decoding="async" />
          ) : (
            <i />
          )}
        </span>
        <span className="t">{spec.app}</span>
        <span className="ai" />
        <span className="av">MT</span>
      </div>
      <div className="body-pad">
        {spec.tiles && (
          <div className={`tiles t${spec.tiles.length === 2 ? 2 : 3}`}>
            {spec.tiles.map((t) => (
              <div className="tile" key={t.h}>
                <span className="h">{t.h}</span>
                <span className={`k${t.tone ? ` ${t.tone === "ap" ? "ap" : t.tone}` : ""}`}>{t.k}</span>
                {t.s && <span className="s">{t.s}</span>}
              </div>
            ))}
          </div>
        )}
        {hasMain && hasSide ? (
          <div className="scr-grid">
            <div style={{ display: "grid", gap: 10 }}>{main}</div>
            <div style={{ display: "grid", gap: 10 }}>{side}</div>
          </div>
        ) : (
          <>
            {main}
            {side}
          </>
        )}
      </div>
    </div>
  );
}

function Cols({ title, values, labels }: { title: string; values: number[]; labels?: string[] }) {
  const max = Math.max(...values);
  return (
    <div className="card-f">
      <div className="h">{title}</div>
      <div className="bars" style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 90 }}>
        {values.map((v, i) => (
          <i key={i} style={{ flex: 1, display: "block", height: `${(v / max) * 100}%`, background: "var(--ap-2)", borderRadius: "3px 3px 0 0", "--i": i } as CSSProperties} />
        ))}
      </div>
      {labels && (
        <div style={{ display: "flex", gap: 8, marginTop: 4, fontSize: 9.5, color: "var(--app-muted)" }}>
          {labels.map((l) => (
            <span key={l} style={{ flex: 1, textAlign: "center" }}>
              {l}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
