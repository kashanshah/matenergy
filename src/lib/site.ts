export const site = {
  name: "MAT Energy",
  legalName: "MAT Energy (Pvt.) Ltd.",
  tagline: "Adding Green Energy to your Life.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.matenergy.com.pk").replace(/\/$/, ""),
  description:
    "On-grid, off-grid and hybrid solar for homes and businesses in Karachi, from energy audits and installation to after-sales service by MAT Energy.",
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
  { href: "/projects/", label: "Projects" },
  { href: "/partners/", label: "Partners" },
  { href: "/solar-calculator/", label: "Savings Calculator" },
  { href: "/faqs/", label: "FAQs" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
] as const;

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
