import { absoluteUrl, site } from "./site";
import type { Faq } from "./services";

const businessId = absoluteUrl("/#business");

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": businessId,
    name: site.name,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    logo: absoluteUrl("/images/mat-energy-logo.png"),
    image: absoluteUrl("/images/mat-energy-logo.png"),
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: `${site.address.locality}, ${site.address.city}`,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", ...site.geo },
    areaServed: { "@type": "City", name: "Karachi" },
    knowsAbout: [
      "Solar panel installation",
      "Residential solar systems",
      "Commercial and industrial solar",
      "Net metering",
      "Hybrid solar with battery storage",
    ],
    sameAs: Object.values(site.social).filter(Boolean),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: site.url,
    name: site.name,
    publisher: { "@id": businessId },
  };
}

export function serviceJsonLd(opts: { name: string; description: string; path: string; areaName?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    serviceType: "Solar panel installation",
    provider: { "@id": businessId },
    areaServed: opts.areaName
      ? { "@type": "Place", name: `${opts.areaName}, Karachi` }
      : { "@type": "City", name: "Karachi" },
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function articleJsonLd(opts: { title: string; description: string; path: string; date: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    dateModified: opts.date,
    mainEntityOfPage: absoluteUrl(opts.path),
    image: absoluteUrl("/images/og-mat-energy.png"),
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@id": businessId },
  };
}
