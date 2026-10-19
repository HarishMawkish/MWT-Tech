import type { Metadata } from "next";
import { CtaBand, PageHero, Section, SectionHead } from "@/components/ui";
import { BlogCard } from "@/components/BlogCard";
import { Reveal } from "@/components/Reveal";
import { SpotlightLink } from "@/components/SpotlightLink";
import { insights } from "@/lib/site-data";
import {
  getAllBlogPosts,
  getAllBlogCategories,
  groupBlogPostsByCategory,
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
  const blogGroups = groupBlogPostsByCategory(blogs, categories);
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

      {/* From the field: Sanity posts grouped by category */}
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

          {blogGroups.length === 0 ? (
            <p className="mt-12 text-base text-white/60">New posts are on their way.</p>
          ) : (
            <>
              {/* Jump links: wayfinding between categories */}
              {blogGroups.length > 1 && (
                <nav aria-label="Post categories" className="mt-10 flex flex-wrap gap-2">
                  {blogGroups.map(({ category }) => {
                    const id = category?._id ?? "uncategorized";
                    return (
                      <a
                        key={id}
                        href={`#cat-${id}`}
                        className="inline-flex min-h-11 items-center rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm font-semibold text-white/80 backdrop-blur-xl transition-colors hover:border-white/30 hover:bg-white/[0.08] hover:text-white active:scale-[0.97]"
                      >
                        {category?.title ?? "Uncategorized"}
                      </a>
                    );
                  })}
                </nav>
              )}

              <div className="mt-16 space-y-20">
                {blogGroups.map(({ category, posts }) => {
                  const id = category?._id ?? "uncategorized";
                  return (
                    <div key={id} id={`cat-${id}`} className="scroll-mt-32">
                      <Reveal>
                        <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-5">
                          <h3 className="font-display text-2xl text-white sm:text-3xl">
                            {category?.title ?? "Uncategorized"}
                          </h3>
                          <span className="pb-1 text-sm text-white/50">
                            {posts.length} {posts.length === 1 ? "post" : "posts"}
                          </span>
                        </div>
                      </Reveal>
                      <div className="mt-8 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, i) => (
                          <Reveal key={post.slug} delay={(i % 3) * 80} className="h-full">
                            <BlogCard post={post} showExcerpt={false} />
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </Section>
      </section>

      <CtaBand />
    </>
  );
}
