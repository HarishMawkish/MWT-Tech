# Content-copy monitoring (internal — do not publish)

Canary terms planted in live copy so that copies of Mawkish pages can be found. Each site section has its
own term, so a copied page points back to its section. A copier usually swaps "Mawkish" for their own name,
so every alert is built on the term itself, never on the brand.

## Canary terms

| Term | Where it appears | How it is placed |
|---|---|---|
| Gapwatch | Home, "How we work" paragraph | Prose in `components/home/HomeBody.tsx` |
| One-Signature Delivery | Home, "The engagement" paragraph; Services hero | Prose |
| Wallside Standard | About, "Our Culture & Principles" | Prose in `app/(marketing)/about/page.tsx` |
| Principal-Proof Advisory | `/services` and `/services/[slug]` | `CanaryNote id="services"` |
| Cutover Compass | `/services/sap-solutions/*`, `/services/sap-ai-solutions` | `CanaryNote id="sap"` |
| Thread Test | `/services/salesforce/*` | `CanaryNote id="salesforce"` |
| Straight-Through Odoo | `/services/odoo/*` | `CanaryNote id="odoo"` |
| Beside-the-ERP Principle | `/services/swyftflo/*` | `CanaryNote id="swyftflo"` |
| Payroll-Proof Rollout | `/services/mihcm/*` | `CanaryNote id="mihcm"` |
| Data Runway | `/services/databricks/*` | `CanaryNote id="databricks"` |
| Handrail Pattern | `/services/anthropic/*` | `CanaryNote id="anthropic"` |
| Sector-Shaped Delivery | `/industries` | `CanaryNote id="industries"` |
| Proof-in-Production Register | `/clients` | `CanaryNote id="clients"` |
| Intern-to-Lead Ladder | `/careers` | `CanaryNote id="careers"` |
| Backroom Briefings | `/insights`, `/insights/[slug]` | `CanaryNote id="insights"` |
| Opening Brief | `/contact` | `CanaryNote id="contact"` |

Sentences live in `components/CanaryNote.tsx`. The `/copyright` page and the admin and studio routes carry none.
Retired (do not reuse): Seam Check (too close to a competitor's "Seam-First Delivery"), One Name Rule, Cabinet-Back Standard.

Verbatim deck lines also work as canaries: "Whoever does the work, Mawkish checks it, owns it and answers for it" (Home).

## Google Alert queries (one alert per line)
```
"Gapwatch" -site:mawkishtechnologies.com
"One-Signature Delivery" -site:mawkishtechnologies.com
"Wallside Standard" -site:mawkishtechnologies.com
"Principal-Proof Advisory" -site:mawkishtechnologies.com
"Cutover Compass" -site:mawkishtechnologies.com
"Thread Test" "Salesforce" -site:mawkishtechnologies.com
"Straight-Through Odoo" -site:mawkishtechnologies.com
"Beside-the-ERP Principle" -site:mawkishtechnologies.com
"Payroll-Proof Rollout" -site:mawkishtechnologies.com
"Data Runway" "Databricks" -site:mawkishtechnologies.com
"Handrail Pattern" "agents" -site:mawkishtechnologies.com
"Sector-Shaped Delivery" -site:mawkishtechnologies.com
"Proof-in-Production Register" -site:mawkishtechnologies.com
"Intern-to-Lead Ladder" -site:mawkishtechnologies.com
"Backroom Briefings" -site:mawkishtechnologies.com
"Opening Brief" "Mawkish" -site:mawkishtechnologies.com
"Whoever does the work" "checks it, owns it and answers for it" -site:mawkishtechnologies.com
```

## Rules
- Keep exact spelling and capitalisation. Reuse a term only on its own section.
- Terms name how we already work. They must not add claims, figures or client results (see USAGE RULES in the company profile).
- Do not list the terms on the public `/copyright` page.
- Re-check a term on Google before adding a new one. Retire any term that starts returning other people's pages.

## Findings log
| Date | Term | URL found | Evidence saved | Action | Outcome |
|---|---|---|---|---|---|
