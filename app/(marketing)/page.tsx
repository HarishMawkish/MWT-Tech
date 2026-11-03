import { HomePage } from "@/components/home/HomePage";
import { NewsAndEvents } from "@/components/home/NewsAndEvents";

// Revalidate periodically so News & Events picks up new/reordered posts
// from Sanity without needing a full redeploy.
export const revalidate = 60;

export default function Home() {
  return (
    <>
      <HomePage />
      <NewsAndEvents />
    </>
  );
}
