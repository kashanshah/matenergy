import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { PageHero, SectionHeading } from "@/components/ui";
import { CtaBand, FaqList } from "@/components/blocks";
import { SolarCalculator } from "@/components/forms/solar-calculator";
import type { Faq } from "@/lib/services";

export const metadata: Metadata = pageMeta({
  title: "Solar Savings Calculator Karachi | What Size Solar System Do I Need?",
  description:
    "Free solar calculator for Karachi. Enter your electricity bill to estimate the solar system size, number of panels, roof space and monthly savings for your home or business.",
  path: "/solar-calculator/",
});

const faqs: Faq[] = [
  {
    q: "How is the system size calculated?",
    a: "We divide your monthly bill by your average cost per unit to estimate monthly consumption, apply the share you want solar to cover, then divide by the typical monthly output of 1 kW of solar in Karachi (about 130 kWh after losses).",
  },
  {
    q: "Why might my final quote differ from the calculator?",
    a: "Roof orientation, shading, available space, your daytime vs night-time usage, battery needs and current net-metering rules all affect the final design. A site survey accounts for all of these.",
  },
  {
    q: "What is a typical cost per unit in Karachi?",
    a: "It varies by consumer category, slab and taxes. Divide your total bill by the units consumed on a recent K-Electric bill for the most accurate figure.",
  },
];

export default function CalculatorPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Solar Savings Calculator", path: "/solar-calculator/" }]}
        title="Solar savings calculator for Karachi"
        intro="Find out what size solar system you need and how much you could save, in seconds."
      />
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SolarCalculator />
        </div>
      </section>
      <section className="container-x border-t border-ink-100 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading title="About this estimate" />
          <FaqList faqs={faqs} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
