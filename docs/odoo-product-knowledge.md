# Odoo product knowledge brief

Status: **built (2-3 Nov 2026).** This is the research record behind the Odoo pages, in the same form as `salesforce-product-knowledge.md`.

Researched: 2 November 2026 (the date in the working environment). Every product fact on the pages was read on an official Odoo page (odoo.com app pages, its pricing and implementation pages, its Odoo 20 release notes, its documentation at odoo.com/documentation, and the brand-assets page for logos) and is paraphrased. No third-party source was used for any claim. Odoo's current version is **Odoo 20**, released September 2026 (release notes and the supported-versions page).

## What was built

Odoo organises its apps into eight families on its own site, and so do the pages. Each family has a page and each app inside it is a tab; three supporting pages cover what cuts across them.

| Route | Page | Apps (tabs) |
| --- | --- | --- |
| `/services/odoo` | Hub | all 51 apps, the one-database diagram, where-to-start picker, India and Sri Lanka, editions teaser, implementation |
| `/services/odoo/finance` | Finance | Accounting, Invoicing, Expenses, Sign, Spreadsheet, ESG |
| `/services/odoo/sales` | Sales | CRM, Sales, Subscriptions, Point of Sale, Restaurant POS, Rental |
| `/services/odoo/websites` | Websites | Website, eCommerce, Events, eLearning, Blog, Forum |
| `/services/odoo/supply-chain` | Supply Chain | Inventory, Manufacturing, Purchase, PLM, Quality, Maintenance |
| `/services/odoo/human-resources` | Human Resources | Employees, Recruitment, Time Off, Appraisals, Payroll, Fleet |
| `/services/odoo/marketing` | Marketing | Email, SMS, Social Marketing, Marketing Automation, WhatsApp, Surveys |
| `/services/odoo/services` | Service Delivery (Odoo's "Services") | Project, Timesheets, Planning, Appointments, Helpdesk, Field Service, Live Chat |
| `/services/odoo/productivity` | Productivity | Discuss, Documents, Knowledge, VoIP, IoT, Approvals |
| `/services/odoo/ai` | Odoo AI | agents, automation, fields and email, voice, Live Chat, MCP |
| `/services/odoo/studio` | Odoo Studio | fields, views, automation, PDF reports, approvals, models and apps |
| `/services/odoo/editions-and-hosting` | Editions and hosting | picker, compare, editions, plans and users, versions and support |

`/services/odoo-implementation` redirects (308) to the hub. The old service entry's unverified claims ("Lower total cost of ownership than legacy ERP") were removed from `lib/site-data.ts`.

Code: `components/odoo/` (data, content per page, components, `odoo.css` scoped under `.od`), `lib/odoo-pages.ts` (metadata, structured data), the routes under `app/(marketing)/services/odoo/`, the sitemap, and the Services menu entry. Deep links such as `/services/odoo/sales#crm` open the CRM tab.

## Logos

Every icon is Odoo's own, downloaded from Odoo's brand-assets page and icon CDN (`download.odoocdn.com/icons/<app>/static/description/icon.svg`) and the Odoo logo from `odoocdn.com/openerp_website`. They live in `public/images/odoo/`. All 51 icon files and both logo files were inspected for scripts, event handlers and external references before use; none had any. The partner badges on the brand page were **not** used: Odoo says they can only be used by official partners. Odoo's rules were followed: the logo is not redrawn, icons keep their own colours, "Odoo" is capitalised and never replaced by the logo. The editions page has no icon because it is not an app, and no substitute was drawn.

## Verification

Odoo's app pages were first read through a summarising tool, so each summary was treated as a lead. The check that followed:

1. **373 distinctive terms** the copy relies on were tested against the raw text of 70 source pages (script: `scratchpad/odoo/verify.js`). First run: 45 misses, of which 27 were my script reading the wrong page (a cache-key collision). Second run: 18 misses.
2. Each of the 18 was inspected in the raw HTML, including image captions and file names. 16 were supported (wording variants, hyphenation, logo and image names such as the Adyen, PayPal and Stripe logos). **Two were drift in our own wording and were corrected**: WhatsApp's bulk messages go to "empty carts", not "abandoned carts", and Planning shifts are "swapped", not "traded".
3. The pages said to omit Sri Lanka were checked for its absence in the raw text: the fiscal localisation list and the Payroll page both lack it (confirmed).
4. **The Odoo 20 release notes were first read only to character 100,000 of about 160,000.** Reading the rest changed three things, all now fixed and re-verified (54 terms, 0 misses):
   - **Sri Lanka has a localisation package.** The release notes say a new package is available (chart of accounts, taxes, balance sheet, profit and loss, VAT 001 and WHT 001 reports; tax invoice layout per Gazette No. 2481/22). Earlier copy, based on the documentation's package list and the Payroll page, said Sri Lanka was not covered. The list in the documentation has not caught up. Payroll for Sri Lanka is still not mentioned anywhere, so that is stated as "scope it".
   - **Field Service is discontinued in Odoo 20**, merged into Planning. The page says so.
   - India's release-note additions (GST composition, QRMP, Schedule III, self-invoices, TDS, gratuity) were added.

Not claimed, because Odoo's pages do not say: the AI models used, a data-privacy position for AI, bring-your-own AI keys (the documentation's AI API keys page was "under construction"), the names of carriers and payment terminals, and how Studio changes are treated at upgrade.

