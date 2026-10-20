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

      <section className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          {service.body.map((p) => (
            <p key={p.slice(0, 24)} className="mb-5 text-lg leading-8 text-ink-700">
              {p}
            </p>
          ))}
          {photo && <Photo name={photo} className="mt-8 aspect-[16/10]" sizes="(min-width: 1024px) 640px, 100vw" />}
        </div>
        <div className="space-y-8">
          {service.points.map((p) => (
            <div key={p.title} className="border-t-2 border-brand-500 pt-5">
              <h2 className="text-xl font-bold">{p.title}</h2>
              <p className="mt-2 leading-7 text-ink-600">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {relevantSystems.length > 0 && (
        <section className="border-t border-ink-100 bg-ink-50 py-16 sm:py-20">
          <div className="container-x">
            <SectionHeading
              title="Which system is right for you?"
              intro="We install all three types. The right one depends on your bill, your roof and how much backup you need."
            />
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200 md:grid-cols-3">
              {relevantSystems.map((s) => (
                <Link key={s.id} href={`/solar-systems/#${s.id}`} className="group bg-white p-7 hover:bg-brand-50">
                  <h3 className="flex items-center justify-between gap-3 text-lg font-bold group-hover:text-brand-700">
                    {s.name}
                    <ArrowRight className="size-4 text-ink-300 group-hover:text-brand-600" aria-hidden />
                  </h3>
                  <p className="mt-2 leading-7 text-ink-600">{s.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {testimonial && (
        <section className="container-x py-16 sm:py-20">
          <div className="max-w-3xl">
            <TestimonialQuote t={testimonial} />
          </div>
        </section>
      )}

      <MethodologySection />

      {faqs.length > 0 && (
        <section className="border-t border-ink-100 py-16 sm:py-20">
          <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <SectionHeading title="Common questions" />
            <FaqList faqs={faqs} />
          </div>
        </section>
      )}

      <section id="quote" className="scroll-mt-28 border-t border-ink-100 bg-ink-50 py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <SectionHeading
              title="Request a quote"
              intro="Tell us a little about your property and we'll call you to discuss it."
            />
            <h2 className="mt-12 text-sm font-semibold text-ink-900">Other services</h2>
            <ul className="mt-3 space-y-2">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="text-brand-700 hover:underline">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-ink-200 bg-white p-6 sm:p-10">
            <QuoteForm defaultSegment={service.segment} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
