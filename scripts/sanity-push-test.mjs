const pid = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const ds = process.env.NEXT_PUBLIC_SANITY_DATASET;
const v = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-01-01";
const token = process.env.SANITY_WRITE_TOKEN;
if (!pid || !ds || !token) throw new Error("Missing env vars");

const base = `https://${pid}.api.sanity.io/v${v.replace(/^v/, "")}/data`;
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

// 1. Read test: list categories
const q = encodeURIComponent('*[_type=="blogCategory"]{_id,title}');
const r1 = await fetch(`${base}/query/${ds}?query=${q}`, { headers });
console.log("READ:", r1.status, JSON.stringify((await r1.json()).result));

// 2. Write test: one draft, clearly marked
const id = `drafts.bot-test-${Date.now()}`;
const r2 = await fetch(`${base}/mutate/${ds}`, {
  method: "POST",
  headers,
  body: JSON.stringify({
    mutations: [
      {
        create: {
          _id: id,
          _type: "blogPost",
          title: "TEST - automation draft, delete me",
          slug: { _type: "slug", current: "test-automation-draft" },
          content: [
            {
              _type: "block",
              _key: "k1",
              style: "normal",
              markDefs: [],
              children: [
                {
                  _type: "span",
                  _key: "s1",
                  text: "Test draft from the blog bot.",
                  marks: [],
                },
              ],
            },
          ],
        },
      },
    ],
  }),
});
console.log("WRITE:", r2.status, JSON.stringify(await r2.json()));
