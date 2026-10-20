import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { Phone } from "lucide-react";
import { PageHero } from "@/components/ui";
import { QuoteForm } from "@/components/forms/quote-form";
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
        crumbs={[{ name: "Get a Quote", path: "/get-a-quote/" }]}
        title="Get a solar quote"
        intro="Tell us about your property and we'll recommend the right system for your home, business or factory in Karachi."
      />
      <section className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div className="rounded-lg border border-ink-200 p-6 sm:p-10">
          <QuoteForm />
        </div>
        <aside className="space-y-10">
          <div>
            <h2 className="text-xl font-bold">What happens next</h2>
            <ol className="mt-6 space-y-4">
              {next.map((n, i) => (
                <li key={n} className="flex gap-4 text-ink-700">
                  <span className="font-display text-sm font-bold text-sun-700">{String(i + 1).padStart(2, "0")}</span>
                  {n}
                </li>
              ))}
            </ol>
          </div>
          <div className="border-t border-ink-200 pt-8">
            <h2 className="text-xl font-bold">Prefer to talk?</h2>
            <p className="mt-2 text-ink-600">Call support 24/7, or message us on WhatsApp.</p>
            <a
              href={site.phoneHref}
              className="mt-4 inline-flex items-center gap-2 font-display text-xl font-bold text-brand-700"
            >
              <Phone className="size-5" aria-hidden /> {site.phoneDisplay}
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
