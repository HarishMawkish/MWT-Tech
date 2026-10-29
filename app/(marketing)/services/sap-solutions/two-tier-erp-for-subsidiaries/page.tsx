import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { TwoTierPage } from "@/components/sap-twotier/TwoTierPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "two-tier-erp-for-subsidiaries";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function TwoTierErpForSubsidiariesPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <TwoTierPage />
    </>
  );
}
