import "server-only";
import { absoluteUrl, site } from "./site";

const ENDPOINT = "https://api.indexnow.org/indexnow";

export function indexNowKey() {
  return process.env.INDEXNOW_KEY?.trim() || null;
}

/** Submits URLs to IndexNow (shared by Bing, Yandex, Seznam, Naver and others). */
export async function submitToIndexNow(urls: string[]) {
  const key = indexNowKey();
  if (!key) throw new Error("INDEXNOW_KEY is not set");

  let res: Response;
  try {
    res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: new URL(site.url).host,
        key,
        keyLocation: absoluteUrl("/indexnow-key.txt"),
        // IndexNow accepts up to 10,000 URLs per request.
        urlList: urls.slice(0, 10_000),
      }),
    });
  } catch (err) {
    return { ok: false, status: 0, body: err instanceof Error ? err.message : String(err) };
  }

  return { ok: res.ok, status: res.status, body: res.ok ? "" : await res.text().catch(() => "") };
}
