import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MapPin } from "lucide-react";
import { JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { CtaBand, FaqList, ServiceCard } from "@/components/blocks";
import { FactorySolarIllustration, HomeSolarIllustration } from "@/components/illustrations";
import { ProcessSection } from "@/components/sections";
import { QuoteForm } from "@/components/forms/quote-form";
import { areas, getArea } from "@/lib/areas";
import { services, type Faq } from "@/lib/services";
import { serviceJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/metadata";

export function generateStaticParams() {
  return areas.map((a) => ({ area: a.slug }));
}

function copyFor(kind: "residential" | "industrial", name: string) {
  return kind === "industrial"
    ? {
        title: `Industrial Solar Installation in ${name}, Karachi`,
        metaDescription: `Commercial and industrial solar power plants for factories and warehouses in ${name}, Karachi. Feasibility, ROI analysis, EPC, net metering and O&M by Mat Energy.`,
      }
    : {
        title: `Solar Panel Installation in ${name}, Karachi`,
        metaDescription: `Home solar systems in ${name}, Karachi. On-grid, hybrid and battery backup solutions with tier-1 panels, net metering and after-sales service by Mat Energy.`,
      };
}

export async function generateMetadata({ params }: PageProps<"/solar-installation-karachi/[area]">): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  const { title, metaDescription } = copyFor(area.kind, area.name);
  return pageMeta({ title, description: metaDescription, path: `/solar-installation-karachi/${area.slug}/` });
}

export default async function AreaPage({ params }: PageProps<"/solar-installation-karachi/[area]">) {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const { title, metaDescription } = copyFor(area.kind, area.name);
  const path = `/solar-installation-karachi/${area.slug}/`;
  const industrial = area.kind === "industrial";
  const primary = services.find((s) => s.slug === (industrial ? "commercial-industrial-solar-karachi" : "residential-solar-karachi"))!;
  const related = services.filter((s) => s.slug !== primary.slug).slice(0, 3);
  const nearby = areas.filter((a) => a.kind === area.kind && a.slug !== area.slug);

  const faqs: Faq[] = [
    {
      q: `Do you offer free solar site surveys in ${area.name}?`,
      a: `Yes. Our team visits properties in ${area.name} for a free survey, reviews your electricity bills and roof, and sends an itemised proposal.`,
    },
    ...primary.faqs.slice(0, 3),
  ];

  return (
    <>
      <JsonLd data={serviceJsonLd({ name: title, description: metaDescription, path, areaName: area.name })} />
      <PageHero
        crumbs={[
          { name: "Solar Installation in Karachi", path: "/solar-installation-karachi/" },
          { name: area.name, path },
        ]}
        eyebrow={industrial ? "Commercial & industrial" : "Residential"}
        title={title}
        intro={area.intro}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#quote"
            className="inline-flex items-center rounded-full bg-sun-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sun-500/25 hover:bg-sun-600"
          >
            Book a free survey in {area.name}
          </a>
        </div>
      </PageHero>

      <section className="container-x grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow={`Why solar in ${area.name}`}
            title={industrial ? "Cut production energy costs with your own solar plant" : "Lower bills and reliable power for your home"}
            intro={primary.intro[0]}
          />
          <ul className="mt-8 space-y-3">
            {area.notes.map((n) => (
              <li key={n} className="flex gap-3 text-ink-700">
                <Check className="mt-1 size-4 shrink-0 text-brand-500" aria-hidden />
                {n}
              </li>
            ))}
          </ul>
          <Link href={`/services/${primary.slug}/`} className="mt-8 inline-block font-semibold text-brand-700 hover:underline">
            More about {primary.shortTitle.toLowerCase()} solar →
          </Link>
        </div>
        <div className="overflow-hidden rounded-4xl ring-1 ring-ink-100">
          {industrial ? <FactorySolarIllustration className="w-full" /> : <HomeSolarIllustration className="w-full" />}
        </div>
      </section>

      <section className="bg-ink-50 py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Services" title={`Our solar services in ${area.name}`} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[primary, ...related].map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="bg-ink-50 py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="FAQs" title={`Solar in ${area.name}: FAQs`} />
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section id="quote" className="container-x scroll-mt-32 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionHeading
              eyebrow="Free site survey"
              title={`Get a solar quote in ${area.name}`}
              intro="Share a few details and we'll call you to schedule a visit."
            />
            <h2 className="mt-10 text-sm font-semibold uppercase tracking-wider text-ink-400">Nearby areas</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {nearby.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/solar-installation-karachi/${a.slug}/`}
                    className="inline-flex items-center gap-1 rounded-full bg-ink-50 px-3 py-1.5 text-sm text-ink-600 ring-1 ring-ink-100 hover:text-brand-700"
                  >
                    <MapPin className="size-3 text-brand-500" aria-hidden />
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-4xl bg-white p-6 shadow-xl shadow-ink-900/5 ring-1 ring-ink-100 sm:p-10">
            <QuoteForm defaultSegment={industrial ? "Industrial" : "Residential"} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
