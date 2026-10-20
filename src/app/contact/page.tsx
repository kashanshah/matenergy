import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui";
import { ContactForm } from "@/components/forms/contact-form";
import { WorkStrip } from "@/components/blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact MAT Energy | Solar Company in North Nazimabad, Karachi",
  description:
    `Contact MAT Energy for solar installation in Karachi. Call ${site.phoneDisplay}, email ${site.email} or visit our North Nazimabad office.`,
  path: "/contact/",
  absoluteTitle: true,
});

const channels = [
  { icon: Phone, label: "Call us", value: site.phoneDisplay, href: site.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: site.phoneDisplay, href: site.whatsappHref, external: true },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Visit us", value: site.address.full, href: site.mapsHref, external: true },
  { icon: Clock, label: "Support", value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        photo={{ src: "/images/karachi/karachi-skyline-2025.jpg", alt: "Karachi's rooftops stretching to the high-rises" }}
        crumbs={[{ name: "Contact", path: "/contact/" }]}
        title="Get in touch with us"
        intro="We're just a message away. Call, WhatsApp or email us, or send a message below."
      />
      <section className="container-x grid gap-14 py-20 sm:py-28 lg:grid-cols-[1fr_1.5fr]">
        <ul className="space-y-7" data-reveal>
          {channels.map((c) => {
            const inner = (
              <>
                <c.icon className="mt-1 size-5 shrink-0 text-brand-700" aria-hidden />
                <span>
                  <span className="block text-ink-700">{c.label}</span>
                  <span className="block text-lead font-semibold leading-tight">{c.value}</span>
                </span>
              </>
            );
            return (
              <li key={c.label}>
                {c.href ? (
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-start gap-4 hover:text-brand-700"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-start gap-4">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
        <div className="bg-white p-6 sm:p-10" data-reveal>
          <h2 className="font-display text-lead font-bold uppercase leading-none">Send us a message</h2>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
      <WorkStrip />
      <section className="pb-0">
        <div className="overflow-hidden">
          <iframe
            title={`Map showing ${site.name} office`}
            src="https://www.google.com/maps?q=Marhaba+Heights+North+Nazimabad+Karachi&output=embed"
            className="h-[60svh] w-full grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
