import type { CSSProperties, ReactNode } from "react";
import { productBySlug, type ProductSlug } from "./data";

// Simple line glyphs, drawn for these pages. 24 x 24, stroke = currentColor.
const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const glyphs: Record<string, ReactNode> = {
  "source-to-pay": (
    <>
      <path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20z" {...P} />
      <path d="M13.5 3.5V8h4.5" {...P} />
      <path d="m9.6 14.2 2 2 3.8-4.2" {...P} />
    </>
  ),
  "control-tower": (
    <>
      <circle cx="12" cy="14" r="2.4" {...P} />
      <path d="M7.8 9.8a6 6 0 0 1 8.4 0M5 7a10 10 0 0 1 14 0" {...P} />
      <path d="M12 16.4V21" {...P} />
    </>
  ),
  tms: (
    <>
      <path d="M3 6.5h11v9.5H3zM14 9.5h4l3 3.4V16h-7z" {...P} />
      <circle cx="7" cy="17.5" r="1.8" {...P} />
      <circle cx="17.5" cy="17.5" r="1.8" {...P} />
    </>
  ),
  "invoice-hub": (
    <>
      <path d="M6 3.5h12v17l-3-1.6-3 1.6-3-1.6-3 1.6z" {...P} />
      <path d="M9 8.5h6M9 12h6M9 15.5h3.5" {...P} />
    </>
  ),
  "spend-intelligence": (
    <>
      <path d="M6 19v-5M11 19V9M16 19v-7" {...P} />
      <path d="M18.5 3.5v4M16.5 5.5h4" {...P} />
    </>
  ),
  authentik: (
    <>
      <path d="M12 4a8 8 0 1 1-7.6 5.5" {...P} />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
    </>
  ),
};

export function ProductIcon({ slug, size, className = "" }: { slug: ProductSlug; size?: "sm" | "lg"; className?: string }) {
  const p = productBySlug(slug);
  return (
    <span
      aria-hidden="true"
      className={`pico${size ? ` ${size}` : ""}${p.dark ? " dark" : ""} ${className}`}
      style={{ "--c": p.color, color: p.dark ? p.color : "#fff" } as CSSProperties}
    >
      <svg viewBox="0 0 24 24">{glyphs[slug]}</svg>
    </span>
  );
}

