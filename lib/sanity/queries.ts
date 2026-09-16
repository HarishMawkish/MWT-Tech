import type { PortableTextBlock } from "@portabletext/react";
import type { Image } from "sanity";
import { client } from "./client";

export type SanityBlogCategory = {
  _id: string;
  title: string;
  slug: string;
  order: number | null;
};

export type SanityBlogPost = {
  _id: string;
  title: string;
  slug: string;
  coverImage: Image;
  content: PortableTextBlock[];
  publishedAt: string;
  category: SanityBlogCategory | null;
};

const blogPostFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  coverImage,
  content,
  publishedAt,
  category->{
    _id,
    title,
    "slug": slug.current,
    order
  }
`;

const allBlogPostsQuery = /* groq */ `
  *[_type == "blogPost"] | order(publishedAt desc) {
    ${blogPostFields}
  }
`;

const blogPostBySlugQuery = /* groq */ `
  *[_type == "blogPost" && slug.current == $slug][0] {
    ${blogPostFields}
  }
`;

const allBlogSlugsQuery = /* groq */ `
  *[_type == "blogPost"]{ "slug": slug.current }
`;

const allBlogCategoriesQuery = /* groq */ `
  *[_type == "blogCategory"] | order(coalesce(order, 9999) asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    order
  }
`;

export async function getAllBlogPosts(): Promise<SanityBlogPost[]> {
  try {
    return await client.fetch<SanityBlogPost[]>(allBlogPostsQuery, {}, { next: { revalidate: 60 } });
  } catch (error) {
    // Fails gracefully (e.g. before Sanity env vars are configured) so the
    // rest of the Insights page still renders instead of crashing.
    console.error("Failed to fetch blog posts from Sanity:", error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  try {
    const post = await client.fetch<SanityBlogPost | null>(
      blogPostBySlugQuery,
      { slug },
      { next: { revalidate: 60 } },
    );
    return post ?? null;
  } catch (error) {
    console.error(`Failed to fetch blog post "${slug}" from Sanity:`, error);
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const rows = await client.fetch<{ slug: string }[]>(allBlogSlugsQuery, {}, { next: { revalidate: 60 } });
    return rows.map((r) => r.slug);
  } catch (error) {
    console.error("Failed to fetch blog slugs from Sanity:", error);
    return [];
  }
}

// All categories, e.g. "News", "Articles" — created freely in the Studio.
// Used to group blog posts into labeled subsections on the Insights page.
export async function getAllBlogCategories(): Promise<SanityBlogCategory[]> {
  try {
    return await client.fetch<SanityBlogCategory[]>(allBlogCategoriesQuery, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Failed to fetch blog categories from Sanity:", error);
    return [];
  }
}

export type BlogCategoryGroup = {
  category: SanityBlogCategory | null; // null bucket = posts with no category set
  posts: SanityBlogPost[];
};

// Groups posts under their category, in the categories' own display order.
// Categories with zero posts are dropped entirely rather than showing an
// empty subsection. Any post without a category (shouldn't normally happen
// now that it's required, but handled defensively) falls into a trailing
// "Uncategorized" bucket, which only appears if it's actually needed.
export function groupBlogPostsByCategory(
  posts: SanityBlogPost[],
  categories: SanityBlogCategory[],
): BlogCategoryGroup[] {
  const groups: BlogCategoryGroup[] = categories
    .map((category) => ({
      category,
      posts: posts.filter((post) => post.category?._id === category._id),
    }))
    .filter((group) => group.posts.length > 0);

  const uncategorized = posts.filter((post) => !post.category);
  if (uncategorized.length > 0) {
    groups.push({ category: null, posts: uncategorized });
  }

  return groups;
}
