import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";
import { BlogCard } from "@/components/BlogCard";
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

export default async function InsightsPage() {
  const [blogs, categories] = await Promise.all([
    getAllBlogPosts(),
    getAllBlogCategories(),
  ]);
  const blogGroups = groupBlogPostsByCategory(blogs, categories);

  return (
    <>
      <PageHero
        eyebrow="Insights & Perspectives"
        title="Perspectives on business-first transformation."
        description="Practical thinking on enterprise platforms, operational visibility, and what it actually takes to turn a technology investment into a business outcome."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          {insights.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-mw-line p-7 transition hover:border-mw-secondary hover:shadow-lg hover:shadow-mw-secondary/5"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-mw-secondary">
                {post.category}
              </span>
              <h2 className="mt-3 break-words hyphens-auto overflow-hidden font-display text-lg font-bold leading-tight text-mw-primary sm:text-xl">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mw-ink/65">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center justify-between text-xs text-mw-ink/50">
                <span>{post.readTime}</span>
                <span className="font-semibold text-mw-secondary opacity-0 transition group-hover:opacity-100">
                  Read &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t border-mw-line pt-16">
          <h2 className="font-display text-2xl font-bold text-mw-primary">
            Blogs
          </h2>

          {blogGroups.length === 0 ? (
            <p className="mt-8 text-sm text-mw-ink/50">No blog posts yet.</p>
          ) : (
            <div className="mt-8 space-y-14">
              {blogGroups.map(({ category, posts }) => (
                <div key={category?._id ?? "uncategorized"}>
                  <h3 className="font-display text-lg font-bold text-mw-secondary">
                    {category?.title ?? "Uncategorized"}
                  </h3>
                  <div className="mt-6 grid items-stretch gap-8 lg:grid-cols-3">
                    {posts.map((post) => (
                      <BlogCard
                        key={post.slug}
                        post={post}
                        showExcerpt={false}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
