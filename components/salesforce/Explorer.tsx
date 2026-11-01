"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type ExplorerTab = {
  id: string;
  label: string;
  title: string;
  tagline: string;
  points: string[];
  /** "What you're looking at": the one idea the screen shows. */
  look?: { title: string; body: string };
  screen: ReactNode;
  caption?: string;
};

/**
 * The capability explorer, pick an area, read what it does, look at the screen people use.
 * Tabs follow the WAI-ARIA pattern (arrow keys move between them). The pane crossfades in 320ms on change.
 */
export function Explorer({ tabs, label }: { tabs: ExplorerTab[]; label: string }) {
  const [i, setI] = useState(0);
  const base = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const t = tabs[i];

  const onKey = (e: KeyboardEvent) => {
    const n = tabs.length;
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % n;
    else if (e.key === "ArrowLeft") next = (i - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else return;
    e.preventDefault();
    setI(next);
    refs.current[next]?.focus();
  };

  return (
    <>
      <div className="mx-tabs" role="tablist" aria-label={label} onKeyDown={onKey}>
        {tabs.map((tab, k) => (
          <button
            key={tab.id}
            ref={(el) => {
              refs.current[k] = el;
            }}
            type="button"
            role="tab"
            id={`${base}-t-${k}`}
            aria-selected={k === i}
            aria-controls={`${base}-p`}
            tabIndex={k === i ? 0 : -1}
            onClick={() => setI(k)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mx tabpane" key={t.id} role="tabpanel" id={`${base}-p`} aria-labelledby={`${base}-t-${i}`}>
        <div className="mx-copy">
          <h3>{t.title}</h3>
          <p className="tagline">{t.tagline}</p>
          <ul>
            {t.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          {t.look && (
            <div className="explain">
              <div className="lab">What you&rsquo;re looking at</div>
              <h4>{t.look.title}</h4>
              <p>{t.look.body}</p>
            </div>
          )}
        </div>
        <figure style={{ margin: 0 }}>
          {t.screen}
          <figcaption className="caption">{t.caption ?? "Illustration of a screen, simplified. Sample data."}</figcaption>
        </figure>
      </div>
    </>
  );
}
