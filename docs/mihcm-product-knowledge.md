# MiHCM product knowledge brief

Status: **built (3 Nov 2026).** This is the research record behind the MiHCM pages, in the same form as `odoo-product-knowledge.md`.

Researched: 3 November 2026 (the date in the working environment). Every product fact on the pages was read on an official MiHCM page (mihcm.com product, solution, payroll and about pages, its Trust Portal at trust.mihcm.com, its Sri Lanka Payroll Guide 2026 and its October 2026 LMS press release) and is paraphrased. No third-party source was used for any claim. Statutory figures (EPF, ETF, gratuity, APIT) are MiHCM's, as its guide states them, and the pages say they are not tax advice.

## What was built

MiHCM sells two editions and draws MiHCM Enterprise as four parts (its "product stack"), so the pages follow that: one page per edition, one per part, and each module inside a part is a tab.

| Route | Page | Tabs and sections |
| --- | --- | --- |
| `/services/mihcm` | Hub | editions and parts index, all 17 modules (MiHCM's icons), one-record diagram, where-to-start picker, payroll across Asia, Sri Lanka and India, security, implementation |
| `/services/mihcm/enterprise` | MiHCM Enterprise (flagship) | the four parts; 13-country payroll; industries; security, trust and data residency; the "fair bonuses" example; seven perspectives; integration; AI; getting started |
| `/services/mihcm/lite` | MiHCM Lite (flagship) | Core HRIS, Payroll, Time & Attendance, HR Analytics; Lite or Enterprise |
| `/services/mihcm/workforce-management` | Workforce Management | MiHCM Core, Payroll, Time & Attendance, Organisation Planning; **Sri Lankan payroll explained** (EPF, ETF, gratuity, APIT), the four common mistakes, month-end flow |
| `/services/mihcm/talent-management` | Talent Management | Recruitment, Onboarding, Performance, Succession, Learning (LMS and Learning Administration), Reward (Compensation, Benefits, Expense Claims), Engagement; SmartAssist screening |
| `/services/mihcm/employee-experience` | Employee Experience | MiA ONE, web self-service, mobile app, kiosk |
| `/services/mihcm/data-and-ai` | Data & AI | Reporting (reports, dashboards, Power BI, query builder), Syntra, SmartAssist, Data & AI services; responsible AI |

Code: `components/mihcm/` (data, content per page, components, `mihcm.css` scoped under `.mh`), `lib/mihcm-pages.ts` (metadata, structured data), the routes under `app/(marketing)/services/mihcm/`, the sitemap, and the Services menu entry. The components are a copy of the Odoo kit (same design system as SAP and Odoo), adapted. Deep links such as `/services/mihcm/workforce-management#payroll` open that tab.

**Menu.** Laid out like SAP: the two editions as featured cards with MiHCM's own logos, then the four parts as titled groups (the dotted row is the part's page; the rows under it open module tabs), a "Payroll & compliance" group and a call to action. The menu label changed from "MIHCM" to "MiHCM" (MiHCM's own spelling); the contact form's service list follows it automatically.

## Logos

Every logo and icon is MiHCM's own, downloaded from mihcm.com: the MiHCM logo (`/mihcm-primary.svg`), the product logos (`/images/product-logos/`) and the 17 module icons MiHCM draws in its Enterprise product stack (`/images/home/singapore-hero/`). They live in `public/images/mihcm/` and are used unaltered. All files were inspected for scripts, event handlers and external references before use; none had any.

**Permission.** MiHCM's Legal Notice says its logos, icons and other content need explicit permission for commercial use. You chose to use them because Mawkish works with MiHCM; **please confirm that permission in writing with MiHCM** (open point 1).

## Verification

1. The pages were first read through a summarising tool, then every page was saved as raw HTML and plain text and read in full.
2. **The summarising tool invented two phrases** ("Simple HR for Growing Teams" and a "shorter implementation" for Lite). They were not in the raw HTML; a second, verbatim check confirmed they are not on MiHCM's site. Both were removed. This is why every claim was re-checked against the raw text.
3. A script (`verify-terms.js`, kept outside the repo) tested 134 distinctive terms in the copy against the raw text of the 19 MiHCM pages that loaded. The 35 not found verbatim were each inspected: all were our own headings, sample screen data, the date, or close paraphrases (for example "Google Assistant", which MiHCM writes as "Google™ Assistant"). No unsupported claim remained.
4. Three overreaches were caught in review and corrected: bank files "formatted for each country" (MiHCM only names Sri Lankan banks), a note implying Mawkish had already connected MiHCM to SAP (unverified), and the parent company's founding date (MiHCM says "we began in 1995"; the pages now say that).

## Left out on purpose

Customer stories, testimonials and logos; "more than 1,000 organisations"; customer results; prices (MiHCM publishes none); the 9-industry list beyond MiHCM's five industry pages. Modules MiHCM names without describing (Succession Planning, Benefits Management, Expense Claims) say so on the page and offer a demonstration instead of invented detail.

## Open points (need your decision)

1. **Logo permission.** Confirm MiHCM's written permission to show its logos and module icons (its Legal Notice requires it for commercial use).
2. **Partner relationship.** These pages make no partner claim. `lib/sap-faqs.ts` and `components/sap-integration/IntegrationBody.tsx` say "we're partners for Salesforce, Odoo, MiHCM and Databricks". Keep or remove?
3. **Payroll countries.** MiHCM's Enterprise page and FAQ list 13 countries; its payroll page lists 11 (no Indonesia or Vietnam). The pages say 13, as the Enterprise page does, and note the difference.
4. **India.** MiHCM does not list India for payroll and has no India locale. The pages say so and suggest planning Indian payroll separately. Confirm that is the advice you want to give.
5. **Old logo file.** `public/images/solutions/mihcm.svg` (an older MiHCM logo) is no longer used by the menu; it can be deleted.

## Source ledger

MiHCM pages (read 3 Nov 2026): `mihcm.com/en-lk` (home), `/en-lk/mihcm-enterprise`, `/en-lk/mihcm-lite`, `/en-lk/mia`, `/syntra`, `/en-lk/mihcm-smartassist`, `/en-lk/mihcm-data-ai`, `/solutions/core-hr`, `/en-lk/solutions/payroll`, `/solutions/time-and-attendance`, `/solutions/recruitment`, `/solutions/performance-management`, `/en-lk/about-us`, `/en-lk/clients`, `/en-lk/resources/guides/sri-lanka-payroll-guide`, `/news/mihcm-launches-skills-based-lms`, `/legal-notice`, `/terms-of-use`, and `trust.mihcm.com`.

Checked and absent: `mihcm.com/en-in` (404: no India locale).
