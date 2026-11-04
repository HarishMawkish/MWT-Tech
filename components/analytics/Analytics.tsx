import Script from "next/script";
import { GA_ID } from "@/lib/analytics";

/**
 * Google Analytics (the Google tag), loaded on every page for every visitor. This is Google's own snippet, in the way
 * Next.js loads scripts: the tag file after the page is interactive, then the setup that sends the page view.
 * There is no consent banner.
 */
export function Analytics() {
  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
