import type { Metadata } from "next";
import { RolloutPage } from "@/components/sap-rollout/RolloutPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "Rollouts & Localisation",
  description:
    "Every country has its own tax, invoicing, payroll, banking and reporting rules. We localise SAP for Sri Lanka in depth, and we roll out one global template to every market you operate in.",
};

export default function RolloutsAndLocalisationPage() {
  return <RolloutPage />;
}
