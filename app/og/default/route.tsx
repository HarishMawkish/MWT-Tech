import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

// The default image shown when any page of the site is shared and has no image of its own.
const size = { width: 1200, height: 630 };

export function GET() {
  const logo = `data:image/png;base64,${readFileSync(join(process.cwd(), "public", "images", "brand", "logo-mark.png")).toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 28,
          padding: "0 90px",
          background: "linear-gradient(135deg, #020604 0%, #0a1f17 55%, #114232 100%)",
          color: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={96} height={96} alt="" style={{ objectFit: "contain" }} />
        <div style={{ fontSize: 30, letterSpacing: 6, color: "#7fd9b4", fontWeight: 700 }}>MAWKISH TECHNOLOGIES</div>
        <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 800, maxWidth: 980 }}>
          Technology that creates real business outcomes
        </div>
        <div style={{ fontSize: 30, color: "rgba(255,255,255,0.7)" }}>SAP · Salesforce · Odoo · AI · Colombo, Sri Lanka</div>
      </div>
    ),
    size,
  );
}
