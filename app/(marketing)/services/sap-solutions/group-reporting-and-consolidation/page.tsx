import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { GroupRepPage } from "@/components/sap-grouprep/GroupRepPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "group-reporting-and-consolidation";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function GroupReportingAndConsolidationPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <GroupRepPage />
    </>
  );
}
