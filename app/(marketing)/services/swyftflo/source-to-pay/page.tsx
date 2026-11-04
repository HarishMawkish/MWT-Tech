import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SwPage } from "@/components/swyftflo/SwPage";
import { S2PBody } from "@/components/swyftflo/pages/S2PBody";
import { swyftfloLd, swyftfloMetadata } from "@/lib/swyftflo-pages";
import { CanaryNote } from "@/components/CanaryNote";

const SLUG = "source-to-pay";

export const metadata: Metadata = swyftfloMetadata(SLUG);

export default function SourceToPayPage() {
  return (
    <>
      <JsonLd data={swyftfloLd(SLUG)} />
      <SwPage>
        <S2PBody />
      </SwPage>
    <CanaryNote id="swyftflo" />
    </>
  );
}
