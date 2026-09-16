import type { SchemaTypeDefinition } from "sanity";
import { blogPost } from "./blogPost";
import { blogCategory } from "./blogCategory";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, blogCategory],
};
