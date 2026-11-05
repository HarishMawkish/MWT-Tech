import Link from "next/link";
import { CopyrightNotice } from "@/components/CopyrightNotice";

/**
 * Printing and Packaging on SAP: the body of the supplied page, copied as it was. The markup, text and
 * illustrations are unchanged. Added at the owner's request: a clickable section index in the hero (and ids on the two
 * sections that had none). Links were pointed at this site, and the page's own copyright
 * line was replaced by the site's notice above the questions, like every other page with an FAQ.
 * Generated from the supplied file; the page's behaviour (tabs, hotspots) lives in PrintingInteractions.
 */
export function PrintingBody() {
  return (
    <div id="top">
      <section className="hero pp-hero">
        <div className="in">
          <div className="crumbs">
            <Link href="/industries">
              Industries
            </Link>
            {" "}
            /
            {" "}
            <Link href="/industries">
              SAP
            </Link>
            {" "}
            / Printing and Packaging
          </div>
          <span className="eyebrow">
            Printing and packaging on SAP
          </span>
          <h1>
            From artwork to dispatch,
            {" "}
            <em>
              every job on one SAP core.
            </em>
          </h1>
          <p className="lede">
            For converters who print folding cartons, labels, flexible laminates, sleeves, tags and trims for FMCG, tea, confectionery, cosmetics, pharmaceutical and apparel brands, in Sri Lanka and for export. This is how SAP connects the press hall to procurement, on-time delivery and finance, and how Mawkish puts it to work.
          </p>
          <div className="ctas">
            <a href="#book" className="btn pri">
              Walk your plant with us →
            </a>
            <a href="#journey" className="btn sec">
              Follow a job end to end
            </a>
          </div>
          <nav className="pp-toc" aria-label="On this page">
            <p className="pp-toc-h">
              On this page
            </p>
            <ol>
              <li>
                <a href="#markets">
                  <span className="n">
                    01
                  </span>
                  <span className="t">
                    Six markets, six rulebooks
                  </span>
                </a>
              </li>
              <li>
                <a href="#margin">
                  <span className="n">
                    02
                  </span>
                  <span className="t">
                    Where margin leaks
                  </span>
                </a>
              </li>
              <li>
                <a href="#journey">
                  <span className="n">
                    03
                  </span>
                  <span className="t">
                    The job journey
                  </span>
                </a>
              </li>
              <li>
                <a href="#floor">
                  <span className="n">
                    04
                  </span>
                  <span className="t">
                    On the shop floor
                  </span>
                </a>
              </li>
              <li>
                <a href="#delivery">
                  <span className="n">
                    05
                  </span>
                  <span className="t">
                    Planning and on-time delivery
                  </span>
                </a>
              </li>
              <li>
                <a href="#procurement">
                  <span className="n">
                    06
                  </span>
                  <span className="t">
                    Procurement
                  </span>
                </a>
              </li>
              <li>
                <a href="#finance">
                  <span className="n">
                    07
                  </span>
                  <span className="t">
                    Finance
                  </span>
                </a>
              </li>
              <li>
                <a href="#quality">
                  <span className="n">
                    08
                  </span>
                  <span className="t">
                    Quality and traceability
                  </span>
                </a>
              </li>
              <li>
                <a href="#world">
                  <span className="n">
                    09
                  </span>
                  <span className="t">
                    Sri Lanka and overseas
                  </span>
                </a>
              </li>
              <li>
                <a href="#platform">
                  <span className="n">
                    10
                  </span>
                  <span className="t">
                    The platform
                  </span>
                </a>
              </li>
              <li>
                <a href="#ai">
                  <span className="n">
                    11
                  </span>
                  <span className="t">
                    AI in the plant
                  </span>
                </a>
              </li>
              <li>
                <a href="#start">
                  <span className="n">
                    12
                  </span>
                  <span className="t">
                    How we start
                  </span>
                </a>
              </li>
              <li>
                <a href="#faq">
                  <span className="n">
                    13
                  </span>
                  <span className="t">
                    Questions
                  </span>
                </a>
              </li>
              <li>
                <a href="#book">
                  <span className="n">
                    14
                  </span>
                  <span className="t">
                    Next step
                  </span>
                </a>
              </li>
            </ol>
          </nav>
          <div className="pp-facts">
            <div>
              <b>
                6 markets
              </b>
              <span>
                Six brand-owner rulebooks, one platform
              </span>
            </div>
            <div>
              <b>
                12 steps
              </b>
              <span>
                From enquiry to cash, all on the job record
              </span>
            </div>
            <div>
              <b>
                Every reel
              </b>
              <span>
                Traced from mill to the customer's pallet
              </span>
            </div>
            <div>
              <b>
                Every job
              </b>
              <span>
                Estimate against actual, in real time
              </span>
            </div>
          </div>
          <figure className="pp-line" aria-label="Animated illustration: a packaging line from reel to pallet, with each machine reporting to SAP Cloud ERP">
            <div className="pp-scroll">
              <svg viewBox="0 0 1200 430" role="img" aria-hidden="true">
                <rect x="40" y="18" width="1120" height="78" rx="16" fill="#0e3a2b" stroke="#34b386" strokeWidth="1.5" />
                <text x="64" y="50" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="18" fontWeight="800" fill="#eef3f0">
                  SAP Cloud ERP
                </text>
                <text x="64" y="74" fontFamily="Manrope, sans-serif" fontSize="12.5" fontWeight="600" fill="#a9bab2">
                  One record per job, from quote to cash
                </text>
                <g fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700" fill="#eef3f0">
                  <rect x="330" y="40" width="96" height="32" rx="8" fill="#123f30" />
                  <text x="378" y="61" textAnchor="middle">
                    Sales
                  </text>
                  <rect x="436" y="40" width="96" height="32" rx="8" fill="#123f30" />
                  <text x="484" y="61" textAnchor="middle">
                    Planning
                  </text>
                  <rect x="542" y="40" width="104" height="32" rx="8" fill="#123f30" />
                  <text x="594" y="61" textAnchor="middle">
                    Procurement
                  </text>
                  <rect x="656" y="40" width="104" height="32" rx="8" fill="#123f30" />
                  <text x="708" y="61" textAnchor="middle">
                    Production
                  </text>
                  <rect x="770" y="40" width="88" height="32" rx="8" fill="#123f30" />
                  <text x="814" y="61" textAnchor="middle">
                    Quality
                  </text>
                  <rect x="868" y="40" width="100" height="32" rx="8" fill="#123f30" />
                  <text x="918" y="61" textAnchor="middle">
                    Warehouse
                  </text>
                  <rect x="978" y="40" width="88" height="32" rx="8" fill="#123f30" />
                  <text x="1022" y="61" textAnchor="middle">
                    Finance
                  </text>
                  <circle cx="1100" cy="56" r="9" fill="#34b386" className="a-blink" />
                </g>
                <g stroke="#34b386" strokeWidth="2" fill="none" className="a-up">
                  <path d="M100 230 V96" />
                  <path d="M330 200 V96" />
                  <path d="M588 236 V96" />
                  <path d="M780 250 V96" />
                  <path d="M930 214 V96" />
                  <path d="M1090 236 V96" />
                </g>
                <g fontFamily="Manrope, sans-serif" fontSize="11" fontWeight="800" fill="#34b386" letterSpacing=".06em">
                  <rect x="108" y="122" width="96" height="22" rx="6" fill="#0a1a14" stroke="#1c2823" />
                  <text x="156" y="137" textAnchor="middle">
                    REEL BATCH
                  </text>
                  <rect x="338" y="122" width="132" height="22" rx="6" fill="#0a1a14" stroke="#1c2823" />
                  <text x="404" y="137" textAnchor="middle">
                    SETUP + RUN TIME
                  </text>
                  <rect x="596" y="122" width="72" height="22" rx="6" fill="#0a1a14" stroke="#1c2823" />
                  <text x="632" y="137" textAnchor="middle">
                    WASTE
                  </text>
                  <rect x="788" y="122" width="84" height="22" rx="6" fill="#0a1a14" stroke="#1c2823" />
                  <text x="830" y="137" textAnchor="middle">
                    OUTPUT
                  </text>
                  <rect x="938" y="150" width="90" height="22" rx="6" fill="#0a1a14" stroke="#1c2823" />
                  <text x="983" y="165" textAnchor="middle">
                    DELTA E
                  </text>
                  <rect x="1098" y="122" width="56" height="22" rx="6" fill="#0a1a14" stroke="#1c2823" />
                  <text x="1126" y="137" textAnchor="middle">
                    HU
                  </text>
                </g>
                <rect x="20" y="392" width="1160" height="6" rx="3" fill="#1c2823" />
                <g>
                  <circle cx="100" cy="300" r="62" fill="#e9e2cf" stroke="#bfb497" strokeWidth="2" />
                  <g className="a-spin">
                    <circle cx="100" cy="300" r="62" fill="none" stroke="#cfc4a6" strokeWidth="1" strokeDasharray="3 9" />
                    <path d="M100 248 V352 M48 300 H152" stroke="#bfb497" strokeWidth="2" />
                  </g>
                  <circle cx="100" cy="300" r="14" fill="#5c6c65" />
                  <path d="M70 360 L60 392 M130 360 L140 392" stroke="#3a4a43" strokeWidth="6" />
                  <text x="100" y="420" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700" fill="#9aaaa2">
                    Board or film reel
                  </text>
                </g>
                <path d="M150 268 L200 268" stroke="#e9e2cf" strokeWidth="4" />
                <g>
                  <rect x="196" y="200" width="300" height="160" rx="12" fill="#16231d" stroke="#2c3d36" strokeWidth="2" />
                  <g>
                    <rect x="210" y="216" width="62" height="96" rx="8" fill="#1d2e26" />
                    <circle cx="241" cy="268" r="20" className="s-c" />
                    <g className="a-spin">
                      <path d="M241 250 V286" stroke="#fff" strokeOpacity=".6" strokeWidth="3" />
                    </g>
                    <rect x="282" y="216" width="62" height="96" rx="8" fill="#1d2e26" />
                    <circle cx="313" cy="268" r="20" className="s-m" />
                    <g className="a-spin r">
                      <path d="M313 250 V286" stroke="#fff" strokeOpacity=".6" strokeWidth="3" />
                    </g>
                    <rect x="354" y="216" width="62" height="96" rx="8" fill="#1d2e26" />
                    <circle cx="385" cy="268" r="20" className="s-y" />
                    <g className="a-spin">
                      <path d="M385 250 V286" stroke="#fff" strokeOpacity=".6" strokeWidth="3" />
                    </g>
                    <rect x="426" y="216" width="62" height="96" rx="8" fill="#1d2e26" />
                    <circle cx="457" cy="268" r="20" fill="#2b2f2d" stroke="#9aaaa2" />
                    <g className="a-spin r">
                      <path d="M457 250 V286" stroke="#fff" strokeOpacity=".6" strokeWidth="3" />
                    </g>
                  </g>
                  <rect x="210" y="324" width="272" height="22" rx="6" fill="#0a110e" />
                  <circle cx="226" cy="335" r="4" fill="#34b386" className="a-blink" />
                  <circle cx="242" cy="335" r="4" fill="#34b386" className="a-blink d2" />
                  <text x="472" y="339" textAnchor="end" fontFamily="Manrope, sans-serif" fontSize="10.5" fontWeight="700" fill="#9aaaa2">
                    JOB 24-1187 · 312 m/min
                  </text>
                  <path d="M226 360 V392 M466 360 V392" stroke="#3a4a43" strokeWidth="8" />
                  <text x="346" y="420" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700" fill="#9aaaa2">
                    Printing press
                  </text>
                </g>
                <g>
                  <rect x="530" y="236" width="116" height="124" rx="10" fill="#16231d" stroke="#2c3d36" strokeWidth="2" />
                  <g className="a-press">
                    <rect x="546" y="248" width="84" height="26" rx="4" fill="#5c6c65" />
                    <path d="M552 274 h72" stroke="#e9e2cf" strokeWidth="2" strokeDasharray="6 4" />
                  </g>
                  <rect x="546" y="300" width="84" height="12" rx="3" fill="#2c3d36" />
                  <path d="M550 360 V392 M626 360 V392" stroke="#3a4a43" strokeWidth="8" />
                  <text x="588" y="420" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700" fill="#9aaaa2">
                    Die-cut or slit
                  </text>
                </g>
                <g>
                  <rect x="680" y="250" width="200" height="110" rx="10" fill="#16231d" stroke="#2c3d36" strokeWidth="2" />
                  <path d="M694 300 H866" stroke="#3a4a43" strokeWidth="14" strokeLinecap="round" />
                  <path d="M694 300 H866" stroke="#9aaaa2" strokeWidth="2" className="a-belt" />
                  <circle cx="720" cy="276" r="8" fill="#2c3d36" />
                  <circle cx="780" cy="276" r="8" fill="#2c3d36" />
                  <circle cx="840" cy="276" r="8" fill="#2c3d36" />
                  <path d="M700 360 V392 M860 360 V392" stroke="#3a4a43" strokeWidth="8" />
                  <text x="780" y="420" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700" fill="#9aaaa2">
                    Fold, glue, finish
                  </text>
                </g>
                <g>
                  <rect x="910" y="214" width="40" height="28" rx="6" fill="#2c3d36" />
                  <circle cx="930" cy="228" r="7" fill="#29a7df" />
                  <path d="M918 242 L896 300 H964 L942 242 Z" fill="#29a7df" opacity=".35" className="a-scan" />
                  <path d="M930 196 V214" stroke="#3a4a43" strokeWidth="4" />
                  <text x="930" y="420" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700" fill="#9aaaa2">
                    Inspect
                  </text>
                </g>
                <path d="M646 330 H1010" stroke="#3a4a43" strokeWidth="10" strokeLinecap="round" />
                <path d="M646 330 H1010" stroke="#9aaaa2" strokeWidth="2" className="a-belt" />
                <g fill="#e9e2cf" stroke="#bfb497">
                  <rect x="560" y="308" width="30" height="18" rx="2" className="a-box" />
                  <rect x="560" y="308" width="30" height="18" rx="2" className="a-box b2" />
                  <rect x="560" y="308" width="30" height="18" rx="2" className="a-box b3" />
                </g>
                <g>
                  <rect x="1030" y="372" width="120" height="20" rx="2" fill="#7a5b3a" />
                  <g fill="#e9e2cf" stroke="#bfb497" strokeWidth="1.5">
                    <rect x="1036" y="338" width="54" height="34" />
                    <rect x="1090" y="338" width="54" height="34" />
                    <rect x="1036" y="304" width="54" height="34" />
                    <rect x="1090" y="304" width="54" height="34" />
                    <rect x="1036" y="270" width="54" height="34" className="a-blink d3" />
                    <rect x="1090" y="270" width="54" height="34" className="a-blink d4" />
                  </g>
                  <rect x="1100" y="346" width="34" height="18" rx="2" fill="#fff" />
                  <path d="M1104 350 v10 M1108 350 v10 M1111 350 v10 M1115 350 v10 M1120 350 v10 M1124 350 v10 M1128 350 v10" stroke="#142019" strokeWidth="1.6" />
                  <text x="1090" y="420" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700" fill="#9aaaa2">
                    Pallet, labelled, ready
                  </text>
                </g>
              </svg>
            </div>
            <figcaption className="pp-cap">
              <span>
                Each machine reports what happened to the job, as it happens.
              </span>
              <span>
                Illustration
              </span>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="light" id="markets">
        <div className="in">
          <span className="eyebrow">
            Six markets, six rulebooks
          </span>
          <h2>
            Your customers don't buy packaging. They buy compliance, shelf impact and on-time launches.
          </h2>
          <p className="lede">
            A tea exporter, a pharmaceutical company and a global apparel brand each judge you on different things. SAP lets one plant serve all three without three ways of working. Pick a market.
          </p>
          <div className="pp-tabs" role="tablist" aria-label="End markets">
            <button role="tab" aria-selected="true" aria-controls="m-fmcg" id="t-fmcg">
              FMCG
            </button>
            {" "}
            <button role="tab" aria-selected="false" aria-controls="m-tea" id="t-tea">
              Tea
            </button>
            {" "}
            <button role="tab" aria-selected="false" aria-controls="m-conf" id="t-conf">
              Confectionery
            </button>
            {" "}
            <button role="tab" aria-selected="false" aria-controls="m-cos" id="t-cos">
              Cosmetics
            </button>
            {" "}
            <button role="tab" aria-selected="false" aria-controls="m-ph" id="t-ph">
              Pharmaceuticals
            </button>
            {" "}
            <button role="tab" aria-selected="false" aria-controls="m-app" id="t-app">
              Apparel
            </button>
          </div>
          <div className="pp-mkt" role="tabpanel" id="m-fmcg" aria-labelledby="t-fmcg">
            <div>
              <h3>
                FMCG
              </h3>
              <span className="k">
                What you print
              </span>
              <div className="pp-chips">
                <span>
                  Folding cartons
                </span>
                <span>
                  Self-adhesive labels
                </span>
                <span>
                  Shrink sleeves
                </span>
                <span>
                  Sachets and laminates
                </span>
                <span>
                  Shipper cartons
                </span>
              </div>
              <span className="k">
                What the brand owner expects
              </span>
              <p>
                High volumes on tight weekly calls, frequent promotional artwork, stock held close to their filling lines, and no line stoppage because packaging was late.
              </p>
            </div>
            <div>
              <span className="k">
                How SAP handles it
              </span>
              <ul className="pp-ul">
                <li>
                  <b>
                    Scheduling agreements with delivery schedules.
                  </b>
                  {" "}
                  <span>
                    Forecast and firm call-offs arrive from the customer and drive planning automatically.
                  </span>
                </li>
                <li>
                  <b>
                    Customer consignment and vendor-managed stock.
                  </b>
                  {" "}
                  <span>
                    Stock at the customer's site stays yours until they consume it, and is billed on usage.
                  </span>
                </li>
                <li>
                  <b>
                    Artwork versions on the material.
                  </b>
                  {" "}
                  <span>
                    A promotional pack is a new version with its own validity, so the old design never ships by mistake.
                  </span>
                </li>
                <li>
                  <b>
                    Returnable packaging.
                  </b>
                  {" "}
                  <span>
                    Pallets, cores and crates tracked by customer, so they come back.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pp-mkt" role="tabpanel" id="m-tea" aria-labelledby="t-tea" hidden>
            <div>
              <h3>
                Tea
              </h3>
              <span className="k">
                What you print
              </span>
              <div className="pp-chips">
                <span>
                  Tea bag envelopes
                </span>
                <span>
                  Tags and string labels
                </span>
                <span>
                  Retail cartons
                </span>
                <span>
                  Caddies and gift packs
                </span>
                <span>
                  Export shippers
                </span>
              </div>
              <span className="k">
                What the brand owner expects
              </span>
              <p>
                Hundreds of SKUs, one for each blend, market and language. Small runs for niche markets, large runs for the majors, food-safe materials and export cartons that meet each importer's marking rules.
              </p>
            </div>
            <div>
              <span className="k">
                How SAP handles it
              </span>
              <ul className="pp-ul">
                <li>
                  <b>
                    Configurable products.
                  </b>
                  {" "}
                  <span>
                    One master carton with variants by size, board, finish and language, instead of thousands of separate items.
                  </span>
                </li>
                <li>
                  <b>
                    Combined production orders.
                  </b>
                  {" "}
                  <span>
                    Several small SKUs that share board and inks are ganged on one sheet, then costed back to each order.
                  </span>
                </li>
                <li>
                  <b>
                    Food-contact records on every batch.
                  </b>
                  {" "}
                  <span>
                    Supplier declarations for board and inks stored against the batches used.
                  </span>
                </li>
                <li>
                  <b>
                    Built for tea exporters' rhythm.
                  </b>
                  {" "}
                  <span>
                    We run SAP for Sri Lankan tea exporters and know how their packing schedules move.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pp-mkt" role="tabpanel" id="m-conf" aria-labelledby="t-conf" hidden>
            <div>
              <h3>
                Confectionery
              </h3>
              <span className="k">
                What you print
              </span>
              <div className="pp-chips">
                <span>
                  Flow-wrap reels
                </span>
                <span>
                  Twist wraps
                </span>
                <span>
                  Cartons and display boxes
                </span>
                <span>
                  Seasonal gift packs
                </span>
              </div>
              <span className="k">
                What the brand owner expects
              </span>
              <p>
                Low-migration inks and food-contact compliance, reels slit exactly to their machine widths, and huge seasonal peaks for festivals at home and for export markets.
              </p>
            </div>
            <div>
              <span className="k">
                How SAP handles it
              </span>
              <ul className="pp-ul">
                <li>
                  <b>
                    Parent reel to child reel.
                  </b>
                  {" "}
                  <span>
                    A printed master reel is slit into child reels, each its own batch with width, length and joins recorded.
                  </span>
                </li>
                <li>
                  <b>
                    Quality inspection at goods receipt and in process.
                  </b>
                  {" "}
                  <span>
                    Migration test results and certificates kept per batch.
                  </span>
                </li>
                <li>
                  <b>
                    Seasonal planning.
                  </b>
                  {" "}
                  <span>
                    Demand built months ahead so board, film and capacity are secured before the peak.
                  </span>
                </li>
                <li>
                  <b>
                    Reel labels from SAP.
                  </b>
                  {" "}
                  <span>
                    Every reel leaves with a batch label the customer can scan into their own system.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pp-mkt" role="tabpanel" id="m-cos" aria-labelledby="t-cos" hidden>
            <div>
              <h3>
                Cosmetics and personal care
              </h3>
              <span className="k">
                What you print
              </span>
              <div className="pp-chips">
                <span>
                  Premium cartons
                </span>
                <span>
                  Hot foil and embossing
                </span>
                <span>
                  Spot UV
                </span>
                <span>
                  Labels for tubes and bottles
                </span>
                <span>
                  Rigid boxes
                </span>
              </div>
              <span className="k">
                What the brand owner expects
              </span>
              <p>
                Exact colour against the brand standard, perfect embellishment, short runs and fast launches. A colour that drifts between runs is a rejected delivery.
              </p>
            </div>
            <div>
              <span className="k">
                How SAP handles it
              </span>
              <ul className="pp-ul">
                <li>
                  <b>
                    Routings that reflect embellishment.
                  </b>
                  {" "}
                  <span>
                    Foil, emboss, spot UV and window patching are operations with their own times and costs, in house or subcontracted.
                  </span>
                </li>
                <li>
                  <b>
                    Colour as a quality result.
                  </b>
                  {" "}
                  <span>
                    Delta E readings recorded against tolerance, so a drift is caught on the press, not by the customer.
                  </span>
                </li>
                <li>
                  <b>
                    First article inspection.
                  </b>
                  {" "}
                  <span>
                    The first sheet is approved before the run continues, with the record kept.
                  </span>
                </li>
                <li>
                  <b>
                    Launch planning.
                  </b>
                  {" "}
                  <span>
                    A range of SKUs that share a die and a launch date planned as one.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pp-mkt" role="tabpanel" id="m-ph" aria-labelledby="t-ph" hidden>
            <div>
              <h3>
                Pharmaceuticals
              </h3>
              <span className="k">
                What you print
              </span>
              <div className="pp-chips">
                <span>
                  Cartons
                </span>
                <span>
                  Leaflets and inserts
                </span>
                <span>
                  Labels
                </span>
                <span>
                  Blister lidding foil
                </span>
              </div>
              <span className="k">
                What the brand owner expects
              </span>
              <p>
                Good manufacturing practice for packaging, strict artwork change control, full lot traceability and zero mix-ups. One wrong leaflet in one carton can trigger a recall.
              </p>
            </div>
            <div>
              <span className="k">
                How SAP handles it
              </span>
              <ul className="pp-ul">
                <li>
                  <b>
                    Change records for artwork and specifications.
                  </b>
                  {" "}
                  <span>
                    A new version is approved, dated and released before it can be produced.
                  </span>
                </li>
                <li>
                  <b>
                    Batch release through quality.
                  </b>
                  {" "}
                  <span>
                    Finished goods stay blocked until inspection is complete and signed off.
                  </span>
                </li>
                <li>
                  <b>
                    Full genealogy.
                  </b>
                  {" "}
                  <span>
                    From the customer's delivery back to the board reel, ink batch and plate used, in seconds.
                  </span>
                </li>
                <li>
                  <b>
                    Codes and variable data.
                  </b>
                  {" "}
                  <span>
                    Batch, expiry and 2D code data passed from SAP to your coding and vision systems.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pp-mkt" role="tabpanel" id="m-app" aria-labelledby="t-app" hidden>
            <div>
              <h3>
                Apparel
              </h3>
              <span className="k">
                What you print
              </span>
              <div className="pp-chips">
                <span>
                  Hangtags
                </span>
                <span>
                  Care and size labels
                </span>
                <span>
                  Price tickets
                </span>
                <span>
                  RFID labels
                </span>
                <span>
                  Stickers and polybags
                </span>
                <span>
                  Cartons
                </span>
              </div>
              <span className="k">
                What the brand owner expects
              </span>
              <p>
                The brand nominates you, the garment factory orders from you, and every order carries its own sizes, colours, barcodes and prices. Turnaround is measured in days, and factories sit in Sri Lanka, Bangladesh, India and beyond.
              </p>
            </div>
            <div>
              <span className="k">
                How SAP handles it
              </span>
              <ul className="pp-ul">
                <li>
                  <b>
                    Variable data from the order line.
                  </b>
                  {" "}
                  <span>
                    Size breakdowns, barcodes and RFID data flow from the order to your label and encoding systems.
                  </span>
                </li>
                <li>
                  <b>
                    Brand and factory on one deal.
                  </b>
                  {" "}
                  <span>
                    The nominating brand, the ordering factory and the paying entity are linked, so pricing and reporting follow the brand.
                  </span>
                </li>
                <li>
                  <b>
                    Plants near the garment hubs.
                  </b>
                  {" "}
                  <span>
                    Several plants and companies in one system, with orders routed to the plant nearest the factory.
                  </span>
                </li>
                <li>
                  <b>
                    Fast order to dispatch.
                  </b>
                  {" "}
                  <span>
                    Order, print, pack and ship in one flow, with no re-keying.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="margin">
        <div className="in">
          <span className="eyebrow">
            Where margin leaks
          </span>
          <h2>
            Most converters lose money in the same six places.
          </h2>
          <p className="lede">
            None of these show up clearly in a spreadsheet or a disconnected print system. They show up when every job carries its real cost from quote to invoice.
          </p>
          <div className="pp-leaks">
            <div>
              <h3>
                Estimates that miss
              </h3>
              <p className="q">
                Quotes are built by experience. Makeready, waste and board yield are guessed, and nobody checks the job afterwards.
              </p>
              <p className="a">
                <b>
                  With SAP
                </b>
                Configured quotes from real routings and materials, then estimate against actual on every job.
              </p>
            </div>
            <div>
              <h3>
                Makeready and waste
              </h3>
              <p className="q">
                Setups, colour matching and startup sheets eat hours and board every shift, and the reasons are not recorded.
              </p>
              <p className="a">
                <b>
                  With SAP
                </b>
                Setup time and waste confirmed by reason, by machine and by job, so you can attack the biggest causes.
              </p>
            </div>
            <div>
              <h3>
                Artwork loops
              </h3>
              <p className="q">
                Proofs go back and forth by email. Jobs wait for approval while the press slot passes.
              </p>
              <p className="a">
                <b>
                  With SAP
                </b>
                Artwork status on the order, so planning only releases jobs that are approved.
              </p>
            </div>
            <div>
              <h3>
                Material swings
              </h3>
              <p className="q">
                Board, film and ink prices move with currency and freight. Imports arrive late and the real landed cost is known weeks later.
              </p>
              <p className="a">
                <b>
                  With SAP
                </b>
                Landed cost on every import, contracts with mills, and price changes visible in costing straight away.
              </p>
            </div>
            <div>
              <h3>
                Late and split deliveries
              </h3>
              <p className="q">
                Promises are made without checking material or press capacity, then rescued with overtime and air freight.
              </p>
              <p className="a">
                <b>
                  With SAP
                </b>
                Dates promised from real availability, and a live view of every order at risk.
              </p>
            </div>
            <div>
              <h3>
                Rejects and credit notes
              </h3>
              <p className="q">
                A colour or print defect found by the customer costs the job, the reprint and the relationship.
              </p>
              <p className="a">
                <b>
                  With SAP
                </b>
                Inspection in process, quality notifications with root cause, and the cost of poor quality on the job.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="light" id="journey">
        <div className="in">
          <span className="eyebrow">
            The job journey
          </span>
          <h2>
            Follow one job from enquiry to cash.
          </h2>
          <p className="lede">
            What happens in your business at each step, and what SAP does at the same moment. One job record carries everything, so nobody re-keys and nothing is lost between departments.
          </p>
          <ol className="pp-jour">
            <li>
              <span className="n">
                1
              </span>
              <h3>
                Enquiry and specification
                <small>
                  Sales
                </small>
              </h3>
              <div className="c">
                <b>
                  In your business
                </b>
                A brand sends a spec: carton style, board, size, colours, finish, quantity, delivery dates.
              </div>
              <div className="c sap">
                <b>
                  In SAP
                </b>
                Leads and enquiries logged against the customer, with the spec captured as structured characteristics, not an email attachment.
              </div>
            </li>
            <li>
              <span className="n">
                2
              </span>
              <h3>
                Estimate and configure
                <small>
                  Estimating
                </small>
              </h3>
              <div className="c">
                <b>
                  In your business
                </b>
                The estimator works out sheet layout, board, inks, plates, makeready, run speed and finishing.
              </div>
              <div className="c sap">
                <b>
                  In SAP
                </b>
                Advanced variant configuration builds the product and its bill of materials and routing from the spec, with rules for valid combinations and a cost to quote from.
              </div>
            </li>
            <li>
              <span className="n">
                3
              </span>
              <h3>
                Quote and order
                <small>
                  Sales
                </small>
              </h3>
              <div className="c">
                <b>
                  In your business
                </b>
                Price is agreed by quantity break. The customer confirms and gives call-off dates.
              </div>
              <div className="c sap">
                <b>
                  In SAP
                </b>
                Quotations become sales orders or scheduling agreements in one step. Credit is checked before the job is released.
              </div>
            </li>
            <li>
              <span className="n">
                4
              </span>
              <h3>
                Artwork and proof
                <small>
                  Prepress
                </small>
              </h3>
              <div className="c">
                <b>
                  In your business
                </b>
                Artwork arrives, is checked, proofed and approved. Repeat jobs may need only a text change.
              </div>
              <div className="c sap">
                <b>
                  In SAP
                </b>
                Artwork version and approval status held on the material and order, linked to your prepress system. Pharma changes go through change records.
              </div>
            </li>
            <li>
              <span className="n">
                5
              </span>
              <h3>
                Plan and schedule
                <small>
                  Planning
                </small>
              </h3>
              <div className="c">
                <b>
                  In your business
                </b>
                Jobs are sequenced to cut changeovers: same board, same ink set, same die together.
              </div>
              <div className="c sap">
                <b>
                  In SAP
                </b>
                MRP creates planned orders from demand. Planners sequence on capacity, and combine small orders that share a sheet into one production run.
              </div>
            </li>
            <li>
              <span className="n">
                6
              </span>
              <h3>
                Buy and receive
                <small>
                  Procurement
                </small>
              </h3>
              <div className="c">
                <b>
                  In your business
                </b>
                Board, film, inks, foils, plates and dies are bought, imported and checked on arrival.
              </div>
              <div className="c sap">
                <b>
                  In SAP
                </b>
                Requirements become requisitions and call-offs against contracts. Goods receipts create batches with mill reel numbers, test results and landed cost.
              </div>
            </li>
            <li>
              <span className="n">
                7
              </span>
              <h3>
                Prepress and tooling
                <small>
                  Prepress
                </small>
              </h3>
              <div className="c">
                <b>
                  In your business
                </b>
                Plates are made, cylinders prepared and cutting dies checked out of the store.
              </div>
              <div className="c sap">
                <b>
                  In SAP
                </b>
                Plates and dies are tracked as tools with usage, location and life, so a worn die is replaced before it fails.
              </div>
            </li>
            <li>
              <span className="n">
                8
              </span>
              <h3>
                Print
                <small>
                  Press hall
                </small>
              </h3>
              <div className="c">
                <b>
                  In your business
                </b>
                Makeready, colour approval, then the run. Speeds, stops and waste vary every shift.
              </div>
              <div className="c sap">
                <b>
                  In SAP
                </b>
                Operators confirm setup, run, output and waste by reason from the machine or a tablet. Material is issued by batch as it is used.
              </div>
            </li>
            <li>
              <span className="n">
                9
              </span>
              <h3>
                Convert and finish
                <small>
                  Finishing
                </small>
              </h3>
              <div className="c">
                <b>
                  In your business
                </b>
                Die-cutting, laminating, slitting, embellishing, folding and gluing, some of it outsourced.
              </div>
              <div className="c sap">
                <b>
                  In SAP
                </b>
                Each step is an operation on the routing. Outsourced steps are subcontracting orders with the material sent and returned on record.
              </div>
            </li>
            <li>
              <span className="n">
                10
              </span>
              <h3>
                Inspect and release
                <small>
                  Quality
                </small>
              </h3>
              <div className="c">
                <b>
                  In your business
                </b>
                First article, in-process checks, colour readings and final inspection.
              </div>
              <div className="c sap">
                <b>
                  In SAP
                </b>
                Inspection lots with characteristics and tolerances. Failed results raise a quality notification, and stock stays blocked until released.
              </div>
            </li>
            <li>
              <span className="n">
                11
              </span>
              <h3>
                Pack and dispatch
                <small>
                  Warehouse and logistics
                </small>
              </h3>
              <div className="c">
                <b>
                  In your business
                </b>
                Cartons are counted, palletised, labelled and loaded for the customer's slot.
              </div>
              <div className="c sap">
                <b>
                  In SAP
                </b>
                Handling units with pallet labels, deliveries picked by batch, transport planned and proof of delivery recorded.
              </div>
            </li>
            <li>
              <span className="n">
                12
              </span>
              <h3>
                Invoice, cost and learn
                <small>
                  Finance
                </small>
              </h3>
              <div className="c">
                <b>
                  In your business
                </b>
                The customer is invoiced, cash collected, and the job's real margin reviewed.
              </div>
              <div className="c sap">
                <b>
                  In SAP
                </b>
                Billing from the delivery, cash collection and margin by job, customer, market and machine, with estimate against actual.
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section id="floor">
        <div className="in">
          <span className="eyebrow">
            On the shop floor
          </span>
          <h2>
            Where the money is really made or lost.
          </h2>
          <p className="lede">
            The press hall is where estimates meet reality. Tap a point on the line to see what is captured there and what SAP does with it.
          </p>
          <div className="pp-floor">
            <div className="fig">
              <svg viewBox="0 0 640 360" role="group" aria-label="Press line with eight data points">
                <rect x="0" y="0" width="640" height="360" rx="12" fill="none" />
                <path d="M10 300 H630" className="s-ln" />
                <circle cx="62" cy="220" r="42" fill="#e9e2cf" stroke="#bfb497" strokeWidth="2" />
                <circle cx="62" cy="220" r="10" fill="#5c6c65" />
                <path d="M100 196 H130" stroke="#e9e2cf" strokeWidth="3" />
                <rect x="126" y="150" width="200" height="120" rx="10" className="s-card" />
                <circle cx="160" cy="200" r="15" className="s-c" />
                <circle cx="204" cy="200" r="15" className="s-m" />
                <circle cx="248" cy="200" r="15" className="s-y" />
                <circle cx="292" cy="200" r="15" className="s-k" />
                <rect x="140" y="236" width="172" height="20" rx="5" fill="var(--bg)" stroke="var(--line)" />
                <rect x="346" y="170" width="84" height="100" rx="10" className="s-card" />
                <rect x="358" y="184" width="60" height="18" rx="3" className="s-mu" />
                <rect x="448" y="190" width="104" height="80" rx="10" className="s-card" />
                <path d="M460 230 H540" stroke="var(--muted)" strokeWidth="8" strokeLinecap="round" />
                <rect x="570" y="268" width="56" height="12" fill="#7a5b3a" />
                <rect x="574" y="226" width="48" height="42" fill="#e9e2cf" stroke="#bfb497" />
                <text x="62" y="330" textAnchor="middle" className="s-ts">
                  REEL
                </text>
                <text x="226" y="330" textAnchor="middle" className="s-ts">
                  PRESS
                </text>
                <text x="388" y="330" textAnchor="middle" className="s-ts">
                  CONVERT
                </text>
                <text x="500" y="330" textAnchor="middle" className="s-ts">
                  FINISH
                </text>
                <text x="598" y="330" textAnchor="middle" className="s-ts">
                  PALLET
                </text>
                <g className="pp-hot" data-i="0" tabIndex={0} role="button" aria-label="1 Material loaded">
                  <circle cx="62" cy="150" r="17" className="a-pulse" fill="var(--green-hi)" opacity=".5" />
                  <circle className="dot" cx="62" cy="150" r="15" />
                  <text x="62" y="155" textAnchor="middle">
                    1
                  </text>
                </g>
                <g className="pp-hot" data-i="1" tabIndex={0} role="button" aria-label="2 Makeready">
                  <circle cx="160" cy="118" r="17" className="a-pulse" fill="var(--green-hi)" opacity=".5" />
                  <circle className="dot" cx="160" cy="118" r="15" />
                  <text x="160" y="123" textAnchor="middle">
                    2
                  </text>
                </g>
                <g className="pp-hot" data-i="2" tabIndex={0} role="button" aria-label="3 Ink and colour">
                  <circle cx="248" cy="118" r="17" className="a-pulse" fill="var(--green-hi)" opacity=".5" />
                  <circle className="dot" cx="248" cy="118" r="15" />
                  <text x="248" y="123" textAnchor="middle">
                    3
                  </text>
                </g>
                <g className="pp-hot" data-i="3" tabIndex={0} role="button" aria-label="4 Running">
                  <circle cx="300" cy="246" r="17" className="a-pulse" fill="var(--green-hi)" opacity=".5" />
                  <circle className="dot" cx="300" cy="246" r="15" />
                  <text x="300" y="251" textAnchor="middle">
                    4
                  </text>
                </g>
                <g className="pp-hot" data-i="4" tabIndex={0} role="button" aria-label="5 Inline inspection">
                  <circle cx="336" cy="128" r="17" className="a-pulse" fill="var(--green-hi)" opacity=".5" />
                  <circle className="dot" cx="336" cy="128" r="15" />
                  <text x="336" y="133" textAnchor="middle">
                    5
                  </text>
                </g>
                <g className="pp-hot" data-i="5" tabIndex={0} role="button" aria-label="6 Die-cut and slit">
                  <circle cx="388" cy="140" r="17" className="a-pulse" fill="var(--green-hi)" opacity=".5" />
                  <circle className="dot" cx="388" cy="140" r="15" />
                  <text x="388" y="145" textAnchor="middle">
                    6
                  </text>
                </g>
                <g className="pp-hot" data-i="6" tabIndex={0} role="button" aria-label="7 Finish and pack">
                  <circle cx="500" cy="160" r="17" className="a-pulse" fill="var(--green-hi)" opacity=".5" />
                  <circle className="dot" cx="500" cy="160" r="15" />
                  <text x="500" y="165" textAnchor="middle">
                    7
                  </text>
                </g>
                <g className="pp-hot" data-i="7" tabIndex={0} role="button" aria-label="8 Pallet out">
                  <circle cx="598" cy="196" r="17" className="a-pulse" fill="var(--green-hi)" opacity=".5" />
                  <circle className="dot" cx="598" cy="196" r="15" />
                  <text x="598" y="201" textAnchor="middle">
                    8
                  </text>
                </g>
              </svg>
            </div>
            <ol className="pp-pts">
              <li data-i="0">
                <h3>
                  Material loaded
                </h3>
                <p>
                  The operator scans the board reel or pallet.
                  {" "}
                  <b>
                    SAP
                  </b>
                  {" "}
                  issues that exact batch to the job, so you know which mill reel went into which order.
                </p>
              </li>
              <li data-i="1">
                <h3>
                  Makeready
                </h3>
                <p>
                  Plates mounted, register set, startup sheets run.
                  {" "}
                  <b>
                    SAP
                  </b>
                  {" "}
                  records setup time and setup waste separately from the run, so makeready is costed and improved.
                </p>
              </li>
              <li data-i="2">
                <h3>
                  Ink and colour
                </h3>
                <p>
                  Colour matched to the brand standard.
                  {" "}
                  <b>
                    SAP
                  </b>
                  {" "}
                  stores Delta E and density readings as inspection results, and ink use is posted to the job.
                </p>
              </li>
              <li data-i="3">
                <h3>
                  Running
                </h3>
                <p>
                  Speed, stops and output change all shift.
                  {" "}
                  <b>
                    SAP Digital Manufacturing
                  </b>
                  {" "}
                  collects machine signals, downtime reasons and OEE, and confirms output to the order.
                </p>
              </li>
              <li data-i="4">
                <h3>
                  Inline inspection
                </h3>
                <p>
                  Cameras flag print defects.
                  {" "}
                  <b>
                    SAP
                  </b>
                  {" "}
                  logs defects by code, raises a quality notification when limits are hit, and keeps the evidence.
                </p>
              </li>
              <li data-i="5">
                <h3>
                  Die-cut and slit
                </h3>
                <p>
                  Sheets become blanks, master reels become child reels.
                  {" "}
                  <b>
                    SAP
                  </b>
                  {" "}
                  records each child reel as its own batch, with trim and scrap posted as by-products.
                </p>
              </li>
              <li data-i="6">
                <h3>
                  Finish and pack
                </h3>
                <p>
                  Folded, glued, counted and packed.
                  {" "}
                  <b>
                    SAP
                  </b>
                  {" "}
                  creates handling units with labels and records the final good quantity.
                </p>
              </li>
              <li data-i="7">
                <h3>
                  Pallet out
                </h3>
                <p>
                  The pallet leaves the line.
                  {" "}
                  <b>
                    SAP
                  </b>
                  {" "}
                  receives it into stock, blocked or released by quality, and the job's actual cost is complete.
                </p>
              </li>
            </ol>
          </div>
          <div className="pp-dash" aria-label="Illustrative shift dashboard">
            <div className="bar">
              <i>
                SAP
              </i>
              {" "}
              Press hall, shift B
              {" "}
              <span>
                Illustrative screen
              </span>
            </div>
            <div className="body">
              <div className="pp-tile">
                <div className="h">
                  OEE
                </div>
                <div className="s">
                  Press 2, this shift
                </div>
                <div className="v">
                  71
                  <small>
                    %
                  </small>
                </div>
              </div>
              <div className="pp-tile">
                <div className="h">
                  Waste
                </div>
                <div className="s">
                  Against estimate
                </div>
                <div className="v wr">
                  4.8
                  <small>
                    % vs 3.5
                  </small>
                </div>
              </div>
              <div className="pp-tile">
                <div className="h">
                  Makeready
                </div>
                <div className="s">
                  Average per job
                </div>
                <div className="v">
                  38
                  <small>
                    min
                  </small>
                </div>
              </div>
              <div className="pp-tile">
                <div className="h">
                  Jobs on time
                </div>
                <div className="s">
                  Due this week
                </div>
                <div className="v ok">
                  46
                  <small>
                    of 49
                  </small>
                </div>
              </div>
              <div className="pp-tile wide">
                <div className="h">
                  Downtime by reason
                </div>
                <div className="s">
                  Minutes, this shift
                </div>
                <div className="pp-bars">
                  <div>
                    <span>
                      Colour matching
                    </span>
                    <i className="a-grow" style={{ width: "100%" }} />
                    <span>
                      42
                    </span>
                  </div>
                  <div>
                    <span>
                      Plate change
                    </span>
                    <i className="a-grow" style={{ width: "64%" }} />
                    <span>
                      27
                    </span>
                  </div>
                  <div>
                    <span>
                      Waiting board
                    </span>
                    <i className="a-grow" style={{ width: "45%", background: "#e9730c" }} />
                    <span>
                      19
                    </span>
                  </div>
                  <div>
                    <span>
                      Web break
                    </span>
                    <i className="a-grow" style={{ width: "24%" }} />
                    <span>
                      10
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="pp-note">
            Figures on this screen are illustrative, not client data.
          </p>
        </div>
      </section>
      <section className="light" id="delivery">
        <div className="in">
          <span className="eyebrow">
            Planning and on-time delivery
          </span>
          <h2>
            Promise dates you can keep, then keep them.
          </h2>
          <p className="lede">
            On-time, in-full delivery is decided long before the truck leaves. It depends on an honest promise, a plan that respects the presses, and materials that arrive on time. SAP links all three.
          </p>
          <div className="pp-plan">
            <div className="pp-gantt">
              <div className="pp-scroll">
                <svg viewBox="0 0 640 300" role="img" aria-label="Illustrative press schedule grouping jobs by ink set and board to cut changeovers">
                  <text x="12" y="22" className="s-tg">
                    PRESS SCHEDULE · WEEK 46
                  </text>
                  <g className="s-ts">
                    <text x="150" y="48">
                      MON
                    </text>
                    <text x="246" y="48">
                      TUE
                    </text>
                    <text x="342" y="48">
                      WED
                    </text>
                    <text x="438" y="48">
                      THU
                    </text>
                    <text x="534" y="48">
                      FRI
                    </text>
                  </g>
                  <g className="s-ln" strokeWidth="1">
                    <path d="M140 56 V280" />
                    <path d="M236 56 V280" />
                    <path d="M332 56 V280" />
                    <path d="M428 56 V280" />
                    <path d="M524 56 V280" />
                    <path d="M620 56 V280" />
                  </g>
                  <g className="s-t">
                    <text x="12" y="90">
                      Offset 6-col
                    </text>
                    <text x="12" y="140">
                      Flexo 8-col
                    </text>
                    <text x="12" y="190">
                      Die-cutter
                    </text>
                    <text x="12" y="240">
                      Folder-gluer
                    </text>
                  </g>
                  <g fontFamily="Manrope, sans-serif" fontSize="11" fontWeight="700" fill="#fff">
                    <rect x="142" y="70" width="120" height="30" rx="6" fill="#1f7a5a" />
                    <text x="150" y="89">
                      Tea cartons ×4
                    </text>
                    <rect x="266" y="70" width="90" height="30" rx="6" fill="#1f7a5a" />
                    <text x="274" y="89">
                      Same inks
                    </text>
                    <rect x="360" y="70" width="150" height="30" rx="6" fill="#7a3f9c" />
                    <text x="368" y="89">
                      Cosmetics, foil
                    </text>
                    <rect x="514" y="70" width="104" height="30" rx="6" fill="#0a6ed1" />
                    <text x="522" y="89">
                      Pharma
                    </text>
                    <rect x="142" y="120" width="200" height="30" rx="6" fill="#b5651d" />
                    <text x="150" y="139">
                      Confectionery reels
                    </text>
                    <rect x="346" y="120" width="130" height="30" rx="6" fill="#b5651d" />
                    <text x="354" y="139">
                      Flow wrap
                    </text>
                    <rect x="480" y="120" width="138" height="30" rx="6" fill="#0d7c86" />
                    <text x="488" y="139">
                      FMCG sleeves
                    </text>
                    <rect x="190" y="170" width="120" height="30" rx="6" fill="#1f7a5a" />
                    <text x="198" y="189">
                      Tea cartons
                    </text>
                    <rect x="400" y="170" width="140" height="30" rx="6" fill="#7a3f9c" />
                    <text x="408" y="189">
                      Cosmetics
                    </text>
                    <rect x="250" y="220" width="130" height="30" rx="6" fill="#1f7a5a" />
                    <text x="258" y="239">
                      Tea cartons
                    </text>
                    <rect x="470" y="220" width="148" height="30" rx="6" fill="#7a3f9c" />
                    <text x="478" y="239">
                      Cosmetics
                    </text>
                  </g>
                  <g fill="none" stroke="#e9730c" strokeWidth="2" strokeDasharray="4 4">
                    <path d="M262 64 V106" />
                    <path d="M356 64 V106" />
                  </g>
                  <text x="268" y="62" fontFamily="Manrope, sans-serif" fontSize="10.5" fontWeight="800" fill="#e9730c">
                    No wash-up
                  </text>
                  <rect x="142" y="262" width="12" height="12" rx="3" fill="#e9730c" />
                  <text x="160" y="272" className="s-ts">
                    Grouped by board, ink set and die to cut changeovers
                  </text>
                </svg>
              </div>
              <p className="pp-note" style={{ padding: "0 6px 4px" }}>
                Illustrative schedule.
              </p>
            </div>
            <ol className="pp-promise">
              <li>
                <i>
                  1
                </i>
                <div>
                  <b>
                    Order in
                  </b>
                  <span>
                    From EDI, a brand portal, email or a sales rep, into one sales order or schedule line.
                  </span>
                </div>
              </li>
              <li>
                <i>
                  2
                </i>
                <div>
                  <b>
                    Availability check
                  </b>
                  <span>
                    Advanced ATP confirms against stock and planned supply, and protects allocations for key customers.
                  </span>
                </div>
              </li>
              <li>
                <i>
                  3
                </i>
                <div>
                  <b>
                    Capacity check
                  </b>
                  <span>
                    Planners see load by press and shift before confirming a date, not after.
                  </span>
                </div>
              </li>
              <li>
                <i>
                  4
                </i>
                <div>
                  <b>
                    Materials secured
                  </b>
                  <span>
                    Board, film and inks reserved or ordered, with supplier confirmations tracked.
                  </span>
                </div>
              </li>
              <li>
                <i>
                  5
                </i>
                <div>
                  <b>
                    Produced and released
                  </b>
                  <span>
                    Confirmations and quality release in real time, so sales sees progress without calling the floor.
                  </span>
                </div>
              </li>
              <li>
                <i>
                  6
                </i>
                <div>
                  <b>
                    Shipped and proven
                  </b>
                  <span>
                    Delivery, transport and proof of delivery recorded. OTIF measured per customer, automatically.
                  </span>
                </div>
              </li>
            </ol>
          </div>
          <div className="pp-grid3">
            <div>
              <h3>
                Call-offs and schedules
              </h3>
              <p>
                Scheduling agreements take forecast and just-in-time releases from big customers, so planning runs on their real demand.
              </p>
            </div>
            <div>
              <h3>
                Stock at the customer
              </h3>
              <p>
                Consignment and vendor-managed stock keep their filling lines running, and you bill on consumption.
              </p>
            </div>
            <div>
              <h3>
                Orders at risk
              </h3>
              <p>
                Backorder processing and alerts show which orders will miss, while there is still time to act.
              </p>
            </div>
            <div>
              <h3>
                Warehouse and dispatch
              </h3>
              <p>
                Batch-correct picking, pallet labels and loading in SAP Extended Warehouse Management.
              </p>
            </div>
            <div>
              <h3>
                Transport
              </h3>
              <p>
                Loads, carriers and freight cost planned and settled in SAP Transportation Management.
              </p>
            </div>
            <div>
              <h3>
                Finite scheduling, if you need it
              </h3>
              <p>
                Where you need detailed finite scheduling across many presses, we connect a specialist scheduler or use SAP Cloud ERP Private.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="procurement">
        <div className="in">
          <span className="eyebrow">
            Procurement
          </span>
          <h2>
            Board, film and ink are most of your cost. Buy them like it.
          </h2>
          <p className="lede">
            In packaging, materials are often 50 to 70 percent of the selling price, and most of them are imported. SAP plans what you need from real jobs, buys against contracts, and books the true landed cost.
          </p>
          <div className="pp-grid4">
            <div>
              <span className="pp-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="2.5" />
                </svg>
              </span>
              <h3>
                Board and paper
              </h3>
              <p>
                Reels and sheets by grade, GSM and mill, with reel numbers and test results kept as batch data.
              </p>
            </div>
            <div>
              <span className="pp-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </span>
              <h3>
                Films and foils
              </h3>
              <p>
                BOPP, PET, PE and foil laminates, plus hot-foil reels, bought by width and length.
              </p>
            </div>
            <div>
              <span className="pp-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 3c3 5 6 8 6 11a6 6 0 0 1-12 0c0-3 3-6 6-11z" />
                </svg>
              </span>
              <h3>
                Inks, coatings, adhesives
              </h3>
              <p>
                Often held on supplier consignment, so you pay only for what you use.
              </p>
            </div>
            <div>
              <span className="pp-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M8 8h8v8H8z" />
                </svg>
              </span>
              <h3>
                Plates, dies, cylinders
              </h3>
              <p>
                Bought per job or held as tools, with cost charged to the customer or spread across runs.
              </p>
            </div>
          </div>
          <div className="pp-pflow">
            <div>
              <b>
                Plan
              </b>
              <h3>
                Demand from jobs
              </h3>
              <p>
                MRP turns orders and forecasts into exact material needs by date.
              </p>
            </div>
            <div>
              <b>
                Source
              </b>
              <h3>
                Contracts with mills
              </h3>
              <p>
                Prices and volumes agreed per year, with call-offs released automatically.
              </p>
            </div>
            <div>
              <b>
                Import
              </b>
              <h3>
                Landed cost
              </h3>
              <p>
                Freight, duty, insurance and clearing loaded onto stock value.
              </p>
            </div>
            <div>
              <b>
                Receive
              </b>
              <h3>
                Batches and checks
              </h3>
              <p>
                Goods receipt by batch, with incoming inspection and certificates.
              </p>
            </div>
            <div>
              <b>
                Outsource
              </b>
              <h3>
                Subcontracting
              </h3>
              <p>
                Lamination, foiling or corrugation done outside, with material tracked.
              </p>
            </div>
            <div>
              <b>
                Pay
              </b>
              <h3>
                Three-way match
              </h3>
              <p>
                Invoice matched to order and receipt before it is paid.
              </p>
            </div>
          </div>
          <div className="pp-grid3">
            <div>
              <h3>
                Customer-supplied material
              </h3>
              <p>
                When a brand provides its own board or film, it is held as customer stock, not on your balance sheet.
              </p>
            </div>
            <div>
              <h3>
                Chain of custody
              </h3>
              <p>
                FSC or PEFC claims carried on the batch from receipt to the delivery note.
              </p>
            </div>
            <div>
              <h3>
                Supplier performance
              </h3>
              <p>
                Delivery, quality and price scored per supplier, so the mill review uses facts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="light" id="finance">
        <div className="in">
          <span className="eyebrow">
            Finance
          </span>
          <h2>
            Know the real margin of every job, the day it ships.
          </h2>
          <p className="lede">
            Every confirmation on the floor and every receipt in the store is a financial event. SAP posts it as it happens, so work in progress, variances and margin are always current, not a month-end surprise.
          </p>
          <figure className="pp-fin" aria-label="Illustration: costs flow from materials and machine time into the job, then into stock, delivery and margin">
            <div className="pp-scroll">
              <svg viewBox="0 0 1100 330" role="img" aria-hidden="true">
                <g fontFamily="Manrope, sans-serif">
                  <g className="s-gl a-flow" strokeWidth="3">
                    <path d="M210 50 C 300 50, 300 165, 400 165" />
                    <path d="M210 110 C 300 110, 300 165, 400 165" />
                    <path d="M210 170 H400" />
                    <path d="M210 230 C 300 230, 300 165, 400 165" />
                    <path d="M210 290 C 300 290, 300 165, 400 165" />
                    <path d="M560 165 H640" />
                    <path d="M800 165 H860" />
                    <path d="M1000 165 C 1030 165, 1030 70, 1060 70" />
                    <path d="M1000 165 C 1030 165, 1030 260, 1060 260" />
                  </g>
                  <g>
                    <rect x="20" y="28" width="190" height="44" rx="10" className="s-card" />
                    <text x="36" y="55" className="s-t">
                      Board and film
                    </text>
                    <rect x="20" y="88" width="190" height="44" rx="10" className="s-card" />
                    <text x="36" y="115" className="s-t">
                      Inks, foils, plates
                    </text>
                    <rect x="20" y="148" width="190" height="44" rx="10" className="s-card" />
                    <text x="36" y="175" className="s-t">
                      Makeready time
                    </text>
                    <rect x="20" y="208" width="190" height="44" rx="10" className="s-card" />
                    <text x="36" y="235" className="s-t">
                      Run time and labour
                    </text>
                    <rect x="20" y="268" width="190" height="44" rx="10" className="s-card" />
                    <text x="36" y="295" className="s-t">
                      Overheads, subcontract
                    </text>
                  </g>
                  <rect x="400" y="120" width="160" height="90" rx="14" fill="#0e3a2b" stroke="#34b386" strokeWidth="2" />
                  <text x="480" y="156" textAnchor="middle" fontSize="15" fontWeight="800" fill="#eef3f0">
                    Job order
                  </text>
                  <text x="480" y="178" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#a9bab2">
                    WIP posted live
                  </text>
                  <text x="480" y="195" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#a9bab2">
                    Variances by cause
                  </text>
                  <rect x="640" y="130" width="160" height="70" rx="14" className="s-card" />
                  <text x="720" y="162" textAnchor="middle" className="s-t">
                    Finished stock
                  </text>
                  <text x="720" y="182" textAnchor="middle" className="s-ts">
                    BY BATCH
                  </text>
                  <rect x="860" y="130" width="140" height="70" rx="14" className="s-card" />
                  <text x="930" y="162" textAnchor="middle" className="s-t">
                    Delivered
                  </text>
                  <text x="930" y="182" textAnchor="middle" className="s-ts">
                    BILLED
                  </text>
                  <rect x="1060" y="40" width="30" height="60" rx="6" className="s-g" />
                  <rect x="1060" y="230" width="30" height="60" rx="6" fill="#e9730c" />
                  <text x="1050" y="30" textAnchor="end" className="s-tg">
                    MARGIN BY JOB, CUSTOMER, MACHINE
                  </text>
                  <text x="1050" y="318" textAnchor="end" fontSize="11" fontWeight="800" fill="#e9730c" letterSpacing=".08em">
                    COST OF WASTE AND REJECTS
                  </text>
                </g>
              </svg>
            </div>
          </figure>
          <div className="pp-eva">
            <div>
              <ul className="pp-ul">
                <li>
                  <b>
                    Event-based costing.
                  </b>
                  {" "}
                  <span>
                    Work in progress and variances update with every confirmation, not at period end.
                  </span>
                </li>
                <li>
                  <b>
                    Margin analysis.
                  </b>
                  {" "}
                  <span>
                    Revenue and cost by job, customer, brand, market, product type and machine.
                  </span>
                </li>
                <li>
                  <b>
                    Multi-currency.
                  </b>
                  {" "}
                  <span>
                    Export sales in USD or EUR, imports in other currencies, books in LKR, with realised and unrealised gains.
                  </span>
                </li>
                <li>
                  <b>
                    Group and intercompany.
                  </b>
                  {" "}
                  <span>
                    Plants overseas trade with Sri Lanka as separate companies, with intercompany billing and group close.
                  </span>
                </li>
                <li>
                  <b>
                    Credit and collections.
                  </b>
                  {" "}
                  <span>
                    Credit limits checked before release, and collections worked from one list.
                  </span>
                </li>
                <li>
                  <b>
                    Local tax.
                  </b>
                  {" "}
                  <span>
                    Sri Lankan tax and statutory reporting handled in our implementation, as on our live SAP Cloud ERP projects here.
                  </span>
                </li>
              </ul>
            </div>
            <div className="tb">
              <table>
                <thead>
                  <tr>
                    <th>
                      Job 24-1187, tea cartons
                    </th>
                    <th>
                      Estimate
                    </th>
                    <th>
                      Actual
                    </th>
                    <th>
                      Variance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Board
                    </td>
                    <td>
                      1,840
                    </td>
                    <td>
                      1,912
                    </td>
                    <td className="neg">
                      +72
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Inks and coating
                    </td>
                    <td>
                      310
                    </td>
                    <td>
                      296
                    </td>
                    <td className="pos">
                      -14
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Makeready
                    </td>
                    <td>
                      220
                    </td>
                    <td>
                      305
                    </td>
                    <td className="neg">
                      +85
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Run and finishing
                    </td>
                    <td>
                      640
                    </td>
                    <td>
                      618
                    </td>
                    <td className="pos">
                      -22
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Waste
                    </td>
                    <td>
                      110
                    </td>
                    <td>
                      168
                    </td>
                    <td className="neg">
                      +58
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Job cost
                    </td>
                    <td>
                      3,120
                    </td>
                    <td>
                      3,299
                    </td>
                    <td className="neg">
                      +179
                    </td>
                  </tr>
                </tbody>
                <caption>
                  Illustrative figures in USD. The point is the view: makeready and waste explain most of this job's overrun.
                </caption>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section id="quality">
        <div className="in">
          <span className="eyebrow">
            Quality and traceability
          </span>
          <h2>
            When a brand calls about a batch, answer in minutes.
          </h2>
          <p className="lede">
            Brand owners audit their packaging suppliers. They ask which board, which ink and which shift. SAP keeps that chain for every delivery, both ways: from the customer back to the mill, and from a suspect ink batch forward to every customer who received it.
          </p>
          <div className="pp-trace">
            <div className="fig">
              <svg viewBox="0 0 640 330" role="img" aria-label="Trace tree from a customer delivery back to raw material batches and supplier certificates">
                <g className="s-gl a-draw" strokeWidth="2">
                  <path d="M120 165 H200" />
                  <path d="M320 165 C 360 165, 360 70, 400 70" />
                  <path d="M320 165 H400" />
                  <path d="M320 165 C 360 165, 360 260, 400 260" />
                  <path d="M520 70 H560" />
                  <path d="M520 165 H560" />
                  <path d="M520 260 H560" />
                </g>
                <rect x="10" y="135" width="110" height="60" rx="10" fill="#0e3a2b" stroke="#34b386" />
                <text x="65" y="161" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="800" fill="#eef3f0">
                  Delivery
                </text>
                <text x="65" y="179" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="10.5" fill="#a9bab2">
                  Customer A
                </text>
                <rect x="200" y="135" width="120" height="60" rx="10" className="s-card" />
                <text x="260" y="161" textAnchor="middle" className="s-t">
                  Batch FG-0912
                </text>
                <text x="260" y="179" textAnchor="middle" className="s-ts">
                  JOB 24-1187
                </text>
                <rect x="400" y="40" width="120" height="60" rx="10" className="s-card" />
                <text x="460" y="66" textAnchor="middle" className="s-t">
                  Board reel
                </text>
                <text x="460" y="84" textAnchor="middle" className="s-ts">
                  MILL R-55821
                </text>
                <rect x="400" y="135" width="120" height="60" rx="10" className="s-card" />
                <text x="460" y="161" textAnchor="middle" className="s-t">
                  Ink batch
                </text>
                <text x="460" y="179" textAnchor="middle" className="s-ts">
                  CYAN LM-0447
                </text>
                <rect x="400" y="230" width="120" height="60" rx="10" className="s-card" />
                <text x="460" y="256" textAnchor="middle" className="s-t">
                  Plate and die
                </text>
                <text x="460" y="274" textAnchor="middle" className="s-ts">
                  DIE D-118, RUN 41
                </text>
                <g>
                  <rect x="560" y="52" width="70" height="36" rx="8" className="s-card" />
                  <text x="595" y="75" textAnchor="middle" className="s-tg">
                    COA
                  </text>
                </g>
                <g>
                  <rect x="560" y="147" width="70" height="36" rx="8" className="s-card" />
                  <text x="595" y="170" textAnchor="middle" className="s-tg">
                    DOC
                  </text>
                </g>
                <g>
                  <rect x="560" y="242" width="70" height="36" rx="8" className="s-card" />
                  <text x="595" y="265" textAnchor="middle" className="s-tg">
                    QC
                  </text>
                </g>
                <text x="10" y="320" className="s-ts">
                  Shift B · Press 2 · operator and inspection results on the batch
                </text>
              </svg>
            </div>
            <div>
              <ul className="pp-ul">
                <li>
                  <b>
                    Batch genealogy.
                  </b>
                  {" "}
                  <span>
                    Where-used and where-from for every batch, from reel to pallet.
                  </span>
                </li>
                <li>
                  <b>
                    Inspection plans.
                  </b>
                  {" "}
                  <span>
                    Colour, dimensions, registration, glue strength and barcode grade, with tolerances per customer.
                  </span>
                </li>
                <li>
                  <b>
                    Quality notifications.
                  </b>
                  {" "}
                  <span>
                    Customer complaints and internal defects with root cause and corrective actions.
                  </span>
                </li>
                <li>
                  <b>
                    Certificates.
                  </b>
                  {" "}
                  <span>
                    Supplier certificates kept on receipt, and certificates issued to customers with the delivery.
                  </span>
                </li>
              </ul>
              <div className="pp-std" aria-label="Standards your customers audit against">
                <span>
                  ISO 9001
                </span>
                <span>
                  FSSC 22000
                </span>
                <span>
                  BRCGS Packaging
                </span>
                <span>
                  GMP for packaging
                </span>
                <span>
                  FSC and PEFC
                </span>
                <span>
                  Ethical audits
                </span>
              </div>
              <p className="pp-note">
                SAP keeps the records these audits ask for. Certification stays with you and your auditor.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="light" id="world">
        <div className="in">
          <span className="eyebrow">
            Sri Lanka and overseas
          </span>
          <h2>
            One system for a Colombo plant and a plant next to your customers abroad.
          </h2>
          <p className="lede">
            Brands want packaging made close to where they fill or sew. SAP runs several plants and companies on one platform, so a job can be quoted in Colombo, produced in Dhaka or Chennai and reported as one business.
          </p>
          <div className="pp-world">
            <div className="fig">
              <svg viewBox="0 0 560 360" role="img" aria-label="Illustration: a Sri Lanka hub connected to plants and customers across South Asia, the Middle East, Europe and beyond">
                <g className="s-gl a-flow" strokeWidth="2">
                  <path d="M300 250 C 280 180, 250 150, 230 120" />
                  <path d="M300 250 C 330 200, 360 170, 380 150" />
                  <path d="M300 250 C 380 240, 440 220, 470 200" />
                  <path d="M300 250 C 220 230, 150 190, 110 160" />
                  <path d="M300 250 C 230 160, 140 90, 70 60" />
                  <path d="M300 250 C 380 280, 450 300, 500 310" />
                </g>
                <circle cx="300" cy="250" r="22" className="s-g a-pulse" opacity=".4" />
                <circle cx="300" cy="250" r="12" className="s-g" />
                <text x="300" y="285" textAnchor="middle" className="s-t">
                  Sri Lanka
                </text>
                <g className="s-t" fontSize="12">
                  <circle cx="230" cy="120" r="7" className="s-fg" />
                  <text x="238" y="112">
                    India
                  </text>
                  <circle cx="380" cy="150" r="7" className="s-fg" />
                  <text x="390" y="146">
                    Bangladesh
                  </text>
                  <circle cx="470" cy="200" r="7" className="s-fg" />
                  <text x="480" y="196">
                    Vietnam
                  </text>
                  <circle cx="110" cy="160" r="7" className="s-fg" />
                  <text x="40" y="186">
                    Middle East
                  </text>
                  <circle cx="70" cy="60" r="7" className="s-fg" />
                  <text x="82" y="52">
                    Europe and UK
                  </text>
                  <circle cx="500" cy="310" r="7" className="s-fg" />
                  <text x="430" y="336">
                    Australia
                  </text>
                </g>
              </svg>
            </div>
            <div className="pp-grid3" style={{ gridTemplateColumns: "minmax(0,1fr)", marginTop: "0" }}>
              <div>
                <h3>
                  Many plants, one plan
                </h3>
                <p>
                  Stock transfers and intercompany sales between plants, with demand routed to the plant with the capacity and the closest customer.
                </p>
              </div>
              <div>
                <h3>
                  Export done properly
                </h3>
                <p>
                  Export documents, multiple currencies and price lists per market, with the label languages and markings each importer needs.
                </p>
              </div>
              <div>
                <h3>
                  Local rules, global view
                </h3>
                <p>
                  SAP covers tax and reporting for many countries out of the box, and we add what Sri Lanka needs. Group results are consolidated in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="platform">
        <div className="in">
          <span className="eyebrow">
            The platform
          </span>
          <h2>
            A clean core in the middle, your specialist tools around it.
          </h2>
          <p className="lede">
            Printers rely on specialist software for prepress, colour and label design. We keep those, connect them to SAP through standard interfaces, and keep the SAP core standard so upgrades stay simple.
          </p>
          <div className="pp-arch">
            <div className="pp-arow">
              <div className="lab">
                Your customers
              </div>
              <div className="cells">
                <div>
                  <b>
                    Brand portals and EDI
                  </b>
                  <span>
                    Orders, call-offs, artwork
                  </span>
                </div>
                <div>
                  <b>
                    Customer self-service
                  </b>
                  <span>
                    Order status and documents
                  </span>
                </div>
              </div>
            </div>
            <div className="pp-arow">
              <div className="lab">
                Plan and decide
              </div>
              <div className="cells">
                <div>
                  <b>
                    SAP IBP
                  </b>
                  <span>
                    Demand, supply and S&amp;OP
                  </span>
                </div>
                <div>
                  <b>
                    SAP Analytics Cloud
                  </b>
                  <span>
                    Margin, OTIF and waste
                  </span>
                </div>
                <div>
                  <b>
                    SAP Business Data Cloud
                  </b>
                  <span>
                    One data foundation
                  </span>
                </div>
              </div>
            </div>
            <div className="pp-arow core">
              <div className="lab">
                Run the business
              </div>
              <div className="cells">
                <div>
                  <b>
                    SAP Cloud ERP
                  </b>
                  <span>
                    Sales, planning, procurement, production, quality, warehouse, finance
                  </span>
                </div>
                <div>
                  <b>
                    Joule
                  </b>
                  <span>
                    AI assistant across SAP
                  </span>
                </div>
              </div>
            </div>
            <div className="pp-arow">
              <div className="lab">
                Run the floor
              </div>
              <div className="cells">
                <div>
                  <b>
                    SAP Digital Manufacturing
                  </b>
                  <span>
                    Machine data, OEE, operator screens
                  </span>
                </div>
                <div>
                  <b>
                    Vision and coding systems
                  </b>
                  <span>
                    Inspection and variable data
                  </span>
                </div>
              </div>
            </div>
            <div className="pp-arow">
              <div className="lab">
                Connect and extend
              </div>
              <div className="cells">
                <div>
                  <b>
                    SAP Integration Suite
                  </b>
                  <span>
                    Prepress, artwork, label and RFID systems
                  </span>
                </div>
                <div>
                  <b>
                    SAP BTP
                  </b>
                  <span>
                    Estimating screens, apps and AI built by Mawkish
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="light" id="ai">
        <div className="in">
          <span className="eyebrow">
            AI in the plant
          </span>
          <h2>
            AI that works on your data, not a demo.
          </h2>
          <p className="lede">
            With jobs, materials and machine data on one platform, AI has something real to work with. These are the uses we design for converters.
          </p>
          <div className="pp-ai">
            <div>
              <span className="t">
                Estimating
              </span>
              <h3>
                Quote from a spec in minutes
              </h3>
              <p>
                An assistant reads the customer's RFQ, proposes the configuration and flags the closest past jobs and their real margins.
              </p>
            </div>
            <div>
              <span className="t">
                Waste
              </span>
              <h3>
                Spot the drift early
              </h3>
              <p>
                Patterns in waste and downtime by press, board grade and shift, surfaced before they become a monthly loss.
              </p>
            </div>
            <div>
              <span className="t">
                Quality
              </span>
              <h3>
                Complaints with context
              </h3>
              <p>
                A complaint arrives with the batch, the shift, the inspection results and similar past cases already attached.
              </p>
            </div>
            <div>
              <span className="t">
                Planning
              </span>
              <h3>
                Ask the plan
              </h3>
              <p>
                Planners ask Joule which orders are at risk this week and why, and get an answer from live data.
              </p>
            </div>
            <div>
              <span className="t">
                Finance
              </span>
              <h3>
                Collections and disputes
              </h3>
              <p>
                Agents that prepare dunning, match payments and assemble dispute evidence such as delivery proofs.
              </p>
            </div>
            <div>
              <span className="t">
                Procurement
              </span>
              <h3>
                Watch material risk
              </h3>
              <p>
                Alerts when a mill delivery slips against jobs already promised, with alternatives suggested.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="start">
        <div className="in">
          <span className="eyebrow">
            How we start
          </span>
          <h2>
            We begin on your shop floor, not in a slide deck.
          </h2>
          <p className="lede">
            Our first step is to walk your plant and follow real jobs. You get an honest view of where SAP fits, where it does not, and what it would take.
          </p>
          <div className="pp-start">
            <div>
              <span className="n">
                01
              </span>
              <h3>
                Plant walk and job trace
              </h3>
              <p>
                We follow three of your real jobs from enquiry to invoice, and map where time, material and margin are lost.
              </p>
              <span className="d">
                One to two days on site
              </span>
            </div>
            <div>
              <span className="n">
                02
              </span>
              <h3>
                Fit to standard on your jobs
              </h3>
              <p>
                We show your jobs running in SAP: a configured quote, a production order, a confirmation and a margin report.
              </p>
              <span className="d">
                Working sessions with your team
              </span>
            </div>
            <div>
              <span className="n">
                03
              </span>
              <h3>
                Roadmap and edition
              </h3>
              <p>
                A scope, a phased plan and a recommendation: SAP Cloud ERP for standard fit, or SAP Cloud ERP Private where you need more.
              </p>
              <span className="d">
                A plan you can take to the board
              </span>
            </div>
          </div>
          <div className="pp-proof">
            <div>
              <span className="tag">
                In progress
              </span>
              <h3>
                Ceylon Beverage Can, Sri Lanka and India
              </h3>
              <p>
                Aluminium can manufacturing for beverage brands, moving to SAP Cloud ERP with GROW with SAP across plants in Sri Lanka and Chennai. High-speed packaging production, brand-owner customers, export and intercompany, the same patterns this page describes.
              </p>
              <p style={{ marginTop: "14px" }}>
                <Link href="/clients">
                  See our clients →
                </Link>
              </p>
            </div>
            <div>
              <h3>
                Why Mawkish
              </h3>
              <ul className="pp-ul" style={{ marginTop: "12px" }}>
                <li>
                  <span>
                    SAP Cloud ERP projects live and in delivery in Sri Lanka, including manufacturers and tea exporters.
                  </span>
                </li>
                <li>
                  <span>
                    We know your customers' industries: tea, food, FMCG and apparel are our home markets.
                  </span>
                </li>
                <li>
                  <span>
                    Local team in Colombo, working across South Asia.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CopyrightNotice inline />
      <section className="light" id="faq">
        <div className="in">
          <span className="eyebrow">
            Questions
          </span>
          <h2>
            What converters ask us first.
          </h2>
          <div className="pp-faq">
            <details>
              <summary>
                Will SAP replace our print MIS or estimating tool?
              </summary>
              <p>
                Often yes for estimating, ordering, planning, costing and finance, using variant configuration. Specialist prepress, colour management and label design tools usually stay, and connect to SAP. We decide this with you during the plant walk.
              </p>
            </details>
            <details>
              <summary>
                Can SAP handle gang runs, where several jobs share one sheet?
              </summary>
              <p>
                Yes. Several orders can be combined into one production run and costs split back to each original order, so each customer's margin stays correct.
              </p>
            </details>
            <details>
              <summary>
                Our presses are different ages. Can we still collect machine data?
              </summary>
              <p>
                Yes. Newer presses connect directly. Older ones use simple sensors or operator tablets. SAP Digital Manufacturing brings both into one view, and you can start with tablets and add machine signals later.
              </p>
            </details>
            <details>
              <summary>
                Which SAP edition fits a converter?
              </summary>
              <p>
                SAP Cloud ERP fits most converters, with standard processes and regular updates. If you need detailed finite scheduling across many presses, or deeper industry features, SAP Cloud ERP Private is the option. We recommend one after fit to standard, not before.
              </p>
            </details>
            <details>
              <summary>
                Do you support Sri Lankan tax and reporting?
              </summary>
              <p>
                Yes. We run SAP Cloud ERP for Sri Lankan companies today and cover local tax and statutory reporting in our implementation.
              </p>
            </details>
            <details>
              <summary>
                How long does it take?
              </summary>
              <p>
                It depends on plants, scope and data. A single-plant converter on SAP Cloud ERP is typically a matter of months, not years. You get a real plan after the fit-to-standard step.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section id="book">
        <div className="in">
          <div className="cta-band">
            <div>
              <span className="eyebrow">
                Next step
              </span>
              <h2>
                Let's walk your plant together.
              </h2>
              <p className="lede" style={{ color: "#a9bab2" }}>
                One day on your floor with our SAP manufacturing and finance consultants. You leave with a map of where margin is lost and how SAP would close the gaps.
              </p>
              <div style={{ marginTop: "28px" }}>
                <Link href="/contact" className="btn pri">
                  Schedule a plant walk →
                </Link>
              </div>
            </div>
            <ul style={{ color: "#eef3f0" }}>
              <li>
                Three real jobs traced end to end
              </li>
              <li>
                Where waste and margin leak
              </li>
              <li>
                The right SAP edition and a first roadmap
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
