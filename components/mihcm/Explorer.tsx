"use client";

import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { IconTile } from "./IconTile";

export type ExplorerTab = {
  /** The app's key. A link ending in #<id> opens this tab. */
  id: string;
  label: string;
  /** The module's own icon (a file name in /images/mihcm/modules). A tab that is not a module leaves it out. */
  icon?: string;
  title: string;
  tagline: string;
  points: string[];
  /** "What you're looking at": the one idea the screen shows. */
  look?: { title: string; body: string };
  screen: ReactNode;
  caption?: string;
};

/**
 * The app explorer: pick an app, read what it does, look at the screen people use. Tabs follow the WAI-ARIA pattern (arrow
 * keys move between them). The pane crossfades in on change. A link that ends in #<app> (for example #crm) opens that tab
 * and scrolls to it, and choosing a tab updates the address so the view can be shared.
 */
export function Explorer({ tabs, label }: { tabs: ExplorerTab[]; label: string }) {
  const [i, setI] = useState(0);
  const base = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const wrap = useRef<HTMLDivElement>(null);
  const t = tabs[i];

  const fromHash = useCallback(
    (scroll: boolean) => {
      const id = window.location.hash.slice(1);
      const k = tabs.findIndex((x) => x.id === id);
      if (k < 0) return;
      setI(k);
      if (scroll) {
        // Wait one frame so the pane has swapped before measuring where to land.
        requestAnimationFrame(() => wrap.current?.scrollIntoView({ block: "start", behavior: "auto" }));
      }
    },
    [tabs],
  );

  useEffect(() => {
    // The first read waits a frame, so it never runs inside the effect itself and the page hydrates before the tab changes.
    const first = requestAnimationFrame(() => fromHash(true));
    const onHash = () => fromHash(true);
    window.addEventListener("hashchange", onHash);
    return () => {
      cancelAnimationFrame(first);
      window.removeEventListener("hashchange", onHash);
    };
  }, [fromHash]);

  const choose = (k: number) => {
    setI(k);
    // replaceState changes the address without scrolling or adding history entries.
    window.history.replaceState(null, "", `#${tabs[k].id}`);
  };

  const onKey = (e: KeyboardEvent) => {
    const n = tabs.length;
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % n;
    else if (e.key === "ArrowLeft") next = (i - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else return;
    e.preventDefault();
    choose(next);
    refs.current[next]?.focus();
  };

  return (
    <div ref={wrap} className="mx-wrap">
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
            onClick={() => choose(k)}
          >
            <IconTile icon={tab.icon} size={22} className="tab-ico" />
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
    </div>
  );
}
