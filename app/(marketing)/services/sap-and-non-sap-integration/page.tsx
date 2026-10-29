import type { Metadata } from "next";
import { IntegrationPage } from "@/components/sap-integration/IntegrationPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "SAP & Non-SAP Integration",
  description:
    "Your ERP doesn't work alone. It talks to your CRM, your payroll system, your banks, the tax authority, your online store and your data platform. We connect SAP Cloud ERP to all of them with SAP's own integration tools, so data moves once, in real time where it matters, and someone knows straight away when a message fails.",
};

export default function SapAndNonSapIntegrationPage() {
  return <IntegrationPage />;
}
