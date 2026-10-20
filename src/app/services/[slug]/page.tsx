import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ButtonLink, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { CtaBand, FaqList } from "@/components/blocks";
import { MethodologySection, Photo, TestimonialQuote } from "@/components/sections";
import { QuoteForm } from "@/components/forms/quote-form";
import { getService, services } from "@/lib/services";
import { systems } from "@/lib/systems";
import { testimonials } from "@/lib/company";
import { generalFaqs } from "@/lib/faqs";
import type { PhotoKey } from "@/lib/media";
import { serviceJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/metadata";

const heroPhoto: Record<string, { src: string; alt: string }> = {
  "residential-solar-solutions": { src: "/images/projects/karachi-10kw-rooftop-panels.jpg", alt: "Home rooftop panels overlooking Karachi" },
  "commercial-solar-solutions": { src: "/images/projects/karachi-10kw-panel-array.jpg", alt: "A large sunlit panel array" },
  "home-energy-audits": { src: "/images/projects/gulistan-e-johar-25kw-huawei-inverter.jpg", alt: "An inverter and protection boxes inspected on site" },
  "after-sales-services": { src: "/images/projects/gulshan-e-iqbal-20kw-huawei-inverter.jpg", alt: "A serviced inverter between its protection boxes" },
};

const servicePhoto: Record<string, PhotoKey> = {
  "home-energy-audits": "audit",
  "after-sales-services": "afterSales",
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({ title: service.metaTitle, description: service.metaDescription, path: `/services/${service.slug}/` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/services/${service.slug}/`;
  const testimonial = service.testimonial !== undefined ? testimonials[service.testimonial] : undefined;
  const faqs = service.faqs.map((i) => generalFaqs[i]);
  const relevantSystems = systems.filter((s) => service.systems.includes(s.id));
  const others = services.filter((s) => s.slug !== service.slug);
  const photo = servicePhoto[service.slug];

  return (
    <>
      <JsonLd data={serviceJsonLd({ name: service.name, description: service.metaDescription, path })} />
      <PageHero
        photo={heroPhoto[service.slug]}
        crumbs={[
          { name: "Services", path: "/services/" },
          { name: service.name, path },
        ]}
        title={service.title}
        intro={service.summary}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#quote" arrow>
            Get a quote
          </ButtonLink>
          <ButtonLink href="/solar-calculator/" variant="outline">
            Estimate your savings
          </ButtonLink>
        </div>
      </PageHero>

      <section className="container-x grid gap-14 py-24 sm:py-36 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6" data-reveal>
          {service.body.map((p) => (
            <p key={p.slice(0, 24)} className="mb-6 max-w-[60ch]">
              {p}
            </p>
          ))}
          {photo && <Photo name={photo} className="mt-10 aspect-[4/3]" sizes="(min-width: 1024px) 50vw, 100vw" />}
        </div>
        <div className="space-y-12 lg:col-span-5 lg:col-start-8">
          {service.points.map((p) => (
            <div key={p.title} data-reveal>
              <h2 className="text-lead uppercase leading-none">{p.title}</h2>
              <p className="mt-3">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {relevantSystems.length > 0 && (
        <section className="bg-brand-900 py-24 text-white sm:py-36">
          <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-8">
            <SectionHeading
              className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start [&_h2]:text-white"
              title="Which system suits you?"
              intro="We install all three types. The right one depends on your bill, your roof and how much backup you need."
            />
            <ul className="space-y-10 lg:col-span-6 lg:col-start-7">
              {relevantSystems.map((s) => (
                <li key={s.id} data-reveal>
                  <Link href={`/solar-systems/#${s.id}`} className="group grid grid-cols-[2fr_3fr] items-center gap-6">
                    <Photo name={s.id} className="aspect-[4/3]" sizes="(min-width: 1024px) 20vw, 40vw" />
                    <span>
                      <span className="flex items-center gap-3">
                        <h3 className="text-lead uppercase leading-none text-white transition group-hover:text-brand-200">
                          {s.name.replace(" solar system", "")}
                        </h3>
                        <ArrowRight className="size-5 shrink-0 text-brand-200 transition group-hover:translate-x-1" aria-hidden />
                      </span>
                      <span className="mt-2 block text-white">{s.summary}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {testimonial && (
        <section className="container-x py-24 sm:py-36">
          <div className="max-w-4xl">
            <TestimonialQuote t={testimonial} />
          </div>
        </section>
      )}

      <MethodologySection />

      {faqs.length > 0 && (
        <section className="bg-surface py-24 sm:py-36">
          <div className="container-x grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <SectionHeading title="Common questions" />
            <FaqList faqs={faqs} />
          </div>
        </section>
      )}

      <section id="quote" className="scroll-mt-28 py-24 sm:py-36">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <SectionHeading
              title="Request a quote"
              intro="Tell us a little about your property and we'll call you to discuss it."
            />
            <h2 className="mt-12 font-sans text-body font-semibold tracking-normal">Other services</h2>
            <ul className="mt-3 space-y-2">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="font-semibold text-brand-700 underline decoration-2 underline-offset-4 hover:text-brand-900">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 sm:p-10" data-reveal>
            <QuoteForm defaultSegment={service.segment} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
