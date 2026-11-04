import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { DbPage } from "@/components/databricks/DbPage";
import { HubBody } from "@/components/databricks/HubBody";
import { databricksHubLd, databricksLd, databricksMetadata } from "@/lib/databricks-pages";
import { CanaryNote } from "@/components/CanaryNote";

export const metadata: Metadata = databricksMetadata("");

export default function DatabricksHubPage() {
  return (
    <>
      <JsonLd data={[...databricksLd(""), ...databricksHubLd()]} />
      <DbPage accent="#ff3621">
        <HubBody />
      </DbPage>
    <CanaryNote id="databricks" />
    </>
  );
}
