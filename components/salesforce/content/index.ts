import type { ProductContent } from "../content-types";
import type { ProductSlug } from "../data";
import { agentforce } from "./agentforce";
import { data360 } from "./data360";
import { loyalty } from "./loyalty";
import { marketing } from "./marketing";
import { sales } from "./sales";
import { service } from "./service";
import { commerce, fieldService, mulesoft, revenue, slack, tableau } from "./support";

export const contents: Record<ProductSlug, ProductContent> = {
  "sales-cloud": sales,
  "data-360": data360,
  "marketing-cloud": marketing,
  "loyalty-management": loyalty,
  "service-cloud": service,
  agentforce,
  "revenue-cloud": revenue,
  "field-service": fieldService,
  "commerce-cloud": commerce,
  slack,
  tableau,
  mulesoft,
};
