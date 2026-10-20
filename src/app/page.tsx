import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { FaqList, ServiceList } from "@/components/blocks";
import {
  AboutSection,
  MethodologySection,
  PartnersSection,
  ProjectsSection,
  StatsStrip,
  SystemsSection,
  TestimonialsSection,
  WhyUsSection,
} from "@/components/sections";
import { YouTubeVideo } from "@/components/video";
import { QuoteForm } from "@/components/forms/quote-form";
import { companyVideo, intro } from "@/lib/company";
import { services } from "@/lib/services";
import { generalFaqs } from "@/lib/faqs";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Solar Panel Installation in Karachi | Homes & Businesses | MAT Energy",
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <section className="container-x pb-16 pt-12 sm:pt-16 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <h1>
              <span className="kicker">Solar panel installation in Karachi</span>
              <span className="mt-5 block text-5xl font-extrabold leading-[1.05] sm:text-6xl">
                Powering a brighter, greener future.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink-600">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/get-a-quote/" arrow>
                Get a quote
              </ButtonLink>
              <ButtonLink href="/solar-calculator/" variant="outline">
                Estimate your savings
              </ButtonLink>
            </div>
            <p className="mt-8 text-sm text-ink-500">
              Call support 24/7:{" "}
              <a href={site.phoneHref} className="font-semibold text-ink-900 hover:text-brand-700">
                {site.phoneDisplay}
              </a>
            </p>
          </div>
          <figure>
            <YouTubeVideo id={companyVideo.youtubeId} title={companyVideo.title} />
            <figcaption className="mt-3 text-sm text-ink-500">
              MAT Energy solar energy services. Green energy saves the planet.
            </figcaption>
          </figure>
        </div>
        <div className="mt-16">
          <StatsStrip />
        </div>
      </section>

      <section className="border-t border-ink-100 py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <SectionHeading
            kicker="Our services"
            title="Powering you with smart solutions"
            intro="For homes, businesses and industry across Karachi: from the first audit to years of after-sales care."
            className="lg:sticky lg:top-36 lg:self-start"
          />
          <ServiceList items={services} />
        </div>
      </section>

      <SystemsSection />
      <ProjectsSection />
      <AboutSection />
      <TestimonialsSection />
      <WhyUsSection />
      <MethodologySection />
      <PartnersSection />

      <section className="border-t border-ink-100 bg-ink-50 py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <SectionHeading kicker="FAQs" title="Questions we usually get" className="lg:sticky lg:top-36 lg:self-start" />
          <FaqList faqs={generalFaqs} />
        </div>
      </section>

      <section id="contact" className="container-x grid gap-12 py-20 sm:py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <SectionHeading
            kicker="We're just a message away"
            title="Get in touch with us"
            intro="Tell us about your property and what you need. Our team will call you back to discuss the right system."
          />
          <ul className="mt-10 space-y-5">
            <li className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-brand-600" aria-hidden />
              <div>
                <p className="text-sm text-ink-500">Call for services</p>
                <a href={site.phoneHref} className="font-semibold text-ink-900 hover:text-brand-700">
                  {site.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 size-5 shrink-0 text-brand-600" aria-hidden />
              <div>
                <p className="text-sm text-ink-500">Send us an email</p>
                <a href={`mailto:${site.email}`} className="font-semibold text-ink-900 hover:text-brand-700">
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-brand-600" aria-hidden />
              <div>
                <p className="text-sm text-ink-500">Visit our office</p>
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink-900 hover:text-brand-700"
                >
                  {site.address.full}
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-lg border border-ink-200 p-6 sm:p-10">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
