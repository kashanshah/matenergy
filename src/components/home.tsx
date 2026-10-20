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

const serviceLabels: Record<string, string> = {
  "residential-solar-solutions": "Homes",
  "commercial-solar-solutions": "Business",
  "home-energy-audits": "Energy audits",
  "after-sales-services": "After-sales",
};

const servicePhotos: Record<string, { src: string; alt: string }> = {
  "residential-solar-solutions": {
    src: img("karachi-10kw-elevated-rooftop"),
    alt: "Rows of panels on an elevated frame with a walkway on a Karachi rooftop",
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

/** Four services as one folded band of photographs at unequal widths. */
export function ServiceBand() {
  const grow = [5, 2, 3, 2];
  return (
    <section className="pt-28 sm:pt-40">
      <div className="container-x" data-reveal>
        <h2 className="title-head lg:ml-[16.66%]">What we do</h2>
      </div>
      <div className="mt-12 grid h-[84svh] grid-cols-[64fr_36fr] grid-rows-2 sm:mt-16 lg:flex lg:h-[68svh]">
        {services.map((s, i) => {
          const photo = servicePhotos[s.slug];
          return (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className={`group relative overflow-hidden transition-[flex-grow] duration-500 ease-out lg:hover:!grow-[6] ${
                i === 2 ? "col-start-1 row-start-2 max-lg:col-span-1" : ""
              } ${i === 1 ? "max-lg:col-start-2" : ""} ${i === 3 ? "max-lg:col-start-2 max-lg:row-start-2" : ""}`}
              style={{ flexGrow: grow[i], flexBasis: 0 }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 64vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <span className="absolute left-0 top-0 max-w-[90%] bg-ink-900/80 px-5 py-4 font-display text-lead font-bold uppercase leading-none text-white transition group-hover:bg-brand-800">
                {serviceLabels[s.slug] ?? s.name}
              </span>
            </Link>
          );
        })}
      </div>
      <p className="container-x mt-5 max-w-[70ch]">
        Home systems, commercial and industrial plants, energy audits before you buy, and cleaning and repairs after.{" "}
        <Link href="/services/" className="font-semibold text-brand-700 underline decoration-2 underline-offset-4">
          All services
        </Link>
      </p>
    </section>
  );
}

/** Projects placed one at a time down the page, each at its own size and side. */
const placements = [
  { box: "lg:col-span-7 lg:col-start-1", ratio: "aspect-[3/2]" },
  { box: "ml-auto w-[68%] lg:col-span-4 lg:col-start-9 lg:ml-0 lg:w-auto lg:-mt-[12vh]", ratio: "aspect-[4/5]" },
  { box: "w-[82%] lg:col-span-8 lg:col-start-4 lg:w-auto", ratio: "aspect-[16/9]" },
];

export function ProjectScatter() {
  return (
    <section className="container-x pt-28 sm:pt-44">
      <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
        <h2 className="title-head">Projects</h2>
        <TextLink href="/projects/">All projects</TextLink>
      </div>
      <div className="mt-16 grid gap-y-[72px] lg:grid-cols-12 lg:gap-x-8 lg:gap-y-[10vh]">
        {projects.map((p, i) => {
          const place = placements[i % placements.length];
          return (
            <div key={p.slug} className="contents">
              {i === 2 && (
                <p className="max-w-[24ch] font-display text-lead font-bold uppercase leading-[1.05] lg:col-span-4 lg:col-start-2 lg:self-center" data-reveal>
                  From 6 kW homes to a 275 kW plant at FB Industries.
                </p>
              )}
              <article className={place.box} data-reveal>
                <p className="mb-2 font-semibold text-ink-700">
                  {p.size} kW {p.type.toLowerCase()} · {p.location}
                </p>
                <Link href={`/projects/#${p.slug}`} className={`group relative block overflow-hidden bg-surface ${place.ratio}`}>
                  <Image
                    src={p.photos[0].src}
                    alt={p.photos[0].alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 90vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </Link>
                <p className="mt-3 max-w-[48ch]">
                  {p.title}. {p.equipment.slice(0, 2).join(", ")}.
                </p>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/** Three stages of a job, their photographs falling down a diagonal. */
export function ProcessDiagonal() {
  const [survey, plan, , execution, reports] = methodology.steps;
  const stages = [
    {
      lead: "First, a site survey.",
      text: `${survey.text} We look at the roof, the shading and the structure before anything is priced.`,
      photo: { src: img("gulistan-e-johar-25kw-distribution-board"), alt: "Distribution board wiring checked on site" },
      box: "lg:col-span-5 lg:col-start-1 aspect-[3/4]",
      textBox: "lg:col-span-3 lg:col-start-6",
    },
    {
      lead: "Then a plan and a proposal.",
      text: `${plan.text} The final proposal comes to you for approval, itemised.`,
      photo: { src: img("karachi-10kw-growatt-inverter"), alt: "A Growatt inverter mounted on a wall" },
      box: "lg:col-span-4 lg:col-start-5 lg:mt-[120px] aspect-square w-[62%] ml-auto lg:ml-0 lg:w-auto",
      textBox: "lg:col-span-3 lg:col-start-10 lg:mt-[120px] lg:self-center",
    },
    {
      lead: "Then the installation, reported daily.",
      text: `${execution.text} ${reports.text}`,
      photo: { src: img("karachi-10kw-elevated-rooftop"), alt: "A finished elevated rooftop array" },
      box: "lg:col-span-6 lg:col-start-7 lg:mt-[100px] aspect-[16/10] w-[78%] lg:w-auto",
      textBox: "lg:col-span-4 lg:col-start-2 lg:row-start-3 lg:mt-[100px] lg:self-center",
    },
  ];
  return (
    <section className="container-x pt-28 sm:pt-44">
      <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
        <div className="lg:col-span-4 lg:col-start-6 lg:row-start-1 lg:self-start" data-reveal>
          <h2 className="title-head">How a job runs</h2>
          <p className="mt-6 max-w-[44ch]">{methodology.intro}</p>
        </div>
        {stages.map((s, i) => (
          <div key={s.lead} className="contents">
            <div
              className={`relative overflow-hidden ${s.box} ${i === 0 ? "lg:row-start-1" : i === 1 ? "lg:row-start-2" : "lg:row-start-3"}`}
              data-reveal
            >
              <Image src={s.photo.src} alt={s.photo.alt} fill sizes="(min-width: 1024px) 40vw, 80vw" className="object-cover" />
            </div>
            <p
              className={`max-w-[36ch] text-body ${s.textBox} ${i === 0 ? "lg:row-start-1 lg:self-end" : i === 1 ? "lg:row-start-2" : ""}`}
              data-reveal
            >
              <strong className="font-semibold">{s.lead}</strong> {s.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** One client's words set directly on a darkened photograph. */
export function TestimonialPhoto() {
  const t = testimonials[0];
  return (
    <section className="relative mt-28 h-[80svh] overflow-hidden sm:mt-44 sm:h-[90svh]">
      <Image
        src={img("karachi-10kw-panel-array")}
        alt="A rooftop array in full sun"
        fill
        sizes="100vw"
        className="drift object-cover brightness-[0.55]"
      />
      <figure className="container-x absolute inset-x-0 bottom-0 grid gap-6 pb-16 lg:grid-cols-12" data-reveal>
        <blockquote className="max-w-[40ch] text-lead font-medium leading-[1.25] text-white lg:col-span-9">
          &ldquo;{t.quote.split(". ")[0]}.&rdquo;
        </blockquote>
        <figcaption className="self-end text-white lg:col-span-3 lg:text-right">
          {t.name}, {t.company}
        </figcaption>
      </figure>
    </section>
  );
}

/** Practical facts and common questions beside a tall photograph. */
export function HomeFaq() {
  return (
    <section className="bg-surface">
      <div className="container-x grid gap-14 pb-24 lg:grid-cols-12 lg:gap-8 lg:pb-32">
        <div className="relative lg:order-2 lg:col-span-6 lg:col-start-7">
          <div className="relative aspect-[4/5] overflow-hidden lg:-mt-16 lg:aspect-[3/4]">
            <Image
              src={img("dha-phase-6-30kw-hybrid-inverters-batteries")}
              alt="Solis hybrid inverters and Pylontech batteries in DHA Phase 6"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 right-4 w-[38%] lg:left-[-40px] lg:right-auto lg:w-[34%]">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={img("gulshan-e-iqbal-20kw-huawei-inverter")}
                alt="A Huawei on-grid inverter between its protection boxes"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="pt-16 lg:order-1 lg:col-span-5 lg:pt-28">
          <div data-reveal>
            <h2 className="title-head">Before you call</h2>
            <ul className="mt-8 space-y-1 text-lead leading-[1.4]">
              <li>Office: {site.address.full}</li>
              <li>
                Phone support 24/7:{" "}
                <a href={site.phoneHref} className="font-semibold text-brand-700 hover:text-brand-900">
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <FaqList faqs={generalFaqs} />
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <ButtonLink href="/get-a-quote/">Get a quote</ButtonLink>
            <TextLink href="/faqs/">More answers</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Karachi's roofs, and one card for reaching us. */
export function VisitCard() {
  return (
    <section className="relative">
      <div className="relative h-[70svh] overflow-hidden lg:h-svh">
        <Image
          src="/images/karachi/karachi-skyline-2025.jpg"
          alt="Karachi's flat rooftops stretching to the high-rises on the horizon"
          fill
          sizes="100vw"
          className="drift object-cover"
        />
      </div>
      <div className="relative z-10 mx-4 -mt-20 bg-paper p-8 lg:absolute lg:right-16 lg:top-16 lg:mx-0 lg:mt-0 lg:w-[400px]" data-reveal>
        <h2 className="font-display text-lead font-bold uppercase leading-none">Every roof here can carry panels</h2>
        <p className="mt-5">
          {site.address.street}
          <br />
          {site.address.locality}, {site.address.city}
        </p>
        <dl className="mt-5 space-y-1 tabular-nums">
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
        <ButtonLink href="/get-a-quote/" className="mt-8 w-full">
          Book a free site survey
        </ButtonLink>
      </div>
    </section>
  );
}
