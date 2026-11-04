import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { HubBody } from "@/components/odoo/HubBody";
import { OdPage } from "@/components/odoo/OdPage";
import { odooLd, odooMetadata } from "@/lib/odoo-pages";
import { CanaryNote } from "@/components/CanaryNote";

export const metadata: Metadata = odooMetadata("");

export default function OdooHubPage() {
  return (
    <>
      <JsonLd data={odooLd("")} />
      <OdPage>
        <HubBody />
      </OdPage>
    <CanaryNote id="odoo" />
    </>
  );
}
