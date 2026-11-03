"use client";

import Link from "next/link";
import { useState } from "react";
import { IconTile } from "./IconTile";
import { featureHref, features, mainProducts, productBySlug, type FeatureProduct } from "./data";

/**
 * Every capability these pages cover, grouped by the product it belongs to. Filter by product; each links to its tab on that
 * product's page. It opens on Claude, the product most people meet first; "All" shows everything.
 */
export function AppGrid() {
  const [f, setF] = useState<"all" | FeatureProduct>("claude");
  const shown = features.filter((x) => f === "all" || x.product === f);
  return (
    <>
      <div className="ag-bar" role="group" aria-label="Filter capabilities by product">
        <button type="button" aria-pressed={f === "all"} onClick={() => setF("all")}>
          All<small>{features.length}</small>
        </button>
        {mainProducts.map((p) => (
          <button key={p.slug} type="button" aria-pressed={f === p.slug} onClick={() => setF(p.slug as FeatureProduct)}>
            {p.name}
            <small>{features.filter((x) => x.product === p.slug).length}</small>
          </button>
        ))}
      </div>
      <ul className="ag-grid">
        {shown.map((x) => (
          <li key={x.key}>
            <Link href={featureHref(x)} className="ag-item">
              <IconTile icon={x.glyph} size={44} color={productBySlug(x.product).color} />
              <span className="ag-t">
                <b>{x.name}</b>
                <span>{x.line}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