/** Small UI glyphs used across the sections. */
const ui: Record<string, ReactNode> = {
  spark: <path d="M12 3c.6 4.6 3.4 7.4 8 8-4.6.6-7.4 3.4-8 8-.6-4.6-3.4-7.4-8-8 4.6-.6 7.4-3.4 8-8Z" {...P} />,
  check: <path d="m5 12.5 4.2 4.2L19 7" {...P} />,
  link: <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" {...P} />,
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" {...P} />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 6M17.5 14.2A5.5 5.5 0 0 1 20.5 19" {...P} />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" {...P} />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" {...P} />
    </>
  ),
  erp: (
    <>
      <path d="M4 9.5 12 4l8 5.5M5.5 10v8M10 10v8M14 10v8M18.5 10v8M3.5 20h17" {...P} />
    </>
  ),
  doc: (
    <>
      <path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20z" {...P} />
      <path d="M10 12h5M10 15.5h5" {...P} />
    </>
  ),
  box: (
    <>
      <path d="m12 3.5 8 4v9l-8 4-8-4v-9z" {...P} />
      <path d="m4 7.5 8 4 8-4M12 11.5v9" {...P} />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l1.5-2.5h7L17 8h3v11H4z" {...P} />
      <circle cx="12" cy="13" r="3.2" {...P} />
    </>
  ),
  sign: <path d="M4 17c2-3 3-6 4.5-6S9 15 11 15s2.5-4 4-4 1.5 3 3 3h2M4 20h16" {...P} />,
  contract: (
    <>
      <path d="M6 3.5h12v17H6z" {...P} />
      <path d="M9 8h6M9 11.5h6M9 15l1.6 1.6L14 13.4" {...P} />
    </>
  ),
  receipt: (
    <>
      <path d="M5 4h14v16H5z" {...P} />
      <path d="M8.5 9h7M8.5 12.5h7M8.5 16h4" {...P} />
    </>
  ),
  alert: (
    <>
      <path d="M12 4 21 19.5H3z" {...P} />
      <path d="M12 10v4M12 17v.2" {...P} />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2.2" {...P} />
      <circle cx="18" cy="6" r="2.2" {...P} />
      <path d="M8 18h6.5a3.5 3.5 0 0 0 0-7h-5a3.5 3.5 0 0 1 0-7H16" {...P} />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" {...P} />
      <path d="M12 7.5V12l3 2" {...P} />
    </>
  ),
  chat: <path d="M5 5.5h14v10H10l-4 3.5v-3.5H5z" {...P} />,
  search: (
    <>
      <circle cx="11" cy="11" r="6" {...P} />
      <path d="m15.5 15.5 4 4" {...P} />
    </>
  ),
  chart: <path d="M4 19.5h16M6.5 16l4-5 3 3 5-7" {...P} />,
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" {...P} />
      <path d="M3.5 12h17M12 3.5c2.5 2.5 3.5 5.5 3.5 8.5s-1 6-3.5 8.5c-2.5-2.5-3.5-5.5-3.5-8.5s1-6 3.5-8.5Z" {...P} />
    </>
  ),
  layers: <path d="m12 4 8.5 4.5L12 13 3.5 8.5zM3.5 12.5 12 17l8.5-4.5M3.5 16.5 12 21l8.5-4.5" {...P} />,
  qr: (
    <>
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" {...P} />
      <path d="M14 14h2.5v2.5H14zM17.5 17.5H20V20h-2.5zM17.5 14H20M14 20h1" {...P} />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 19 6v6c0 4.2-3 7.4-7 8.5-4-1.1-7-4.3-7-8.5V6z" {...P} />
      <path d="m9 12 2.2 2.2L15.5 10" {...P} />
    </>
  ),
  truck: (
    <>
      <path d="M3 6.5h11v9.5H3zM14 9.5h4l3 3.4V16h-7z" {...P} />
      <circle cx="7" cy="17.5" r="1.8" {...P} />
      <circle cx="17.5" cy="17.5" r="1.8" {...P} />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" {...P} />
      <circle cx="12" cy="10" r="2.3" {...P} />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" {...P} />
      <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" {...P} />
    </>
  ),
  coins: (
    <>
      <ellipse cx="12" cy="7" rx="6.5" ry="2.8" {...P} />
      <path d="M5.5 7v5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8V7M5.5 12v5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-5" {...P} />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.2" {...P} />
      <path d="M11 17.5h2" {...P} />
    </>
  ),
  inbox: <path d="M4 13.5 6.5 5h11l2.5 8.5V19H4zM4 13.5h4.5l1.5 2.5h4l1.5-2.5H20" {...P} />,
  cycle: <path d="M19.5 12a7.5 7.5 0 0 1-13.2 4.9M4.5 12a7.5 7.5 0 0 1 13.2-4.9M17.7 3.5v3.6h-3.6M6.3 20.5v-3.6h3.6" {...P} />,
  tag: (
    <>
      <path d="M3.5 12.5V4.5h8l9 9-8 8z" {...P} />
      <circle cx="8" cy="9" r="1.5" {...P} />
    </>
  ),
  ship: <path d="M4 15.5 5.5 20h13l1.5-4.5zM6.5 15.5V10h11v5.5M9 10V6.5h6V10M12 6.5V4" {...P} />,
  plane: <path d="M10.5 13.5 4 12l1-2 6.5.5L16 4.5c.8-.8 2.2-.6 2.6.2.3.7.1 1.4-.4 1.9L13.5 12l.5 6.5-2 1-1.5-6.5" {...P} />,
  bolt: <path d="M13 3 5 13.5h6L10 21l8-10.5h-6z" {...P} />,
  target: (
    <>
      <circle cx="12" cy="12" r="8" {...P} />
      <circle cx="12" cy="12" r="4" {...P} />
      <circle cx="12" cy="12" r=".8" fill="currentColor" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" {...P} />
      <circle cx="12" cy="12" r="2.8" {...P} />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" {...P} />,
};

export type GlyphName = keyof typeof ui;

export function Glyph({ name, className, style }: { name: GlyphName; className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={style}>
      {ui[name]}
    </svg>
  );
}
