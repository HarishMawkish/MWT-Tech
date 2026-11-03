"use client";

import Link from "next/link";
import { useState } from "react";
import { IconTile } from "./IconTile";
import { moduleHref, modules, products, type PartSlug } from "./data";

const parts = products.filter((p) => p.tier === "main");

/**
 * Every capability in MiHCM Enterprise's product stack, with MiHCM's own icon. Filter by part; each module links to its tab on
 * its part's page. It opens on Talent Management, the part with the most modules; "All" shows the seventeen.
 */
export function AppGrid() {
  const [f, setF] = useState<"all" | PartSlug>("talent-management");
  const shown = modules.filter((m) => f === "all" || m.part === f);
  return (
    <>
      <div className="ag-bar" role="group" aria-label="Filter modules by part">
        <button type="button" aria-pressed={f === "all"} onClick={() => setF("all")}>
          All<small>{modules.length}</small>
        </button>
        {parts.map((p) => (
          <button key={p.slug} type="button" aria-pressed={f === p.slug} onClick={() => setF(p.slug as PartSlug)}>
            {p.name}
            <small>{modules.filter((m) => m.part === p.slug).length}</small>
          </button>
        ))}
      </div>
      <ul className="ag-grid">
        {shown.map((m) => (
          <li key={m.key}>
            <Link href={moduleHref(m)} className="ag-item">
              <IconTile icon={m.key} size={44} />
              <span className="ag-t">
                <b>{m.name}</b>
                <span>{m.line}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
