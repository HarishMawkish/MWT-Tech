import Link from "next/link";
import { LogoMark } from "./Logo";
import { navLinks } from "@/lib/site-data";
// The same nine industries the header menu and /industries page use, so the
// footer cannot drift out of step with them.
import { industriesMenu } from "@/lib/industries-menu";
import { servicesMenu } from "@/lib/services-menu";

const socials = [
  { label: "LinkedIn", href: "https://lk.linkedin.com/company/mawkishtech" },
  { label: "Instagram", href: "https://www.instagram.com/mawkish.technologies/" },
];

// The SAP pages the footer lists, named as they are in the services menu.
const sapServices = [
  { label: "GROW with SAP", href: "/services/sap-solutions/grow-with-sap" },
  { label: "RISE with SAP", href: "/services/sap-solutions/rise-with-sap" },
  { label: "SAP Business AI", href: "/services/sap-solutions/sap-business-ai" },
  { label: "Joule & AI Agents", href: "/services/sap-solutions/joule-and-ai-agents" },
  { label: "SAP Business Data Cloud", href: "/services/sap-solutions/sap-business-data-cloud" },
  { label: "SAP BTP Extensions & Apps", href: "/services/sap-solutions/sap-btp-extensions-and-apps" },
  { label: "Licensing & Commercial Advisory", href: "/services/sap-solutions/licensing-and-commercial-advisory" },
];

// The main services from the header's services menu (the entries that have a page of their own).
const mainServices = servicesMenu.flatMap((c) => (c.href ? [{ label: c.label, href: c.href }] : []));

export function Footer() {
  return (
    <footer className="mw-dark-section border-t border-white/10 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.8fr_1fr_1.1fr_1fr_1fr] xl:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-10 w-10" />
              <span className="font-display tracking-wide text-base text-white">MAWKISH TECHNOLOGIES</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium transition hover:border-mw-mint hover:text-mw-mint lg:min-h-0 lg:px-3"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.filter((l) => !("children" in l && l.children)).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-mw-mint">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="transition hover:text-mw-mint">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">Industries</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {industriesMenu.slice(0, 5).map((i) => (
                <li key={i.k}>
                  <Link href="/industries" className="transition hover:text-mw-mint">
                    {i.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">SAP Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {sapServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="transition hover:text-mw-mint">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="transition hover:text-mw-mint">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Mawkish Technologies. All rights reserved.</p>
          <p>Colombo, Sri Lanka &middot; Serving Sri Lanka, India, UAE &amp; beyond</p>
        </div>
      </div>
    </footer>
  );
}
