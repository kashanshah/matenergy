import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Faq, Service } from "@/lib/services";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import { ButtonLink, JsonLd } from "./ui";
import { faqJsonLd } from "@/lib/jsonld";

/** One row per service; the name is the link. Rows are separated by space, not lines. */
export function ServiceList({ items, headingLevel = "h3" }: { items: Service[]; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <ul className="space-y-14 sm:space-y-20">
      {items.map((s) => (
        <li key={s.slug} data-reveal>
          <Link href={`/services/${s.slug}/`} className="group block">
            <Heading className="flex items-baseline gap-4 font-display text-head uppercase leading-[0.9] transition group-hover:text-brand-700">
              {s.name}
              <ArrowRight className="size-8 shrink-0 transition group-hover:translate-x-2" aria-hidden />
            </Heading>
          </Link>
          <p className="mt-5 max-w-[60ch]">{s.summary}</p>
          <p className="mt-3 max-w-[60ch] text-ink-600">{s.points.map((p) => p.title).join(" · ")}</p>
        </li>
      ))}
    </ul>
  );
}

export function FaqList({ faqs, withSchema = true }: { faqs: Faq[]; withSchema?: boolean }) {
  return (
    <div className="space-y-2">
      {withSchema && <JsonLd data={faqJsonLd(faqs)} />}
      {faqs.map((f) => (
        <details key={f.q} className="group bg-white px-6 py-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 text-left">
            <h3 className="font-sans text-body font-semibold leading-snug tracking-normal [text-wrap:pretty] transition group-hover:text-brand-700">
              {f.q}
            </h3>
            <span
              aria-hidden
              className="relative size-4 shrink-0 transition group-open:rotate-45 before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-4 before:bg-brand-700 after:absolute after:left-[7px] after:top-0 after:h-4 after:w-0.5 after:bg-brand-700"
            />
          </summary>
          <p className="mt-2 max-w-[64ch] pb-2 text-ink-700">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Three installations side by side in even frames, each linking to its project. */
export function WorkStrip({ className = "" }: { className?: string }) {
  const picks = [projects[3], projects[0], projects[4]];
  return (
    <div className={`container-x grid gap-8 py-16 sm:grid-cols-3 ${className}`}>
      {picks.map((p) => (
        <Link key={p.slug} href={`/projects/#${p.slug}`} className="group block">
          <span className="relative block aspect-[4/3] overflow-hidden">
            <Image
              src={p.photos[0].src}
              alt={p.photos[0].alt}
              fill
              quality={85}
              sizes="(min-width: 640px) 30vw, 92vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </span>
          <span className="mt-3 block font-semibold underline-offset-4 group-hover:underline">
            {p.size} kW {p.type.toLowerCase()}, {p.location}
          </span>
        </Link>
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
    <section className="bg-brand-700 text-white">
      <div className="container-x grid gap-10 py-24 sm:py-32 lg:grid-cols-[1fr_auto] lg:items-end" data-reveal>
        <div>
          <h2 className="title-head text-white">{title}</h2>
          <p className="mt-6 max-w-[48ch] text-lead leading-[1.35] text-white">{text}</p>
        </div>
        <div className="flex flex-col gap-3 whitespace-nowrap sm:flex-row">
          <ButtonLink href="/get-a-quote/" variant="light" arrow>
            Get a quote
          </ButtonLink>
          <a
            href={site.phoneHref}
            className="inline-flex min-h-12 items-center justify-center bg-brand-900 px-6 py-3 font-semibold text-white transition hover:bg-brand-950 active:scale-[0.98]"
          >
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
      <WorkStrip />
    </section>
  );
}
