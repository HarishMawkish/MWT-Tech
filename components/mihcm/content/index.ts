import type { ProductContent } from "../content-types";
import type { ProductSlug } from "../data";
import { dataAndAi } from "./data-and-ai";
import { employeeExperience } from "./employee-experience";
import { enterprise } from "./enterprise";
import { lite } from "./lite";
import { talentManagement } from "./talent-management";
import { workforceManagement } from "./workforce-management";

/** Every MiHCM page's content, by slug. */
export const contents: Record<ProductSlug, ProductContent> = {
  enterprise,
  lite,
  "workforce-management": workforceManagement,
  "talent-management": talentManagement,
  "employee-experience": employeeExperience,
  "data-and-ai": dataAndAi,
};
