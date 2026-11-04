import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { NewsAndEvents } from "@/components/home/NewsAndEvents";

// Revalidate periodically so News & Events picks up new/reordered posts
// from Sanity without needing a full redeploy.
export const revalidate = 60;

// The home page names itself as the one address for the site, so search engines and AI search do not split it.
export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <HomePage />
      <NewsAndEvents />
    </>
  );
}
