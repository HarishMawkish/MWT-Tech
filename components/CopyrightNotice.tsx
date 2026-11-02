import Link from "next/link";

/**
 * The copyright statement, as a white card (the style supplied in the reference screenshot).
 * On pages with an FAQ it sits just above that section (inline); on every other page the
 * layout shows it at the end, above the footer. Spacing next to pale sections is trimmed in
 * globals.css so the card never floats in a double-height gap.
 */
export function CopyrightNotice({ inline = false }: { inline?: boolean }) {
  return (
    <div
      {...(inline ? { "data-cr-inline": "" } : { "data-cr-end": "" })}
      role="note"
      aria-label="Copyright notice"
      className="cr-notice relative bg-[#f2f5f3] px-5 py-10 font-[family-name:var(--font-inter)]"
    >
      <div className="mx-auto flex max-w-[1200px] items-start gap-4 rounded-2xl border border-[#dfe6e2] bg-white px-5 py-5 shadow-[0_1px_2px_rgba(20,32,25,0.05)] sm:items-center sm:gap-5 sm:px-7 sm:py-6">
        <span aria-hidden="true" className="flex-none text-[30px] font-light leading-none text-[#17694b] sm:text-[34px]">
          &copy;
        </span>
        <p className="text-[15px] leading-[1.65] text-[#142019]/75 sm:text-base" style={{ margin: 0 }}>
          <strong className="font-bold text-[#142019]">&copy; {new Date().getFullYear()} Mawkish Technologies.</strong>{" "}
          This guide, its diagrams and illustrations are protected by copyright. You&rsquo;re welcome to learn from it and
          to quote it with credit and a link.{" "}
          <strong className="font-semibold text-[#142019]">
            Reproducing it, by hand or through AI, and publishing it as your own is not allowed.
          </strong>{" "}
          <Link
            href="/copyright"
            className="whitespace-nowrap font-bold text-[#17694b] underline-offset-4 hover:underline"
          >
            Read our copyright notice
          </Link>
        </p>
      </div>
    </div>
  );
}
