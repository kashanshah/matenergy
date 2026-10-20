import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { JsonLd, PageHero } from "@/components/ui";
import { faqJsonLd } from "@/lib/jsonld";
import { CtaBand, FaqList } from "@/components/blocks";
import { generalFaqs } from "@/lib/faqs";
import { services } from "@/lib/services";

export const metadata: Metadata = pageMeta({
  title: "Solar FAQs Karachi | Cost, Net Metering, Batteries & Maintenance",
  description:
    "Answers to common questions about solar panel installation in Karachi: system size, cost, net metering with K-Electric, hybrid batteries, warranties and maintenance.",
  path: "/faqs/",
});

export default function FaqsPage() {
  const all = [...generalFaqs, ...services.flatMap((s) => s.faqs)];
  return (
    <>
      <PageHero
        crumbs={[{ name: "FAQs", path: "/faqs/" }]}
        eyebrow="FAQs"
        title="Frequently asked questions about solar in Karachi"
        intro="Everything you need to know before going solar, from system sizing to net metering and maintenance."
      />
      <section className="container-x py-16 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-14">
          <div>
            <h2 className="mb-6 text-2xl font-bold">General</h2>
            <FaqList faqs={generalFaqs} withSchema={false} />
          </div>
          {services.map((s) => (
            <div key={s.slug}>
              <h2 className="mb-6 text-2xl font-bold">{s.shortTitle}</h2>
              <FaqList faqs={s.faqs} withSchema={false} />
            </div>
          ))}
        </div>
        <JsonLd data={faqJsonLd(all)} />
      </section>
      <CtaBand />
    </>
  );
}
