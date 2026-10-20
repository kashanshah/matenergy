import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BatteryCharging, Calculator, Check, Factory, Gauge, Home as HomeIcon, ShieldCheck } from "lucide-react";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { CtaBand, FaqList, ServiceCard } from "@/components/blocks";
import { FactorySolarIllustration, HomeSolarIllustration } from "@/components/illustrations";
import { AreasSection, PartnerStrip, PostCard, ProcessSection, WhyUsSection } from "@/components/sections";
import { services } from "@/lib/services";
import { generalFaqs } from "@/lib/faqs";
import { posts } from "@/lib/posts";
import { estimate, pkr } from "@/lib/solar";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Solar Panel Installation in Karachi | Residential & Industrial Solar | Mat Energy",
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

const example = estimate(40000, 60, 90);

const heroPoints = ["Free site survey & bill analysis", "Tier-1 panels & inverters", "K-Electric net metering handled"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-white">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-sun-200/40 blur-3xl" />
        <div className="container-x relative grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:pb-28">
          <div>
            <span className="eyebrow">
              <span className="size-1.5 rounded-full bg-sun-500" /> Solar installer in Karachi
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[4rem]">
              Solar panel installation in Karachi for{" "}
              <span className="relative whitespace-nowrap text-brand-600">
                homes
                <svg viewBox="0 0 200 12" className="absolute -bottom-1 left-0 w-full text-sun-400" aria-hidden>
                  <path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              &amp; industry.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink-500">
              Mat Energy designs, installs and maintains on-grid, hybrid and off-grid solar systems that cut your
              electricity bills and keep the lights on through load-shedding, from 3 kW rooftops to 1 MW+ factory
              plants.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/get-a-quote/" variant="sun" arrow>
                Get a free quote
              </ButtonLink>
              <ButtonLink href="/solar-calculator/" variant="outline">
                <Calculator className="size-4" aria-hidden /> Calculate your savings
              </ButtonLink>
            </div>
            <ul className="mt-8 grid gap-3 text-sm text-ink-600 sm:grid-cols-3 sm:gap-4">
              {heroPoints.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <HomeSolarIllustration className="w-full drop-shadow-xl" />
            <div className="absolute -left-3 bottom-10 hidden items-center gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-ink-900/10 ring-1 ring-ink-100 sm:flex">
              <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Gauge className="size-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs text-ink-400">Net metering</p>
                <p className="font-display font-bold text-ink-900">Paperwork handled</p>
              </div>
            </div>
            <div className="absolute -right-2 top-8 hidden items-center gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-ink-900/10 ring-1 ring-ink-100 sm:flex">
              <span className="grid size-10 place-items-center rounded-xl bg-sun-50 text-sun-600">
                <BatteryCharging className="size-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs text-ink-400">Load-shedding?</p>
                <p className="font-display font-bold text-ink-900">Hybrid backup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerStrip />

      {/* Segments */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="Who we power"
          title="Solar solutions for every Karachi rooftop"
          intro="Whether it's a family home in DHA or a textile unit in SITE, we engineer the system around your load, roof and budget."
          align="center"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {[
            {
              href: "/services/residential-solar-karachi/",
              icon: HomeIcon,
              label: "Residential",
              title: "Home solar systems",
              text: "3–25 kW on-grid and hybrid systems for houses, bungalows and portions. Lower bills, backup during outages and a cleaner home.",
              points: ["Bill-based system sizing", "Lithium battery backup options", "Elevated structures for usable roofs"],
              art: <HomeSolarIllustration className="w-full" />,
            },
            {
              href: "/services/commercial-industrial-solar-karachi/",
              icon: Factory,
              label: "Commercial & Industrial",
              title: "Factory & business solar plants",
              text: "20 kW to 1 MW+ rooftop and ground-mounted plants for factories, warehouses, offices, schools and hospitals.",
              points: ["Feasibility & ROI analysis", "Generator synchronisation", "O&M and cleaning contracts"],
              art: <FactorySolarIllustration className="w-full" />,
            },
          ].map((seg) => (
            <Link
              key={seg.href}
              href={seg.href}
              className="group flex flex-col overflow-hidden rounded-5xl bg-ink-50 ring-1 ring-ink-100 transition hover:shadow-2xl hover:shadow-brand-900/10 hover:ring-brand-200"
            >
              <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                <div className="overflow-hidden rounded-4xl">{seg.art}</div>
              </div>
              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                  <seg.icon className="size-3.5" aria-hidden /> {seg.label}
                </span>
                <h3 className="mt-5 text-2xl font-bold sm:text-3xl">{seg.title}</h3>
                <p className="mt-4 leading-7 text-ink-500">{seg.text}</p>
                <ul className="mt-6 space-y-2 text-sm text-ink-700">
                  {seg.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold text-brand-700">
                  Explore {seg.label.toLowerCase()} solar
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-gradient-to-b from-white to-brand-50/60 pb-20 sm:pb-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Services"
              title="Everything solar, under one roof"
              intro="From the first energy audit to decades of maintenance, one accountable team."
            />
            <ButtonLink href="/services/" variant="outline" arrow className="self-start lg:self-auto">
              All services
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <WhyUsSection />

      {/* Calculator teaser */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid items-center gap-10 overflow-hidden rounded-5xl bg-sun-50 p-8 ring-1 ring-sun-100 sm:p-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="eyebrow bg-white text-sun-700 ring-sun-200">Free tool</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">How much could solar save you?</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-ink-500">
              Enter your monthly electricity bill and get an instant estimate of the system size, roof space, panel
              count and monthly savings for your Karachi property.
            </p>
            <ButtonLink href="/solar-calculator/" variant="primary" arrow className="mt-8">
              Open the savings calculator
            </ButtonLink>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Monthly bill", pkr(40000)],
              ["System size", `${example.systemKw} kW`],
              ["Panels", String(example.panels)],
              ["Est. savings", `~${pkr(example.monthlySavings)}/mo`],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-sun-100">
                <p className="text-xs text-ink-400">{k}</p>
                <p className="mt-1 font-display text-lg font-bold text-ink-900">{v}</p>
              </div>
            ))}
            <p className="col-span-2 flex items-center gap-2 text-xs text-ink-400">
              <ShieldCheck className="size-3.5" aria-hidden /> Example at PKR 60/unit, 90% coverage
            </p>
          </div>
        </div>
      </section>

      <AreasSection />

      {/* FAQ */}
      <section className="bg-ink-50 py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading
            eyebrow="FAQs"
            title="Solar questions, answered"
            intro={
              <>
                Can&apos;t find what you&apos;re looking for?{" "}
                <Link href="/contact/" className="font-semibold text-brand-700 hover:underline">
                  Ask our team
                </Link>
                .
              </>
            }
          />
          <FaqList faqs={generalFaqs.slice(0, 5)} />
        </div>
      </section>

      {/* Blog */}
      <section className="container-x pt-20 sm:pt-28">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Solar guides" title="Learn before you invest" />
          <ButtonLink href="/blog/" variant="outline" arrow className="self-start lg:self-auto">
            All articles
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <PostCard key={p.slug} {...p} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
