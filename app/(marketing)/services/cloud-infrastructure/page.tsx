import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { CloudPage } from "@/components/cloud/CloudPage";
import { CloudHubBody } from "@/components/cloud/CloudHubBody";
import { cloudHubLd, cloudHubMetadata } from "@/lib/cloud-pages";

export const metadata: Metadata = cloudHubMetadata();

export default function CloudInfrastructureHubPage() {
  return (
    <>
      <JsonLd data={cloudHubLd()} />
      <CloudPage>
        <CloudHubBody />
      </CloudPage>
    </>
  );
}
