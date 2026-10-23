import type { Metadata } from "next";
import { CtaBand, PageHero, Section, SectionHead } from "@/components/ui";
import { BlogExplorer } from "@/components/BlogExplorer";
import { Reveal } from "@/components/Reveal";
import { SpotlightLink } from "@/components/SpotlightLink";
import { insights } from "@/lib/site-data";
import {
  getAllBlogPosts,
  getAllBlogCategories,
} from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Insights & Perspectives",
  description:
    "Perspectives on business transformation, enterprise platforms, and operational visibility from the Mawkish Technologies team.",
};

// Revalidate periodically so new/edited posts in Sanity show up without a full redeploy.
export const revalidate = 60;

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

export default async function InsightsPage() {
  const [blogs, categories] = await Promise.all([
    getAllBlogPosts(),
    getAllBlogCategories(),
  ]);
  // Slim copies for the client explorer: no article body is shipped, just the
  // card fields plus a bounded chunk of text to search against.
  const explorerPosts = blogs.map((post) => ({
    slug: post.slug,
    title: post.title,
    coverImage: post.coverImage,
    publishedAt: post.publishedAt,
    categoryId: post.category?._id ?? null,
    categoryTitle: post.category?.title ?? null,
    searchText: `${post.title} ${post.category?.title ?? ""} ${post.plainText.slice(0, 1500)}`.toLowerCase(),
  }));
  const explorerCategories = categories.map((c) => ({ id: c._id, title: c.title }));
  const [featured, ...rest] = insights;

  return (
    <>
      <PageHero
        eyebrow="Insights & Perspectives"
        title="Perspectives on business-first transformation."
        description="Practical thinking on enterprise platforms, operational visibility, and what it actually takes to turn a technology investment into a business outcome."
      />

      {/* Perspectives: one lead piece, two supporting */}
      <section aria-labelledby="perspectives-title" className="bg-black">
        <Section className="!py-20 lg:!py-28">
          <Reveal>
            <SectionHead tag="Perspectives" title="How we think about it." id="perspectives-title" />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:grid-rows-2">
            {featured && (
              <Reveal className="h-full lg:col-span-2 lg:row-span-2">
                <SpotlightLink
                  href={`/insights/${featured.slug}`}
                  className="group flex h-full min-h-[24rem] flex-col rounded-[2rem] p-8 sm:p-12"
                >
                  {/* A single soft light in the corner gives the lead piece weight. */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full"
                    style={{ background: "radial-gradient(closest-side, rgba(28,107,81,0.35), transparent)" }}
                  />
                  <span className="relative text-xs font-semibold uppercase tracking-[0.22em] text-mw-mint">
                    {featured.category}
                  </span>
                  <h3 className="relative mt-5 max-w-xl text-balance font-display text-3xl text-white sm:text-4xl lg:text-[2.6rem]">
                    {featured.title}
                  </h3>
                  <p className="relative mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                    {featured.excerpt}
                  </p>
                  <div className="relative mt-auto flex items-center justify-between pt-12">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                      Read the article
                      <Arrow />
                    </span>
                    <span className="text-sm text-white/50">{featured.readTime}</span>
                  </div>
                </SpotlightLink>
              </Reveal>
            )}

            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i + 1) * 100} className="h-full">
                <SpotlightLink
                  href={`/insights/${post.slug}`}
                  className="group flex h-full flex-col rounded-[2rem] p-7"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-mint">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-balance font-display text-xl leading-snug text-white">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/65">{post.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                      Read
                      <Arrow />
                    </span>
                    <span className="text-xs text-white/50">{post.readTime}</span>
                  </div>
                </SpotlightLink>
              </Reveal>
            ))}
          </div>
        </Section>
      </section>

      {/* From the field: searchable, filterable archive of Sanity posts */}
      <section
        aria-labelledby="field-title"
        className="relative border-t border-white/10 bg-[#050a08]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72"
          style={{ background: "radial-gradient(50% 100% at 50% 0%, rgba(28,107,81,0.16) 0%, rgba(0,0,0,0) 80%)" }}
        />
        <Section className="relative !py-20 lg:!py-28">
          <Reveal>
            <SectionHead tag="From the field" title="News, events & articles." id="field-title" />
          </Reveal>

          {explorerPosts.length === 0 ? (
            <p className="mt-12 text-base text-white/60">New posts are on their way.</p>
          ) : (
            <div className="mt-10">
              <BlogExplorer posts={explorerPosts} categories={explorerCategories} />
            </div>
          )}
        </Section>
      </section>

      <CtaBand />
    </>
  );
}
