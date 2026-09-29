import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        'Used in the post\'s URL — click "Generate" after entering a title.',
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "galleryImages",
      title: "Additional Photos",
      description:
        "Optional. When added, the post page cycles through the cover image followed by these photos in a looping slideshow. The cover image is still what appears on cards and previews.",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              description: "Short description for screen readers.",
            }),
          ],
        },
      ],
      options: { layout: "grid" },
    }),
    defineField({
      name: "category",
      title: "Category",
      description:
        'Which subsection this post belongs to, e.g. "News" or "Articles". Create new categories from the Blog Category document type.',
      type: "reference",
      to: [{ type: "blogCategory" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "orderRank",
      title: "Order Rank",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      description:
        'The date shown to readers on the post ("Published on ..."). You can set this to any date you like. This is separate from the post\'s position on the site — drag posts up/down in the "Blog Posts" list in the sidebar to control that.',
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: { title: "title", media: "coverImage", subtitle: "category.title" },
  },
});
