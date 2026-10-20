import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { Phone } from "lucide-react";
import { PageHero } from "@/components/ui";
import { QuoteForm } from "@/components/forms/quote-form";
import { WorkStrip } from "@/components/blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Get a Solar Quote in Karachi | Homes & Businesses",
  description:
    "Request a solar quotation in Karachi for your home, business or factory. MAT Energy will look at your bills and your site and recommend the right system.",
  path: "/get-a-quote/",
});

const next = [
  "We call you to understand your needs",
  "A site survey at a time that suits you",
  "System design based on your bills and roof",
  "A detailed quotation for your approval",
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        photo={{ src: "/images/projects/karachi-10kw-elevated-rooftop.jpg", alt: "An elevated rooftop array with a walkway" }}
        crumbs={[{ name: "Get a Quote", path: "/get-a-quote/" }]}
        title="Get a solar quote"
        intro="Tell us about your property and we'll recommend the right system for your home, business or factory in Karachi."
      />
      <section className="container-x grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div className="bg-white p-6 sm:p-10" data-reveal>
          <QuoteForm />
        </div>
        <aside className="space-y-14" data-reveal>
          <div>
            <h2 className="font-display text-lead font-bold uppercase leading-none">What happens next</h2>
            <ol className="mt-6 space-y-4">
              {next.map((n) => (
                <li key={n} className="flex gap-3">
                  <span aria-hidden className="mt-[0.6em] size-2 shrink-0 bg-brand-500" />
                  {n}
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-brand-900 p-8 text-white">
            <h2 className="font-display text-lead font-bold uppercase leading-none text-white">Prefer to talk?</h2>
            <p className="mt-3">Call support 24/7, or message us on WhatsApp.</p>
            <a
              href={site.phoneHref}
              className="mt-5 inline-flex items-center gap-2 font-display text-lead font-bold text-white hover:text-brand-200"
            >
              <Phone className="size-5" aria-hidden /> {site.phoneDisplay}
            </a>
          </div>
        </aside>
      </section>
      <WorkStrip />
    </>
  );
}
