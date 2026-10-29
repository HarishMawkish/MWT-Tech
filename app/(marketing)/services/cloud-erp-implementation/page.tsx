import type { Metadata } from "next";
import { ImplementationPage } from "@/components/sap-implementation/ImplementationPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "Cloud ERP Implementation",
  description:
    "Implementing SAP Cloud ERP is a defined sequence of decisions, builds and rehearsals. Mawkish runs every project on SAP Activate, with every requirement, test and decision tracked in SAP Cloud ALM.",
};

export default function CloudErpImplementationPage() {
  return <ImplementationPage />;
}