## Left out on purpose

Prices (they change; Odoo's pricing page is linked), "28 million users", "40k+ apps", recognition and time-saved percentages, the "reported results" on the AI page, customer testimonials and showcases, and Odoo's partner programme. Odoo-reported figures were not carried over.

## Open points (need your decision)

1. **Partner relationship.** The pages make no claim that Mawkish is an Odoo partner, per the standing rule. Elsewhere the site does: `lib/sap-faqs.ts` (the SAP integration FAQ) and `components/sap-integration/IntegrationBody.tsx` say "we're partners for Salesforce, Odoo, MiHCM and Databricks". Keep or remove?
2. **Legal line** (`OD_LEGAL` in `components/odoo/data.ts`): "Odoo, its app names and its app icons belong to Odoo S.A. ..." The Salesforce equivalent also needed your approval. It claims no relationship.
3. **The old Odoo copy elsewhere**: the About page and the blog article "Choosing Between SAP, Salesforce, and Odoo" (`lib/site-data.ts`) were not touched and may carry unverified comparative claims. Worth the same review.
4. **Sri Lanka.** The pages recommend piloting the new Sri Lankan package against your statutory returns before relying on it. Confirm that is the advice you want to give.
5. **Release timing.** Odoo's documentation lags its release notes (Sri Lanka, Field Service). Re-check both before major edits.
6. **Odoo 20 release notes** are still partly unread in the localisation sections for countries other than India and Sri Lanka, which these pages do not cover.

## Source ledger

Odoo app pages: `odoo.com/app/` accounting, invoicing, expenses, sign, spreadsheet, esg, crm, sales, subscriptions, point-of-sale-shop, point-of-sale-restaurant, rental, website, ecommerce, events, elearning, blog, forum, inventory, manufacturing, purchase, plm, quality, maintenance, employees, recruitment, time-off, appraisals, payroll, fleet, email-marketing, sms-marketing, social-marketing, marketing-automation, whatsapp, surveys, project, timesheet, planning, appointments, helpdesk, field-service, live-chat, discuss, documents, knowledge, voip, iot, studio, artificial-intelligence.

Other Odoo pages: `odoo.com/`, `/page/all-apps`, `/page/editions`, `/page/brand-assets`, `/pricing`, `/pricing-packs`, `/odoo-20-release-notes`, `odoo.sh`.

Documentation (`odoo.com/documentation/latest/`): `administration.html`, `administration/odoo_online.html`, `odoo_sh.html`, `odoo_sh/getting_started/branches.html`, `on_premise/packages.html`, `on_premise/community_to_enterprise.html`, `hosting.html`, `standard_extended_support.html`, `upgrade.html`, `mobile.html`; `applications/finance/fiscal_localizations.html` and `.../india.html`; `applications/essentials/in_app_purchase.html`; `applications/studio.html`; `applications/hr/approvals.html`; `applications/productivity/ai.html`, `ai/agents.html`, `ai/server-actions.html`, `ai/mcp_server.html`, `ai/apikeys.html`; and Odoo's GitHub README.

Pages that failed or were empty: `odoo.com/page/open-source` (404); `apps` icon (404, retired); `settings` and `base_icon` icons (404).
