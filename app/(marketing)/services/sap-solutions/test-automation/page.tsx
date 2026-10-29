import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { TestingPage } from "@/components/sap-testing/TestingPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "test-automation";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function TestAutomationPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <TestingPage />
    </>
  );
}
