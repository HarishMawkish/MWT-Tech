// Sends every page in the live sitemap to the Internet Archive's Wayback Machine, one at a time, then (optionally)
// checks each one was saved. Needs Node 18 or newer. Run it from the repo folder:
//
//   node scripts/wayback.mjs                  save every page in https://www.mawkishtechnologies.com/sitemap.xml
//   node scripts/wayback.mjs --dry-run        list what would be sent, send nothing
//   node scripts/wayback.mjs --check          do not save; check which pages already have a snapshot
//   node scripts/wayback.mjs --resume         skip pages already saved OK in wayback-results.csv (after a stop)
//   node scripts/wayback.mjs --limit 10       only the first 10 pages (a good first test)
//   node scripts/wayback.mjs --delay 15       seconds to wait between pages (default 12; 6 with keys)
//   node scripts/wayback.mjs --retry-wait 20  seconds to wait before trying a failed page again (it tries up to 4 times)
//   node scripts/wayback.mjs --sitemap FILE   read the address list from a sitemap file or another sitemap URL
//
// Keys (a free archive.org account, then archive.org/account/s3.php) make saving faster and more reliable. Put them in a
// file called .env.wayback.local in the repo folder (it is ignored by git, so it is never committed):
//   IA_ACCESS_KEY=your-access-key
//   IA_SECRET_KEY=your-secret-key
// or set the same two names as environment variables. In GitHub they are the repository secrets of the same names.
// Results are written to wayback-results.csv, one line per page: when, address, outcome, snapshot link.

import { appendFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";

const SITE = "https://www.mawkishtechnologies.com";
const RESULTS = "wayback-results.csv";
const argv = process.argv.slice(2);
const flag = (n) => argv.includes(n);
const value = (n, d) => (argv.includes(n) ? argv[argv.indexOf(n) + 1] : d);

// Read the keys from .env.wayback.local when they are not already in the environment.
if (!process.env.IA_ACCESS_KEY && existsSync(".env.wayback.local")) {
  for (const line of readFileSync(".env.wayback.local", "utf8").split("\n")) {
    const m = line.match(/^\s*(IA_ACCESS_KEY|IA_SECRET_KEY)\s*=\s*(.*?)\s*$/);
    if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const KEYS = process.env.IA_ACCESS_KEY && process.env.IA_SECRET_KEY ? `${process.env.IA_ACCESS_KEY}:${process.env.IA_SECRET_KEY}` : "";
const delay = Number(value("--delay", KEYS ? 6 : 12)) * 1000;
const limit = Number(value("--limit", 0));
const retryWait = Number(value("--retry-wait", 20)) * 1000;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const stamp = () => new Date().toISOString();

async function pageList() {
  const src = value("--sitemap", `${SITE}/sitemap.xml`);
  const xml = /^https?:/.test(src) ? await (await fetch(src)).text() : readFileSync(src, "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const log = (url, outcome, link = "") => {
  if (!existsSync(RESULTS)) writeFileSync(RESULTS, "time,url,outcome,snapshot\n");
  appendFileSync(RESULTS, `${stamp()},${url},${outcome},${link}\n`);
};

// Save one page. With keys: the Save Page Now API (asks, then waits for the answer). Without: the plain save address.
async function save(url) {
  if (KEYS) {
    const res = await fetch("https://web.archive.org/save", {
      method: "POST",
      headers: { Accept: "application/json", Authorization: `LOW ${KEYS}`, "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ url, capture_outlinks: "0", skip_first_archive: "1" }),
      signal: AbortSignal.timeout(90000),
    });
    if (res.status === 429) return { ok: false, note: "rate-limited" };
    const job = await res.json().catch(() => ({}));
    if (!job.job_id) return { ok: false, note: job.message || `no job (${res.status})` };
    for (let i = 0; i < 24; i++) {
      await sleep(5000);
      const st = await (await fetch(`https://web.archive.org/save/status/${job.job_id}`, { headers: { Accept: "application/json", Authorization: `LOW ${KEYS}` }, signal: AbortSignal.timeout(60000) })).json().catch(() => ({}));
      if (st.status === "success") return { ok: true, link: `https://web.archive.org/web/${st.timestamp}/${url}` };
      if (st.status === "error") return { ok: false, note: st.message || st.status_ext || "error" };
    }
    return { ok: false, note: "timed out waiting" };
  }
  const res = await fetch(`https://web.archive.org/save/${url}`, { redirect: "follow", signal: AbortSignal.timeout(180000) });
  if (res.status === 429) return { ok: false, note: "rate-limited" };
  const where = res.headers.get("content-location") || "";
  return res.ok ? { ok: true, link: where ? `https://web.archive.org${where}` : res.url } : { ok: false, note: `HTTP ${res.status}` };
}

// One page, with retries: a dropped connection, a timeout, a server error or a rate limit are tried again.
async function saveReliably(url) {
  let r;
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      r = await save(url);
    } catch (e) {
      r = { ok: false, note: `network: ${e.cause?.code || e.name === "TimeoutError" ? "timed out" : e.message}`, transient: true };
    }
    if (r.ok) return r;
    const again = r.note === "rate-limited" || r.transient || /^HTTP 5|timed out|no job/.test(r.note);
    if (!again || attempt === 4) return r;
    const wait = r.note === "rate-limited" ? 60000 : retryWait * attempt;
    console.log(`   ${r.note}, trying again in ${wait / 1000}s (attempt ${attempt + 1} of 4)...`);
    await sleep(wait);
  }
  return r;
}

// Is there a snapshot, and how recent?
async function check(url) {
  const r = await (await fetch(`https://archive.org/wayback/available?url=${encodeURIComponent(url)}`)).json().catch(() => ({}));
  const s = r.archived_snapshots?.closest;
  return s?.available ? { ok: true, link: s.url, ts: s.timestamp } : { ok: false };
}

const all = await pageList();
let urls = limit ? all.slice(0, limit) : all;
if (flag("--resume") && existsSync(RESULTS)) {
  const done = new Set(readFileSync(RESULTS, "utf8").split("\n").filter((l) => l.includes(",saved,")).map((l) => l.split(",")[1]));
  urls = urls.filter((u) => !done.has(u));
}
console.log(`${urls.length} page${urls.length === 1 ? "" : "s"} (${all.length} in the sitemap)${KEYS ? ", using your archive.org keys" : ", no keys"}`);

if (flag("--dry-run")) {
  urls.slice(0, 8).forEach((u) => console.log("  ", u));
  if (urls.length > 8) console.log(`   ...and ${urls.length - 8} more`);
  process.exit(0);
}

let ok = 0, failed = [];
for (const [i, url] of urls.entries()) {
  try {
    if (flag("--check")) {
      const r = await check(url);
      console.log(`${String(i + 1).padStart(3)}/${urls.length} ${r.ok ? "FOUND  " : "MISSING"} ${url}${r.ok ? `  (${r.ts})` : ""}`);
      r.ok ? ok++ : failed.push(url);
      await sleep(400);
      continue;
    }
    const r = await saveReliably(url);
    console.log(`${String(i + 1).padStart(3)}/${urls.length} ${r.ok ? "saved " : "FAILED"} ${url}${r.ok ? "" : `  (${r.note})`}`);
    log(url, r.ok ? "saved" : `failed: ${r.note}`, r.link || "");
    r.ok ? ok++ : failed.push(url);
  } catch (e) {
    console.log(`${String(i + 1).padStart(3)}/${urls.length} FAILED ${url}  (${e.message})`);
    log(url, `failed: ${e.message}`);
    failed.push(url);
  }
  if (!flag("--check") && i < urls.length - 1) await sleep(delay);
}
console.log(`\n${flag("--check") ? "found" : "saved"}: ${ok}   not: ${failed.length}`);
if (failed.length) console.log("Not done:\n  " + failed.join("\n  ") + "\nRun again with --resume to retry only the ones that failed.");
process.exit(failed.length ? 1 : 0);
