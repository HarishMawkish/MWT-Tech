import type { ReactNode } from "react";

/**
 * The chrome the illustrated screens share: a dark rail with a mark, the name of what you are looking at, and an
 * avatar. Everything inside is written per page, because a catalogue, a pipeline, a chat and a terminal should not
 * look like the same thing in three different colours.
 */
export function Screen({
  title,
  user = "MT",
  run,
  search,
  dark = false,
  label,
  children,
}: {
  title: string;
  user?: string;
  /** A small accented action in the rail, e.g. "Run". */
  run?: string;
  /** A search field in the rail, for the screens where finding something is the point. */
  search?: string;
  /** For screens whose canvas is an editor rather than a page. */
  dark?: boolean;
  /** What a screen reader is told this picture shows. Always written out in full. */
  label: string;
  children: ReactNode;
}) {
  return (
    <div className={dark ? "screen dark" : "screen"} role="img" aria-label={label}>
      <div className="shell">
        <span className="brand">
          <i aria-hidden="true" />
          databricks
        </span>
        <span className="t">{title}</span>
        {search ? <span className="search">{search}</span> : null}
        {run ? <span className="run">{run}</span> : null}
        <span className="av">{user}</span>
      </div>
      {children}
    </div>
  );
}

/** A screen with the line underneath that says it is an illustration of ours, not a screenshot. */
export function Fig({ children, caption }: { children: ReactNode; caption: string }) {
  return (
    <figure>
      {children}
      <figcaption className="caption">{caption}</figcaption>
    </figure>
  );
}

/** A row inside one of the white cards in a screen. */
export function Row({ l, r, pill }: { l: ReactNode; r?: ReactNode; pill?: { k: string; t: string } }) {
  return (
    <div className="row">
      <span className="l">{l}</span>
      {pill ? <span className={`pill ${pill.k}`}>{pill.t}</span> : null}
      {r ? <span className="r">{r}</span> : null}
    </div>
  );
}

/** A metric tile inside a screen. */
export function Tile({
  h,
  s,
  k,
  tone,
  unit,
}: {
  h: string;
  s: string;
  k: string;
  tone?: "pos" | "neg" | "own";
  unit?: string;
}) {
  return (
    <div className="tile">
      <div>
        <div className="h">{h}</div>
        <div className="s">{s}</div>
      </div>
      <div className={tone ? `k ${tone}` : "k"}>
        {k}
        {unit ? <small>{unit}</small> : null}
      </div>
    </div>
  );
}
