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
 * 1. THE IMAGE IS NOT `fill`.
 *    `next/image` with `fill` is absolutely positioned and contributes zero
 *    height, so it only shows if its parent is `relative` AND already has a
 *    height of its own. Inside the animated marquee track that is fragile -
 *    the moment the height source goes, the box collapses to 0px and the
 *    thumbnail vanishes while the card still renders. Here the <img> carries
 *    real width/height attributes plus `aspect-[16/9]`, so it reserves its
 *    own space and can never collapse.
 *
 * 2. SANITY DOES THE CROP.
 *    `.width(800).height(450).fit("crop")` means the file arriving over the
 *    wire is already 16:9 (and respects the hotspot the editor sets in
 *    Studio). `object-cover` is only a safety net on top of that.
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
  const imageUrl = post.coverImage?.asset
    ? urlFor(post.coverImage)
        .width(800)
        .height(450)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-mw-line transition hover:border-mw-secondary hover:shadow-lg hover:shadow-mw-secondary/5"
    >
      <div className="w-full shrink-0 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title}
            width={800}
            height={450}
            className="aspect-[16/9] h-auto w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
          />
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
