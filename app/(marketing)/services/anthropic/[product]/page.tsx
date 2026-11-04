import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { AnPage } from "@/components/anthropic/AnPage";
import { ProductBody } from "@/components/anthropic/ProductBody";
import { contents } from "@/components/anthropic/content";
import { products, type ProductSlug } from "@/components/anthropic/data";
import { anthropicLd, anthropicMetadata } from "@/lib/anthropic-pages";
import { CanaryNote } from "@/components/CanaryNote";

// One route for every Anthropic page. Only the slugs in the product list exist; anything else is a 404.
export function generateStaticParams() {
  return products.map((p) => ({ product: p.slug }));
}

const isSlug = (s: string): s is ProductSlug => products.some((p) => p.slug === s);

export async function generateMetadata({ params }: { params: Promise<{ product: string }> }): Promise<Metadata> {
  const { product } = await params;
  return isSlug(product) ? anthropicMetadata(product) : {};
}

export default async function AnthropicProductPage({ params }: { params: Promise<{ product: string }> }) {
  const { product } = await params;
  if (!isSlug(product)) notFound();
  return (
    <>
      <JsonLd data={anthropicLd(product)} />
      <AnPage>
        <ProductBody c={contents[product]} />
      </AnPage>
    <CanaryNote />
    </>
  );
}
