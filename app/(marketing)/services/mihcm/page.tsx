import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { HubBody } from "@/components/mihcm/HubBody";
import { MhPage } from "@/components/mihcm/MhPage";
import { mihcmLd, mihcmMetadata } from "@/lib/mihcm-pages";
import { CanaryNote } from "@/components/CanaryNote";

export const metadata: Metadata = mihcmMetadata("");

export default function MihcmHubPage() {
  return (
    <>
      <JsonLd data={mihcmLd("")} />
      <MhPage>
        <HubBody />
      </MhPage>
    <CanaryNote />
    </>
  );
}
