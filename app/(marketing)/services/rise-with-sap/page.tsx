import type { Metadata } from "next";
import { RisePage } from "@/components/sap-rise/RisePage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "RISE with SAP",
  description:
    "RISE with SAP takes the SAP system your business already runs on and moves it to SAP Cloud ERP Private, on your own private cloud instance. You keep your history, your processes and your custom work.",
};

export default function RiseWithSapPage() {
  return <RisePage />;
}
