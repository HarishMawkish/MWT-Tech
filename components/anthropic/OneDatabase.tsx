import Link from "next/link";
import type { CSSProperties } from "react";
import { IconTile } from "./IconTile";
import { featureByKey, featureHref, productBySlug } from "./data";

/** The surfaces drawn around the models: where people meet Claude at work, and where developers build with it. */
const RING: { key: string; label: string }[] = [
  { key: "tasks", label: "Claude app" },
  { key: "surfaces", label: "Claude Code" },
  { key: "microsoft-365", label: "Microsoft 365" },
  { key: "chrome", label: "Chrome" },
  { key: "tag", label: "Slack" },
  { key: "messages-api", label: "Claude API" },
  { key: "managed-agents", label: "Managed Agents" },
  { key: "clouds", label: "Your cloud" },
];

/**
 * The hub's picture of Claude: the surfaces people and developers use, drawn around one family of models. It follows
 * Anthropic's own line that the same frontier models power every surface, from business apps to developer tools. Each node
 * is a link to the tab that explains it. Data pulses travel along the lines (CSS only). The positions are plain
 * trigonometry on a square, so the diagram scales with its container and never needs a sideways scroll.
 */
export function OneDatabase() {
  const ring = RING.map((r) => ({ ...r, f: featureByKey(r.key)! }));
  const n = ring.length;
  const R = 37; // radius, as a percentage of the square
  const pts = ring.map((_, i) => {
    const a = ((-90 + (360 / n) * i) * Math.PI) / 180;
    return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
  });

  return (
    <figure className="onedb-fig" style={{ margin: 0 }}>
      <nav className="onedb" aria-label="Where Claude is used, around one family of models">
        <svg className="onedb-lines" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
          <circle cx="50" cy="50" r={R} className="onedb-ring" />
          {pts.map((p, i) => (
            <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} className="onedb-line" style={{ "--i": i } as CSSProperties} />
          ))}
        </svg>
        <div className="onedb-core">
          <b>One model family</b>
          <span>The same models behind every surface.</span>
        </div>
        {ring.map((r, i) => {
          const color = productBySlug(r.f.product).color;
          return (
            <Link
              key={r.key}
              href={featureHref(r.f)}
              className="onedb-node"
              style={{ left: `${pts[i].x}%`, top: `${pts[i].y}%`, "--a": color, "--i": i } as CSSProperties}
            >
              <IconTile icon={r.f.glyph} size={46} color={color} />
              <span>{r.label}</span>
            </Link>
          );
        })}
      </nav>
      <figcaption className="caption">Illustration, simplified. Glyphs are our own, not Anthropic marks. Choose one to read about it.</figcaption>
    </figure>
  );
}
