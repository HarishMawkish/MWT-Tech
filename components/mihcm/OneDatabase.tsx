import Link from "next/link";
import type { CSSProperties } from "react";
import { IconTile } from "./IconTile";
import { moduleByKey, moduleHref, productBySlug } from "./data";

/** The eight modules drawn around the record, one from each corner of the platform. */
const RING = ["core", "payroll", "time-attendance", "recruitment", "performance", "learning-management", "mia-one", "syntra"];

/**
 * The hub's picture of what MiHCM is: modules drawn around one employee record, the idea MiHCM puts at the centre of Core
 * HR ("the single employee record everything else in the platform depends on"). Each node is a link to that module's tab.
 * Data pulses travel along the lines (CSS only, and still under reduced motion). The positions are plain trigonometry on a
 * square, so the diagram scales with its container and never needs a sideways scroll.
 */
export function OneDatabase() {
  const ring = RING.map((k) => moduleByKey(k)!);
  const n = ring.length;
  const R = 37; // radius, as a percentage of the square
  const pts = ring.map((_, i) => {
    const a = ((-90 + (360 / n) * i) * Math.PI) / 180;
    return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
  });

  return (
    <figure className="onedb-fig" style={{ margin: 0 }}>
      <nav className="onedb" aria-label="MiHCM modules around one employee record">
        <svg className="onedb-lines" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
          <circle cx="50" cy="50" r={R} className="onedb-ring" />
          {pts.map((p, i) => (
            <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} className="onedb-line" style={{ "--i": i } as CSSProperties} />
          ))}
        </svg>
        <div className="onedb-core">
          <b>One employee record</b>
          <span>Every module works from the same profile.</span>
        </div>
        {ring.map((m, i) => (
          <Link
            key={m.key}
            href={moduleHref(m)}
            className="onedb-node"
            style={{ left: `${pts[i].x}%`, top: `${pts[i].y}%`, "--a": productBySlug(m.part).color, "--i": i } as CSSProperties}
          >
            <IconTile icon={m.key} size={46} />
            <span>{m.name.replace("Learning Management System", "Learning").replace("Time & Attendance", "Attendance").replace("Performance Management", "Performance")}</span>
          </Link>
        ))}
      </nav>
      <figcaption className="caption">Illustration, simplified. Icons are MiHCM&rsquo;s own. Choose a module to read about it.</figcaption>
    </figure>
  );
}
