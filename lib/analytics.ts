/**
 * Google Analytics 4 Measurement ID (looks like G-XXXXXXXXXX). It is public: it appears in the page source of
 * every site that uses analytics. Leave it empty and nothing is loaded and no banner is shown.
 * NEXT_PUBLIC_GA_ID overrides it.
 */
export const DEFAULT_GA_ID = "";

export const GA_ID = (process.env.NEXT_PUBLIC_GA_ID?.trim() || DEFAULT_GA_ID).trim();

/** Where a visitor's choice is remembered in their browser. */
export const CONSENT_KEY = "mw-analytics-consent";
export type Consent = "granted" | "denied";

type Gtag = (...args: unknown[]) => void;

/** Sends an event to Google Analytics. It does nothing unless the visitor has accepted and analytics is loaded. */
export function trackEvent(name: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
