"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";

/** What the visitor came to do. No longer a dropdown, but still sent: links such as /contact?intent=demo set it. */
const INTENTS = ["consultation", "demo", "proposal"];

export function ContactForm({
  defaultIntent,
  services,
}: {
  defaultIntent?: string;
  services: string[];
}) {
  const intent = defaultIntent && INTENTS.includes(defaultIntent) ? defaultIntent : "consultation";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      phone: String(data.get("phone") || ""),
      intent: String(data.get("intent") || ""),
      service: String(data.get("service") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      trackEvent("generate_lead", { form: "contact" });
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="t-ok">
        <h3>Thank you.</h3>
        <p>
          We&rsquo;ve received your message and will be in touch shortly.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="t-btn">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="t-form">
      <div className="t-row">
        <div className="t-f">
          <label htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>
        <div className="t-f">
          <label htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="t-row">
        <div className="t-f">
          <label htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
          />
        </div>
        <div className="t-f">
          <label htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            pattern="[+()\d\s.\-]{6,30}"
            title="Digits, spaces and + ( ) - . only"
          />
        </div>
      </div>

      <div className="t-f">
        <label htmlFor="service">
          Service
        </label>
        <input type="hidden" name="intent" value={intent} />
        <select id="service" name="service" defaultValue="">
          <option value="">Not sure yet</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="t-f">
        <label htmlFor="message">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="t-err">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="t-btn"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
