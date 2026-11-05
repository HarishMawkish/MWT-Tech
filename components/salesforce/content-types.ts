import type { ProductSlug } from "./data";

/** A drawn app screen, described as data. Every screen is our own illustration with sample data, never a screenshot. */
export type ScreenSpec = {
  /** Title in the screen's top bar. */
  app: string;
  /** What the illustration shows, for people using a screen reader. */
  label: string;
  tiles?: { h: string; k: string; s?: string; tone?: "ok" | "wr" | "er" | "ap" }[];
  board?: { h: string; cards: { t: string; s: string }[] }[];
  rows?: { title: string; items: { a: string; b?: string; pill?: { t: string; tone: "ok" | "wr" | "er" | "in" | "nt" } }[] };
  bars?: { title: string; rows: [string, number, string, ("g" | "o" | "r" | "l")?][] };
  steps?: { title: string; items: { t: string; state?: "done" | "now" }[] };
  cols?: { title: string; values: number[]; labels?: string[] };
  chat?: { title: string; msgs: { who: "u" | "a"; t: string }[] };
};

export type Tab = {
  id: string;
  label: string;
  title: string;
  tagline: string;
  points: string[];
  look?: { title: string; body: string };
  screen: ScreenSpec;
};

export type Source = { label: string; href: string };

export type ProductContent = {
  slug: ProductSlug;
  crumb: string;
  eyebrow: string;
  /** The h1: plain text, then the emphasised ending. */
  title: [string, string];
  lede: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  /** A short note under the buttons (names, renames). */
  note?: string;
  hero: ScreenSpec;
  heroCaption?: string;

  does: { eyebrow: string; title: string; lede: string; items: { title: string; body: string }[] };

  explore: { eyebrow: string; title: string; lede: string; tabs: Tab[] };

  scenario?: { eyebrow: string; title: string; lede: string; steps: { t: string; s: string }[]; note: string };

  roles?: { eyebrow: string; title: string; lede: string; rows: { who: string; does: string }[] };

  fits?: { eyebrow: string; title: string; lede: string; rows: { name: string; how: string }[]; note?: string };

  ai?: { eyebrow: string; title: string; lede: string; items: { title: string; body: string }[]; note?: string };

  start?: {
    eyebrow: string;
    title: string;
    lede: string;
    steps: { title: string; body: string }[];
    decide: { title: string; items: string[] };
  };

  editions?: { eyebrow: string; title: string; lede: string; rows: { name: string; body: string }[]; link: Source };

  faq: { q: string; a: string }[];
  sources: Source[];
  /** The facts that were checked, dated. */
  checked: string;
};
