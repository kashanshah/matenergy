import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui";
import { ContactForm } from "@/components/forms/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact MAT Energy | Solar Company in North Nazimabad, Karachi",
  description:
    `Contact MAT Energy for solar installation in Karachi. Call ${site.phoneDisplay}, email ${site.email} or visit us at ${site.address.full}.`,
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
        crumbs={[{ name: "Contact", path: "/contact/" }]}
        title="Get in touch with us"
        intro="We're just a message away. Call, WhatsApp or email us, or send a message below."
      />
      <section className="container-x grid gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_1.5fr]">
        <ul className="divide-y divide-ink-200 border-y border-ink-200">
          {channels.map((c) => {
            const inner = (
              <>
                <c.icon className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden />
                <span>
                  <span className="block text-sm text-ink-400">{c.label}</span>
                  <span className="block font-semibold text-ink-900">{c.value}</span>
                </span>
              </>
            );
            return (
              <li key={c.label}>
                {c.href ? (
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-start gap-4 py-5 hover:text-brand-700"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-start gap-4 py-5">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
        <div className="rounded-lg border border-ink-200 p-6 sm:p-10">
          <h2 className="text-2xl font-bold">Send us a message</h2>
          
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="container-x pb-20">
        <div className="overflow-hidden rounded-lg border border-ink-200">
          <iframe
            title={`Map showing ${site.name} office`}
            src="https://www.google.com/maps?q=Marhaba+Heights+North+Nazimabad+Karachi&output=embed"
            className="h-96 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
