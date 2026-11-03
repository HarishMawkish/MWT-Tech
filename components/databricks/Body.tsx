import type { DbSlug } from "./data";
import { AgentBricksBody } from "./bodies/AgentBricksBody";
import { AppsBody } from "./bodies/AppsBody";
import { GenieBody } from "./bodies/GenieBody";
import { LakebaseBody } from "./bodies/LakebaseBody";
import { LakeflowBody } from "./bodies/LakeflowBody";
import { LakehouseBody } from "./bodies/LakehouseBody";
import { MigrationBody } from "./bodies/MigrationBody";
import { PricingBody } from "./bodies/PricingBody";
import { SapBody } from "./bodies/SapBody";
import { SecurityBody } from "./bodies/SecurityBody";
import { SharingBody } from "./bodies/SharingBody";
import { UnityCatalogBody } from "./bodies/UnityCatalogBody";

// Each page is written on its own rather than generated from a shared template, so no two read the same way. This is
// the only place that knows which body belongs to which address.
const bodies: Record<DbSlug, () => React.ReactElement> = {
  lakehouse: LakehouseBody,
  lakeflow: LakeflowBody,
  "unity-catalog": UnityCatalogBody,
  genie: GenieBody,
  "agent-bricks": AgentBricksBody,
  lakebase: LakebaseBody,
  apps: AppsBody,
  sharing: SharingBody,
  "sap-business-data-cloud": SapBody,
  "security-and-architecture": SecurityBody,
  migration: MigrationBody,
  "pricing-and-cost": PricingBody,
};

export function Body({ slug }: { slug: DbSlug }) {
  const Page = bodies[slug];
  return <Page />;
}
