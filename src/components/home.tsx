import Image from "next/image";
import Link from "next/link";
import { AmbientVideo } from "./ambient-video";
import { FaqList } from "./blocks";
import { ButtonLink, TextLink } from "./ui";
import { methodology, testimonials } from "@/lib/company";
import { generalFaqs } from "@/lib/faqs";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const img = (name: string) => `/images/projects/${name}.jpg`;

/** Hero: a paper sheet on the left, MAT's own rooftop over Karachi on the right. */
export function HomeHero() {
  return (
    <section className="grid gap-3 px-3 pb-3 lg:h-[calc(100svh-4.5rem)] lg:grid-cols-2">
      <div className="relative order-1 h-[46svh] overflow-hidden bg-ink-900 lg:order-2 lg:h-auto">
        <AmbientVideo
          src="/videos/karachi-rooftop-solar.mp4"
          poster="/videos/karachi-rooftop-solar-poster.jpg"
          label="Solar panels MAT Energy installed on an elevated frame, overlooking Karachi's rooftops"
          className="absolute inset-0 size-full object-cover"
          eager
        />
        <div className="absolute inset-x-0 bottom-0 hidden min-h-14 flex-wrap items-center justify-between gap-x-6 bg-paper px-5 py-2 text-small sm:flex">
          <a href={site.phoneHref} className="font-semibold hover:text-brand-700">
            Call 24/7 {site.phoneDisplay}
          </a>
          <span className="hidden sm:inline">B-102 Marhaba Heights, North Nazimabad</span>
        </div>
      </div>
      <div className="order-2 flex flex-col items-center justify-center bg-surface px-6 py-10 text-center sm:py-16 lg:order-1 lg:px-14" data-reveal>
        <h1 className="text-head uppercase leading-[0.88]">
          Solar for
          <br />
          Karachi roofs
        </h1>
        <p className="mt-7 max-w-[40ch]">
          We design, install and look after on-grid, hybrid and off-grid systems for homes and factories, raised on
          steel so the roof stays yours.
        </p>
        <ButtonLink href="/get-a-quote/" arrow className="mt-9 w-full sm:w-auto">
          Book a free site survey
        </ButtonLink>
      </div>
    </section>
  );
}

const servicePhotos: Record<string, { src: string; alt: string }> = {
  "residential-solar-solutions": {
    src: img("karachi-10kw-rooftop-panels"),
    alt: "Rooftop panels on a Karachi home",
  },
  "commercial-solar-solutions": { src: img("karachi-10kw-panel-array"), alt: "A sunlit array of solar panels on a rooftop" },
  "home-energy-audits": {
    src: img("gulistan-e-johar-25kw-distribution-board"),
    alt: "A wired distribution board with breakers and an energy meter",
  },
  "after-sales-services": {
    src: img("gulshan-e-iqbal-20kw-control-panel"),
    alt: "An open solar control panel with indicator lights",
  },
};

