import Image from "next/image";
import { about, methodology, stats, testimonials, whyUs, type Testimonial } from "@/lib/company";
import { hasPublicFile, photos, type PhotoKey } from "@/lib/media";
import { partnerCategories, partners, type Partner } from "@/lib/partners";
import { projects, type Project } from "@/lib/projects";
import { systems, type SolarSystem } from "@/lib/systems";
import { SectionHeading, TextLink } from "./ui";

/** Renders a photo slot, or nothing if the file hasn't been added to /public. */
export function Photo({ name, className = "", sizes }: { name: PhotoKey; className?: string; sizes: string }) {
  const photo = photos[name];
  if (!hasPublicFile(photo.src)) return null;
  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

/** A short square list marker, the one shape used for lists on the site. */
function ListMark() {
  return <span aria-hidden className="mt-[0.6em] size-2 shrink-0 bg-brand-500" />;
}

export function StatsStrip() {
  return (
    <dl className="space-y-8" data-reveal>
      {stats.map((s) => (
        <div key={s.label} className="grid grid-cols-[minmax(0,11rem)_1fr] items-center gap-6 sm:grid-cols-[16rem_1fr]">
          <dt className="sr-only">{s.label}</dt>
          <dd className="font-display text-head font-bold leading-none text-brand-700 tabular-nums">{s.value}</dd>
          <dd className="max-w-[24ch]">{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}

export function AboutSection({ link = true }: { link?: boolean }) {
  return (
    <section className="container-x grid gap-14 py-28 sm:py-40 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-5" data-reveal>
        <h2 className="title-head">{about.title}</h2>
        <p className="mt-8 max-w-[52ch]">{about.text}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {about.specialties.map((s) => (
            <li key={s} className="flex gap-3 font-medium">
              <ListMark />
              {s}
            </li>
          ))}
        </ul>
        {link && (
          <TextLink href="/about/" className="mt-10">
            More about us
          </TextLink>
        )}
      </div>
      <Photo name="about" className="aspect-[4/3] lg:col-span-6 lg:col-start-7" sizes="(min-width: 1024px) 50vw, 100vw" />
    </section>
  );
}

export function SystemColumn({ system, headingLevel = "h3" }: { system: SolarSystem; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <div className="flex flex-col" data-reveal>
      <Photo name={system.id} className="mb-6 aspect-[4/3]" sizes="(min-width: 1024px) 30vw, 100vw" />
      <Heading className="text-lead uppercase leading-none">{system.name}</Heading>
      <p className="mt-3">{system.summary}</p>
      <ul className="mt-5 space-y-2 text-ink-700">
        {system.benefits.slice(0, 3).map((b) => (
          <li key={b} className="flex gap-3">
            <ListMark />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SystemsSection() {
  return (
    <section className="bg-surface py-28 sm:py-40">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="On-grid, off-grid or hybrid"
            intro="Which one suits you depends on your bill, your roof and how much load-shedding you face."
          />
          <TextLink href="/solar-systems/">Compare the systems</TextLink>
        </div>
        <div className="mt-16 grid gap-14 lg:grid-cols-3 lg:gap-8">
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
    <article className="flex flex-col" data-reveal>
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <Image src={cover.src} alt={cover.alt} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
      </div>
      <Heading className="mt-5 text-lead uppercase leading-none">{project.title}</Heading>
      <p className="mt-3">
        {project.type}, {project.location}. {project.equipment.join(", ")}.
      </p>
    </article>
  );
}

export function ProjectsSection({ limit = 3 }: { limit?: number }) {
  return (
    <section className="py-28 sm:py-40">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Systems we've installed"
            intro="Homes, farmhouses and businesses across Karachi, from 6 kW rooftops to a 275 kW industrial plant."
          />
          <TextLink href="/projects/">See all projects</TextLink>
        </div>
        <div className="mt-16 grid gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
    <section className="bg-brand-900 py-28 text-white sm:py-40">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5" data-reveal>
          <h2 className="title-head text-white">{whyUs.title}</h2>
          {whyUs.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-6 max-w-[52ch]">
              {p}
            </p>
          ))}
        </div>
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {whyUs.points.map((p) => (
            <div key={p.title} data-reveal>
              <h3 className="text-lead uppercase leading-none text-sun-300">{p.title}</h3>
              <p className="mt-3">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MethodologySection() {
  return (
    <section className="container-x grid gap-14 py-28 sm:py-40 lg:grid-cols-12 lg:gap-8">
      <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start" data-reveal>
        <h2 className="title-head">{methodology.title}</h2>
        <p className="mt-6 max-w-[48ch]">{methodology.intro}</p>
      </div>
      <ol className="space-y-12 lg:col-span-6 lg:col-start-7">
        {methodology.steps.map((s) => (
          <li key={s.title} data-reveal>
            <h3 className="text-lead uppercase leading-none">{s.title}</h3>
            <p className="mt-3 max-w-[52ch]">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function TestimonialQuote({ t, dark = false }: { t: Testimonial; dark?: boolean }) {
  return (
    <figure className="flex flex-col" data-reveal>
      <blockquote className={`flex-1 font-medium ${t.quote.length > 160 ? "" : "text-lead leading-[1.3]"} ${dark ? "text-white" : "text-ink-900"}`}>
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className={`mt-6 ${dark ? "text-brand-100" : "text-ink-700"}`}>
        <span className={`font-semibold ${dark ? "text-white" : "text-ink-900"}`}>{t.name}</span>, {t.company}
      </figcaption>
    </figure>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-brand-950 py-28 sm:py-40">
      <div className="container-x">
        <h2 className="title-head text-white" data-reveal>
          What clients say
        </h2>
        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
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
    <div className="flex h-16 items-center">
      {partner.logo && hasPublicFile(partner.logo) ? (
        <Image
          src={partner.logo}
          alt={partner.name}
          width={180}
          height={64}
          className="max-h-12 w-auto max-w-[10rem] object-contain object-left mix-blend-multiply"
        />
      ) : (
        <span className="font-display text-lead font-bold uppercase leading-none text-ink-900">{partner.name}</span>
      )}
    </div>
  );
}

/** The brands we fit, grouped into panels, inverters and batteries. */
export function PartnersSection() {
  return (
    <section className="container-x grid gap-12 py-28 sm:py-40 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-3" data-reveal>
        <h2 className="title-head">Brands we fit</h2>
        <TextLink href="/partners/" className="mt-6">
          Our partners
        </TextLink>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:col-span-9">
        {partnerCategories.map((c) => (
          <div key={c} data-reveal>
            <h3 className="font-sans text-body font-semibold tracking-normal text-ink-700">{c}</h3>
            <ul className="mt-4 space-y-4">
              {partners
                .filter((p) => p.category === c)
                .map((p) => (
                  <li key={p.name}>
                    <PartnerLogo partner={p} />
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
