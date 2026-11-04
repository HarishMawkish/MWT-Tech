import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { HubBody } from "@/components/salesforce/HubBody";
import { SfPage } from "@/components/salesforce/SfPage";
import { salesforceLd, salesforceMetadata } from "@/lib/salesforce-pages";
import { CanaryNote } from "@/components/CanaryNote";

export const metadata: Metadata = salesforceMetadata("");

export default function SalesforceHubPage() {
  return (
    <>
      <JsonLd data={salesforceLd("")} />
      <SfPage>
        <HubBody />
      </SfPage>
    <CanaryNote />
    </>
  );
}
