import nodemailer, { type Transporter } from "nodemailer";
import { brand } from "@/lib/seo";

// Sends the case-study emails over SMTP. Configure with SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS (the same
// names the contact-form mail server uses). Without them, development prints the message to the terminal so the
// flow can be tried; production reports "not configured" and the caller decides what to do.

export type Mail = {
  to: string;
  cc?: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

export type MailResult = { sent: boolean; reason?: string };

let transport: Transporter | null | undefined;

function getTransport(): Transporter | null {
  if (transport !== undefined) return transport;
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return (transport = null);
  const port = Number(process.env.SMTP_PORT) || 587;
  return (transport = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } }));
}

export const mailConfigured = () => getTransport() !== null;

/** Throws if the mail server refuses the message; returns { sent: false } only when nothing is configured. */
export async function sendMail(mail: Mail): Promise<MailResult> {
  const t = getTransport();
  if (!t) {
    if (process.env.NODE_ENV !== "production") {
      console.log(`\n[case-access] SMTP not configured, so this email was NOT sent. It would have gone to ${mail.to}${mail.cc ? ` (cc ${mail.cc})` : ""}:\nSubject: ${mail.subject}\n${mail.text}\n`);
      return { sent: true, reason: "logged-in-development" };
    }
    return { sent: false, reason: "mailer-not-configured" };
  }
  await t.sendMail({
    from: `"${brand.name}" <${process.env.SMTP_USER!.trim()}>`,
    to: mail.to,
    cc: mail.cc,
    replyTo: mail.replyTo,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
  });
  return { sent: true };
}
