// Tells Bing (and other IndexNow search engines) which pages are new or changed, so they are crawled quickly.
// Run it AFTER a deploy, from the repo folder:
//   node scripts/indexnow.mjs                 sends every page in the live sitemap
//   node scripts/indexnow.mjs /services/odoo  sends just the pages you name
//   node scripts/indexnow.mjs --dry-run       shows what would be sent, sends nothing
// The key file it points to is public/<key>.txt, served at the site root.

const KEY = "12820c8b747349bc8ed7ab212d53b72b";
const SITE = "https://www.mawkishtechnologies.com";
const args = process.argv.slice(2);
const dry = args.includes("--dry-run");
const named = args.filter((a) => a.startsWith("/"));

async function sitemapUrls() {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const urlList = named.length ? named.map((p) => `${SITE}${p}`) : await sitemapUrls();
console.log(`${urlList.length} address${urlList.length === 1 ? "" : "es"} for ${SITE}`);
if (dry) {
  urlList.slice(0, 5).forEach((u) => console.log("  ", u));
  if (urlList.length > 5) console.log(`   ...and ${urlList.length - 5} more`);
  process.exit(0);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
// 200 or 202 means accepted. 403 means the key file could not be found on the live site yet. 422 means a bad address.
console.log(`IndexNow answered ${res.status} ${res.statusText}`);
process.exit(res.status === 200 || res.status === 202 ? 0 : 1);
