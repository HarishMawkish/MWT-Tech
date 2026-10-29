import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ReadinessPage } from "@/components/sap-readiness/ReadinessPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "cloud-erp-readiness-assessment";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function CloudErpReadinessAssessmentPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <ReadinessPage />
    </>
  );
}
