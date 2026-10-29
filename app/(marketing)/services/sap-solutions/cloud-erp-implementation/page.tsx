import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ImplementationPage } from "@/components/sap-implementation/ImplementationPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "cloud-erp-implementation";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function CloudErpImplementationPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <ImplementationPage />
    </>
  );
}
