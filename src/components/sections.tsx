import Link from "next/link";
import { BadgeCheck, ClipboardList, FileCheck2, HardHat, MapPin, PencilRuler, ShieldCheck, Sparkles, Users, Zap } from "lucide-react";
import { partners } from "@/lib/partners";
import { areas } from "@/lib/areas";
import { posts } from "@/lib/posts";
import { SectionHeading } from "./ui";

export function PartnerStrip() {
  return (
    <section aria-labelledby="partners-strip" className="border-y border-ink-100 bg-white py-10">
      <div className="container-x">
        <h2 id="partners-strip" className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
          Tier-1 brands we install
        </h2>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((p) => (
            <li key={p.name} className="font-display text-lg font-bold text-ink-300 transition hover:text-ink-700">
              {p.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const steps = [
  {
    icon: ClipboardList,
    title: "Free site survey",
    text: "We visit, review 12 months of bills, check roof space, shading and structure, and understand your outage pattern.",
  },
  {
    icon: PencilRuler,
    title: "Design & proposal",
    text: "You get a system design, generation estimate, savings and payback, with an itemised, no-surprise quotation.",
  },
  {
    icon: HardHat,
    title: "Professional installation",
    text: "Our trained team installs structure, panels, inverter, protection and earthing to a high standard, then commissions and tests.",
  },
  {
    icon: FileCheck2,
    title: "Net metering & support",
    text: "We file your net-metering application with K-Electric and stay with you for monitoring, cleaning and maintenance.",
  },
];

export function ProcessSection() {
  return (
    <section className="container-x py-20 sm:py-28">
      <SectionHeading
        eyebrow="How it works"
        title="From first call to first unit generated"
        intro="A clear, four-step process with one team responsible from start to finish."
        align="center"
      />
      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="relative rounded-3xl bg-ink-50 p-7 ring-1 ring-ink-100">
            <span className="font-display text-5xl font-extrabold text-brand-100">0{i + 1}</span>
            <s.icon className="absolute right-7 top-8 size-7 text-brand-500" aria-hidden />
            <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
            <p className="mt-3 leading-7 text-ink-500">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const reasons = [
  { icon: BadgeCheck, title: "Tier-1 equipment only", text: "Jinko, LONGi, Trina panels; Huawei, Sungrow, GoodWe, Solis, Growatt inverters; BYD & Pylontech storage." },
  { icon: Users, title: "Our own installation team", text: "Trained technicians, not sub-contracted crews, so quality and accountability stay with us." },
  { icon: ShieldCheck, title: "Safety-first engineering", text: "Correct cable sizing, DC/AC protection, earthing and lightning arrestors on every job." },
  { icon: Zap, title: "Honest system sizing", text: "We size from your real usage and roof, not to upsell capacity you don't need." },
  { icon: FileCheck2, title: "Net metering handled", text: "Complete K-Electric documentation and follow-up until your green meter is installed." },
  { icon: Sparkles, title: "After-sales that shows up", text: "Monitoring, cleaning plans and warranty support long after installation day." },
];

export function WhyUsSection() {
  return (
    <section className="bg-ink-50 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Mat Energy"
          title="A solar partner Karachi can rely on for 25 years"
          intro="Solar is a long-term investment. We build systems, and relationships, to last."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-4xl bg-ink-100 ring-1 ring-ink-100 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white p-8">
              <r.icon className="size-7 text-sun-500" aria-hidden />
              <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
              <p className="mt-2 leading-7 text-ink-500">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AreasSection() {
  const residential = areas.filter((a) => a.kind === "residential");
  const industrial = areas.filter((a) => a.kind === "industrial");
  return (
    <section className="container-x py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          eyebrow="Service areas"
          title="Solar installation across Karachi"
          intro={
            <>
              Based in North Nazimabad, we install and service solar systems in every part of the city.{" "}
              <Link href="/solar-installation-karachi/" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
                See all areas
              </Link>
              .
            </>
          }
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {[
            { title: "Residential areas", list: residential },
            { title: "Industrial zones", list: industrial },
          ].map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-400">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.list.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/solar-installation-karachi/${a.slug}/`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-700 ring-1 ring-ink-200 transition hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-300"
                    >
                      <MapPin className="size-3.5 text-brand-500" aria-hidden />
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PostCard({ slug, title, description, category, date }: (typeof posts)[number]) {
  return (
    <article className="group relative flex flex-col rounded-3xl bg-white p-7 ring-1 ring-ink-100 transition hover:shadow-xl hover:shadow-brand-900/5 hover:ring-brand-200">
      <div className="flex items-center gap-3 text-xs">
        <span className="rounded-full bg-sun-50 px-2.5 py-1 font-semibold text-sun-700 ring-1 ring-sun-100">{category}</span>
        <time dateTime={date} className="text-ink-400">
          {new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </time>
      </div>
      <h3 className="mt-5 text-xl font-bold leading-snug">
        <Link href={`/blog/${slug}/`} className="after:absolute after:inset-0 group-hover:text-brand-700">
          {title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 leading-7 text-ink-500">{description}</p>
    </article>
  );
}
