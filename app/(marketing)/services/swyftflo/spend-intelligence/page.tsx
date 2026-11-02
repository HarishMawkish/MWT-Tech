import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SwPage } from "@/components/swyftflo/SwPage";
import { SpendBody } from "@/components/swyftflo/pages/SpendBody";
import { swyftfloLd, swyftfloMetadata } from "@/lib/swyftflo-pages";

const SLUG = "spend-intelligence";

export const metadata: Metadata = swyftfloMetadata(SLUG);

export default function SpendIntelligencePage() {
  return (
    <>
      <JsonLd data={swyftfloLd(SLUG)} />
      <SwPage>
        <SpendBody />
      </SwPage>
    </>
  );
}
