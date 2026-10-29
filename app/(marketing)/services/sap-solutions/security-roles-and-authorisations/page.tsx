import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SecurityPage } from "@/components/sap-security/SecurityPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "security-roles-and-authorisations";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function SecurityRolesAndAuthorisationsPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <SecurityPage />
    </>
  );
}
