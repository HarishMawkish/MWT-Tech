import type { ProductContent } from "../content-types";
import type { ProductSlug } from "../data";
import { claude } from "./claude";
import { claudeCode } from "./claude-code";
import { claudeEnterprise } from "./claude-enterprise";
import { claudePlatform } from "./claude-platform";
import { models } from "./models";
import { securityAndDeployment } from "./security-and-deployment";

/** Every Anthropic page's content, by slug. */
export const contents: Record<ProductSlug, ProductContent> = {
  "claude-enterprise": claudeEnterprise,
  "claude-platform": claudePlatform,
  claude,
  "claude-code": claudeCode,
  models,
  "security-and-deployment": securityAndDeployment,
};
