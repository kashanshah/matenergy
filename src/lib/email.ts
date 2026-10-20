import "server-only";
import { Resend } from "resend";
import type { Lead } from "./lead-schema";
import { site } from "./site";
import { pkr } from "./solar";

const formLabels: Record<Lead["formType"], string> = {
  quote: "Free quote / site survey request",
  contact: "Contact form enquiry",
  calculator: "Solar calculator lead",
};

function esc(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}


function leadRows(lead: Lead): [string, string | undefined][] {
  const common: [string, string | undefined][] = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email],
  ];
  switch (lead.formType) {
    case "quote":
      return [
        ...common,
        ["Segment", lead.segment],
        ["System type", lead.systemType],
        ["Roof type", lead.roofType],
        ["Monthly bill", lead.monthlyBill],
        ["Location / area", lead.location],
        ["Message", lead.message],
      ];
    case "contact":
      return [...common, ["Subject", lead.subject], ["Message", lead.message]];
    case "calculator": {
      const e = lead.estimate;
      return [
        ...common,
        ["Location / area", lead.location],
        ["Monthly bill entered", pkr(e.monthlyBill)],
        ["Tariff used", `PKR ${e.tariff}/unit`],
        ["Estimated monthly units", `${Math.round(e.monthlyUnits)} kWh`],
        ["Target solar coverage", `${e.coverage}%`],
        ["Recommended system", `${e.systemKw} kW (${e.panels} panels)`],
        ["Roof space needed", `~${Math.round(e.roofSqft)} sq ft`],
        ["Estimated monthly savings", pkr(e.monthlySavings)],
        ["Wants battery backup", e.backup ? "Yes" : "No"],
      ];
    }
  }
}

export function adminEmails() {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function adminHtml(lead: Lead) {
  const rows = leadRows(lead)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:10px 14px;border-bottom:1px solid #e8eee6;color:#5c6d59;font-size:13px;white-space:nowrap;vertical-align:top">${esc(k)}</td><td style="padding:10px 14px;border-bottom:1px solid #e8eee6;color:#121a13;font-size:14px;white-space:pre-wrap">${esc(v)}</td></tr>`,
    )
    .join("");
  return `<!doctype html><html><body style="margin:0;background:#f5f8f4;font-family:Arial,Helvetica,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px"><tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e8eee6">
<tr><td style="background:#40b93c;padding:20px 24px;color:#ffffff;font-size:18px;font-weight:bold">New lead: ${esc(formLabels[lead.formType])}</td></tr>
<tr><td style="padding:8px 10px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table></td></tr>
<tr><td style="padding:16px 24px;color:#7f907b;font-size:12px">Submitted from ${esc(lead.page ?? site.url)}</td></tr>
</table></td></tr></table></body></html>`;
}

function adminText(lead: Lead) {
  return [
    `New lead: ${formLabels[lead.formType]}`,
    "",
    ...leadRows(lead)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`),
    "",
    `Page: ${lead.page ?? site.url}`,
  ].join("\n");
}

function customerHtml(lead: Lead) {
  return `<!doctype html><html><body style="margin:0;background:#f5f8f4;font-family:Arial,Helvetica,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px"><tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e8eee6">
<tr><td style="padding:28px 28px 8px"><img src="${site.url}/images/mat-energy-logo.png" alt="${esc(site.name)}" width="180" style="display:block;height:auto"></td></tr>
<tr><td style="padding:8px 28px 28px;color:#313d30;font-size:15px;line-height:1.6">
<p>Dear ${esc(lead.name)},</p>
<p>Thank you for contacting ${esc(site.name)}. We've received your ${lead.formType === "contact" ? "message" : "request"} and a member of our team will get back to you shortly, usually within one working day.</p>
<p>If it's urgent, call or WhatsApp us on <a href="${site.phoneHref}" style="color:#2f9a2c">${esc(site.phoneDisplay)}</a>.</p>
<p style="margin-top:24px">Regards,<br><strong>${esc(site.name)}</strong><br><span style="color:#7f907b">${esc(site.address.full)}</span></p>
</td></tr></table></td></tr></table></body></html>`;
}

export async function sendLeadEmails(lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = adminEmails();
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");
  if (to.length === 0) throw new Error("ADMIN_EMAILS is not set");

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL || `${site.name} <noreply@matenergy.com.pk>`;

  const subjectDetail =
    lead.formType === "quote"
      ? `${lead.segment} · ${lead.systemType}`
      : lead.formType === "calculator"
        ? `${lead.estimate.systemKw} kW estimate`
        : (lead.subject ?? "Enquiry");

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: lead.email,
    subject: `New ${formLabels[lead.formType].toLowerCase()} – ${lead.name} (${subjectDetail})`,
    html: adminHtml(lead),
    text: adminText(lead),
  });
  if (error) throw new Error(`Resend error: ${error.message}`);

  if (lead.email) {
    // Confirmation to the customer is best-effort; the lead has already reached the team.
    const res = await resend.emails
      .send({
        from,
        to: lead.email,
        replyTo: site.email,
        subject: `We've received your request – ${site.name}`,
        html: customerHtml(lead),
      })
      .catch((e: unknown) => ({ error: e }));
    if (res.error) console.warn("Customer confirmation email failed", res.error);
  }
}
