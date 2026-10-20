import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";

const company = [
  { href: "/about/", label: "About Mat Energy" },
  { href: "/partners/", label: "Our Partners" },
  { href: "/solar-calculator/", label: "Solar Savings Calculator" },
  { href: "/faqs/", label: "FAQs" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Image
            src="/images/mat-energy-logo.png"
            alt={`${site.name} logo`}
            width={1087}
            height={354}
            className="h-14 w-auto"
          />
          <p className="mt-5 max-w-sm leading-7 text-ink-500">
            Solar panel installation for homes, businesses and industry across Karachi. Designed, installed and
            supported by our own team.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-900">Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="text-ink-500 hover:text-brand-700">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-900">Company</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {company.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="text-ink-500 hover:text-brand-700">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-900">Get in touch</h2>
          <ul className="mt-5 space-y-4 text-sm text-ink-600">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
              <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-brand-700">
                {site.address.full}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
              <a href={site.phoneHref} className="hover:text-brand-700">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-brand-700">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
              {site.hours}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-100">
        <div className="container-x py-8">
          <h2 className="text-sm font-semibold text-ink-900">Solar installation across Karachi</h2>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link href={`/solar-installation-karachi/${a.slug}/`} className="text-ink-500 hover:text-brand-700">
                  Solar in {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-100">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-ink-400 sm:flex-row sm:justify-between">
          <p>© {site.name}. All rights reserved.</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
