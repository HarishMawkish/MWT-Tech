import { buildLeadNotification, buildWelcomeEmail, NOTIFY_TO, REPLY_TO, type Registration } from "./emails";
import { sendMail } from "./mailer";

/**
 * Sends the welcome email to the visitor and the full summary to the sales inbox. A failure here is logged and
 * never thrown: someone who has passed the checks keeps their access whether or not the mail goes out.
 */
export async function sendRegistrationEmails(r: Registration): Promise<void> {
  const welcome = buildWelcomeEmail(r);
  const lead = buildLeadNotification(r);

  const results = await Promise.allSettled([
    sendMail({ to: r.email, replyTo: REPLY_TO, ...welcome }),
    sendMail({ to: NOTIFY_TO, replyTo: r.email, ...lead }),
  ]);

  results.forEach((res, i) => {
    if (res.status === "rejected") {
      console.error(`[case-access] ${i === 0 ? "Welcome email" : "Sales notification"} failed:`, res.reason);
    }
  });
}
