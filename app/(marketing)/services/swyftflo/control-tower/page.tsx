import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SwPage } from "@/components/swyftflo/SwPage";
import { ControlTowerBody } from "@/components/swyftflo/pages/ControlTowerBody";
import { swyftfloLd, swyftfloMetadata } from "@/lib/swyftflo-pages";

const SLUG = "control-tower";

export const metadata: Metadata = swyftfloMetadata(SLUG);

export default function ControlTowerPage() {
  return (
    <>
      <JsonLd data={swyftfloLd(SLUG)} />
      <SwPage>
        <ControlTowerBody />
      </SwPage>
    </>
  );
}
