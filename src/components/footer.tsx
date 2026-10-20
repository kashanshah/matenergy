import Image from "next/image";
import Link from "next/link";
import { AtSign, Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

const company = [
  { href: "/about/", label: "About Us" },
  { href: "/solar-systems/", label: "Solar Systems" },
  { href: "/projects/", label: "Projects" },
  { href: "/partners/", label: "Partners" },
  { href: "/solar-calculator/", label: "Savings Calculator" },
  { href: "/faqs/", label: "FAQs" },
  { href: "/contact/", label: "Contact Us" },
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
            sizes="172px"
            className="h-14 w-auto"
          />
          <p className="mt-5 max-w-sm leading-7 text-ink-500">
            MAT Energy solar energy services. Green energy saves the planet.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink-900">Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="text-ink-500 hover:text-brand-700">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink-900">Company</h2>
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
          <h2 className="text-sm font-semibold text-ink-900">Get in touch</h2>
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
            {site.social.instagram && (
              <li className="flex gap-3">
                <AtSign className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-700">
                  Instagram: mat.energy
                </a>
              </li>
            )}
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
              {site.hours}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-100">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-ink-500 sm:flex-row sm:justify-between">
          <p>© {site.legalName} All rights reserved.</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
