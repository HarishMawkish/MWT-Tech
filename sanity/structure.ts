import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import type { StructureResolver } from "sanity/structure";
import { apiVersion } from "./env";

// The default Studio sidebar just lists every document type alphabetically.
// Here the "Blog Posts" entry opens a drag-to-reorder list instead — editors
// grab a post and drag it up/down to control the exact order posts appear in
// on the site, independent of publish date. Inside it, "All posts" is the
// full list and each category gets its own filtered view, so editing one
// category (e.g. just "Articles") doesn't mean scrolling past all the others.
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Blog Posts")
        .schemaType("blogPost")
        .child(async () => {
          // Categories are fetched when the list opens, so a newly created
          // category shows up here without touching this file.
          const categories = await context
            .getClient({ apiVersion })
            .fetch<{ _id: string; title: string }[]>(
              `*[_type == "blogCategory" && !(_id in path("drafts.**"))] | order(coalesce(order, 9999) asc, title asc) { _id, title }`,
            );

          return S.list()
            .title("Blog Posts")
            .items([
              orderableDocumentListDeskItem({
                type: "blogPost",
                id: "blog-posts-all",
                title: "All posts",
                S,
                context,
              }),
              S.divider(),
              ...categories.map((category) =>
                orderableDocumentListDeskItem({
                  type: "blogPost",
                  id: `blog-posts-${category._id}`,
                  title: category.title,
                  filter: `_type == "blogPost" && category._ref == $categoryId`,
                  params: { categoryId: category._id },
                  // New posts are started from "All posts" so the category
                  // picker is always filled in deliberately.
                  createIntent: false,
                  S,
                  context,
                }),
              ),
            ]);
        }),
      S.documentTypeListItem("blogCategory").title("Blog Categories"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !["blogPost", "blogCategory"].includes(item.getId() ?? ""),
      ),
    ]);
