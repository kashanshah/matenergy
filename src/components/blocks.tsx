import Link from "next/link";
import { ArrowRight, Phone, Plus } from "lucide-react";
import type { Faq, Service } from "@/lib/services";
import { site } from "@/lib/site";
import { ButtonLink, JsonLd } from "./ui";
import { faqJsonLd } from "@/lib/jsonld";

/** Numbered list of services, one row per service. */
export function ServiceList({ items, headingLevel = "h3" }: { items: Service[]; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <ol className="divide-y divide-ink-200 border-y border-ink-200">
      {items.map((s, i) => (
        <li key={s.slug}>
          <Link
            href={`/services/${s.slug}/`}
            className="group grid gap-4 py-8 sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:gap-8"
          >
            <span className="font-display text-sm font-bold text-sun-600">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <Heading className="text-2xl font-bold group-hover:text-brand-700">{s.name}</Heading>
              <p className="mt-3 max-w-2xl leading-7 text-ink-600">{s.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink-500">
                {s.points.map((p) => (
                  <li key={p.title} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-brand-500" aria-hidden />
                    {p.title}
                  </li>
                ))}
              </ul>
            </div>
            <ArrowRight
              className="hidden size-6 text-ink-300 transition group-hover:translate-x-1 group-hover:text-brand-600 sm:block"
              aria-hidden
            />
          </Link>
        </li>
      ))}
    </ol>
  );
}

export function FaqList({ faqs, withSchema = true }: { faqs: Faq[]; withSchema?: boolean }) {
  return (
    <div className="divide-y divide-ink-200 border-y border-ink-200">
      {withSchema && <JsonLd data={faqJsonLd(faqs)} />}
      {faqs.map((f) => (
        <details key={f.q} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
            <h3 className="text-lg font-semibold text-ink-900">{f.q}</h3>
            <Plus className="mt-1 size-5 shrink-0 text-brand-600 transition group-open:rotate-45" aria-hidden />
          </summary>
          <p className="mt-3 max-w-3xl leading-7 text-ink-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Ready to go solar?",
  text = "Tell us about your home or business and we'll get back to you with the right system and a clear quotation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-brand-800 text-white">
      <div className="container-x grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-lg leading-8 text-brand-100">{text}</p>
        </div>
        <div className="flex flex-col gap-3 whitespace-nowrap sm:flex-row">
          <ButtonLink href="/get-a-quote/" variant="light" arrow>
            Get a quote
          </ButtonLink>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/40 transition hover:bg-white/10"
          >
            <Phone className="size-4" aria-hidden />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
