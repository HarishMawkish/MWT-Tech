import type { Metadata } from "next";
import { BdcPage } from "@/components/sap-bdc/BdcPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "SAP Business Data Cloud",
  description:
    "Most companies still export SAP data to spreadsheets, or keep a data warehouse that breaks at every upgrade. SAP Business Data Cloud takes a different approach: SAP delivers your ERP data as ready-made data products that keep their business meaning and stay current, and you combine them with data from your other systems for reporting, planning and AI. We help you decide whether you need it, and set it up when you do.",
};

export default function SapBusinessDataCloudPage() {
  return <BdcPage />;
}
