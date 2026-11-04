"use client";

import { usePathname } from "next/navigation";
import { canaryFor } from "@/lib/canary-terms";

/**
 * A short, visible "how we work" line that closes a page. Every page carries its own coined term, so a copy of any page
 * can be traced back to it. The note finds its page from the address, so the same component sits on every route.
 * The terms and sentences are in lib/canary-terms.ts.
 */
export function CanaryNote() {
  const entry = canaryFor(usePathname());
  if (!entry) return null;
  const [before, after] = entry.text.split("{term}");
  return (
    <p data-canary className="mx-auto max-w-3xl px-6 py-10 text-center text-sm leading-relaxed text-gray-500">
      {before}
      <strong className="font-semibold">{entry.term}</strong>
      {after}
    </p>
  );
}
