import type { CSSProperties, ReactNode } from "react";

/**
 * The frame every illustrated Swyftflo screen sits in: a top bar with the product name, a search field, the AI
 * assistant and an avatar, and (optionally) the dark navigation rail seen in Swyftflo's own screenshots.
 */
export function AppFrame({
  title,
  search = "Search POs, shipments, invoices…",
  rail,
  label,
  children,
  pad = true,
}: {
  title: string;
  search?: string | false;
  /** Which rail item is active; omit for no rail. */
  rail?: number;
  /** Accessible description of what the illustration shows. */
  label: string;
  children: ReactNode;
  pad?: boolean;
}) {
  const body = pad ? <div className="body-pad">{children}</div> : children;
  return (
    <div className="screen" role="img" aria-label={label}>
      <div className="shell">
        <span className="logo">
          <i />
          swyftflo
        </span>
        <span className="t">{title}</span>
        {search && <span className="search">{search}</span>}
        <span className="ai" />
        <span className="av">MT</span>
      </div>
      {rail === undefined ? (
        body
      ) : (
        <div className="app">
          <div className="rail" aria-hidden="true">
            {Array.from({ length: 7 }, (_, i) => (
              <i key={i} className={i === rail ? "on" : undefined} />
            ))}
          </div>
          {body}
        </div>
      )}
    </div>
  );
}

/** A KPI tile. tone colours the number. */
export function Tile({ h, k, s, tone }: { h: string; k: ReactNode; s?: string; tone?: "ok" | "wr" | "er" | "sf" }) {
  return (
    <div className="tile">
      <span className="h">{h}</span>
      <span className={`k${tone ? ` ${tone}` : ""}`}>{k}</span>
      {s && <span className="s">{s}</span>}
    </div>
  );
}

export function Pill({ tone, children }: { tone: "ok" | "wr" | "er" | "in" | "nt"; children: ReactNode }) {
  return <span className={`pill ${tone}`}>{children}</span>;
}

/** Horizontal bars. Each row: label, share 0-100, value text, colour class. */
export function Bars({ rows }: { rows: [string, number, string, ("g" | "o" | "r" | "l")?][] }) {
  return (
    <div className="hb">
      {rows.map(([l, w, v, c], i) => (
        <div className="b" key={l}>
          <span>{l}</span>
          <span className="tr">
            <i className={c} style={{ width: `${w}%`, "--i": i } as CSSProperties} />
          </span>
          <span>{v}</span>
        </div>
      ))}
    </div>
  );
}

/** Vertical bars, used for small charts inside screens. */
export function Columns({ values, height = 90, color = "var(--sf-2)", labels }: { values: number[]; height?: number; color?: string; labels?: string[] }) {
  const max = Math.max(...values);
  return (
    <div>
      <div className="bars" style={{ display: "flex", alignItems: "flex-end", gap: 6, height }}>
        {values.map((v, i) => (
          <i
            key={i}
            style={{ flex: 1, display: "block", height: `${(v / max) * 100}%`, background: color, borderRadius: "3px 3px 0 0", "--i": i } as CSSProperties}
          />
        ))}
      </div>
      {labels && (
        <div style={{ display: "flex", gap: 6, marginTop: 4, fontSize: 9.5, color: "var(--app-muted)" }}>
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

/** The AI assistant's chat card. */
export function AiChat({ title = "Swyftflo AI", children }: { title?: string; children: ReactNode }) {
  return (
    <div className="card-f ai">
      <div className="h">
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <i style={{ width: 13, height: 13, borderRadius: "50%", display: "inline-block", background: "conic-gradient(from 200deg,#7c5cff,#4f46e5,#22d3ee,#7c5cff)" }} />
          {title}
        </span>
      </div>
      <div className="msgs">{children}</div>
    </div>
  );
}

export function Typing() {
  return (
    <div className="bub a typing" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}
