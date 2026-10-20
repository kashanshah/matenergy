import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Match the WordPress URL style of the existing site so indexed URLs keep working.
  trailingSlash: true,
  images: {
    // Thumbnail for the company video on YouTube.
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
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
      ["/service/residential-solar-solutions", "/services/residential-solar-solutions/"],
      ["/service/household-solar-panel", "/services/residential-solar-solutions/"],
      ["/service/solar-energy-distribution", "/services/commercial-solar-solutions/"],
      ["/service/solar-panel-cleaning", "/services/after-sales-services/"],
      ["/service/expert-installation", "/about/"],
      ["/service/low-cost-operation", "/about/"],
      ["/service/expert-solar-worker", "/about/"],
      ["/service/modern-technology", "/about/"],
      ["/service/:slug*", "/services/"],
      ["/our-installations", "/projects/"],
      ["/portfolio/:slug*", "/projects/"],
      ["/portfolio-category/:slug*", "/projects/"],
      ["/team/:slug*", "/about/"],
      ["/about-us", "/about/"],
      ["/contact-us", "/contact/"],
      ["/frequently-asked-questions", "/faqs/"],
      ["/home", "/"],
      ["/cart", "/"],
      ["/residential-solar-solutions", "/services/residential-solar-solutions/"],
      ["/commercial-solar-solutions", "/services/commercial-solar-solutions/"],
      ["/home-energy-audits", "/services/home-energy-audits/"],
      ["/after-sales-services", "/services/after-sales-services/"],
      ["/after-sales-excellence", "/services/after-sales-services/"],
      ["/category/:slug*", "/"],
      // Pages removed from this rebuild.
      ["/blog/:slug*", "/"],
      ["/solar-installation-karachi/:slug*", "/services/"],
      ["/services/residential-solar-karachi", "/services/residential-solar-solutions/"],
      ["/services/commercial-industrial-solar-karachi", "/services/commercial-solar-solutions/"],
      ["/services/energy-audit", "/services/home-energy-audits/"],
      ["/services/solar-maintenance-after-sales", "/services/after-sales-services/"],
      ["/services/hybrid-off-grid-solar-battery", "/solar-systems/"],
      ["/services/net-metering-karachi", "/services/"],
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
