import { site } from "@/content";
import { toEnquiry, validateEnquiry, type Enquiry } from "@/lib/enquiry";

// Booking/enquiry submissions are emailed to ENQUIRY_TO_EMAIL, or site.email if that isn't set.
//
// Delivery:
// 1. Resend (https://resend.com), when RESEND_API_KEY is set. Recommended for production.
//      ENQUIRY_FROM_EMAIL – optional sender on a domain verified in Resend.
// 2. Otherwise FormSubmit (https://formsubmit.co), which needs no account or key. The very
//    first submission makes FormSubmit email the inbox an activation link; enquiries are
//    delivered once that link has been clicked. Requests always identify as site.url, so a
//    single activation covers the live domain, previews and local development.
// All of these are server-only env vars — never prefix them with NEXT_PUBLIC_.

const RESEND_FROM_FALLBACK = "Website enquiries <onboarding@resend.dev>";

type SendResult = { ok: true } | { ok: false; detail: string };

function subjectFor(e: Enquiry) {
  return `New call request from ${e.name}${e.company ? ` (${e.company})` : ""}`;
}

function formatEmail(e: Enquiry) {
  return [
    `Name: ${e.name}`,
    `Email: ${e.email}`,
    `Phone: ${e.phone}`,
    `Company: ${e.company || "—"}`,
    `Preferred date: ${e.date || "—"}`,
    `Preferred time: ${e.time || "—"}`,
    "",
    "Project / service:",
    e.message || "—",
  ].join("\n");
}

async function sendWithResend(apiKey: string, to: string, e: Enquiry): Promise<SendResult> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM_EMAIL || RESEND_FROM_FALLBACK,
      to: [to],
      reply_to: e.email,
      subject: subjectFor(e),
      text: formatEmail(e),
    }),
  }).catch((err: unknown) => err);

  if (!(res instanceof Response)) return { ok: false, detail: String(res) };
  if (!res.ok) return { ok: false, detail: `${res.status} ${await res.text().catch(() => "")}` };
  return { ok: true };
}

async function sendWithFormSubmit(to: string, e: Enquiry): Promise<SendResult> {
  const origin = site.url;
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // FormSubmit rejects requests that don't come from a web page.
      Origin: origin,
      Referer: `${origin}/`,
    },
    body: JSON.stringify({
      _subject: subjectFor(e),
      _replyto: e.email,
      _template: "table",
      _captcha: "false",
      Name: e.name,
      Email: e.email,
      Phone: e.phone,
      Company: e.company || "—",
      "Preferred date": e.date || "—",
      "Preferred time": e.time || "—",
      "Project / service": e.message || "—",
    }),
  }).catch((err: unknown) => err);

  if (!(res instanceof Response)) return { ok: false, detail: String(res) };
  const data: { success?: string | boolean; message?: string } = await res.json().catch(() => ({}));
  // FormSubmit answers 200 with success "false" for problems such as an unactivated inbox.
  if (!res.ok || String(data.success) !== "true") {
    return { ok: false, detail: `${res.status} ${data.message ?? ""}` };
  }
  return { ok: true };
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled in → almost certainly a bot. Pretend success so it doesn't retry.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const enquiry = toEnquiry(body);
  const errors = validateEnquiry(enquiry);
  if (Object.keys(errors).length > 0) {
    return Response.json({ error: "Please fix the highlighted fields.", errors }, { status: 422 });
  }

  const to = process.env.ENQUIRY_TO_EMAIL || site.email;
  const apiKey = process.env.RESEND_API_KEY;
  const result = apiKey
    ? await sendWithResend(apiKey, to, enquiry)
    : await sendWithFormSubmit(to, enquiry);

  if (!result.ok) {
    console.error(`Enquiry delivery via ${apiKey ? "Resend" : "FormSubmit"} failed:`, result.detail);
    return Response.json(
      { error: `We couldn't send your request just now. Please try again, or email us at ${site.email}.` },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
