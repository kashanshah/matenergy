<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>XML Sitemap | Mat Energy</title>
        <style>
          *{box-sizing:border-box}
          body{margin:0;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#1f2a24;background:#f6faf6;line-height:1.5}
          header{background:linear-gradient(135deg,#2f9a2c,#40b93c 60%,#f28a18);color:#fff;padding:40px 16px}
          .wrap{max-width:1100px;margin:0 auto}
          h1{margin:0;font-size:28px;font-weight:800;letter-spacing:-.01em}
          header p{margin:8px 0 0;opacity:.92;font-size:15px}
          header a{color:#fff}
          .count{display:inline-block;margin-top:16px;background:rgba(255,255,255,.18);border-radius:999px;padding:4px 14px;font-size:13px;font-weight:600}
          main{padding:24px 16px 48px}
          .card{background:#fff;border:1px solid #e3ebe4;border-radius:16px;overflow:hidden;box-shadow:0 1px 2px rgba(16,40,20,.04)}
          .scroll{overflow-x:auto}
          table{width:100%;border-collapse:collapse;font-size:14px}
          th{text-align:left;background:#eef7ee;color:#2a4a2e;font-size:12px;text-transform:uppercase;letter-spacing:.06em;padding:12px 16px;white-space:nowrap}
          td{padding:12px 16px;border-top:1px solid #edf2ee;vertical-align:top}
          tr:hover td{background:#fafdfa}
          td.url a{color:#237a20;text-decoration:none;word-break:break-all}
          td.url a:hover{text-decoration:underline}
          td.meta{color:#5d6b61;white-space:nowrap}
          .pill{display:inline-block;min-width:38px;text-align:center;border-radius:999px;padding:2px 8px;font-size:12px;font-weight:600;background:#fff3e4;color:#a85a07}
          .pill.high{background:#e5f6e4;color:#237a20}
          footer{margin-top:20px;font-size:13px;color:#5d6b61}
          footer a{color:#237a20}
        </style>
      </head>
      <body>
        <header>
          <div class="wrap">
            <h1>Mat Energy XML Sitemap</h1>
            <p>This sitemap lists every page on <a href="/">matenergy.com.pk</a> for search engines such as Google and Bing.</p>
            <span class="count"><xsl:value-of select="count(s:urlset/s:url)"/> URLs</span>
          </div>
        </header>
        <main>
          <div class="wrap">
            <div class="card">
              <div class="scroll">
                <table>
                  <thead>
                    <tr>
                      <th>URL</th>
                      <th>Priority</th>
                      <th>Change frequency</th>
                      <th>Last modified</th>
                    </tr>
                  </thead>
                  <tbody>
                    <xsl:for-each select="s:urlset/s:url">
                      <tr>
                        <td class="url"><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                        <td class="meta">
                          <span>
                            <xsl:attribute name="class">
                              <xsl:choose>
                                <xsl:when test="s:priority &gt;= 0.8">pill high</xsl:when>
                                <xsl:otherwise>pill</xsl:otherwise>
                              </xsl:choose>
                            </xsl:attribute>
                            <xsl:value-of select="s:priority"/>
                          </span>
                        </td>
                        <td class="meta"><xsl:value-of select="s:changefreq"/></td>
                        <td class="meta">
                          <xsl:choose>
                            <xsl:when test="s:lastmod"><xsl:value-of select="substring(s:lastmod,1,10)"/></xsl:when>
                            <xsl:otherwise>&#8212;</xsl:otherwise>
                          </xsl:choose>
                        </td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
              </div>
            </div>
            <footer>Solar panel installation in Karachi for homes, businesses and industry. <a href="/get-a-quote/">Get a free quote</a>.</footer>
          </div>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
