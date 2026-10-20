export const site = {
  name: "Mat Energy",
  legalName: "Mat Energy",
  tagline: "Adding Green Energy to your Life.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://matenergy.com.pk").replace(/\/$/, ""),
  description:
    "Mat Energy designs and installs on-grid, hybrid and off-grid solar systems for homes, businesses and factories across Karachi, with net-metering, tier-1 panels and after-sales support.",
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
  hours: "Mon–Sat, 10:00 am – 7:00 pm",
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/mat.energy/",
    linkedin: "",
  },
} as const;

export const nav = [
  { href: "/services/residential-solar-karachi/", label: "Residential" },
  { href: "/services/commercial-industrial-solar-karachi/", label: "Commercial & Industrial" },
  { href: "/services/", label: "Services" },
  { href: "/solar-calculator/", label: "Savings Calculator" },
  { href: "/partners/", label: "Partners" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
] as const;

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
