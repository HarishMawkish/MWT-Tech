# Mawkish Technologies — Website

Marketing website for Mawkish Technologies, built with Next.js (App Router) and Tailwind CSS.

## Structure

- **Home** (`/`) — hero, stats, methodology, services preview, industries, partners
- **About** (`/about`) — founding story, values, 5-year vision, regional presence, leadership
- **Services** (`/services`, `/services/[slug]`) — SAP, Salesforce, Odoo, plus future service areas, each with a dedicated detail page
- **Industries** (`/industries`) — the 8 industry verticals Mawkish focuses on
- **Insights & Perspectives** (`/insights`, `/insights/[slug]`) — thought-leadership article hub
- **Contact** (`/contact`) — lead form, office/market info, map

Content (services, industries, regions, values, insights, leadership) lives in `lib/site-data.ts` — edit there to update copy without touching page markup.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Brand

- Primary: `#114232`, Secondary: `#1C6B51` (see `app/globals.css` `@theme` tokens, prefixed `mw-*`)
- Font: Inter (display + body) via `next/font/google`, matching the Figma file
- Logo mark: `components/Logo.tsx`

## Images (placeholders — replace these)

`public/images/` currently has generated placeholder graphics (green "REPLACE ME" cards) standing in for real photography, so the site never 404s while assets are pending. Drop in real files with the **same names** and everything picks them up automatically — no code changes needed:

| File | Used in | Notes |
| --- | --- | --- |
| `public/images/about-background.svg` | Homepage "Mawkish Technologies" story section (`app/page.tsx`) | Full-bleed background photo behind the stats/story block — a dark gradient overlay is already applied on top for text contrast. |
| `public/images/testimonial.svg` | CEO pull-quote (`components/PullQuote.tsx`) | Headshot, shown in a 160×160 bracket-framed square — square/portrait crop works best. |
| `public/images/grow/sap.svg`, `salesforce.svg`, `odoo.svg`, `ai.svg`, `data.svg` | "Make You Grow, together" service cards (`components/GrowRow.tsx`) | 5 card thumbnails, ~4:3 crop, shown at 128px tall. |

If your real files use a different extension (`.jpg`/`.png`/`.webp`), update the `src` path in the corresponding component to match — the extension in the URL has to match the actual file since the server sets the image's content type from it. To regenerate the placeholders: `node scripts/gen-placeholders.js`.

## Known gaps (out of scope for this codebase)

The requirements doc also calls for a set of items that are operational/infra work rather than application code, and aren't wired up here:

- **CMS** — content currently lives in `lib/site-data.ts`; swapping in a headless CMS (e.g. Sanity/Contentful) would replace that file with fetch calls.
- **Lead routing** — `app/api/contact/route.ts` validates and logs submissions; connecting it to email (SMTP) or a CRM (e.g. Salesforce Web-to-Lead) needs real credentials in environment variables.
- **Google Maps** — the contact page embeds an OpenStreetMap iframe (no API key required) centered on Colombo; swap for a Google Maps embed + real office address once available.
- **Domain, SSL, DNS, analytics/SEO submission** — these are registrar/hosting-account actions, not code.
- Partner logos (Samishti Infotec, Levarus) are referenced by name only — add real logo assets under `public/` once received.

## Case-study access (Clients page)

Case studies are gated: a visitor registers once (name, company, company email, consent) and is then remembered.

- **What is checked** (`lib/case-access/`): the address is valid; it is not a free provider (Gmail, Yahoo, Outlook, iCloud and so on) or a throwaway inbox (`email-policy.ts`); its domain is not on the competitor blocklist (`competitors.ts`); and the domain has working mail servers (`verify-domain.ts`). The inbox itself is not confirmed by a link or code.
- **Competitor blocklist**: one entry per company in `competitors.ts`, with the evidence for it. Matching covers the domain and its subdomains. Adding a company also cuts off anyone from that domain who registered earlier.
- **Remembering**: a signed, HTTP-only cookie (`mw_case_access`, 12 months). Needs `CASE_ACCESS_SECRET` (32+ characters) in the environment. In production, registration fails until it is set; in development a built-in key is used. Generate one with `node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"`.
- **Why it is real**: the case-study bodies live in `lib/case-access/case-details.ts` and are served by `/api/case-studies/[id]` only to a browser holding a valid cookie. They are not in the page's JavaScript.
- **Kept away from crawlers**: `/api/` (including the case-study endpoints) is disallowed in `app/robots.ts` for every crawler and, explicitly, for the AI crawlers listed in `lib/case-access/crawlers.ts`. Those endpoints also send `X-Robots-Tag: noindex, nofollow, noarchive, noai`, refuse known crawler user-agents (so a bot cannot register either), and rate-limit bursts. robots.txt is only a request; the cookie lock is what actually stops a crawler. Case studies are never added to the sitemap.
- **Email**: the welcome email and the sales summary (to `nafaz@mawkishtechnologies.com`) are written in `emails.ts`, but sending is not configured yet. Plug a transport into `sendMail()` in `mailer.ts`; nothing else needs to change.
