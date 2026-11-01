import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SwPage } from "@/components/swyftflo/SwPage";
import { HubBody } from "@/components/swyftflo/pages/HubBody";
import { swyftfloLd, swyftfloMetadata } from "@/lib/swyftflo-pages";

// The general Swyftflo page. A dedicated route, outside the shared /services/[slug] template, like the SAP pages.
export const metadata: Metadata = swyftfloMetadata("");

export default function SwyftfloPage() {
  return (
    <>
      <JsonLd data={swyftfloLd("")} />
      <SwPage>
        <HubBody />
      </SwPage>
    </>
  );
}
