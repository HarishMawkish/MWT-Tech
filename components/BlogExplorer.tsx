"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Image } from "sanity";
import { BlogCard } from "@/components/BlogCard";

export type ExplorerPost = {
  slug: string;
  title: string;
  coverImage: Image;
  publishedAt: string;
  categoryId: string | null;
  categoryTitle: string | null;
  // Lower-cased title + opening of the article, so search matches the body too.
  searchText: string;
};

export type ExplorerCategory = { id: string; title: string };

const PAGE_SIZE = 6;
const chip =
  "inline-flex min-h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold backdrop-blur-xl transition-[colors,transform] duration-150 ease-out active:scale-[0.97]";
const chipOff =
  "border-white/15 bg-white/[0.04] text-white/80 hover:border-white/30 hover:bg-white/[0.08] hover:text-white";
const chipOn = "border-white/40 bg-white/[0.14] text-white";

function yearOf(iso: string) {
  return new Date(iso).getUTCFullYear();
}

/**
 * Search + filter + pagination for the Insights archive.
 *
 * Why this shape: one page of everything stops working past a few dozen
 * posts, and numbered pages hide posts people can't name. Readers arrive
 * either knowing a topic (category chips with counts), knowing a word
 * (instant search), or knowing roughly when (year), so each gets a one-tap
 * route. Results are numbered pages of 6 that replace the grid (never append),
 * so the section stays two rows tall however many posts exist and the footer
 * stays reachable. Filter and page live in the URL so a view can be shared.
 *
 * Posts keep the order set in the Studio (drag-and-drop), not date order.
 */
