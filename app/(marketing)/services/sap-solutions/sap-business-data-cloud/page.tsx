import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { BdcPage } from "@/components/sap-bdc/BdcPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "sap-business-data-cloud";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function SapBusinessDataCloudPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <BdcPage />
    </>
  );
}
