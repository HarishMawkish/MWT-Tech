import type { Metadata } from "next";
import { ReadinessPage } from "@/components/sap-readiness/ReadinessPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "Cloud ERP Readiness Assessment",
  description:
    "In two weeks we map how your business runs today against SAP's standard processes. You get a clear answer on fit, the right route (GROW or RISE), a sized licence, a realistic timeline and a budget range.",
};

export default function CloudErpReadinessAssessmentPage() {
  return <ReadinessPage />;
}
