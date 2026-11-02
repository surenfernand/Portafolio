const enquiryEmailTemplate = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<title>New project enquiry — Web Loom Zone</title>
<style>
@media screen and (max-width:600px){
 .outer{padding:16px 8px!important}.pad{padding:28px 22px!important}
 .title{font-size:29px!important}.column{display:block!important;width:100%!important}
 .right{padding-left:0!important;padding-top:20px!important}
}
</style>
</head>
<body style="margin:0;padding:0;background-color:#edf2f6;font-family:Arial,Helvetica,sans-serif;color:#192a3b;">
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">New enquiry from {{name}} — {{service}}. View the project details and reply.</div>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#edf2f6;">
<tr><td align="center" class="outer" style="padding:40px 16px;">
<!--[if mso]><table role="presentation" width="620"><tr><td><![endif]-->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:620px;background-color:#ffffff;">
<tr><td style="height:5px;background-color:#23c5f6;font-size:0;line-height:0;">&nbsp;</td></tr>
<tr><td class="pad" style="padding:32px 38px;background-color:#08121e;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
<tr><td style="font-size:23px;font-weight:700;letter-spacing:-0.8px;color:#ffffff;">web loom <span style="color:#23c5f6;">zone.</span></td>
<td align="right" style="font-size:10px;letter-spacing:1.6px;color:#a6b7c9;">PROJECT ENQUIRIES</td></tr>
</table>
<p style="margin:38px 0 14px;color:#23c5f6;font-size:11px;font-weight:700;letter-spacing:2px;">LET’S BUILD SOMETHING GREAT</p>
<h1 class="title" style="margin:0;font-size:36px;line-height:1.17;letter-spacing:-1px;color:#ffffff;">Your next project<br>starts here.</h1>
<p style="margin:18px 0 0;font-size:15px;line-height:1.65;color:#b9c8d8;">A new website enquiry has arrived.<br>Here’s everything you need to start the conversation.</p>
</td></tr>
<tr><td class="pad" style="padding:32px 38px;">
<p style="margin:0 0 20px;font-size:11px;font-weight:700;letter-spacing:1.8px;color:#607387;">CLIENT DETAILS</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-bottom:1px solid #e1e8ee;">
<tr><td style="padding:0 0 24px;">
<h2 style="margin:0 0 7px;font-size:24px;line-height:1.3;color:#122639;">{{name}}</h2>
<p style="margin:0 0 7px;font-size:14px;line-height:1.6;color:#52677b;">{{company}}</p>
<p style="margin:0;font-size:14px;line-height:1.6;color:#126a91;">{{email}}</p>
</td></tr></table>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td class="column" width="50%" valign="top" style="padding-top:24px;">
<p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:1.5px;color:#607387;">SERVICE</p>
<p style="margin:0;font-size:16px;line-height:1.5;font-weight:700;color:#122639;">{{service}}</p>
</td>
<td class="column right" width="50%" valign="top" style="padding-top:24px;padding-left:20px;">
<p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:1.5px;color:#607387;">PACKAGE / SCOPE</p>
<p style="margin:0;font-size:16px;line-height:1.5;font-weight:700;color:#122639;">{{package}}</p>
</td></tr></table>
<p style="margin:32px 0 12px;font-size:11px;font-weight:700;letter-spacing:1.5px;color:#607387;">THE PROJECT BRIEF</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f2f7fa;border-left:3px solid #23c5f6;">
<tr><td style="padding:22px;font-size:15px;line-height:1.8;color:#30465b;overflow-wrap:anywhere;word-break:break-word;">{{message_html}}</td></tr></table>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;">
<tr><td bgcolor="#087ca5" style="border-radius:6px;text-align:center;mso-padding-alt:15px 26px;">
<a href="{{reply_url}}" style="display:inline-block;padding:15px 26px;font-size:14px;line-height:1.3;font-weight:700;color:#ffffff;text-decoration:none;border:1px solid #087ca5;border-radius:6px;">Reply to enquiry &rarr;</a>
</td></tr></table>
<p style="margin:14px 0 0;font-size:12px;line-height:1.7;color:#667b8f;">You can also reply directly to this email to contact {{name}}.</p>
</td></tr>
<tr><td class="pad" style="padding:25px 38px;background-color:#f7f9fb;border-top:1px solid #e1e8ee;">
<p style="margin:0 0 7px;font-size:13px;font-weight:700;color:#122639;">Web Loom Zone</p>
<p style="margin:0;font-size:12px;line-height:1.8;color:#667b8f;">Websites. Online stores. Custom software.<br>
<a href="https://webloomzone.web.lk" style="color:#126a91;text-decoration:underline;">webloomzone.web.lk</a></p>
</td></tr>
</table>
<!--[if mso]></td></tr></table><![endif]-->
<p style="max-width:580px;margin:20px auto 0;font-size:11px;line-height:1.7;color:#738498;text-align:center;">Sent from your website enquiry form. This notification is for your team.</p>
</td></tr></table>
</body>
</html>
`;

const placeholderKeys = [
  "name",
  "email",
  "company",
  "service",
  "package",
  "message_html",
  "reply_url",
] as const;

function placeholderPattern() {
  return /\{\{(name|email|company|service|package|message_html|reply_url)\}\}/g;
}

for (const key of placeholderKeys) {
  if (!enquiryEmailTemplate.includes(`{{${key}}}`)) {
    throw new Error(`Enquiry email template is missing {{${key}}}.`);
  }
}

export type EnquiryEmailFields = {
  name: string;
  email: string;
  company: string;
  service: string;
  packageName: string;
  message: string;
};

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function singleLine(value: string) {
  return escapeHtml(value.replace(/[\r\n]+/g, " "));
}

export function messageToHtml(message: string) {
  return escapeHtml(message).replace(/\r\n|\r|\n/g, "<br>");
}

export function replyUrl(email: string) {
  return `mailto:${encodeURIComponent(email)}`;
}

export function renderEnquiryEmail(fields: EnquiryEmailFields) {
  const values: Record<string, string> = {
    name: singleLine(fields.name),
    email: singleLine(fields.email),
    company: singleLine(fields.company),
    service: singleLine(fields.service),
    package: singleLine(fields.packageName),
    message_html: messageToHtml(fields.message),
    reply_url: escapeHtml(replyUrl(fields.email)),
  };

  return enquiryEmailTemplate.replace(
    placeholderPattern(),
    (_match, key: string) => values[key] ?? "",
  );
}
