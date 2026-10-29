"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { CONSENT_KEY, GA_ID, type Consent } from "@/lib/analytics";

/**
 * Google Analytics, switched on only after the visitor accepts. Until they choose, nothing is loaded and
 * nothing is sent; if they decline, nothing is ever loaded. The choice is remembered in their browser.
 */
export function Analytics() {
  // "unknown" until the browser has been asked, so the server render and first paint show nothing.
  const [consent, setConsent] = useState<Consent | "unknown" | null>("unknown");

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(CONSENT_KEY);
    } catch {
      /* storage blocked: treat as undecided */
    }
    setConsent(saved === "granted" || saved === "denied" ? saved : null);
  }, []);

  if (!GA_ID) return null;

  const choose = (value: Consent) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* the choice just will not be remembered */
    }
    setConsent(value);
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
          </Script>
        </>
      )}

      {consent === null && (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-xl rounded-2xl border border-white/15 bg-[#0a1812]/95 p-4 text-white shadow-2xl backdrop-blur-xl sm:inset-x-auto sm:bottom-5 sm:left-5 sm:mx-0"
        >
          <p className="text-[13.5px] leading-relaxed text-white/80">
            We use Google Analytics to see which pages are useful. It only runs if you accept, and it does not identify you.
          </p>
          <div className="mt-3 flex gap-2.5">
            <button
              type="button"
              onClick={() => choose("granted")}
              className="min-h-11 flex-1 rounded-xl bg-mw-mint px-4 text-xs font-semibold uppercase tracking-wider text-white transition active:scale-[0.97] sm:flex-none"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => choose("denied")}
              className="min-h-11 flex-1 rounded-xl border border-white/20 px-4 text-xs font-semibold uppercase tracking-wider text-white/85 transition hover:bg-white/10 active:scale-[0.97] sm:flex-none"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
