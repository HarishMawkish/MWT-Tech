import type { Metadata } from "next";
import { AnalyticsPage } from "@/components/sap-analytics/AnalyticsPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "SAP Analytics Cloud",
  description:
    "Month-end packs built in Excel. Budgets emailed back and forth in twenty versions. Forecasts nobody trusts. SAP Analytics Cloud replaces all three with one tool connected to SAP Cloud ERP: live dashboards for management, budgets and forecasts your teams enter together, and AI that explains what changed. We design it around the decisions you need to make.",
};

export default function SapAnalyticsCloudPage() {
  return <AnalyticsPage />;
}
