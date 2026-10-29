import type { Metadata } from "next";
import { TwoTierPage } from "@/components/sap-twotier/TwoTierPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "Two-Tier ERP for Subsidiaries",
  description:
    "Most large groups run headquarters on SAP S/4HANA, and the same big system is too slow and costly to roll out to every small company. Two-tier ERP puts each subsidiary on SAP Cloud ERP, connected to headquarters by SAP's prebuilt integrations, so orders, invoices, master data and financials move between them without anyone typing them in twice.",
};

export default function TwoTierErpForSubsidiariesPage() {
  return <TwoTierPage />;
}
