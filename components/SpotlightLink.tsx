"use client";

import Link from "next/link";
import type { PointerEvent, ReactNode } from "react";

/**
 * A link-card whose surface reacts to the pointer: a soft green spotlight and
 * a glowing edge follow the cursor (see .mw-spot in globals.css). Feedback is
 * continuous and 1:1 with the pointer, not a fixed hover state. Touch and
 * keyboard users simply get the resting surface.
 */
export function SpotlightLink({
  href,
  className = "",
  children,
  ariaLabel,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType === "touch") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Link href={href} onPointerMove={onMove} aria-label={ariaLabel} className={`mw-spot ${className}`}>
      {children}
    </Link>
  );
}

/**
 * Same pointer-following surface for cards that are not links. They get the
 * spotlight but not the hover lift, since a lift implies "you can click me".
 */
export function SpotlightCard({ className = "", children }: { className?: string; children: ReactNode }) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div onPointerMove={onMove} className={`mw-spot mw-spot--still ${className}`}>
      {children}
    </div>
  );
}
