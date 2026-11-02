import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SwPage } from "@/components/swyftflo/SwPage";
import { AuthentikBody } from "@/components/swyftflo/pages/AuthentikBody";
import { swyftfloLd, swyftfloMetadata } from "@/lib/swyftflo-pages";

const SLUG = "authentik";

export const metadata: Metadata = swyftfloMetadata(SLUG);

export default function AuthentikPage() {
  return (
    <>
      <JsonLd data={swyftfloLd(SLUG)} />
      <SwPage>
        <AuthentikBody />
      </SwPage>
    </>
  );
}
