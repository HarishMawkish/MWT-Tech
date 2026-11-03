import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { AnPage } from "@/components/anthropic/AnPage";
import { HubBody } from "@/components/anthropic/HubBody";
import { anthropicLd, anthropicMetadata } from "@/lib/anthropic-pages";

export const metadata: Metadata = anthropicMetadata("");

export default function AnthropicHubPage() {
  return (
    <>
      <JsonLd data={anthropicLd("")} />
      <AnPage>
        <HubBody />
      </AnPage>
    </>
  );
}
