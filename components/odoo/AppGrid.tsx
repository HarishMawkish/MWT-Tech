"use client";

import Link from "next/link";
import { useState } from "react";
import { IconTile } from "./IconTile";
import { apps, mainProducts, productPath, type App, type FamilySlug } from "./data";

/** Where an app lives: its family page, opened on its own tab. Studio and AI have pages of their own. */
const hrefOf = (a: App) => (a.family === "platform" ? productPath(a.key as "ai" | "studio") : `${productPath(a.family)}#${a.key}`);

/**
 * Every Odoo app the pages cover, with Odoo's own icon. Filter by family; each app links to its tab on its family's page.
 * It opens on Sales, the family most visitors start with; "All" shows every app.
 */
export function AppGrid() {
  const [f, setF] = useState<"all" | FamilySlug | "platform">("sales");
  const shown = apps.filter((a) => f === "all" || a.family === f);
  return (
    <>
      <div className="ag-bar" role="group" aria-label="Filter apps by family">
        <button type="button" aria-pressed={f === "all"} onClick={() => setF("all")}>
          All<small>{apps.length}</small>
        </button>
        {mainProducts.map((p) => (
          <button key={p.slug} type="button" aria-pressed={f === p.slug} onClick={() => setF(p.slug as FamilySlug)}>
            {p.short}
            <small>{apps.filter((a) => a.family === p.slug).length}</small>
          </button>
        ))}
        <button type="button" aria-pressed={f === "platform"} onClick={() => setF("platform")}>
          AI and Studio<small>{apps.filter((a) => a.family === "platform").length}</small>
        </button>
      </div>
      <ul className="ag-grid">
        {shown.map((a) => (
          <li key={a.key}>
            <Link href={hrefOf(a)} className="ag-item">
              <IconTile icon={a.key} size={44} />
              <span className="ag-t">
                <b>{a.name}</b>
                <span>{a.line}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
