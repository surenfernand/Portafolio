"use client";

import { packageOptions, serviceOptions, whatsapp } from "@/lib/content";
import { useSite } from "./site-context";

export function Contact() {
  const { form, updateField, submitEnquiry, submitStatus, submitMessage } =
    useSite();

  return (
    <section className="contact-section" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <div className="eyebrow">Let’s make something useful</div>
          <h2>
            Have a project in mind?
            <br />
            <em>Let’s build something great.</em>
          </h2>
          <p>Tell us what you’re thinking. We’ll work out the next step together.</p>
          <a
            className="button"
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Your Requirements{" "}
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <div className="contact-meta">
            Or message {whatsapp.display} directly.
          </div>
        </div>
        <form className="contact-form" onSubmit={submitEnquiry}>
          <div className="form-row">
            <label>
              Your name
              <input
                name="name"
                autoComplete="name"
                required
                placeholder="What should we call you?"
                maxLength={120}
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
              />
            </label>
            <label>
              Email address
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="you@company.com"
                maxLength={200}
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
              />
            </label>
          </div>
          <label>
            Company or business
            <input
              name="company"
              autoComplete="organization"
              placeholder="Your business name (optional)"
              maxLength={160}
              value={form.company}
              onChange={(event) => updateField("company", event.target.value)}
            />
          </label>
          <div className="form-row">
            <label>
              What do you have in mind?
              <select
                name="service"
                id="service"
                value={form.service}
                onChange={(event) => updateField("service", event.target.value)}
              >
                {serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              Project scope
              <select
                name="package"
                id="package"
                value={form.packageName}
                onChange={(event) =>
                  updateField("packageName", event.target.value)
                }
              >
                {packageOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>
          <label>
            Tell us a little about your project
            <textarea
              name="message"
              required
              placeholder="Your idea, what you need, and any timeline you have in mind…"
              maxLength={4000}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
            />
          </label>
          <button
            className="button"
            type="submit"
            disabled={submitStatus === "sending"}
          >
            {submitStatus === "sending" ? "Sending…" : "Send my enquiry"}{" "}
            <span className="arrow" aria-hidden="true">↗</span>
          </button>
          <p
            className={
              submitStatus === "error" ? "form-note form-status error" : "form-note"
            }
            role="status"
            aria-live="polite"
          >
            {submitMessage ||
              "Your enquiry is emailed to us. We reply to the address you enter."}
          </p>
        </form>
      </div>
    </section>
  );
}
