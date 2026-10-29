import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SupportPage } from "@/components/sap-support/SupportPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "application-management-support";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function ApplicationManagementSupportPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <SupportPage />
    </>
  );
}
