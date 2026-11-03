# Anthropic product knowledge brief

Status: **built (3 Nov 2026).** This is the research record behind the Anthropic pages, in the same form as `odoo-product-knowledge.md`.

Researched: 3 November 2026 (the date in the working environment). Every product fact on the pages was read on an official Anthropic page (claude.com product, solution, platform, pricing, partner and compliance pages; anthropic.com model, company and legal pages; Anthropic's trademark guidelines) and is paraphrased. No third-party source was used for any claim.

## What was built

Anthropic describes two ways to bring Claude into an organisation: **Claude Enterprise** (deploy Claude to your workforce) and the **Claude Platform** (build Claude into products and agents). Those are the two flagship pages, the way GROW and RISE are for SAP. Claude and Claude Code are the two main products; the models, and security and deployment, are supporting pages.

| Route | Page | Tabs and sections |
| --- | --- | --- |
| `/services/anthropic` | Hub | index, 24 capabilities by product, "one model family, every surface" diagram, where-to-start picker, Sri Lanka and India, beside SAP/Salesforce/Odoo/MiHCM, rolling out |
| `/services/anthropic/claude-enterprise` | Claude Enterprise (flagship) | for employees, identity and access, data and governance, Claude Security; Team or Enterprise; departments; rolling it out |
| `/services/anthropic/claude-platform` | Claude Platform (flagship) | Messages API, Managed Agents, context and memory, cost and speed, Console, on your cloud; which model; agent templates; data |
| `/services/anthropic/claude` | Claude | tasks and Cowork, artifacts, connectors, skills, Microsoft 365, Google Workspace, Chrome, Slack (Claude Tag); a day with Claude |
| `/services/anthropic/claude-code` | Claude Code | where it runs, onboarding, issues to PRs, migrations, Code Review, controls for leaders |
| `/services/anthropic/models` | Claude models | Fable 5.1, Opus 5.5, Sonnet 5.5, Haiku 5.5; Mythos and Fable; controls that change cost |
| `/services/anthropic/security-and-deployment` | Security and deployment | data and training, certifications, residency, clouds, Sri Lanka and India |

Code: `components/anthropic/` (data, content per page, components, `anthropic.css` scoped under `.an`), `lib/anthropic-pages.ts`, the routes under `app/(marketing)/services/anthropic/`, the sitemap, and the Services menu entry. The components are a copy of the Odoo kit, adapted. Deep links such as `/services/anthropic/claude#microsoft-365` open that tab.

**Menu.** Laid out like SAP: Claude Enterprise and the Claude Platform as the featured cards, then "Claude at work", "For developers", "Build & run agents", "Models" and "Security & deployment" groups and a call to action.

**Names as they are today.** Claude Cowork is now part of Claude (Anthropic: "Claude Cowork and chat are now integrated within Claude.ai"), so Cowork is a tab on the Claude page, not a product page. Google's platform appears on Anthropic's pages both as "Google Vertex AI" and "Gemini Enterprise Agent Platform"; the pages say "Google Cloud".

## Logos

**No Anthropic or Claude logo or artwork is used.** Anthropic's Trademark Guidelines (effective 1 Aug 2024) say its trademarks, including names and logos, may be used "only as specifically permitted by us and only in materials we approve beforehand", and ask businesses with an existing relationship to email marketing@anthropic.com before using them on a website. You chose text only until approval. The pages set product names as plain text; the small icons are generic line glyphs of our own (`components/anthropic/IconTile.tsx`) that do not resemble any Anthropic mark; the accent colours avoid Anthropic's palette; and a legal line says nothing implies Anthropic's sponsorship. The menu's rail shows a monogram, and the old "coming soon" Anthropic logo (`public/images/solutions/anthropic.svg`) is no longer displayed.

## Verification

1. Every page was saved as raw HTML and plain text and read in full; summarising-tool output was treated as a lead only.
2. A script (`verify-terms.js`, kept outside the repo) tested 101 distinctive terms in the copy against the raw text of the 41 Anthropic pages that loaded. The 13 not found verbatim were each inspected: all are our own wording or the date.
3. Corrected in review: a note that Anthropic describes no Salesforce connector (Anthropic's own examples update Salesforce from call notes), a claim tying Enterprise Frontier Safeguards to Mythos (Anthropic ties them to Fable), "forks such as Cursor" (Anthropic says "Cursor, Devin Desktop"), and a vendor-reported caching saving (removed).
4. The regional table (Asia-Pacific on AWS and Google Cloud, not on Microsoft Foundry) was confirmed in the raw HTML because the text version was ambiguous.

## Left out on purpose

All prices (plans and tokens: they change; Anthropic's pricing pages are linked), benchmark scores, percentage improvements between model versions, customer results, quotes and logos. Claude Duet (US-only, consumer plans), Claude Science and Claude Design are mentioned only in passing.

## Open points (need your decision)

1. **Logo approval.** If Mawkish wants Anthropic or Claude logos on these pages, email marketing@anthropic.com for approval first. Until then the pages stay text-only.
2. **Partner relationship.** Mawkish is not listed in Anthropic's service-partner directory. The pages make no partner claim and describe what Mawkish does instead. Confirm that is right.
3. **Supported regions.** The Supported Regions Policy we read takes effect on 12 Nov 2026 and lists both Sri Lanka and India. Re-check before launch.
4. **Model versions.** Anthropic released four model versions in 2026 alone. The models page names Fable 5.1, Opus 5.5, Sonnet 5.5 and Haiku 5.5; re-check it monthly.
5. **Trust Center.** trust.anthropic.com could not be read by our tools (it loads by script). The pages rely only on Anthropic's other pages and link to it.

## Source ledger

claude.com (read 3 Nov 2026): `/` (home), `/product/overview`, `/product/cowork`, `/product/claude-code`, `/product/claude-code/enterprise`, `/product/claude-security`, `/product/claude-science`, `/product/claude-duet`, `/product/design`, `/product/tag`, `/platform/api`, `/platform/claude-managed-agents`, `/pricing`, `/solutions/enterprise`, `/solutions/agents`, `/solutions/coding`, `/solutions/customer-support`, `/solutions/financial-services`, `/solutions/small-business`, `/features/artifacts`, `/skills`, `/marketplace/connectors-plugins`, `/marketplace/service-partners`, `/claude-for-microsoft-365`, `/claude-for-google-workspace`, `/claude-in-chrome`, `/partners/claude-on-aws`, `/partners/google-cloud`, `/partners/microsoft-foundry`, `/regional-compliance`.

anthropic.com: `/`, `/company`, `/news`, `/transparency`, `/claude/fable`, `/claude/mythos`, `/claude/opus`, `/claude/sonnet`, `/claude/haiku`, `/legal/supported-regions`; Anthropic Trademark Guidelines (PDF on assets.claude.com).

Failed or empty: `trust.anthropic.com` (loads by script), `claude.com/pricing/api` and `claude.com/claude/{opus,sonnet,haiku}` (404; the model pages are on anthropic.com).
