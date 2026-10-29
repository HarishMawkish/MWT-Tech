import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { AutomationPage } from "@/components/sap-automation/AutomationPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "process-automation-with-sap-build";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function ProcessAutomationWithSapBuildPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <AutomationPage />
    </>
  );
}
