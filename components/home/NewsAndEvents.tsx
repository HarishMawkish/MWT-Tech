import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui";
import { getBlogPostsByCategoryTitle, excerptFromPlainText } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

// The exact category title editors use in Sanity for this section. If it's
// ever renamed in Studio, update this string to match.
const CATEGORY_TITLE = "News & Events";

export async function NewsAndEvents() {
  const posts = await getBlogPostsByCategoryTitle(CATEGORY_TITLE);

  // No posts in this category yet (or none published) — skip the section
  // entirely rather than showing an empty heading on the homepage.
  if (posts.length === 0) return null;

  return (
    <Section>
      <h2 className="font-display text-3xl font-bold text-mw-primary">{CATEGORY_TITLE}</h2>
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/insights/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-mw-line transition hover:border-mw-secondary hover:shadow-lg hover:shadow-mw-secondary/5"
          >
            <div
              className="relative w-full bg-mw-paper"
              style={{ aspectRatio: post.coverImageAspectRatio || 16 / 9 }}
            >
              <Image
                src={urlFor(post.coverImage).width(800).url()}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-display text-xl font-bold text-mw-primary">{post.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mw-ink/65">
                {excerptFromPlainText(post.plainText)}
              </p>
              <div className="mt-6 flex items-center justify-between text-xs text-mw-ink/50">
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                <span className="font-semibold text-mw-secondary opacity-0 transition group-hover:opacity-100">
                  Read &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
