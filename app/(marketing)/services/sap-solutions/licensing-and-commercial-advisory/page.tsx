import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LicensingPage } from "@/components/sap-licensing/LicensingPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "licensing-and-commercial-advisory";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function LicensingAndCommercialAdvisoryPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <LicensingPage />
    </>
  );
}
