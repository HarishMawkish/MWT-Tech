import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SwPage } from "@/components/swyftflo/SwPage";
import { InvoiceHubBody } from "@/components/swyftflo/pages/InvoiceHubBody";
import { swyftfloLd, swyftfloMetadata } from "@/lib/swyftflo-pages";
import { CanaryNote } from "@/components/CanaryNote";

const SLUG = "invoice-hub";

export const metadata: Metadata = swyftfloMetadata(SLUG);

export default function InvoiceHubPage() {
  return (
    <>
      <JsonLd data={swyftfloLd(SLUG)} />
      <SwPage>
        <InvoiceHubBody />
      </SwPage>
    <CanaryNote />
    </>
  );
}
