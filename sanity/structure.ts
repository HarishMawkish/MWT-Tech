import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import type { StructureResolver } from "sanity/structure";

// The default Studio sidebar just lists every document type alphabetically.
// Here we swap the "Blog Post" entry for a drag-to-reorder list instead —
// editors can grab a post and drag it up/down to control the exact order
// blog posts appear in on the site, independent of publish date.
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "blogPost",
        title: "Blog Posts",
        S,
        context,
      }),
      S.documentTypeListItem("blogCategory").title("Blog Categories"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !["blogPost", "blogCategory"].includes(item.getId() ?? ""),
      ),
    ]);
