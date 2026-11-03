import type { CSSProperties, ReactNode } from "react";
import type { Glyph } from "./data";

// Generic line glyphs of our own, drawn on a 24-unit grid. None is, or resembles, an Anthropic or Claude mark: Anthropic's
// trademark guidelines allow its logos only in materials it has approved, so these pages carry no Anthropic artwork.
const PATHS: Record<Glyph, ReactNode> = {
  org: <path d="M4 20V8l6-4 6 4v12M16 12h4v8M8 10h0M12 10h0M8 14h0M12 14h0M9 20v-3h2v3M2 20h20" />,
  blocks: <path d="M8 7 4 12l4 5M16 7l4 5-4 5M13.5 5l-3 14" />,
  chat: <path d="M4 5h16v11H9l-5 4zM8 9h8M8 12h5" />,
  terminal: <path d="M3 5h18v14H3zM7 9l3 3-3 3M12 15h5" />,
  layers: <path d="m12 3 9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5" />,
  shield: <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6zM9 12l2 2 4-4" />,
  agents: <path d="M12 4a2 2 0 1 0 0 .01M5 17a2 2 0 1 0 0 .01M19 17a2 2 0 1 0 0 .01M12 6v5M12 11l-6 5M12 11l6 5" />,
  plug: <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4" />,
  book: <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3zM5 17a3 3 0 0 1 3-3h11M9 8h6" />,
  doc: <path d="M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h7" />,
  grid: <path d="M4 4h16v16H4zM4 10h16M4 15h16M10 4v16" />,
  slides: <path d="M3 4h18v12H3zM12 16v4M8 20h8M7 12l3-3 2 2 4-4" />,
  mail: <path d="M3 6h18v12H3zM3 7l9 6 9-6" />,
  hash: <path d="M9 3 7 21M17 3l-2 18M4 9h16M3 15h16" />,
  window: <path d="M3 4h18v16H3zM3 9h18M6 6.5h0M9 6.5h0" />,
  cloud: <path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z" />,
  pen: <path d="M4 20l4-1 11-11-3-3L5 16zM14 7l3 3" />,
  check: <path d="M4 4h16v16H4zM8 12l3 3 5-6" />,
  flask: <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M8 14h8" />,
  clock: <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2" />,
  key: <path d="M8 15a4 4 0 1 1 3-6.7L21 8v3h-2v2h-2v2h-3l-1.3-1.3A4 4 0 0 1 8 15zM7 11h0" />,
  chart: <path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6" />,
  gauge: <path d="M4 16a8 8 0 1 1 16 0M12 16l4-5M4 20h16" />,
  branch: <path d="M6 3v12M6 15a3 3 0 1 0 0 .01M18 9a3 3 0 1 0 0 .01M18 12c0 4-6 3-9 6" />,
  globe: <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />,
};

/** A small generic glyph on a light tile, in the product's accent. Decorative: the name is always beside it. */
export function IconTile({ icon, size = 40, className, color }: { icon?: string; size?: number; className?: string; color?: string }) {
  const g = icon && icon in PATHS ? PATHS[icon as Glyph] : null;
  return (
    <span className={`ico-t${className ? ` ${className}` : ""}`} style={{ "--s": `${size}px`, ...(color ? { "--g": color } : {}) } as CSSProperties} aria-hidden="true">
      {g ? (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          {g}
        </svg>
      ) : (
        <i className="ico-dot" />
      )}
    </span>
  );
}
