import { escapeHtml } from "@/lib/enquiry-email";

const acknowledgementEmailTemplate = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>Thanks for getting in touch — Web Loom Zone</title>
<style>
:root{color-scheme:dark;supported-color-schemes:dark}
@media screen and (max-width:600px){
.outer{padding:16px 8px!important}.pad{padding:28px 24px!important}
.headline{font-size:34px!important}.brand{font-size:22px!important}
.column{display:block!important;width:100%!important}.right{padding-left:0!important;padding-top:18px!important}
}
</style>
</head>
<body style="margin:0;padding:0;background-color:#050b12;font-family:Arial,Helvetica,sans-serif;color:#e9f0f7;">
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">We’ve received your enquiry. Our team will review your requirements and get back to you soon.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#050b12">
<tr><td align="center" class="outer" style="padding:40px 16px;">
<!--[if mso]><table role="presentation" width="620"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#0b1521" style="max-width:620px;background-color:#0b1521;border:1px solid #223344;">
<tr><td style="height:4px;background-color:#28c7f7;font-size:0;line-height:0;">&nbsp;</td></tr>
<tr><td class="pad" style="padding:32px 40px;border-bottom:1px solid #223344;">
<p class="brand" style="margin:0;font-size:25px;line-height:1.3;font-weight:700;letter-spacing:-0.8px;color:#ffffff;">web loom <span style="color:#28c7f7;">zone.</span></p>
</td></tr>
<tr><td class="pad" style="padding:40px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr><td bgcolor="#102e3b" style="padding:9px 13px;border:1px solid #215367;color:#66dbff;font-size:10px;line-height:1.4;letter-spacing:1.8px;font-weight:700;">MESSAGE RECEIVED</td></tr>
</table>
<h1 class="headline" style="margin:25px 0 22px;font-size:43px;line-height:1.13;letter-spacing:-1.4px;font-weight:700;color:#ffffff;">Great ideas start<br>with <span style="color:#28c7f7;">a conversation.</span></h1>
<p style="margin:0 0 14px;font-size:17px;line-height:1.7;color:#eef4fa;">Hi {{name}},</p>
<p style="margin:0 0 16px;font-size:16px;line-height:1.8;color:#b8c7d7;">Thanks for reaching out to Web Loom Zone! We’ve received your message and look forward to hearing more about your project.</p>
<p style="margin:0 0 28px;font-size:16px;line-height:1.8;color:#b8c7d7;">We’ll review your requirements and get back to you soon to discuss the next steps.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#111f2e" style="background-color:#111f2e;border:1px solid #2b4053;">
<tr><td style="padding:23px;">
<p style="margin:0 0 18px;font-size:10px;line-height:1.5;letter-spacing:1.8px;font-weight:700;color:#82a3bc;">YOUR ENQUIRY AT A GLANCE</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td class="column" width="50%" valign="top">
<p style="margin:0 0 6px;font-size:11px;line-height:1.5;color:#93adc2;">Service</p>
<p style="margin:0;font-size:15px;line-height:1.6;font-weight:700;color:#f3f7fb;">{{service}}</p>
</td><td class="column right" width="50%" valign="top" style="padding-left:18px;">
<p style="margin:0 0 6px;font-size:11px;line-height:1.5;color:#93adc2;">Package / scope</p>
<p style="margin:0;font-size:15px;line-height:1.6;font-weight:700;color:#f3f7fb;">{{package}}</p>
</td></tr></table>
</td></tr></table>
<h2 style="margin:30px 0 10px;font-size:19px;line-height:1.4;color:#ffffff;">Anything else you’d like to share?</h2>
<p style="margin:0 0 22px;font-size:15px;line-height:1.8;color:#b8c7d7;">Send us your inspiration, reference websites, or any questions on WhatsApp. We’d love to see what you have in mind.</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr><td bgcolor="#28c7f7" style="border-radius:5px;text-align:center;mso-padding-alt:16px 24px;">
<a href="https://wa.me/94758268265?text=Hi%20Web%20Loom%20Zone%2C%20I%20recently%20submitted%20a%20website%20enquiry." style="display:inline-block;padding:16px 24px;font-size:14px;line-height:1.4;font-weight:700;color:#06131f;text-decoration:none;border:1px solid #28c7f7;border-radius:5px;">Continue on WhatsApp &rarr;</a>
</td></tr></table>
<p style="margin:24px 0 0;font-size:14px;line-height:1.8;color:#b8c7d7;">Thanks again,<br><strong style="color:#ffffff;">The Web Loom Zone team</strong></p>
</td></tr>
<tr><td class="pad" style="padding:26px 40px;border-top:1px solid #223344;background-color:#08111b;">
<p style="margin:0 0 8px;font-size:13px;line-height:1.7;color:#d8e4ef;font-weight:700;">Built around your next big idea.</p>
<p style="margin:0 0 15px;font-size:12px;line-height:1.8;color:#91a6ba;">Websites &nbsp;&middot;&nbsp; Online stores &nbsp;&middot;&nbsp; Custom software</p>
<p style="margin:0;font-size:12px;line-height:1.9;color:#91a6ba;"><a href="https://webloomzone.web.lk" style="color:#64d8fa;text-decoration:underline;">Visit our website</a> &nbsp;&middot;&nbsp; WhatsApp: <a href="https://wa.me/94758268265" style="color:#91a6ba;text-decoration:none;">+94 75 826 8265</a></p>
</td></tr></table>
<!--[if mso]></td></tr></table><![endif]-->
<p style="max-width:570px;margin:20px auto 0;font-size:11px;line-height:1.8;text-align:center;color:#8397ab;">You’re receiving this confirmation because you submitted an enquiry on our website.</p>
</td></tr></table>
</body>
</html>
`;

const placeholderKeys = ["name", "service", "package"] as const;
const whatsappHref =
  "https://wa.me/94758268265?text=Hi%20Web%20Loom%20Zone%2C%20I%20recently%20submitted%20a%20website%20enquiry.";

function placeholderPattern() {
  return /\{\{(name|service|package)\}\}/g;
}

for (const key of placeholderKeys) {
  if (!acknowledgementEmailTemplate.includes(`{{${key}}}`)) {
    throw new Error(`Acknowledgement email template is missing {{${key}}}.`);
  }
}

export type AcknowledgementEmailFields = {
  name: string;
  service: string;
  packageName: string;
};

function plainLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function singleLine(value: string) {
  return escapeHtml(plainLine(value));
}

export function renderAcknowledgementEmail(fields: AcknowledgementEmailFields) {
  const values: Record<string, string> = {
    name: singleLine(fields.name),
    service: singleLine(fields.service),
    package: singleLine(fields.packageName),
  };

  return acknowledgementEmailTemplate.replace(
    placeholderPattern(),
    (_match, key: string) => values[key] ?? "",
  );
}

export function acknowledgementText(fields: AcknowledgementEmailFields) {
  const name = plainLine(fields.name);
  const service = plainLine(fields.service);
  const packageName = plainLine(fields.packageName);

  return [
    "Thanks for getting in touch",
    "",
    `Hi ${name},`,
    "",
    "Thanks for reaching out to Web Loom Zone! We’ve received your message and look forward to hearing more about your project.",
    "",
    "We’ll review your requirements and get back to you soon to discuss the next steps.",
    "",
    "Your enquiry at a glance",
    `Service: ${service}`,
    `Package / scope: ${packageName}`,
    "",
    "Anything else you’d like to share?",
    "Send us your inspiration, reference websites, or any questions on WhatsApp. We’d love to see what you have in mind.",
    "",
    `Continue on WhatsApp: ${whatsappHref}`,
    "",
    "Thanks again,",
    "The Web Loom Zone team",
    "",
    "Built around your next big idea.",
    "Websites · Online stores · Custom software",
    "Visit our website: https://webloomzone.web.lk",
    "WhatsApp: +94 75 826 8265",
    "",
    "You’re receiving this confirmation because you submitted an enquiry on our website.",
  ].join("\n");
}
