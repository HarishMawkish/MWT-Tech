import type { CSSProperties } from "react";
import { iconSrc } from "./data";

/**
 * An app's own icon, as Odoo publishes it, on a light tile. The icons have transparent backgrounds and some white detail,
 * so they always sit on a light tile and stay readable on the dark bands too. Decorative: the name is always beside it.
 */
export function IconTile({ icon, size = 40, className }: { icon: string; size?: number; className?: string }) {
  return (
    <span className={`ico-t${className ? ` ${className}` : ""}`} style={{ "--s": `${size}px` } as CSSProperties} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={iconSrc(icon)} alt="" width={size} height={size} loading="lazy" decoding="async" />
    </span>
  );
}
