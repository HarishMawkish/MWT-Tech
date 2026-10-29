import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { MovePage } from "@/components/sap-move/MovePage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "move-from-ecc-on-premise";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function MoveFromEccOnPremisePage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <MovePage />
    </>
  );
}
