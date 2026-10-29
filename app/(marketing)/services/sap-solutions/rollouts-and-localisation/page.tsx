import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { RolloutPage } from "@/components/sap-rollout/RolloutPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "rollouts-and-localisation";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function RolloutsAndLocalisationPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <RolloutPage />
    </>
  );
}
