# SEO for AI assistants and AI search: what is done and what you do next

## Already done in the code
- `/llms.txt`: a plain-text guide to the whole site for AI assistants (every public page with what it covers). It rebuilds itself from the site's page data on every deploy. It leaves out admin, studio, the API and the gated case studies.
- `robots.txt`: every AI crawler (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot-Extended and others) is allowed on all public pages. Only admin, studio and the API are off limits.
- Pages are server-rendered, so crawlers that do not run scripts still read the full text. No page is marked noindex. Each page has its own title, description, canonical address and structured data (organisation, breadcrumbs, FAQs).
- The organisation data now says what Mawkish does (services, where it serves, address, LinkedIn).

## What you do (in this order)
1. **Deploy, then check** `https://www.mawkishtechnologies.com/llms.txt` and `/robots.txt` open in a browser.
2. **Google Search Console** (search.google.com/search-console): add the domain, verify it with the DNS record Google gives you, then submit `https://www.mawkishtechnologies.com/sitemap.xml`. Google's AI answers draw on its normal index; there is no separate sign-up.
3. **Bing Webmaster Tools** (bing.com/webmasters): sign in, choose "Import from Google Search Console", then submit the same sitemap. This matters most for ChatGPT search and Copilot, which lean on Bing's index. Also switch on IndexNow in the same tool so new pages are picked up quickly.
4. **Make the company easy to recognise as one thing.** Use the exact name "Mawkish Technologies" and the same one-line description everywhere:
   - Finish the LinkedIn company page (about text, services, website, Colombo address).
   - Claim the Google Business Profile for the Colombo office.
   - Add Mawkish to Crunchbase, Clutch, GoodFirms and Sri Lankan business directories.
   - Only list partner or vendor relationships you can prove (see USAGE RULES in the company profile).
5. **Get mentioned elsewhere.** AI tools weigh what other sites say about you. Aim for press coverage (Daily FT, Daily Mirror), partner and vendor announcements, client case-study stories you are cleared to publish, and guest articles. Link back to the matching service page each time.
6. **Write for the questions people ask.** Add insight articles that answer plain questions, for example "Who can implement RISE with SAP in Sri Lanka?" or "GROW or RISE: which fits a mid-sized company?". Keep the answer in the first paragraph, name the product and the place, and update the page when the facts change.
7. **Check it monthly.** Ask ChatGPT, Claude, Perplexity and Google (AI Mode) the same ten questions, such as "best SAP partner in Sri Lanka" or "Odoo implementation Colombo", and note whether Mawkish appears and which page is cited. In Google Analytics, watch for visits from chatgpt.com, perplexity.ai and claude.ai.

## Honest expectations
`llms.txt` is a helpful guide but none of the big AI companies has confirmed that it changes rankings. What moves the needle is being indexed by Google and Bing, being allowed in robots.txt (done), and being mentioned and described consistently across the web (steps 4 to 6). Results usually take weeks to months to show.
