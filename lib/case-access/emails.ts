import { clients } from "@/components/clients/data";
import { absoluteUrl, brand } from "@/lib/seo";

// The two emails sent when someone registers to read the case studies: a welcome to the visitor, and a full
// summary of their details to the sales inbox. These only build the message; sending is in mailer.ts.
// The voice is the one used across the SAP service pages: plain, specific, outcome-led, British spelling, and
// nothing promised that the site does not already say.

export const NOTIFY_TO = "nafaz@mawkishtechnologies.com";
export const NOTIFY_CC = "info@mawkishtechnologies.com";
export const REPLY_TO = "info@mawkishtechnologies.com";
const ADDRESS = "2nd Floor, Oceanica Tower, 490 Galle Rd, Colombo 00300, Sri Lanka";

/** The consent wording shown beside the checkbox, kept here so the record we email matches what the visitor agreed to. */
export const CONSENT_TEXT =
  "I agree that Mawkish Technologies may contact me about this request, as described in its privacy notice.";

export type Registration = {
  name: string;
  company: string;
  email: string;
  domain: string;
  /** The mail servers found for the domain. */
  mx: string[];
  /** The case study they were reading when they registered, if any. */
  caseId?: string;
  submittedAt: Date;
  ip: string;
  userAgent: string;
  referrer: string;
  /** From the host's geolocation headers, when it provides them. */
  location: string;
};

export type Message = { subject: string; text: string; html: string };

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

/** Header-safe single line: no line breaks, so a name can never add headers to the message. */
const oneLine = (s: string) => s.replace(/\s+/g, " ").trim();

const firstName = (name: string) => oneLine(name).split(/\s+/)[0] || "there";

const caseOf = (id?: string) => clients.find((c) => c.id === id);

const GREEN = "#17694b";
const INK = "#142019";
const MUTED = "#55655e";

function shell(preheader: string, inner: string) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(brand.name)}</title></head>
<body style="margin:0;padding:0;background:#f2f5f3;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f5f3;"><tr><td align="center" style="padding:28px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;color:${INK};">
<tr><td style="background:#0a1a14;padding:22px 32px;color:#ffffff;font-size:15px;font-weight:700;letter-spacing:.02em;">${esc(brand.name)}</td></tr>
<tr><td style="padding:32px;font-size:15px;line-height:1.6;">${inner}</td></tr>
<tr><td style="padding:20px 32px;background:#f7faf8;border-top:1px solid #e1e9e4;font-size:12px;line-height:1.6;color:${MUTED};">${esc(brand.name)} Pvt Ltd<br>${esc(ADDRESS)}</td></tr>
</table></td></tr></table></body></html>`;
}

const button = (href: string, label: string) =>
  `<a href="${esc(href)}" style="display:inline-block;background:${GREEN};color:#ffffff;text-decoration:none;font-weight:700;font-size:13px;letter-spacing:.06em;text-transform:uppercase;padding:13px 22px;border-radius:8px;">${esc(label)}</a>`;

/** To the visitor: confirms their access and invites the next step. */
export function buildWelcomeEmail(r: Registration): Message {
  const hello = firstName(r.name);
  const opened = caseOf(r.caseId);
  const clientsUrl = absoluteUrl("/clients");
  const contactUrl = absoluteUrl("/contact");

  const subject = "Your Mawkish case studies are open";
  const lead = opened
    ? `You were reading how we worked with ${opened.n}. That one, and every other case study on our Clients page, is now open to you on this device. You won't be asked again.`
    : "Every case study on our Clients page is now open to you on this device. You won't be asked again.";
  const body =
    "Each one shows what we deployed, the business problems it resolved and how the systems were connected, for companies in Sri Lanka and India that run on SAP and Salesforce.";
  const next =
    "If one of them looks like your situation, tell us where you are today and where you want to be. We'll share how companies like yours made the move, and what it would take for you.";

  const text = [
    `Hello ${hello},`,
    "",
    "Thank you for your interest in our work.",
    "",
    lead,
    "",
    body,
    "",
    `Read the case studies: ${clientsUrl}`,
    "",
    next,
    "",
    `Schedule a consultation: ${contactUrl}`,
    "",
    "Kind regards,",
    `The ${brand.name} team`,
    ADDRESS,
    "",
    `You're receiving this because you asked to read our case studies at ${clientsUrl}. If that wasn't you, reply to this email and we'll remove your details.`,
  ].join("\n");

  const html = shell(
    "Every case study on our Clients page is now open to you.",
    `<p style="margin:0 0 16px;">Hello ${esc(hello)},</p>
<p style="margin:0 0 16px;">Thank you for your interest in our work.</p>
<p style="margin:0 0 16px;">${esc(lead)}</p>
<p style="margin:0 0 24px;color:${MUTED};">${esc(body)}</p>
<p style="margin:0 0 28px;">${button(clientsUrl, "Read the case studies")}</p>
<p style="margin:0 0 16px;">${esc(next)}</p>
<p style="margin:0 0 28px;"><a href="${esc(contactUrl)}" style="color:${GREEN};font-weight:700;">Schedule a consultation &rarr;</a></p>
<p style="margin:0 0 4px;">Kind regards,</p>
<p style="margin:0 0 24px;font-weight:700;">The ${esc(brand.name)} team</p>
<p style="margin:0;font-size:12px;color:${MUTED};">You're receiving this because you asked to read our case studies at ${esc(clientsUrl)}. If that wasn't you, reply to this email and we'll remove your details.</p>`
  );

  return { subject, text, html };
}

