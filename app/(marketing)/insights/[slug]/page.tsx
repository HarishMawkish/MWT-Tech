import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { CtaBand, Eyebrow, SectionHead } from "@/components/ui";
import { BlogCard } from "@/components/BlogCard";
import { BlogImageSlideshow } from "@/components/BlogImageSlideshow";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Reveal } from "@/components/Reveal";
import { SpotlightLink } from "@/components/SpotlightLink";
import { insights } from "@/lib/site-data";
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
  getAllBlogPosts,
  type SanityBlogPost,
} from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

export const revalidate = 60;

// Fixed locale + UTC so server and browser always print the same date.
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export async function generateStaticParams() {
  const blogSlugs = await getAllBlogSlugs();
  const insightSlugs = insights.map((p) => p.slug);
  return [...insightSlugs, ...blogSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const insight = insights.find((p) => p.slug === slug);
  if (insight) return { title: insight.title, description: insight.excerpt };

  const blogPost = await getBlogPostBySlug(slug);
  if (blogPost) return { title: blogPost.title };

  return {};
}

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
    >
      &rarr;
    </span>
  );
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Try the hardcoded Insights first, then fall back to Sanity blog posts —
  // the two live in the same /insights/<slug> URL space.
  const insight = insights.find((p) => p.slug === slug);
  const blogPost = insight ? null : await getBlogPostBySlug(slug);

  if (!insight && !blogPost) notFound();

  const moreInsights = insights.filter((p) => p.slug !== slug).slice(0, 2);

  let otherBlogs: SanityBlogPost[] = [];
  if (blogPost) {
    const allBlogs = await getAllBlogPosts();
    const rest = allBlogs.filter((p) => p.slug !== slug);
    const sameCategory = rest.filter(
      (p) => p.category?._id === blogPost.category?._id,
    );
    const different = rest.filter(
      (p) => p.category?._id !== blogPost.category?._id,
    );
    otherBlogs = [...sameCategory, ...different].slice(0, 2);
  }

  const category = insight ? insight.category : (blogPost?.category?.title ?? "Blog");
  const title = insight ? insight.title : (blogPost?.title ?? "");
  const meta = insight
    ? insight.readTime
    : blogPost
      ? formatDate(blogPost.publishedAt)
      : "";

  return (
    <>
      <ReadingProgress />

      {/* Hero */}
      <section className="mw-dark-section relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[28rem]"
          style={{
            background:
              "radial-gradient(60% 100% at 50% 0%, rgba(28,107,81,0.30) 0%, rgba(28,107,81,0.07) 48%, rgba(0,0,0,0) 78%)",
          }}
        />

        <nav
          aria-label="Breadcrumb"
          className="relative mx-auto flex max-w-7xl items-center gap-3 px-6 pt-6 lg:px-8"
        >
          <Link
            href="/insights"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] pl-3.5 pr-5 text-sm font-semibold text-white/80 backdrop-blur-xl transition-colors hover:border-white/30 hover:bg-white/[0.08] hover:text-white active:scale-[0.97]"
          >
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1"
            >
              &larr;
            </span>
            Insights &amp; Perspectives
          </Link>
        </nav>

        <div className="relative mx-auto max-w-3xl px-6 pb-14 pt-14 text-center lg:px-8 lg:pb-20 lg:pt-20">
          <Reveal>
            <Eyebrow>{category}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 text-balance font-display text-3xl font-bold text-white sm:text-5xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-sm font-medium uppercase tracking-widest text-white/50">{meta}</p>
          </Reveal>
        </div>
      </section>

      {/* Article */}
      <article className="bg-black">
        {blogPost && (
          <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
            <Reveal>
              <BlogImageSlideshow
                images={[
                  { src: urlFor(blogPost.coverImage).width(1600).url(), alt: blogPost.title },
                  ...(blogPost.galleryImages ?? []).map((img, i) => ({
                    src: urlFor(img).width(1600).url(),
                    alt: img.alt || `${blogPost.title} — photo ${i + 2}`,
                  })),
                ]}
              />
            </Reveal>
          </div>
        )}

        <div className="mx-auto max-w-[42rem] px-6 py-16 lg:py-24">
          {insight ? (
            <div className="space-y-7">
              {insight.content.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-balance text-2xl font-medium leading-snug tracking-tight text-white/90 sm:text-[1.7rem]"
                      : "text-lg leading-[1.8] text-white/75"
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          ) : (
            blogPost && (
              <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:normal-case prose-headings:tracking-tight prose-headings:text-white prose-p:leading-[1.8] prose-p:text-white/75 prose-li:text-white/75 prose-a:text-white prose-a:decoration-mw-mint prose-a:underline-offset-4 hover:prose-a:decoration-white prose-strong:font-semibold prose-strong:text-white prose-blockquote:border-mw-mint prose-blockquote:text-white/90">
                <PortableText value={blogPost.content} />
              </div>
            )
          )}

          <div className="mt-16 flex items-center justify-between gap-4 border-t border-white/10 pt-8">
            <Link
              href="/insights"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1"
              >
                &larr;
              </span>
              All insights
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-mw-mint px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-mw-void active:scale-[0.97]"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </article>

      {/* Keep reading */}
      {insight && moreInsights.length > 0 && (
        <section aria-labelledby="more-title" className="relative border-t border-white/10 bg-[#050a08]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <Reveal>
              <SectionHead tag="Keep reading" title="More perspectives" id="more-title" />
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {moreInsights.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90} className="h-full">
                  <SpotlightLink
                    href={`/insights/${p.slug}`}
                    className="group flex h-full flex-col rounded-[2rem] p-8"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-mint">
                      {p.category}
                    </span>
                    <h3 className="mt-4 text-balance font-display text-2xl leading-snug text-white">
                      {p.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/65">{p.excerpt}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-white/90">
                      Read
                      <Arrow />
                    </span>
                  </SpotlightLink>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {blogPost && otherBlogs.length > 0 && (
        <section aria-labelledby="more-title" className="relative border-t border-white/10 bg-[#050a08]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <Reveal>
              <SectionHead tag="Keep reading" title="More from the blog" id="more-title" />
            </Reveal>
            <div className="mt-12 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
              {otherBlogs.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90} className="h-full">
                  <BlogCard post={p} showExcerpt={false} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
