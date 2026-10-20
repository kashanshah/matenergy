import { z } from "zod";
import { leadSchema } from "@/lib/lead-schema";
import { sendLeadEmails } from "@/lib/email";

// Best-effort, per-instance throttle to blunt form spam.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function throttled(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Bots that fill the hidden field get a fake success.
  if (body && typeof body === "object" && "website" in body && (body as { website?: unknown }).website) {
    return Response.json({ ok: true });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { ok: false, error: "Please check the highlighted fields.", fields: z.flattenError(parsed.error).fieldErrors },
      { status: 422 },
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (throttled(ip)) {
    return Response.json(
      { ok: false, error: "Too many submissions. Please call or WhatsApp us instead." },
      { status: 429 },
    );
  }

  try {
    await sendLeadEmails(parsed.data);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Lead email failed", err);
    return Response.json(
      { ok: false, error: "We couldn't send your message right now. Please call or WhatsApp us." },
      { status: 500 },
    );
  }
}
