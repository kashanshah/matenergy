import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/ui";
import { CtaBand, FaqList } from "@/components/blocks";
import { generalFaqs } from "@/lib/faqs";

export const metadata: Metadata = pageMeta({
  title: "Solar FAQs | Paperwork, Repairs, Cost & Battery Backup",
  description:
    "Answers to common questions about solar in Karachi: paperwork for installation and net metering, repair costs, pricing, battery checks and backup time.",
  path: "/faqs/",
});

export default function FaqsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "FAQs", path: "/faqs/" }]}
        title="Frequently asked questions"
        intro="The questions we usually get about solar. Don't see yours? Call or message us."
      />
      <section className="container-x py-16 sm:py-20">
        <div className="max-w-4xl">
          <FaqList faqs={generalFaqs} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
