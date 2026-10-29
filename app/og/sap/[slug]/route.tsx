import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { sapPageBySlug, sapPages } from "@/lib/sap-pages";

// The image shown when an SAP page is shared (LinkedIn, WhatsApp, Slack, X): its title on the brand's green.

export function generateStaticParams() {
  return sapPages.map((p) => ({ slug: p.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = sapPageBySlug(slug);
  if (!page) return new Response("Not found", { status: 404 });

  const logo = `data:image/png;base64,${readFileSync(join(process.cwd(), "public", "images", "brand", "logo-mark.png")).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #020604 0%, #0a1f17 55%, #114232 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} width={64} height={64} alt="" style={{ objectFit: "contain" }} />
          <div style={{ fontSize: 26, letterSpacing: 4, fontWeight: 700 }}>MAWKISH TECHNOLOGIES</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 24, letterSpacing: 5, color: "#7fd9b4", fontWeight: 700 }}>
            {`SAP SOLUTIONS  ·  ${page.group.toUpperCase()}`}
          </div>
          <div style={{ fontSize: page.title.length > 30 ? 70 : 82, lineHeight: 1.05, fontWeight: 800 }}>{page.title}</div>
          <div style={{ fontSize: 28, lineHeight: 1.35, color: "rgba(255,255,255,0.72)", maxWidth: 980 }}>{page.description}</div>
        </div>

        <div style={{ fontSize: 24, color: "rgba(255,255,255,0.6)" }}>Colombo, Sri Lanka</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
