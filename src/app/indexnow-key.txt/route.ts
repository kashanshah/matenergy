import { connection } from "next/server";
import { indexNowKey } from "@/lib/indexnow";

// IndexNow verifies ownership by fetching this file and comparing it with the submitted key.
export async function GET() {
  // Read the key at request time so changing INDEXNOW_KEY doesn't require a rebuild.
  await connection();
  const key = indexNowKey();
  if (!key) return new Response("Not found", { status: 404 });
  return new Response(key, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
