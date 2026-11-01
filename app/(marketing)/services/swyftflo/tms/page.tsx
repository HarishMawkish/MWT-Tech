import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SwPage } from "@/components/swyftflo/SwPage";
import { TmsBody } from "@/components/swyftflo/pages/TmsBody";
import { swyftfloLd, swyftfloMetadata } from "@/lib/swyftflo-pages";

const SLUG = "tms";

export const metadata: Metadata = swyftfloMetadata(SLUG);

export default function TmsPage() {
  return (
    <>
      <JsonLd data={swyftfloLd(SLUG)} />
      <SwPage>
        <TmsBody />
      </SwPage>
    </>
  );
}
