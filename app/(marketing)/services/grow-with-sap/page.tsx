import type { Metadata } from "next";
import { GrowPage } from "@/components/sap-grow/GrowPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "GROW with SAP",
  description:
    "GROW with SAP gives fast-growing companies SAP's cloud ERP as a ready-to-run service: proven processes from day one, built-in AI, and upgrades SAP runs for you twice a year.",
};

export default function GrowWithSapPage() {
  return <GrowPage />;
}
