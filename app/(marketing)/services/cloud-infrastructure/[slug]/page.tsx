import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { CloudPage } from "@/components/cloud/CloudPage";
import { CloudBody } from "@/components/cloud/CloudBody";
import { cloudLd, cloudMetadata, cloudPageBySlug, cloudPages } from "@/lib/cloud-pages";

// One route for every Cloud Infrastructure page. Only the slugs in the data exist; anything else is a 404.
export function generateStaticParams() {
  return cloudPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return cloudMetadata(slug);
}

export default async function CloudInfrastructurePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = cloudPageBySlug(slug);
  if (!d) notFound();
  return (
    <>
      <JsonLd data={cloudLd(slug)} />
      <CloudPage>
        <CloudBody d={d} />
      </CloudPage>
    </>
  );
}