export function BlogExplorer({
  posts,
  categories,
}: {
  posts: ExplorerPost[];
  categories: ExplorerCategory[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [ready, setReady] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const years = useMemo(
    () => [...new Set(posts.map((p) => yearOf(p.publishedAt)))].sort((a, b) => b - a),
    [posts],
  );
  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of posts) if (p.categoryId) map.set(p.categoryId, (map.get(p.categoryId) ?? 0) + 1);
    return map;
  }, [posts]);

  // Restore filters from the URL once on mount (and on Back/Forward).
  useEffect(() => {
    const read = () => {
      const sp = new URLSearchParams(window.location.search);
      const cat = sp.get("category");
      const yr = Number(sp.get("year"));
      setQuery(sp.get("q") ?? "");
      setCategory(cat && categories.some((c) => c.id === cat) ? cat : null);
      setYear(years.includes(yr) ? yr : null);
      setPage(Math.max(1, Math.floor(Number(sp.get("page"))) || 1));
    };
    read();
    setReady(true);
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, [categories, years]);

  // Mirror filters into the URL without adding history entries per keystroke.
  useEffect(() => {
    if (!ready) return;
    const sp = new URLSearchParams();
    if (query.trim()) sp.set("q", query.trim());
    if (category) sp.set("category", category);
    if (year) sp.set("year", String(year));
    if (page > 1) sp.set("page", String(page));
    const qs = sp.toString();
    const url = `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash}`;
    window.history.replaceState(null, "", url);
  }, [query, category, year, page, ready]);

  // "/" jumps to search, the way most docs and archive sites do.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
      e.preventDefault();
      searchRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    return posts.filter(
      (p) =>
        (!category || p.categoryId === category) &&
        (!year || yearOf(p.publishedAt) === year) &&
        terms.every((t) => p.searchText.includes(t)),
    );
  }, [posts, query, category, year]);

  const filtered = Boolean(query.trim() || category || year);
  const pageCount = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  // Clamp so a stale ?page=9 (or a filter that shrinks the results) still lands on a real page.
  const current = Math.min(page, pageCount);
  const start = (current - 1) * PAGE_SIZE;
  const shown = results.slice(start, start + PAGE_SIZE);

  const change = useCallback(<T,>(set: (v: T) => void, value: T) => {
    set(value);
    setPage(1);
  }, []);

  const reset = () => {
    setQuery("");
    setCategory(null);
    setYear(null);
    setPage(1);
  };

  // Pages replace the grid rather than append to it, so the section stays one
  // screen tall however many posts exist. Land back at the top of the grid.
  const goTo = (n: number) => {
    setPage(n);
    gridRef.current?.scrollIntoView({ block: "start" });
  };

  // 1 … 4 5 [6] 7 8 … 20 — always first, last and a window around the current page.
  const pageItems = useMemo(() => {
    const items: (number | "gap-l" | "gap-r")[] = [];
    for (let n = 1; n <= pageCount; n++) {
      if (n === 1 || n === pageCount || Math.abs(n - current) <= 1) items.push(n);
      else if (n < current && items[items.length - 1] !== "gap-l") items.push("gap-l");
      else if (n > current && items[items.length - 1] !== "gap-r") items.push("gap-r");
    }
    return items;
  }, [pageCount, current]);

  return (
    <div>
      {/* Glass toolbar that stays under the nav while the grid scrolls. */}
      <div className="sticky top-[4.5rem] z-30 -mx-6 border-y border-white/10 bg-[#050a08]/80 px-6 py-4 backdrop-blur-xl lg:-mx-8 lg:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <label className="relative block lg:w-80 lg:shrink-0">
            <span className="sr-only">Search articles</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <circle cx="9" cy="9" r="6" />
              <path d="m14 14 3.5 3.5" />
            </svg>
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(e) => change(setQuery, e.target.value)}
              placeholder="Search articles"
              autoComplete="off"
              className="min-h-11 w-full rounded-full border border-white/15 bg-white/[0.04] pl-11 pr-12 text-sm text-white placeholder:text-white/45 focus:border-white/40 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
            />
            {query ? (
              <button
                type="button"
                onClick={() => {
                  change(setQuery, "");
                  searchRef.current?.focus();
                }}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                &times;
              </button>
            ) : (
              <kbd
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 rounded border border-white/15 px-1.5 text-[11px] text-white/45 lg:block"
              >
                /
              </kbd>
            )}
          </label>

          {/* Scrolls sideways on phones instead of wrapping into a tall block. */}
          <div
            role="group"
            aria-label="Filter by category"
            className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] lg:flex-1 [&::-webkit-scrollbar]:hidden"
          >
            <button
              type="button"
              aria-pressed={category === null}
              onClick={() => change(setCategory, null)}
              className={`${chip} shrink-0 ${category === null ? chipOn : chipOff}`}
            >
              All <span className="text-white/50">{posts.length}</span>
            </button>
            {categories
              .filter((c) => counts.has(c.id))
              .map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={category === c.id}
                  onClick={() => change(setCategory, category === c.id ? null : c.id)}
                  className={`${chip} shrink-0 ${category === c.id ? chipOn : chipOff}`}
                >
                  {c.title} <span className="text-white/50">{counts.get(c.id)}</span>
                </button>
              ))}
          </div>

          {years.length > 1 && (
            <label className="shrink-0">
              <span className="sr-only">Filter by year</span>
              <select
                value={year ?? ""}
                onChange={(e) => change(setYear, e.target.value ? Number(e.target.value) : null)}
                className="min-h-11 w-full appearance-none rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm font-semibold text-white/80 focus:border-white/40 focus:outline-none lg:w-auto"
              >
                <option value="">All years</option>
                {years.map((y) => (
                  <option key={y} value={y} className="bg-[#050a08]">
                    {y}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
      </div>

      <div className="mt-6 flex min-h-6 items-center justify-between gap-4 text-sm text-white/55">
        <p role="status" aria-live="polite">
          {filtered
            ? `${results.length} ${results.length === 1 ? "article" : "articles"} found`
            : `${posts.length} ${posts.length === 1 ? "article" : "articles"}`}
        </p>
        {filtered && (
          <button
            type="button"
            onClick={reset}
            className="font-semibold text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      <div ref={gridRef} className="scroll-mt-40" />
      {results.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center">
          <p className="font-display text-xl text-white">No articles match that.</p>
          <p className="mt-2 text-sm text-white/60">Try a different word, or clear the filters.</p>
          <button type="button" onClick={reset} className={`${chip} ${chipOff} mt-6`}>
            Show all articles
          </button>
        </div>
      ) : (
        <ul className="mt-6 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((post, i) => (
            <li
              // The filter is part of the key so a new result set re-enters;
              // "Show more" keeps existing keys so old cards don't replay.
              key={`${query}|${category}|${year}|${current}|${post.slug}`}
              className="mw-result h-full"
              style={{ animationDelay: `${i * 45}ms` }}
            >
              <BlogCard post={post} showExcerpt={false} />
            </li>
          ))}
        </ul>
      )}

      {pageCount > 1 && (
        <nav aria-label="Pagination" className="mt-12 flex flex-col items-center gap-4">
          <p className="text-sm text-white/55">
            Showing {start + 1}&ndash;{start + shown.length} of {results.length}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            <li>
              <button
                type="button"
                onClick={() => goTo(current - 1)}
                disabled={current === 1}
                aria-label="Previous page"
                className={`${chip} ${chipOff} px-4 disabled:pointer-events-none disabled:opacity-30`}
              >
                &larr;
              </button>
            </li>
            {pageItems.map((item) =>
              typeof item === "number" ? (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => goTo(item)}
                    aria-label={`Page ${item}`}
                    aria-current={item === current ? "page" : undefined}
                    className={`${chip} min-w-11 justify-center px-0 ${item === current ? chipOn : chipOff}`}
                  >
                    {item}
                  </button>
                </li>
              ) : (
                <li key={item} aria-hidden="true" className="px-1 text-white/40">
                  &hellip;
                </li>
              ),
            )}
            <li>
              <button
                type="button"
                onClick={() => goTo(current + 1)}
                disabled={current === pageCount}
                aria-label="Next page"
                className={`${chip} ${chipOff} px-4 disabled:pointer-events-none disabled:opacity-30`}
              >
                &rarr;
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
