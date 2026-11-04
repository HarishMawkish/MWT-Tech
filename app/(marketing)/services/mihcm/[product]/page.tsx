import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { MhPage } from "@/components/mihcm/MhPage";
import { ProductBody } from "@/components/mihcm/ProductBody";
import { contents } from "@/components/mihcm/content";
import { products, type ProductSlug } from "@/components/mihcm/data";
import { mihcmLd, mihcmMetadata } from "@/lib/mihcm-pages";
import { CanaryNote } from "@/components/CanaryNote";

// One route for every MiHCM page. Only the slugs in the product list exist; anything else is a 404.
export function generateStaticParams() {
  return products.map((p) => ({ product: p.slug }));
}

const isSlug = (s: string): s is ProductSlug => products.some((p) => p.slug === s);

export async function generateMetadata({ params }: { params: Promise<{ product: string }> }): Promise<Metadata> {
  const { product } = await params;
  return isSlug(product) ? mihcmMetadata(product) : {};
}

export default async function MihcmProductPage({ params }: { params: Promise<{ product: string }> }) {
  const { product } = await params;
  if (!isSlug(product)) notFound();
  return (
    <>
      <JsonLd data={mihcmLd(product)} />
      <MhPage>
        <ProductBody c={contents[product]} />
      </MhPage>
    <CanaryNote />
    </>
  );
}
