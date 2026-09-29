import Image from "next/image";
import Link from "next/link";
import { excerptFromPlainText, type SanityBlogPost } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

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
    <Link
      href={`/insights/${post.slug}`}
      className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-mw-line transition hover:border-mw-secondary hover:shadow-lg hover:shadow-mw-secondary/5"
    >
      <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden">
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
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              className="object-contain transition duration-500 group-hover:scale-[1.03]"
            />
          </>
        ) : (
          // Post with no cover image: keep the same slot so the card height
          // still matches its neighbours instead of jumping short.
          <div className="flex aspect-[16/9] w-full items-center justify-center text-xs font-semibold uppercase tracking-widest text-mw-ink/30">
            Mawkish
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="line-clamp-2 min-h-[3.5rem] font-display text-xl font-bold leading-7 text-mw-primary">
          {post.title}
        </h3>

        {showExcerpt && (
          <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-mw-ink/65">
            {excerptFromPlainText(post.plainText)}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between pt-6 text-xs text-mw-ink/50">
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          <span className="font-semibold text-mw-secondary opacity-0 transition group-hover:opacity-100">
            Read &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
