import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

const company = [
  { href: "/about/", label: "About" },
  { href: "/projects/", label: "Projects" },
  { href: "/solar-systems/", label: "Solar systems" },
  { href: "/partners/", label: "Partners" },
  { href: "/solar-calculator/", label: "Savings calculator" },
  { href: "/faqs/", label: "FAQs" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy-policy/", label: "Privacy policy" },
];

export function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="container-x flex min-h-[90svh] flex-col pb-8 pt-10">
        <div className="grid gap-8 text-brand-100 sm:grid-cols-[auto_1fr_1fr_auto] sm:gap-12">
          <Image
            src="/images/mat-energy-mark.png"
            alt={`${site.name} logo`}
            width={64}
            height={64}
            className="size-12"
          />
          <p className="max-w-[30ch]">
            {site.legalName}
            <br />
            {site.address.full}
          </p>
          <p className="max-w-[34ch]">
            Solar design, installation and after-sales care for homes and businesses in Karachi. Phone support 24/7.
          </p>
          <a href="#main" className="self-start font-semibold text-white hover:text-brand-200">
            Back to top
          </a>
        </div>

        <div className="mt-auto pt-24" data-reveal>
          <p className="text-brand-100">Call or WhatsApp us, day or night</p>
          <a
            href={site.phoneHref}
            className="mt-3 block font-display text-display font-bold uppercase leading-[0.85] tracking-[-0.02em] text-white transition hover:text-brand-200"
          >
            {site.phoneDisplay.replace(/[()]/g, "")}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block text-lead font-semibold text-white underline decoration-2 underline-offset-[6px] hover:text-brand-200"
          >
            {site.email}
          </a>
        </div>

        <div className="mt-20 grid gap-8 text-small text-brand-100 md:grid-cols-[2fr_1fr_auto] md:items-end">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="text-white hover:text-brand-200">
                    {s.name}
                  </Link>
                </li>
              ))}
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-white hover:text-brand-200">
                    {c.label}
                  </Link>
                </li>
              ))}
              {site.social.instagram && (
                <li>
                  <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-200">
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </nav>
          <p>Photographs from MAT Energy installations. Karachi skyline by Ktownboy103, CC0, via Wikimedia Commons.</p>
          <p>
            Karachi · {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
