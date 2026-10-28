import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CloudPage } from "@/components/salesforce/CloudPage";
import { cloudBySlug, clouds } from "@/components/salesforce/clouds";

export function generateStaticParams() {
  return clouds.map((c) => ({ cloud: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cloud: string }>;
}): Promise<Metadata> {
  const { cloud: slug } = await params;
  const cloud = cloudBySlug(slug);
  if (!cloud) return {};
  return { title: `${cloud.name} | Salesforce`, description: cloud.lede };
}

export default async function SalesforceCloudPage({
  params,
}: {
  params: Promise<{ cloud: string }>;
}) {
  const { cloud: slug } = await params;
  const cloud = cloudBySlug(slug);
  if (!cloud) notFound();
  return <CloudPage cloud={cloud} />;
}
