import type { ProductContent } from "../content-types";
import type { ProductSlug } from "../data";
import { ai } from "./ai";
import { editionsAndHosting } from "./editions-and-hosting";
import { finance } from "./finance";
import { humanResources } from "./human-resources";
import { marketing } from "./marketing";
import { productivity } from "./productivity";
import { sales } from "./sales";
import { services } from "./services";
import { studio } from "./studio";
import { supplyChain } from "./supply-chain";
import { websites } from "./websites";

/** Every Odoo page's content, by slug. */
export const contents: Record<ProductSlug, ProductContent> = {
  finance,
  sales,
  websites,
  "supply-chain": supplyChain,
  "human-resources": humanResources,
  marketing,
  services,
  productivity,
  ai,
  studio,
  "editions-and-hosting": editionsAndHosting,
};
