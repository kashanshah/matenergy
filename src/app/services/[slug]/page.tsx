import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MapPin } from "lucide-react";
import { JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { CtaBand, FaqList, ServiceCard, serviceIcons } from "@/components/blocks";
import { FactorySolarIllustration, HomeSolarIllustration } from "@/components/illustrations";
import { QuoteForm } from "@/components/forms/quote-form";
import { getService, services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { serviceJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/metadata";

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

  const Icon = serviceIcons[service.icon];
  const path = `/services/${service.slug}/`;
  const relatedAreas = areas.filter((a) =>
    service.segment === "both" ? true : service.segment === "industrial" ? a.kind === "industrial" : a.kind === "residential",
  );
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={serviceJsonLd({ name: service.title, description: service.metaDescription, path })} />
      <PageHero
        crumbs={[
          { name: "Services", path: "/services/" },
          { name: service.shortTitle, path },
        ]}
        eyebrow={service.shortTitle}
        title={service.title}
        intro={service.summary}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#quote"
            className="inline-flex items-center rounded-full bg-sun-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sun-500/25 hover:bg-sun-600"
          >
            Get a free quote
          </a>
          <Link
            href="/solar-calculator/"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 ring-1 ring-ink-200 hover:ring-brand-400"
          >
            Estimate your savings
          </Link>
        </div>
      </PageHero>

      <section className="container-x grid gap-14 py-16 sm:py-24 lg:grid-cols-[1.3fr_1fr]">
        <div>
          {service.intro.map((p) => (
            <p key={p.slice(0, 32)} className="mb-5 text-lg leading-8 text-ink-600">
              {p}
            </p>
          ))}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {service.highlights.map((h) => (
              <div key={h.title} className="rounded-3xl bg-ink-50 p-6 ring-1 ring-ink-100">
                <h2 className="text-lg font-bold">{h.title}</h2>
                <p className="mt-2 leading-7 text-ink-500">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="space-y-6">
          <div className="overflow-hidden rounded-4xl ring-1 ring-ink-100">
            {service.segment === "industrial" ? (
              <FactorySolarIllustration className="w-full" />
            ) : (
              <HomeSolarIllustration className="w-full" />
            )}
          </div>
          <div className="rounded-4xl bg-white p-7 ring-1 ring-ink-100">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="size-5" aria-hidden />
              </span>
              <h2 className="text-lg font-bold">What&apos;s included</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {service.includes.map((i) => (
                <li key={i} className="flex gap-3 text-ink-600">
                  <Check className="mt-1 size-4 shrink-0 text-brand-500" aria-hidden />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-4xl bg-sun-50 p-7 ring-1 ring-sun-100">
            <h2 className="text-lg font-bold">Ideal for</h2>
            <ul className="mt-4 space-y-2.5">
              {service.idealFor.map((i) => (
                <li key={i} className="flex gap-3 text-ink-600">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sun-500" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="bg-ink-50 py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="FAQs" title={`${service.shortTitle}: common questions`} />
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      <section id="quote" className="container-x scroll-mt-32 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionHeading
              eyebrow="Free site survey"
              title="Get your custom solar proposal"
              intro="Tell us a little about your property. We'll call to schedule a free survey anywhere in Karachi."
            />
            <h2 className="mt-10 text-sm font-semibold uppercase tracking-wider text-ink-400">Areas we serve</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {relatedAreas.map((a) => (
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
            <QuoteForm
              defaultSegment={service.segment === "industrial" ? "Industrial" : "Residential"}
            />
          </div>
        </div>
      </section>

      <section className="container-x pb-8">
        <h2 className="text-2xl font-bold">Related services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {others.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
