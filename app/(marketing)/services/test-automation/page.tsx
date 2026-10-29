import type { Metadata } from "next";
import { TestingPage } from "@/components/sap-testing/TestingPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "Test Automation",
  description:
    "SAP Cloud ERP changes twice a year, and your business changes more often than that. Testing by hand can't keep up: it takes your best people away from their jobs, and it still misses things. We automate the tests for your key processes with SAP's own tools, so every upgrade and every change is checked the same way, in hours.",
};

export default function TestAutomationPage() {
  return <TestingPage />;
}
