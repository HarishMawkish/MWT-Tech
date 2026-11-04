# Copy detection: steps outside the repo (parked)

The canary terms are already live in the code (see `docs/content-monitoring.md` for the full list,
the Google Alert queries and the findings log). These are the steps that still need doing by a person.

## 1. Re-check each term on Google
- Search each term in quotes at google.com, in a private window so your history doesn't skew results.
- If the first two pages show someone else using it as a method or product name, rename it in
  `components/CanaryNote.tsx` (or the prose on Home, About and Services) and in `docs/content-monitoring.md`.

## 2. Deploy
- Merge the branch `claude/stoic-wozniak-9iyidn` and publish the site.
- Open a few pages (for example `/services/odoo` and `/industries`) and confirm the closing line shows.
- Also check `/` and `/insights`. They couldn't be rendered in the sandbox because the Sanity environment
  variable `NEXT_PUBLIC_SANITY_DATASET` was missing there.

## 3. Wait for Google to index the pages
- In Google Search Console, use URL Inspection → Request indexing on the pages that carry terms.
- Alerts only fire once Google has seen the page, which can take days to weeks.

## 4. Set up the Google Alerts
- Sign in at google.com/alerts with a shared company Google account, not a personal one.
- Paste one query from the list in `docs/content-monitoring.md` and click Show options.
- Set How often to "As-it-happens", Sources to "Automatic", Language to "Any language",
  Region to "Any region", and How many to "All results".
- Set Deliver to an inbox that several people read, then click Create Alert.
- Repeat for all 17 queries.

## 5. Run Copyscape
- Open copyscape.com and sign up for Premium. Pay-per-search credits are enough.
- Paste key URLs one at a time (Home, About, Services and each platform hub) and run the search.
- Save each report. Check the matched URLs and any matched text that includes a term.

## 6. Reverse image check on your own graphics
- Upload each original graphic to images.google.com (camera icon) or tineye.com.
  Candidates: the "One deal, many parties" diagram and the OG images.
- Skip client and partner logos, since they aren't yours.

## 7. Put it on a schedule
- Calendar reminder every 3–4 months for steps 5 and 6.
- Weekly 5-minute task for someone to read the alert emails.

## 8. When you find a copy
- Take a dated full-page screenshot, save the URL and add a row to the findings log in
  `docs/content-monitoring.md`.
- Email the site owner first and ask for removal.
- If there is no reply in about a week, send a DMCA takedown notice to their host
  (a WHOIS or name-server lookup shows the host), then a Google removal request at support.google.com/legal.

## 9. Retire any term that stops working
- If an alert starts returning unrelated pages, switch to a new term.
- Log the change in `docs/content-monitoring.md` so nobody reuses a retired one.

## Before step 2: confirm the wording
Each term names a way of working. Read the sentences in `components/CanaryNote.tsx` and confirm each
describes what Mawkish really does. Reword any that don't.
