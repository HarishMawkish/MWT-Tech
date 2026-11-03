import type { CSSProperties } from "react";
import { iconSrc } from "./data";

/**
 * A module's own icon, or a product's own logo, as MiHCM publishes it, on a light tile. MiHCM's logos are drawn in dark
 * blue and orange, so they always sit on a light tile and stay readable on the dark bands too. `wide` gives a logo a little
 * more room than a round module icon. Decorative: the name is always beside it.
 */
export function IconTile({ icon, src, size = 40, className, wide }: { icon?: string; src?: string; size?: number; className?: string; wide?: boolean }) {
  const file = src ?? (icon ? iconSrc(icon) : undefined);
  return (
    <span className={`ico-t${wide ? " ico-logo" : ""}${className ? ` ${className}` : ""}`} style={{ "--s": `${size}px` } as CSSProperties} aria-hidden="true">
      {file ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={file} alt="" width={size} height={size} loading="lazy" decoding="async" />
      ) : (
        <i className="ico-dot" />
      )}
    </span>
  );
}
