import Link from "next/link";
import {
  ArrowUpRight,
  BatteryCharging,
  ClipboardCheck,
  Factory,
  Gauge,
  Home,
  MessageCircle,
  Phone,
  Plus,
  Wrench,
} from "lucide-react";
import type { Faq, Service } from "@/lib/services";
import { site } from "@/lib/site";
import { ButtonLink, JsonLd } from "./ui";
import { faqJsonLd } from "@/lib/jsonld";

export const serviceIcons = {
  home: Home,
  factory: Factory,
  meter: Gauge,
  battery: BatteryCharging,
  audit: ClipboardCheck,
  wrench: Wrench,
} as const;

export function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];
  return (
    <Link
      href={`/services/${service.slug}/`}
      className="group relative flex flex-col rounded-3xl bg-white p-7 ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5 hover:ring-brand-200"
    >
      <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition group-hover:bg-brand-500 group-hover:text-white">
        <Icon className="size-6" aria-hidden />
      </span>
      <h3 className="mt-6 text-xl font-bold">{service.shortTitle}</h3>
      <p className="mt-3 flex-1 leading-7 text-ink-500">{service.summary}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
        Learn more
        <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}

export function FaqList({ faqs, withSchema = true }: { faqs: Faq[]; withSchema?: boolean }) {
  return (
    <div className="divide-y divide-ink-100 rounded-3xl bg-white ring-1 ring-ink-100">
      {withSchema && <JsonLd data={faqJsonLd(faqs)} />}
      {faqs.map((f) => (
        <details key={f.q} className="group px-6 py-5 sm:px-8 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
            <h3 className="text-base font-semibold text-ink-900 sm:text-lg">{f.q}</h3>
            <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition group-open:rotate-45 group-open:bg-brand-500 group-open:text-white">
              <Plus className="size-4" aria-hidden />
            </span>
          </summary>
          <p className="mt-4 max-w-3xl leading-7 text-ink-500">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Ready to cut your electricity bill?",
  text = "Book a free site survey anywhere in Karachi. We'll study your bills and roof and send a clear, itemised proposal.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-5xl bg-brand-600 px-6 py-14 text-white sm:px-14 sm:py-16">
        <div className="pointer-events-none absolute -right-20 -top-28 size-96 rounded-full bg-sun-400/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-10 size-96 rounded-full bg-brand-300/40 blur-3xl" />
        <SunRays className="pointer-events-none absolute -right-10 top-1/2 hidden w-96 -translate-y-1/2 text-white/10 lg:block" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-brand-50">{text}</p>
          </div>
          <div className="flex flex-col gap-3 whitespace-nowrap sm:flex-row lg:flex-col">
            <ButtonLink href="/get-a-quote/" variant="sun" arrow>
              Get a free quote
            </ButtonLink>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/20"
            >
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp us
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/20"
            >
              <Phone className="size-4" aria-hidden />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SunRays({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <circle cx="100" cy="100" r="34" fill="currentColor" />
      {Array.from({ length: 12 }).map((_, i) => (
        <rect
          key={i}
          x="96"
          y="18"
          width="8"
          height="34"
          rx="4"
          fill="currentColor"
          transform={`rotate(${i * 30} 100 100)`}
        />
      ))}
    </svg>
  );
}
