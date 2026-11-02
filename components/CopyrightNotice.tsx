import Link from "next/link";

/** The copyright line shown at the end of every page, above the footer. */
export function CopyrightNotice() {
  return (
    <div className="bg-[#f2f5f3] px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-start gap-3.5 rounded-2xl border border-[#d9e2dd] bg-white px-5 py-4 text-[13.5px] leading-relaxed text-[#142019]/70">
        <span
          aria-hidden="true"
          className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full border-[1.5px] border-[#17694b] text-[11px] font-bold leading-none text-[#17694b]"
        >
          C
        </span>
        <p>
          <strong className="font-semibold text-[#142019]">&copy; {new Date().getFullYear()} Mawkish Technologies.</strong>{" "}
          This guide, its diagrams and illustrations are protected by copyright. Copying, republishing, scraping or using
          them to train AI without our written permission is not allowed.{" "}
          <Link href="/copyright" className="font-semibold text-[#17694b] hover:underline">
            Read our copyright notice &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
