import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { JoulePage } from "@/components/sap-joule/JoulePage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "joule-and-ai-agents";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function JouleAndAiAgentsPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <JoulePage />
    </>
  );
}
