import type { PortableTextBlock } from "@portabletext/react";

type Span = { _key?: string; _type: string; text?: string; marks?: string[] };
type TextBlock = PortableTextBlock & { children?: Span[]; style?: string; listItem?: string };

// A break only counts as a paragraph end if the text before it is a real
// paragraph, not a one-line heading that happens to sit above its body.
const MIN_PARAGRAPH = 100;

type Candidate = {
  at: number; // characters of text before the break
  block: number;
  // For a break inside a block: which span and where in its text. Omitted for
  // a break between two blocks.
  inside?: { span: number; start: number; end: number };
};

/**
 * Splits an article into two halves at the paragraph break nearest the middle,
 * so something (like a photo gallery) can sit between them.
 *
 * Works for both shapes Sanity content takes here: many blocks (one per
 * paragraph), and a single block whose paragraphs are separated by blank lines
 * inside its text. Never splits inside a list or right after a heading.
 * Returns null when there's no sensible place to break.
 */
export function splitContentAtMiddle(
  blocks: PortableTextBlock[],
): [PortableTextBlock[], PortableTextBlock[]] | null {
  const candidates: Candidate[] = [];
  let total = 0;
  let lastBreak = 0;

  blocks.forEach((raw, bi) => {
    const block = raw as TextBlock;
    const children = Array.isArray(block.children) ? block.children : [];
    children.forEach((span, si) => {
      const text = span.text ?? "";
      for (const m of text.matchAll(/\n{2,}/g)) {
        const at = total + m.index;
        if (at - lastBreak >= MIN_PARAGRAPH) {
          candidates.push({ at, block: bi, inside: { span: si, start: m.index, end: m.index + m[0].length } });
          lastBreak = at;
        }
      }
      total += text.length;
    });
    const next = blocks[bi + 1] as TextBlock | undefined;
    const isHeading = typeof block.style === "string" && /^h\d$/.test(block.style);
    if (next && !next.listItem && !isHeading && total - lastBreak >= MIN_PARAGRAPH) {
      candidates.push({ at: total, block: bi });
      lastBreak = total;
    }
  });

  if (candidates.length === 0) return null;
  const best = candidates.reduce((a, b) => (Math.abs(b.at - total / 2) < Math.abs(a.at - total / 2) ? b : a));

  if (!best.inside) {
    return [blocks.slice(0, best.block + 1), blocks.slice(best.block + 1)];
  }

  const block = blocks[best.block] as TextBlock;
  const { span, start, end } = best.inside;
  const children = block.children as Span[];
  const target = children[span];
  const head = (target.text ?? "").slice(0, start);
  const tail = (target.text ?? "").slice(end);

  const before = [...children.slice(0, span), { ...target, text: head }];
  const after = [{ ...target, _key: `${target._key ?? "s"}-b`, text: tail }, ...children.slice(span + 1)];
  // Drop leading blank lines the first span of the second half may carry.
  after[0] = { ...after[0], text: (after[0].text ?? "").replace(/^\n+/, "") };

  return [
    [...blocks.slice(0, best.block), { ...block, children: before } as PortableTextBlock],
    [{ ...block, _key: `${block._key ?? "b"}-b`, children: after } as PortableTextBlock, ...blocks.slice(best.block + 1)],
  ];
}
