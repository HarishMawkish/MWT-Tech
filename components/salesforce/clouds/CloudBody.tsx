import type { ProductSlug } from "../data";
import { DataBody } from "./DataBody";
import { LoyaltyBody } from "./LoyaltyBody";
import { MarketingBody } from "./MarketingBody";
import { SalesBody } from "./SalesBody";
import { ServiceBody } from "./ServiceBody";

/**
 * The five main clouds have pages written on their own, so no two read the same way. The eight supporting products
 * still come from the shared template in ProductBody; this is the only place that knows which is which.
 */
const bodies = {
  "sales-cloud": SalesBody,
  "data-360": DataBody,
  "marketing-cloud": MarketingBody,
  "loyalty-management": LoyaltyBody,
  "service-cloud": ServiceBody,
} as const;

export type CloudSlug = keyof typeof bodies;

export const isCloudSlug = (s: string): s is CloudSlug => s in bodies;

/** The colour each cloud page carries, matching the colour it already has in the menu and the product index. */
export const cloudAccent: Record<CloudSlug, string> = {
  "sales-cloud": "#4c9fe8",
  "data-360": "#2bbfd4",
  "marketing-cloud": "#f08a4d",
  "loyalty-management": "#d9619f",
  "service-cloud": "#45b681",
};

export function CloudBody({ slug }: { slug: ProductSlug }) {
  if (!isCloudSlug(slug)) return null;
  const Page = bodies[slug];
  return <Page />;
}
