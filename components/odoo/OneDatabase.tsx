import Link from "next/link";
import type { CSSProperties } from "react";
import { IconTile } from "./IconTile";
import { mainProducts, productPath } from "./data";

/**
 * The hub's picture of what Odoo is: eight families drawn around one database. Each node is a link to its family's page.
 * Data pulses travel along the lines (CSS only, and still under reduced motion). The positions are plain trigonometry on a
 * square, so the diagram scales with its container and never needs a sideways scroll.
 */
export function OneDatabase() {
  const n = mainProducts.length;
  const R = 37; // radius, as a percentage of the square
  const pts = mainProducts.map((_, i) => {
    const a = ((-90 + (360 / n) * i) * Math.PI) / 180;
    return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
  });

  return (
    <figure className="onedb-fig" style={{ margin: 0 }}>
      <nav className="onedb" aria-label="The eight Odoo families around one database">
        <svg className="onedb-lines" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
          <circle cx="50" cy="50" r={R} className="onedb-ring" />
          {pts.map((p, i) => (
            <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} className="onedb-line" style={{ "--i": i } as CSSProperties} />
          ))}
        </svg>
        <div className="onedb-core">
          <b>One database</b>
          <span>Every app reads and writes the same records.</span>
        </div>
        {mainProducts.map((p, i) => (
          <Link
            key={p.slug}
            href={productPath(p.slug)}
            className="onedb-node"
            style={{ left: `${pts[i].x}%`, top: `${pts[i].y}%`, "--a": p.color, "--i": i } as CSSProperties}
          >
            {p.icon && <IconTile icon={p.icon} size={46} />}
            <span>{p.short}</span>
          </Link>
        ))}
      </nav>
      <figcaption className="caption">Illustration, simplified. Choose a family to go to it.</figcaption>
    </figure>
  );
}