function when(d: Date) {
  const colombo = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Colombo",
    dateStyle: "full",
    timeStyle: "short",
  }).format(d);
  return `${colombo} (Colombo) · ${d.toISOString()}`;
}

/** To the sales inbox: everything we know about the person who just registered. */
export function buildLeadNotification(r: Registration): Message {
  const opened = caseOf(r.caseId);
  const rows: [string, string][] = [
    ["Name", oneLine(r.name)],
    ["Company", oneLine(r.company)],
    ["Work email", r.email],
    ["Email domain", r.domain],
    ["Email verified", "Yes: they entered the one-time code we sent to this address"],
    ["Domain check", r.mx.length ? `Passed. Mail servers: ${r.mx.slice(0, 3).join(", ")}` : "Passed"],
    ["Case study open", opened ? `${opened.n}: ${opened.t}` : "None (registered from the Clients list)"],
    ["Consent given", `Yes: "${CONSENT_TEXT}"`],
    ["Registered", when(r.submittedAt)],
    ["Location (approx.)", r.location || "Not available"],
    ["IP address", r.ip],
    ["Browser", r.userAgent || "Not available"],
    ["Came from", r.referrer || "Direct"],
    ["Access", "Unlocked for 12 months on that browser. They will not be asked again."],
  ];

  const subject = `New case-study reader: ${oneLine(r.name)}, ${oneLine(r.company)} (${r.domain})`;

  const text = [
    "Someone has registered to read the case studies.",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Reply to this email to reach them directly.",
    "",
    "Checks passed before access was given: valid address, not a personal or temporary mailbox, not on the competitor blocklist, and the domain has working mail servers. The person then entered a one-time code we emailed to that address, so they can read that inbox.",
  ].join("\n");

  const tr = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:9px 14px 9px 0;border-top:1px solid #e1e9e4;color:${MUTED};font-size:13px;white-space:nowrap;vertical-align:top;">${esc(k)}</td><td style="padding:9px 0;border-top:1px solid #e1e9e4;font-size:14px;word-break:break-word;">${esc(v)}</td></tr>`
    )
    .join("");

  const html = shell(
    `${oneLine(r.name)} from ${oneLine(r.company)} is reading the case studies.`,
    `<p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${GREEN};">New case-study reader</p>
<h1 style="margin:0 0 20px;font-size:22px;line-height:1.25;">${esc(oneLine(r.name))}, ${esc(oneLine(r.company))}</h1>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${tr}</table>
<p style="margin:22px 0 0;">${button(`mailto:${encodeURIComponent(r.email)}`, "Reply to " + firstName(r.name))}</p>
<p style="margin:22px 0 0;font-size:12px;line-height:1.6;color:${MUTED};">Checks passed before access was given: valid address, not a personal or temporary mailbox, not on the competitor blocklist, and the domain has working mail servers. The person then entered a one-time code we emailed to that address, so they can read that inbox.</p>`
  );

  return { subject, text, html };
}


/** To the visitor, first: the one-time code that proves they can read this inbox. */
export function buildCodeEmail(name: string, code: string, minutes: number): Message {
  const hello = firstName(name);
  const subject = `Your ${brand.name} verification code: ${code}`;

  const text = [
    `Hello ${hello},`,
    "",
    "Your verification code for the case studies is:",
    "",
    code,
    "",
    `It works for ${minutes} minutes. Enter it on the page you were just on.`,
    "",
    "If you didn't ask for this, you can ignore this email. Nobody can open the case studies without the code.",
    "",
    `The ${brand.name} team`,
    ADDRESS,
  ].join("\n");

  const html = shell(
    `Your verification code is ${code}.`,
    `<p style="margin:0 0 16px;">Hello ${esc(hello)},</p>
<p style="margin:0 0 20px;">Your verification code for the case studies is:</p>
<p style="margin:0 0 24px;"><span style="display:inline-block;background:#f2f5f3;border:1px solid #e1e9e4;border-radius:10px;padding:14px 22px;font-family:'Courier New',monospace;font-size:28px;font-weight:700;letter-spacing:.2em;color:${INK};">${esc(code)}</span></p>
<p style="margin:0 0 16px;">It works for ${minutes} minutes. Enter it on the page you were just on.</p>
<p style="margin:0;font-size:12px;color:${MUTED};">If you didn't ask for this, you can ignore this email. Nobody can open the case studies without the code.</p>`
  );

  return { subject, text, html };
}
