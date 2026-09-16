import { defineField, defineType } from "sanity";

export const blogCategory = defineType({
  name: "blogCategory",
  title: "Blog Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: 'The subsection name shown on the site, e.g. "News" or "Articles".',
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      description: "Lower numbers show first on the Insights & Perspectives page. Leave blank to sort alphabetically after ordered ones.",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Optional — internal note about what belongs in this category. Not shown on the site.",
      type: "text",
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
