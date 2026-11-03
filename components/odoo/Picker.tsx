"use client";

import Link from "next/link";
import { useState } from "react";
import { IconTile } from "./IconTile";

export type PickItem = {
  /** What the visitor recognises: a problem, or a need. */
  pain: string;
  /** The answer's name. */
  title: string;
  /** An app or family icon for the answer. */
  icon?: string;
  why: string;
  gets: string[];
  /** The catch: what to check before choosing this. */
  watch?: string;
  /** What to look at next, and why. */
  then?: { label: string; why: string };
  links: { label: string; href: string }[];
};

/**
 * "Where to start": pick the situation that fits, see which part of Odoo answers it and what to look at next. The choices
 * are a radio group; the answer is announced politely. Every capability named in an answer comes from Odoo's own pages.
 */
export function Picker({ items, label, kicker, prompt, intro }: { items: PickItem[]; label: string; kicker: string; prompt: string; intro: string }) {
  const [i, setI] = useState<number | null>(null);
  const p = i === null ? null : items[i];

  return (
    <div className="pick">
      <div className="pick-qs" role="radiogroup" aria-label={label}>
        {items.map((x, k) => (
          <button key={x.pain} type="button" role="radio" aria-checked={i === k} onClick={() => setI(k)}>
            <span className="rb" aria-hidden="true" />
            <span>{x.pain}</span>
          </button>
        ))}
      </div>
      <aside className="pick-res" aria-live="polite">
        <div className="lab">{kicker}</div>
        {p ? (
          <div className="tabpane" key={p.title + i}>
            <h3>
              {p.icon && <IconTile icon={p.icon} size={34} />}
              {p.title}
            </h3>
            <p>{p.why}</p>
            <ul>
              {p.gets.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            {p.watch && (
              <p className="then">
                <b>Watch for:</b> {p.watch}
              </p>
            )}
            {p.then && (
              <p className="then">
                <b>Then look at {p.then.label}:</b> {p.then.why}
              </p>
            )}
            <div className="acts">
              {p.links.map((l, k) => (
                <Link key={l.href} href={l.href} className={k === 0 ? "btn pri" : "btn sec"}>
                  {l.label} {k === 0 && <span className="ar">→</span>}
                </Link>
              ))}
              <a href="#book" className="btn sec">
                Talk it through
              </a>
            </div>
          </div>
        ) : (
          <>
            <h3>{prompt}</h3>
            <p>{intro}</p>
          </>
        )}
      </aside>
    </div>
  );
}
