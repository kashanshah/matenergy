export const site = {
  name: "MAT Energy",
  legalName: "MAT Energy (Pvt.) Ltd.",
  tagline: "Adding Green Energy to your Life.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://matenergy.com.pk").replace(/\/$/, ""),
  description:
    "MAT Energy delivers on-grid, off-grid and hybrid solar solutions for homes and businesses in Karachi, from home energy audits and installation to after-sales service.",
  phone: "+92 307 3144624",
  phoneDisplay: "(+92) 307-3144624",
  phoneHref: "tel:+923073144624",
  whatsappHref: "https://wa.me/923073144624",
  email: "sales@matenergy.com.pk",
  address: {
    street: "B 102, Marhaba Heights",
    locality: "North Nazimabad",
    city: "Karachi",
    region: "Sindh",
    country: "PK",
    full: "B 102, Marhaba Heights, North Nazimabad, Karachi",
  },
  // Approximate centre of North Nazimabad; refine with the exact pin if needed.
  geo: { latitude: 24.9425, longitude: 67.0377 },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=B+102+Marhaba+Heights+North+Nazimabad+Karachi",
  hours: "Call support 24/7",
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/mat.energy/",
    linkedin: "",
  },
} as const;

export const nav = [
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/solar-systems/", label: "Solar Systems" },
  { href: "/partners/", label: "Partners" },
  { href: "/solar-calculator/", label: "Savings Calculator" },
  { href: "/faqs/", label: "FAQs" },
  { href: "/contact/", label: "Contact" },
] as const;

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
