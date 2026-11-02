// THE ONE PLACE EMAIL SENDING PLUGS IN.
//
// Sending is deliberately not configured yet. Until it is, sendMail() sends nothing and says so, and everything
// else about registering for the case studies works normally (access never depends on an email going out).
//
// To switch it on, replace the body of sendMail() with a call to whichever transport is chosen (the existing mail
// server behind BACKEND_URL, or SMTP) and return { sent: true }. The message content is already built in emails.ts.

export type Mail = {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

export type MailResult = { sent: boolean; reason?: string };

let warned = false;

export async function sendMail(mail: Mail): Promise<MailResult> {
  if (!warned) {
    warned = true;
    console.warn(
      `[case-access] Email sending is not configured, so no case-study emails are being sent (first skipped: "${mail.subject}"). See lib/case-access/mailer.ts.`
    );
  }
  return { sent: false, reason: "mailer-not-configured" };
}