/** A photograph in the site's one frame: inside the margins, 4:3, square corners, no overlays. */
function Frame({ src, alt, sizes, ratio = "aspect-[4/3]", hover = false }: { src: string; alt: string; sizes: string; ratio?: string; hover?: boolean }) {
  return (
    <span className={`relative block overflow-hidden bg-surface ${ratio}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={85}
        className={`object-cover ${hover ? "transition duration-700 group-hover:scale-[1.03]" : ""}`}
      />
    </span>
  );
}

const quarter = "(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw";
const third = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw";
const half = "(min-width: 1024px) 45vw, 92vw";

/** The four services side by side, each a photograph with its name and summary beneath. */
export function ServiceBand() {
  return (
    <section className="container-x pt-28 sm:pt-40">
      <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
        <h2 className="title-head">What we do</h2>
        <TextLink href="/services/">All services</TextLink>
      </div>
      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const photo = servicePhotos[s.slug];
          return (
            <article key={s.slug} data-reveal>
              <Link href={`/services/${s.slug}/`} className="group block">
                <Frame src={photo.src} alt={photo.alt} sizes={quarter} hover />
                <h3 className="mt-5 text-lead uppercase leading-none transition group-hover:text-brand-700">{s.name}</h3>
              </Link>
              <p className="mt-3 text-ink-700">{s.summary}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/** Six installations on an even three-column grid. */
export function ProjectGrid() {
  return (
    <section className="container-x pt-28 sm:pt-44">
      <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
        <div>
          <h2 className="title-head">Projects</h2>
          <p className="mt-6 max-w-[48ch] text-lead leading-[1.35]">From 6 kW homes to a 275 kW plant at FB Industries.</p>
        </div>
        <TextLink href="/projects/">All projects</TextLink>
      </div>
      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.slug} data-reveal>
            <Link href={`/projects/#${p.slug}`} className="group block">
              <Frame src={p.photos[0].src} alt={p.photos[0].alt} sizes={third} hover />
              <h3 className="mt-5 text-lead uppercase leading-none transition group-hover:text-brand-700">
                {p.size} kW {p.type}, {p.location}
              </h3>
            </Link>
            <p className="mt-2 text-ink-700">{p.equipment.slice(0, 2).join(" · ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/** Three stages of a job, side by side. */
export function ProcessDiagonal() {
  const [survey, plan, , execution, reports] = methodology.steps;
  const stages = [
    {
      title: "Site survey",
      text: `${survey.text} We look at the roof, the shading and the structure before anything is priced.`,
      photo: { src: img("gulistan-e-johar-25kw-distribution-board"), alt: "Distribution board wiring checked on site" },
    },
    {
      title: "Plan and proposal",
      text: `${plan.text} The final proposal comes to you for approval, itemised.`,
      photo: { src: img("karachi-10kw-growatt-inverter"), alt: "A Growatt inverter mounted on a wall" },
    },
    {
      title: "Installation, reported daily",
      text: `${execution.text} ${reports.text}`,
      photo: { src: img("karachi-10kw-elevated-rooftop"), alt: "A finished elevated rooftop array" },
    },
  ];
  return (
    <section className="container-x pt-28 sm:pt-44">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-8" data-reveal>
        <h2 className="title-head">How a job runs</h2>
        <p className="max-w-[52ch]">{methodology.intro}</p>
      </div>
      <ol className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-3">
        {stages.map((s) => (
          <li key={s.title} data-reveal>
            <Frame src={s.photo.src} alt={s.photo.alt} sizes={third} />
            <h3 className="mt-5 text-lead uppercase leading-none">{s.title}</h3>
            <p className="mt-3 text-ink-700">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** What clients say, beside a photograph, on the deep green field. */
export function TestimonialPhoto() {
  const [first, second] = testimonials;
  return (
    <section className="mt-28 bg-brand-900 py-24 text-white sm:mt-44 sm:py-32" aria-labelledby="clients-heading">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="clients-heading" className="title-head text-white" data-reveal>
            What clients say
          </h2>
          <figure className="mt-12" data-reveal>
            {/* The first sentence of the quote, word for word. */}
            <blockquote className="max-w-[44ch] text-lead font-medium leading-[1.3] text-white">
              &ldquo;{first.quote.split(". ")[0]}.&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-brand-100">
              <span className="font-semibold text-white">{first.name}</span>, {first.company}
            </figcaption>
          </figure>
          {second && (
            <figure className="mt-12" data-reveal>
              <blockquote className="max-w-[60ch] text-white">&ldquo;{second.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 text-brand-100">
                <span className="font-semibold text-white">{second.name}</span>, {second.company}
              </figcaption>
            </figure>
          )}
        </div>
        <div className="lg:self-center" data-reveal>
          <Frame src={img("karachi-10kw-panel-array")} alt="A rooftop array in full sun" sizes={half} />
        </div>
      </div>
    </section>
  );
}

/** Practical facts on the left, the common questions on the right. */
export function HomeFaq() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start" data-reveal>
          <h2 className="title-head">Before you call</h2>
          <p className="mt-8 max-w-[40ch]">
            Office: {site.address.full}
            <br />
            Phone support 24/7:{" "}
            <a href={site.phoneHref} className="font-semibold text-brand-800 hover:text-brand-950">
              {site.phoneDisplay}
            </a>
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <ButtonLink href="/get-a-quote/">Get a quote</ButtonLink>
            <TextLink href="/faqs/">More answers</TextLink>
          </div>
        </div>
        <div className="lg:col-span-7" data-reveal>
          <FaqList faqs={generalFaqs} />
        </div>
      </div>
    </section>
  );
}

/** How to reach us, beside a photograph of Karachi's roofs. */
export function VisitCard() {
  return (
    <section className="container-x grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-5 lg:self-center lg:py-16" data-reveal>
        <h2 className="title-head">Every roof can go solar</h2>
        <p className="mt-8 text-lead leading-[1.35]">
          {site.address.street}, {site.address.locality}, {site.address.city}
        </p>
        <dl className="mt-6 max-w-sm space-y-1 tabular-nums">
          <div className="flex justify-between gap-4">
            <dt>Phone</dt>
            <dd>
              <a href={site.phoneHref} className="font-semibold hover:text-brand-700">
                {site.phoneDisplay}
              </a>
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Support</dt>
            <dd>24 hours, 7 days</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${site.email}`} className="hover:text-brand-700">
                {site.email}
              </a>
            </dd>
          </div>
        </dl>
        <ButtonLink href="/get-a-quote/" className="mt-10">
          Book a free site survey
        </ButtonLink>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[36rem]" data-reveal>
        <Image
          src="/images/karachi/karachi-skyline-2025.jpg"
          alt="Karachi's flat rooftops stretching to the high-rises on the horizon"
          fill
          quality={85}
          sizes="(min-width: 1024px) 55vw, 92vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
