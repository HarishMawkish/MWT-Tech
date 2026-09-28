import { Section } from "@/components/ui";
import { BlogCard } from "@/components/BlogCard";
import { getBlogPostsByCategoryTitle } from "@/lib/sanity/queries";

// The exact category title editors use in Sanity for this section. If it's
// ever renamed in Studio, update this string to match.
const CATEGORY_TITLE = "News & Events";

const MARQUEE_THRESHOLD = 4;

export async function NewsAndEvents() {
  const posts = await getBlogPostsByCategoryTitle(CATEGORY_TITLE);

  // No posts in this category yet (or none published) - skip the section
  // entirely rather than showing an empty heading on the homepage.
  if (posts.length === 0) return null;

  const useMarquee = posts.length >= MARQUEE_THRESHOLD;
  // The track is duplicated and animated to -50%, so both halves must be
  // exactly the same total width. That only holds if every card is a fixed
  // width - see the wrapper classes below.
  const loop = useMarquee ? [...posts, ...posts] : posts;

  return (
    <Section>
      <h2 className="font-display text-3xl font-bold text-mw-primary">
        {CATEGORY_TITLE}
      </h2>

      {useMarquee ? (
        <div className="mw-edge-fade relative mt-10 -mx-6 overflow-hidden px-6 lg:-mx-8 lg:px-8">
          {/*
            items-stretch  -> every card takes the height of the tallest one,
                              which is what makes `h-full` on the card resolve.
                              With items-start each card would be its own
                              content height instead.
            The wrapper below is the ONLY thing setting card width in the
            marquee. Flex items size to their content by default, which is why
            a long excerpt used to blow one card out into a wide rectangle
            while short "Test" posts collapsed into small squares.
            basis + flex-none pins the width so content can never influence it.
          */}
          <div className="mw-marquee-track flex w-max items-stretch gap-8">
            {loop.map((post, i) => (
              <div
                key={`${post.slug}-${i}`}
                className="w-[20rem] min-w-[20rem] max-w-[20rem] flex-none sm:w-[24rem] sm:min-w-[24rem] sm:max-w-[24rem]"
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Grid items stretch by default, so all cards in a row match height.
        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </Section>
  );
}
