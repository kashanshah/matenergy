import Image from "next/image";
import { Check, Quote } from "lucide-react";
import { about, methodology, stats, testimonials, whyUs, type Testimonial } from "@/lib/company";
import { hasPublicFile, photos, type PhotoKey } from "@/lib/media";
import { partners, type Partner } from "@/lib/partners";
import { projects, type Project } from "@/lib/projects";
import { systems, type SolarSystem } from "@/lib/systems";
import { SectionHeading, TextLink } from "./ui";

/** Renders a photo from the live site, or nothing if it hasn't been added to /public yet. */
export function Photo({ name, className = "", sizes }: { name: PhotoKey; className?: string; sizes: string }) {
  const photo = photos[name];
  if (!hasPublicFile(photo.src)) return null;
  return (
    <div className={`relative overflow-hidden rounded-lg bg-ink-100 ${className}`}>
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

export function StatsStrip() {
  return (
    <dl className="grid divide-y divide-ink-200 border-y border-ink-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {stats.map((s) => (
        <div key={s.label} className="py-6 sm:px-8 sm:first:pl-0">
          <dt className="sr-only">{s.label}</dt>
          <dd className="font-display text-4xl font-extrabold text-ink-900">{s.value}</dd>
          <dd className="mt-1 text-sm text-ink-500">{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}

export function AboutSection({ link = true }: { link?: boolean }) {
  return (
    <section className="container-x grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20">
      <div>
        <SectionHeading kicker="About MAT Energy" title={about.title} />
        <p className="mt-6 text-lg leading-8 text-ink-600">{about.text}</p>
        {link && <TextLink href="/about/" className="mt-8">More about us</TextLink>}
      </div>
      <div className="space-y-8">
        <Photo name="about" className="aspect-[4/3]" sizes="(min-width: 1024px) 600px, 100vw" />
        <div className="rounded-lg bg-brand-50 p-8">
          <h3 className="text-lg font-bold">What solar does for you</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {about.specialties.map((s) => (
              <li key={s} className="flex gap-3 font-medium text-ink-800">
                <Check className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function SystemColumn({ system, headingLevel = "h3" }: { system: SolarSystem; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <div className="flex flex-col">
      <Photo name={system.id} className="mb-6 aspect-[4/3]" sizes="(min-width: 1024px) 400px, 100vw" />
      <Heading className="text-xl font-bold">{system.name}</Heading>
      <p className="mt-3 leading-7 text-ink-600">{system.summary}</p>
      <ul className="mt-5 space-y-2.5 text-sm text-ink-600">
        {system.benefits.slice(0, 3).map((b) => (
          <li key={b} className="flex gap-2.5">
            <Check className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SystemsSection() {
  return (
    <section className="border-t border-ink-100 bg-ink-50 py-20 sm:py-24">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="What we specialise in"
            title="On-grid, off-grid or hybrid"
            intro="Three ways to go solar. Which one suits you depends on your bill, your roof and how much load-shedding you face."
          />
          <TextLink href="/solar-systems/">Compare the systems</TextLink>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {systems.map((s) => (
            <SystemColumn key={s.id} system={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({ project, headingLevel = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const [cover] = project.photos;
  return (
    <article className="flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-ink-100">
        <Image src={cover.src} alt={cover.alt} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
      </div>
      <p className="mt-5 text-sm font-semibold text-brand-700">
        {project.type} · {project.location}
      </p>
      <Heading className="mt-1.5 text-xl font-bold">{project.title}</Heading>
      <ul className="mt-3 space-y-1.5 text-sm text-ink-600">
        {project.equipment.map((e) => (
          <li key={e} className="flex gap-2.5">
            <Check className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
            {e}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ProjectsSection({ limit = 3 }: { limit?: number }) {
  return (
    <section className="border-t border-ink-100 py-20 sm:py-24">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Recent projects"
            title="Solar systems we've installed in Karachi"
            intro="Homes, farmhouses and businesses across the city, from 10 kW rooftops to a 275 kW industrial plant."
          />
          <TextLink href="/projects/">See all projects</TextLink>
        </div>
        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {projects.slice(0, limit).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUsSection() {
  return (
    <section className="container-x grid gap-12 py-20 sm:py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
      <div>
        <SectionHeading kicker="Why choose us" title={whyUs.title} />
        {whyUs.paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="mt-5 leading-8 text-ink-600">
            {p}
          </p>
        ))}
      </div>
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {whyUs.points.map((p) => (
          <div key={p.title} className="border-t-2 border-brand-500 pt-5">
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="mt-2 leading-7 text-ink-600">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function MethodologySection() {
  return (
    <section className="border-t border-ink-100 py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading kicker="How we work" title={methodology.title} intro={methodology.intro} />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {methodology.steps.map((s, i) => (
            <li key={s.title} className="border-l-2 border-ink-200 pl-5 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-5">
              <span className="font-display text-sm font-bold text-sun-700">Step {i + 1}</span>
              <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function TestimonialQuote({ t, dark = false }: { t: Testimonial; dark?: boolean }) {
  return (
    <figure className="flex flex-col">
      <Quote className={`size-8 ${dark ? "text-sun-400" : "text-sun-500"}`} aria-hidden />
      <p className={`mt-4 font-display text-lg font-bold ${dark ? "text-white" : "text-ink-900"}`}>{t.title}</p>
      <blockquote className={`mt-3 flex-1 text-lg leading-8 ${dark ? "text-ink-200" : "text-ink-600"}`}>
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6">
        <span className={`block font-semibold ${dark ? "text-white" : "text-ink-900"}`}>{t.name}</span>
        <span className={`block text-sm ${dark ? "text-ink-300" : "text-ink-500"}`}>{t.company}</span>
      </figcaption>
    </figure>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-ink-900 py-20 sm:py-24">
      <div className="container-x">
        <p className="kicker text-brand-300">Client testimonials</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">What our customers say</h2>
        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-20">
          {testimonials.map((t) => (
            <TestimonialQuote key={t.name} t={t} dark />
          ))}
        </div>
      </div>
    </section>
  );
}

export function PartnerLogo({ partner }: { partner: Partner }) {
  return (
    <div className="flex h-24 items-center justify-center bg-white px-6 py-4">
      {hasPublicFile(partner.logo) ? (
        <Image
          src={partner.logo}
          alt={partner.name}
          width={160}
          height={64}
          className="max-h-12 w-auto object-contain"
        />
      ) : (
        <span className="text-center font-display text-lg font-bold text-ink-500">{partner.name}</span>
      )}
    </div>
  );
}

export function PartnersSection() {
  return (
    <section className="container-x py-20 sm:py-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          kicker="Our partners"
          title="Collaborating with industry leaders"
          intro="Panels, inverters and batteries from the brands we work with."
        />
        <TextLink href="/partners/">View all partners</TextLink>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200 sm:grid-cols-3 lg:grid-cols-5">
        {partners.slice(0, 10).map((p) => (
          <PartnerLogo key={p.name} partner={p} />
        ))}
      </div>
    </section>
  );
}
