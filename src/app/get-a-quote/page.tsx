import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { Check, Phone } from "lucide-react";
import { PageHero } from "@/components/ui";
import { QuoteForm } from "@/components/forms/quote-form";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Get a Free Solar Quote in Karachi | Free Site Survey",
  description:
    "Request a free solar site survey and quotation in Karachi for your home, business or factory. Mat Energy will study your bills and roof and send an itemised proposal.",
  path: "/get-a-quote/",
});

const next = [
  "We call you within one working day to understand your needs",
  "A free site survey at a time that suits you",
  "System design with generation and savings estimate",
  "An itemised quotation, with no hidden costs",
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Get a Quote", path: "/get-a-quote/" }]}
        eyebrow="Free site survey"
        title="Get a free solar quote"
        intro="Tell us about your property and we'll design the right system for your home, business or factory in Karachi."
      />
      <section className="container-x grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-4xl bg-white p-6 shadow-xl shadow-ink-900/5 ring-1 ring-ink-100 sm:p-10">
          <QuoteForm />
        </div>
        <aside className="space-y-6">
          <div className="rounded-4xl bg-brand-50 p-8 ring-1 ring-brand-100">
            <h2 className="text-xl font-bold">What happens next</h2>
            <ol className="mt-6 space-y-4">
              {next.map((n, i) => (
                <li key={n} className="flex gap-3 text-ink-700">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-500 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {n}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-4xl bg-white p-8 ring-1 ring-ink-100">
            <h2 className="text-xl font-bold">Prefer to talk?</h2>
            <p className="mt-2 text-ink-500">Call or WhatsApp our sales team.</p>
            <a href={site.phoneHref} className="mt-5 inline-flex items-center gap-2 font-display text-xl font-bold text-brand-700">
              <Phone className="size-5" aria-hidden /> {site.phoneDisplay}
            </a>
            <ul className="mt-6 space-y-2 text-sm text-ink-500">
              {["Residential, commercial & industrial", "All areas of Karachi", "Tier-1 equipment only"].map((t) => (
                <li key={t} className="flex gap-2">
                  <Check className="mt-0.5 size-4 text-brand-500" aria-hidden /> {t}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
