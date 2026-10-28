export type GlyphName =
  | "layers"
  | "migrate"
  | "link"
  | "send"
  | "lifebuoy"
  | "code"
  | "sparkle"
  | "database"
  | "chart"
  | "pie"
  | "loop"
  | "tag"
  | "doc"
  | "check";

const paths: Record<GlyphName, string> = {
  layers: "M12 3l9 5-9 5-9-5 9-5ZM3 13l9 5 9-5",
  migrate: "M4 8h14m0 0l-4-4m4 4l-4 4M20 16H6m0 0l4-4m-4 4l4 4",
  link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  send: "M21 3L3 11l7 3 3 7 8-18Z",
  lifebuoy: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM5.6 5.6l3.2 3.2m6.4 6.4l3.2 3.2m0-12.8l-3.2 3.2m-6.4 6.4l-3.2 3.2",
  code: "M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14",
  sparkle: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z",
  database: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  chart: "M5 20V10M12 20V4M19 20v-7",
  pie: "M12 3v9h9a9 9 0 1 1-9-9Z",
  loop: "M20 12a8 8 0 1 1-2.3-5.7M20 4v4h-4",
  tag: "M3 12V4h8l10 10-8 8L3 12Zm5-4h.01",
  doc: "M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h6M10 17h6",
  check: "M5 12.5l4.5 4.5L19 7.5",
};

/** Small line icons for the menu, drawn in the current text colour. */
export function MenuGlyph({ name, className = "h-3.5 w-3.5" }: { name: GlyphName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d={paths[name]} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
