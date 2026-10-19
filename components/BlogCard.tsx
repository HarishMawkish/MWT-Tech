import Image from "next/image";
import { SpotlightLink } from "@/components/SpotlightLink";
import { excerptFromPlainText, type SanityBlogPost } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

// Fixed locale + UTC so the server and the browser always print the same
// date (a bare toLocaleDateString() differs by visitor and can mismatch on
// hydration).
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Single source of truth for a blog preview card, used by both the homepage
 * "News & Events" strip and the /insights Blogs grid.
 *
 * Two rules keep every card identical, and neither can be removed safely:
 *
 * 1. THE FRAME OWNS ITS HEIGHT.
 *    The image is `fill` (absolutely positioned, zero height of its own), so
 *    the parent frame must be `relative` with `aspect-[16/9]` — that aspect
 *    ratio is what reserves the space and stops the box collapsing to 0px.
 *
 * 2. NOTHING IS CROPPED.
 *    The full photo is shown (`object-contain`, no server-side crop), so
 *    quality and composition are untouched. Any leftover space in the 16:9
 *    frame is filled by a tiny blurred copy of the same photo behind it.
 *
 * The card fills 100% of whatever box it is placed in, so the PARENT decides
 * the width: the grid gives it a column, the marquee gives it a fixed-width
 * wrapper. The card never sizes itself from its own text.
 */
export function BlogCard({
  post,
  showExcerpt = true,
}: {
  post: SanityBlogPost;
  showExcerpt?: boolean;
}) {
  const hasImage = Boolean(post.coverImage?.asset);
  const imageUrl = hasImage ? urlFor(post.coverImage).width(800).auto("format").url() : null;
  // Tiny blurred copy of the same photo, used to fill any space the
  // uncropped image doesn't cover in the 16:9 frame.
  const backdropUrl = hasImage ? urlFor(post.coverImage).width(48).blur(20).url() : null;

  return (
    <SpotlightLink
      href={`/insights/${post.slug}`}
      className="group flex h-full w-full flex-col rounded-3xl"
    >
      <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-black/40">
        {imageUrl && backdropUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={backdropUrl}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-70 blur-xl"
            />
            <Image
              src={imageUrl}
              alt=""
              fill
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              className="object-contain transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
          </>
        ) : (
          // Post with no cover image: keep the same slot so the card height
          // still matches its neighbours instead of jumping short.
          <div className="flex aspect-[16/9] w-full items-center justify-center text-xs font-semibold uppercase tracking-widest text-white/30">
            Mawkish
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <time dateTime={post.publishedAt} className="text-xs font-medium uppercase tracking-widest text-white/50">
          {formatDate(post.publishedAt)}
        </time>

        <h3 className="mt-3 line-clamp-3 font-display text-xl leading-snug text-white">
          {post.title}
        </h3>

        {showExcerpt && (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/65">
            {excerptFromPlainText(post.plainText)}
          </p>
        )}

        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-white/90">
          Read article
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
          >
            &rarr;
          </span>
        </span>
      </div>
    </SpotlightLink>
  );
}
