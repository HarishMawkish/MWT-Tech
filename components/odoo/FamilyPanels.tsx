"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type FocusEvent, type PointerEvent } from "react";
import { mainProducts, productPath, OD_HERE, type ProductSlug } from "./data";
import { IconTile } from "./IconTile";

/**
 * The eight Odoo families as a gallery of tall panels. The product you are on is open and marked "You are here"; point at
 * or focus any other panel and it opens while the rest fold to slim strips. Every panel is a link, so a click goes to that
 * product's page. A soft spotlight follows the pointer inside the open panel. On narrow screens, and wherever hover does
 * not exist, the panels stack and show everything at once. Nothing here is a sequence: the eight are offered separately.
 *
 * Which panel is open is state, not :hover. Panels move as they resize, so raw :hover makes the one under the pointer
 * change mid-animation and the whole row judders. A short hover-intent delay settles that, the same way the services menu
 * does. The animation itself is a CSS flex-grow transition; the glow and spotlight are fixed-size layers that only fade and
 * translate, so they never repaint while the panel is changing size.
 */
export function FamilyPanels({ current }: { current?: ProductSlug }) {
  const [active, setActive] = useState<number | null>(null);
  const timer = useRef<number | undefined>(undefined);
  const frame = useRef(0);
  const home = mainProducts.findIndex((p) => p.slug === current);

  useEffect(
    () => () => {
      window.clearTimeout(timer.current);
      cancelAnimationFrame(frame.current);
    },
    [],
  );

  const aim = (i: number | null, delay: number) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setActive(i), delay);
  };

  // The pointer position goes into two CSS variables on the panel under it, with no state and no re-render.
  const onMove = (e: PointerEvent<HTMLUListElement>) => {
    const panel = (e.target as HTMLElement).closest<HTMLElement>(".pn");
    if (!panel) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const r = panel.getBoundingClientRect();
      panel.style.setProperty("--mx", `${clientX - r.left}px`);
      panel.style.setProperty("--my", `${clientY - r.top}px`);
    });
  };

  const openIndex = active ?? (home >= 0 ? home : null);

  return (
    <ul
      className={`pn-row${openIndex === null ? " idle" : ""}`}
      aria-label="The eight Odoo families"
      onPointerMove={onMove}
      onPointerLeave={() => aim(null, 140)}
      onBlur={(e: FocusEvent<HTMLUListElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) aim(null, 0);
      }}
      style={{ "--c": OD_HERE } as CSSProperties}
    >
      {mainProducts.map((p, i) => {
        const here = p.slug === current;
        const open = openIndex === i;
        const n = String(i + 1).padStart(2, "0");
        const inner = (
          <>
            <span className="pn-glow" aria-hidden="true" />
            <span className="pn-spot" aria-hidden="true" />
            <span className="pn-line" aria-hidden="true" />

            {/* folded: a number and the name set upright on its side */}
            <span className="pn-shut" aria-hidden="true">
              {p.icon ? <IconTile icon={p.icon} size={30} /> : <b>{n}</b>}
              <span>{p.name}</span>
            </span>

            {/* open: the full panel */}
            <span className="pn-open">
              {here && <span className="pn-pin">You are here</span>}
              <span className="pn-top">
                <span className="pn-n">{n}</span>
                <span className="pn-stage">{p.stage}</span>
                {p.icon && <IconTile icon={p.icon} size={46} className="pn-ico" />}
              </span>
              <span className="pn-name">{p.name}</span>
              <span className="pn-tag">{p.tagline}</span>
              <span className="pn-sum">{p.summary}</span>
              <span className="pn-pts">
                {p.points.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </span>
              <span className="pn-go">
                {here ? (
                  "You are viewing this page"
                ) : (
                  <>
                    Go to {p.name} <i aria-hidden="true">→</i>
                  </>
                )}
              </span>
            </span>
          </>
        );
        return (
          <li
            key={p.slug}
            className={`pn${here ? " here" : ""}${open ? " open" : ""}`}
            style={{ "--a": p.color } as CSSProperties}
            onPointerEnter={(e) => {
              if (e.pointerType === "mouse" || e.pointerType === "pen") aim(i, active === null ? 60 : 90);
            }}
            onFocus={() => aim(i, 0)}
          >
            {here ? (
              <div className="pn-in" aria-current="page">
                {inner}
              </div>
            ) : (
              <Link href={productPath(p.slug)} className="pn-in" aria-label={`Go to ${p.name}`}>
                {inner}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
