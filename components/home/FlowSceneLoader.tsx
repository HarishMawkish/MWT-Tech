"use client";

import dynamic from "next/dynamic";

// Same reasoning as HeroScene: defers the `three` library off the critical
// initial-load path. page.tsx is a Server Component, so the ssr:false
// dynamic import has to happen inside a Client Component boundary — this
// file is that boundary.
export const FlowScene = dynamic(() => import("./FlowScene").then((mod) => mod.FlowScene), {
  ssr: false,
});
