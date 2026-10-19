import { IconGrid, serviceIconBySlug } from "@/components/home/icons";

type Logo = { src: string; alt: string; lg: string; sm: string };

// Official brand marks (transparent SVG) for the core platforms. Each logo
// has a different shape, so each gets its own height: the heights are tuned
// so the three read as the same visual weight, not the same box.
const logos: Record<string, Logo> = {
  "sap-solutions": { src: "/images/solutions/sap.svg", alt: "SAP", lg: "h-12", sm: "h-8" },
  "salesforce-solutions": { src: "/images/solutions/salesforce.svg", alt: "Salesforce", lg: "h-14", sm: "h-9" },
  "odoo-implementation": { src: "/images/solutions/odoo.svg", alt: "Odoo", lg: "h-10", sm: "h-7" },
};

const slot = { lg: "h-16", sm: "h-11" };

const tile = {
  lg: { box: "h-14 w-14 rounded-2xl", icon: "h-7 w-7" },
  sm: { box: "h-11 w-11 rounded-xl", icon: "h-5 w-5" },
};

/**
 * The visual mark for a service. Platforms with a brand logo (SAP,
 * Salesforce, Odoo) show the logo itself, sitting straight on the card. The
 * slot has a fixed height so cards stay aligned however tall each logo is.
 * Everything else falls back to the deep-green icon tile.
 */
export function ServiceMark({ slug, size = "lg" }: { slug: string; size?: "lg" | "sm" }) {
  const logo = logos[slug];

  if (logo) {
    return (
      <div className={`${slot[size]} flex shrink-0 items-center`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo.src}
          alt={logo.alt}
          draggable={false}
          className={`${logo[size]} w-auto max-w-full select-none`}
        />
      </div>
    );
  }

  const Icon = serviceIconBySlug[slug] ?? IconGrid;
  return (
    <div className={`mw-icon-tile ${tile[size].box} grid shrink-0 place-items-center text-white`}>
      <Icon className={tile[size].icon} />
    </div>
  );
}
