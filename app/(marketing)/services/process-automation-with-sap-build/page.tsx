import type { Metadata } from "next";
import { AutomationPage } from "@/components/sap-automation/AutomationPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "Process Automation with SAP Build",
  description:
    "Every business has processes that live in email, spreadsheets and phone calls. We automate them around SAP Cloud ERP with SAP's own tools, so the work flows, people only see what needs their judgement, and every step is recorded.",
};

export default function ProcessAutomationWithSapBuildPage() {
  return <AutomationPage />;
}
