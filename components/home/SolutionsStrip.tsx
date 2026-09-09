const solutions = [
  { name: "SAP", logo: "/images/solutions/sap_.png" },
  { name: "Salesforce", logo: "https://zql0rfjwszzixew9.public.blob.vercel-storage.com/solutions/Salesforce%20Logo.jpeg" },
  { name: "Odoo", logo: "https://zql0rfjwszzixew9.public.blob.vercel-storage.com/solutions/odoo_logo.svg" },
  { name: "Databricks", logo: "/images/Databricks_Logo.png" },
  { name: "Microsoft", logo: "https://zql0rfjwszzixew9.public.blob.vercel-storage.com/solutions/Microsoft.webp" },
  { name: "AWS", logo: "https://zql0rfjwszzixew9.public.blob.vercel-storage.com/solutions/AWS.png" },
  { name: "Google Cloud", logo: "https://zql0rfjwszzixew9.public.blob.vercel-storage.com/solutions/Google%20Cloud.png" },
  { name: "Swyftflo", logo: "https://zql0rfjwszzixew9.public.blob.vercel-storage.com/solutions/Swyftflo.png" },
  { name: "RISE", logo: "/images/solutions/rise.jpg" },
  { name: "GROW", logo: "/images/solutions/grow.jpg" },
];

export function SolutionsStrip() {
  const loop = [...solutions, ...solutions];

  return (
    <div className="mw-glow-strip border-y border-white/10 py-10">
      <p className="relative z-10 mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
        Solutions We Provide
      </p>

      {/* Mobile only: fixed-width cards can't fit more than one per row on a
          phone screen, which turned this into a long vertical list. Below
          `sm`, use the same auto-scrolling marquee pattern as MarqueeStrip
          instead. Desktop/tablet (`sm:` and up) keeps the original
          wrapped-grid layout, completely unchanged. */}
      <div className="mw-edge-fade relative z-10 overflow-hidden sm:hidden">
        <div className="mw-marquee-track flex w-max items-center gap-4">
          {loop.map((s, i) => (
            <div
              key={`${s.name}-${i}`}
              className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl bg-white px-6 py-4 shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.logo} alt={s.name} className="h-full w-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto hidden max-w-5xl items-center justify-center gap-4 px-6 sm:flex sm:flex-wrap">
        {solutions.map((s) => (
          <div
            key={s.name}
            className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl bg-white px-6 py-4 shadow-sm sm:h-24 sm:w-52"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.logo} alt={s.name} className="h-full w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}