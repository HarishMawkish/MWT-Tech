import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { IntegrationPage } from "@/components/sap-integration/IntegrationPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "sap-and-non-sap-integration";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function SapAndNonSapIntegrationPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <IntegrationPage />
    </>
  );
}
