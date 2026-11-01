"use client";

import Link from "next/link";
import { useState } from "react";
import { productBySlug, productPath, type ProductSlug } from "./data";

// "Where to start": pick the problem that bites most, see which main product addresses it and what to connect next.
// Every capability named below comes from Salesforce's own pages for that product.
const PAINS: { pain: string; slug: ProductSlug; why: string; gets: string[]; next: ProductSlug; nextWhy: string }[] = [
  {
    pain: "Sellers re-type what they did, and forecasts are guesses.",
    slug: "sales-cloud",
    why: "Sales Cloud logs emails and events automatically, shows the pipeline in one view and builds forecasts from the live deals.",
    gets: ["Leads, accounts and opportunities in one place", "Real-time forecasts and pipeline view", "AI that ranks leads, and agents that prepare deals"],
    next: "data-360",
    nextWhy: "it brings data from your other systems into the same customer view.",
  },
  {
    pain: "Customers wait, and our reps lack the full picture.",
    slug: "service-cloud",
    why: "Service Cloud puts cases, conversations and knowledge in one console, and lets agents answer and hand over to people.",
    gets: ["Case management and a rep console", "Knowledge that finds and fills its own gaps", "AI agents with a hand-over to reps"],
    next: "data-360",
    nextWhy: "it gives reps the full interaction history and grounds AI answers in your knowledge.",
  },
  {
    pain: "Our marketing runs on separate lists in separate tools.",
    slug: "marketing-cloud",
    why: "Marketing Cloud builds audiences from one customer profile and runs journeys and campaigns across channels.",
    gets: ["Audiences without SQL", "Journeys over email, SMS and the web", "Campaign agents with goals and guardrails you set"],
    next: "data-360",
    nextWhy: "it is the customer data platform that builds the shared profile.",
  },
  {
    pain: "We want a loyalty programme, or ours needs to do more.",
    slug: "loyalty-management",
    why: "Loyalty Management runs members, points, tiers and vouchers, with personalised offers and referral campaigns on top.",
    gets: ["Points, tiers, cash-back and punch cards", "Offers chosen from browsing and purchase signals", "Referral and partner programmes"],
    next: "marketing-cloud",
    nextWhy: "loyalty events can trigger marketing journeys.",
  },
  {
    pain: "Our customer data is spread across many systems.",
    slug: "data-360",
    why: "Data 360 connects data in place or by ingestion, maps it to a shared model and matches it into one profile per customer.",
    gets: ["Zero-copy access to warehouse and lake data", "Unified profiles and segments", "Context that agents can use"],
    next: "agentforce",
    nextWhy: "agents use the unified data to answer and act.",
  },
];

export function StartPicker() {
  const [i, setI] = useState<number | null>(null);
  const p = i === null ? null : PAINS[i];
  const prod = p ? productBySlug(p.slug) : null;
  const next = p ? productBySlug(p.next) : null;

  return (
    <div className="pick">
      <div className="pick-qs" role="radiogroup" aria-label="What bites most today?">
        {PAINS.map((x, k) => (
          <button key={x.pain} type="button" role="radio" aria-checked={i === k} onClick={() => setI(k)}>
            <span className="rb" aria-hidden="true" />
            <span>{x.pain}</span>
          </button>
        ))}
      </div>
      <aside className="pick-res" aria-live="polite">
        <div className="lab">Where to start</div>
        {p && prod && next ? (
          <div className="tabpane" key={p.slug + i}>
            <h3>{prod.name}</h3>
            <p>{p.why}</p>
            <ul>
              {p.gets.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <p className="then">
              <b>Then look at {next.name}:</b> {p.nextWhy}
            </p>
            <div className="acts">
              <Link href={productPath(p.slug)} className="btn pri">
                Explore {prod.short} <span className="ar">→</span>
              </Link>
              <a href="#book" className="btn sec">
                Talk it through
              </a>
            </div>
          </div>
        ) : (
          <>
            <h3>Pick the problem that bites most today.</h3>
            <p>
              Salesforce is a set of products on one platform, and most teams begin with one. Choose a problem on the left
              to see which of the five main products usually comes first, and what to look at next.
            </p>
          </>
        )}
      </aside>
    </div>
  );
}
