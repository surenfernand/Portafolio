import {
  acknowledgementText,
  renderAcknowledgementEmail,
} from "@/lib/acknowledgement-email";
import { packageOptions, serviceOptions } from "@/lib/content";
import { renderEnquiryEmail } from "@/lib/enquiry-email";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const recentSends = new Map<string, number[]>();
const recentDeliveries = new Map<
  string,
  { at: number; state: "pending" | "sent" }
>();
const pendingWindow = 2 * 60 * 1000;
const sentWindow = 10 * 60 * 1000;

type BrevoMessage = {
  sender: { name: string; email: string };
  to: { email: string; name: string }[];
  replyTo: { email: string; name: string };
  subject: string;
  htmlContent: string;
  textContent: string;
};

type EnquiryPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  packageName?: unknown;
  message?: unknown;
};

function clip(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isAllowed(value: string, options: readonly string[]) {
  return options.includes(value);
}

function enquiryKey(
  email: string,
  service: string,
  packageName: string,
  message: string,
) {
  return [email.toLowerCase(), service, packageName, message].join("\u0000");
}

function claimEnquiry(key: string) {
  const now = Date.now();
  for (const [existingKey, record] of recentDeliveries) {
    const maxAge = record.state === "pending" ? pendingWindow : sentWindow;
    if (now - record.at >= maxAge) recentDeliveries.delete(existingKey);
  }
  if (recentDeliveries.has(key)) return "duplicate" as const;
  recentDeliveries.set(key, { at: now, state: "pending" });
  return "send" as const;
}

function finishEnquiry(key: string) {
  recentDeliveries.set(key, { at: Date.now(), state: "sent" });
}

function releaseEnquiry(key: string) {
  if (recentDeliveries.get(key)?.state === "pending") {
    recentDeliveries.delete(key);
  }
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const hour = 60 * 60 * 1000;
  const recent = (recentSends.get(ip) ?? []).filter((time) => now - time < hour);
  if (recent.length >= 5) {
    recentSends.set(ip, recent);
    return true;
  }
  recent.push(now);
  recentSends.set(ip, recent);
  return false;
}

function sendBrevo(apiKey: string, message: BrevoMessage) {
  return fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(message),
  });
}

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME;
  const toEmail = process.env.ENQUIRY_TO_EMAIL;

  if (!apiKey || !senderEmail || !senderName || !toEmail) {
    return Response.json(
      { error: "Email is not configured yet." },
      { status: 500 },
    );
  }

  let body: EnquiryPayload;
  try {
    body = (await request.json()) as EnquiryPayload;
  } catch {
    return Response.json(
      { error: "That enquiry could not be read." },
      { status: 400 },
    );
  }

  const name = clip(body.name, 120);
  const email = clip(body.email, 200);
  const company = clip(body.company, 160) || "Not specified";
  const service = clip(body.service, 80);
  const packageName = clip(body.packageName, 80);
  const message = clip(body.message, 4000);

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and project details are required." },
      { status: 400 },
    );
  }

  if (
    !emailPattern.test(email) ||
    email.includes("\n") ||
    email.includes("\r")
  ) {
    return Response.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  if (
    !isAllowed(service, serviceOptions) ||
    !isAllowed(packageName, packageOptions)
  ) {
    return Response.json(
      { error: "Choose a service and project scope from the list." },
      { status: 400 },
    );
  }

  const deliveryKey = enquiryKey(email, service, packageName, message);
  if (claimEnquiry(deliveryKey) === "duplicate") {
    return Response.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (isRateLimited(ip)) {
    releaseEnquiry(deliveryKey);
    return Response.json(
      {
        error:
          "Too many enquiries just now. Please try again later or use WhatsApp.",
      },
      { status: 429 },
    );
  }

  const safeName = name.replace(/[\r\n]+/g, " ");
  const details = [
    "Website project enquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Business: ${company}`,
    `Service: ${service}`,
    `Scope: ${packageName}`,
    "",
    "Project details:",
    message,
  ].join("\n");

  const sender = { name: senderName, email: senderEmail };
  let response: Response;
  try {
    response = await sendBrevo(apiKey, {
      sender,
      to: [{ email: toEmail, name: senderName }],
      replyTo: { email, name: safeName },
      subject: `Website project enquiry from ${safeName}`.slice(0, 200),
      htmlContent: renderEnquiryEmail({
        name,
        email,
        company,
        service,
        packageName,
        message,
      }),
      textContent: details,
    });
  } catch {
    releaseEnquiry(deliveryKey);
    return Response.json(
      {
        error:
          "We couldn’t send that just now. Please try again or use WhatsApp.",
      },
      { status: 502 },
    );
  }

  if (!response.ok) {
    const detail = await response.text();
    console.error("Brevo enquiry failed", response.status, detail.slice(0, 500));
    releaseEnquiry(deliveryKey);
    return Response.json(
      {
        error:
          "We couldn’t send that just now. Please try again or use WhatsApp.",
      },
      { status: 502 },
    );
  }

  finishEnquiry(deliveryKey);

  const acknowledgementFields = { name, service, packageName };
  try {
    const acknowledgement = await sendBrevo(apiKey, {
      sender,
      to: [{ email, name: safeName }],
      replyTo: { email: toEmail, name: senderName },
      subject: "Thanks for getting in touch | Web Loom Zone",
      htmlContent: renderAcknowledgementEmail(acknowledgementFields),
      textContent: acknowledgementText(acknowledgementFields),
    });
    if (!acknowledgement.ok) {
      const detail = await acknowledgement.text();
      console.error(
        "Brevo acknowledgement failed",
        acknowledgement.status,
        detail.slice(0, 500),
      );
    }
  } catch {
    console.error("Brevo acknowledgement failed");
  }

  return Response.json({ ok: true });
}
