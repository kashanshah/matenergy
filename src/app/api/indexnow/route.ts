import { submitToIndexNow, indexNowKey } from "@/lib/indexnow";
import { sitemapEntries } from "@/lib/sitemap-entries";

// Called by the Vercel cron in vercel.json. Vercel sends `Authorization: Bearer $CRON_SECRET`.
// Can also be triggered by hand after publishing content:
//   curl -H "Authorization: Bearer $CRON_SECRET" https://matenergy.com.pk/api/indexnow/
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  if (!indexNowKey()) {
    return Response.json({ ok: false, error: "INDEXNOW_KEY is not set" }, { status: 500 });
  }

  const urls = sitemapEntries().map((e) => e.url);
  const result = await submitToIndexNow(urls);
  if (!result.ok) {
    console.error("[indexnow] submission failed", result.status, result.body);
    return Response.json({ ok: false, status: result.status, error: result.body }, { status: 502 });
  }
  return Response.json({ ok: true, status: result.status, submitted: urls.length });
}
