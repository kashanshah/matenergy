import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Match the WordPress URL style of the existing site so indexed URLs keep working.
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    // URLs from the previous WordPress site, mapped to the new structure.
    // Order matters: specific /service/... slugs must come before the /service/:slug* catch-all.
    const map: [string, string][] = [
      ["/service/residential-solar-solutions", "/services/residential-solar-karachi/"],
      ["/service/household-solar-panel", "/services/residential-solar-karachi/"],
      ["/service/solar-panel-cleaning", "/services/solar-maintenance-after-sales/"],
      ["/service/solar-energy-distribution", "/services/commercial-industrial-solar-karachi/"],
      ["/service/expert-installation", "/services/"],
      ["/service/low-cost-operation", "/services/"],
      ["/service/expert-solar-worker", "/about/"],
      ["/service/modern-technology", "/partners/"],
      ["/service/:slug*", "/services/"],
      ["/our-installations", "/about/"],
      ["/portfolio/:slug*", "/about/"],
      ["/team/:slug*", "/about/"],
      ["/frequently-asked-questions", "/faqs/"],
      ["/home", "/"],
      ["/about-us", "/about/"],
      ["/contact-us", "/contact/"],
      ["/our-partners", "/partners/"],
      ["/our-services", "/services/"],
      ["/residential-solar", "/services/residential-solar-karachi/"],
      ["/residential", "/services/residential-solar-karachi/"],
      ["/services/residential-solar", "/services/residential-solar-karachi/"],
      ["/commercial-solar", "/services/commercial-industrial-solar-karachi/"],
      ["/commercial", "/services/commercial-industrial-solar-karachi/"],
      ["/industrial-solar", "/services/commercial-industrial-solar-karachi/"],
      ["/services/commercial-solar", "/services/commercial-industrial-solar-karachi/"],
      ["/home-energy-audits", "/services/energy-audit/"],
      ["/home-energy-audit", "/services/energy-audit/"],
      ["/energy-audit", "/services/energy-audit/"],
      ["/after-sales-service", "/services/solar-maintenance-after-sales/"],
      ["/after-sale-service", "/services/solar-maintenance-after-sales/"],
      ["/net-metering", "/services/net-metering-karachi/"],
      ["/quote", "/get-a-quote/"],
      ["/get-quote", "/get-a-quote/"],
      ["/request-a-quote", "/get-a-quote/"],
      ["/faq", "/faqs/"],
      ["/category/:slug*", "/blog/"],
    ];
    return map.flatMap(([source, destination]) => [
      { source, destination, permanent: true },
      { source: `${source}/`, destination, permanent: true },
    ]);
  },
  async headers() {
    return [
      // Browsers only apply the sitemap stylesheet when it's served with an XSL/XML type (nosniff is on).
      { source: "/sitemap.xsl", headers: [{ key: "Content-Type", value: "text/xsl; charset=utf-8" }] },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
