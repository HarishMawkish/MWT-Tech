import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { AnalyticsPage } from "@/components/sap-analytics/AnalyticsPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";
import { CanaryNote } from "@/components/CanaryNote";

const SLUG = "sap-analytics-cloud";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function SapAnalyticsCloudPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <AnalyticsPage />
    <CanaryNote />
    </>
  );
}
