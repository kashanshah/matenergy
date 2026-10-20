import { sitemapEntries } from "@/lib/sitemap-entries";

function xmlEscape(value: string) {
  return value.replace(/[<>&'"]/g, (c) => `&#${c.charCodeAt(0)};`);
}

// Hand-built instead of app/sitemap.ts so the XML can reference a stylesheet (public/sitemap.xsl),
// which makes the sitemap readable when opened in a browser. Crawlers ignore the stylesheet.
export function GET() {
  const urls = sitemapEntries()
    .map((e) =>
      [
        "  <url>",
        `    <loc>${xmlEscape(e.url)}</loc>`,
        e.lastModified ? `    <lastmod>${xmlEscape(e.lastModified)}</lastmod>` : null,
        `    <changefreq>${e.changeFrequency}</changefreq>`,
        `    <priority>${e.priority.toFixed(1)}</priority>`,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n"),
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
