import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import Link from "next/link";
import { ArrowUpRight, Factory, Home } from "lucide-react";
import { JsonLd, PageHero } from "@/components/ui";
import { CtaBand, FaqList } from "@/components/blocks";
import { WhyUsSection } from "@/components/sections";
import { areas } from "@/lib/areas";
import { generalFaqs } from "@/lib/faqs";
import { serviceJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = pageMeta({
  title: "Solar Installation in Karachi | All Areas & Industrial Zones",
  description:
    "Solar panel installation in every area of Karachi: DHA, Clifton, Gulshan, North Nazimabad, Bahria Town and industrial zones including SITE, Korangi, Landhi and Port Qasim.",
  path: "/solar-installation-karachi/",
});

export default function AreasPage() {
  const groups = [
    { title: "Residential areas", icon: Home, list: areas.filter((a) => a.kind === "residential") },
    { title: "Industrial zones", icon: Factory, list: areas.filter((a) => a.kind === "industrial") },
  ];
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Solar Panel Installation in Karachi",
          description: "Residential, commercial and industrial solar installation across Karachi.",
          path: "/solar-installation-karachi/",
        })}
      />
      <PageHero
        crumbs={[{ name: "Solar Installation in Karachi", path: "/solar-installation-karachi/" }]}
        eyebrow="Service areas"
        title="Solar panel installation across Karachi"
        intro="From our base in North Nazimabad, our survey, installation and after-sales teams cover every corner of the city, homes and industrial estates alike."
      />
      <section className="container-x space-y-16 py-16 sm:py-24">
        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
              <g.icon className="size-7 text-brand-500" aria-hidden /> {g.title}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.list.map((a) => (
                <Link
                  key={a.slug}
                  href={`/solar-installation-karachi/${a.slug}/`}
                  className="group rounded-3xl bg-white p-7 ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5 hover:ring-brand-200"
                >
                  <h3 className="flex items-center justify-between text-lg font-bold">
                    Solar in {a.name}
                    <ArrowUpRight className="size-5 text-brand-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </h3>
                  <p className="mt-3 line-clamp-3 leading-7 text-ink-500">{a.intro}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
      <WhyUsSection />
      <section className="container-x py-16 sm:py-24">
        <h2 className="mb-8 text-3xl font-bold">Frequently asked questions</h2>
        <FaqList faqs={generalFaqs} />
      </section>
      <CtaBand />
    </>
  );
}
