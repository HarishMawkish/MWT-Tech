/**
 * Google Analytics 4 Measurement ID. It is public: it appears in the page source of every site that uses analytics.
 * NEXT_PUBLIC_GA_ID overrides it. Set it to nothing and no analytics is loaded.
 */
export const DEFAULT_GA_ID = "G-DEQF672XWJ";

export const GA_ID = (process.env.NEXT_PUBLIC_GA_ID?.trim() || DEFAULT_GA_ID).trim();

type Gtag = (...args: unknown[]) => void;

/** Sends an event to Google Analytics. It does nothing until analytics has loaded. */
export function trackEvent(name: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
