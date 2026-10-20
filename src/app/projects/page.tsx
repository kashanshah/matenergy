import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/ui";
import { CtaBand } from "@/components/blocks";
import { AmbientVideo } from "@/components/ambient-video";
import { formatProjectDate, projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Solar Projects in Karachi | Recent Installations",
  description:
    "Solar systems MAT Energy has installed across Karachi: on-grid and hybrid systems from 10 kW to 30 kW in DHA, Gulshan-e-Iqbal, Gulistan-e-Johar and Gadap.",
  path: "/projects/",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Projects", path: "/projects/" }]}
        title="Our solar projects in Karachi"
        intro="A selection of the on-grid and hybrid systems our own team has designed and installed, with the equipment that went into each one."
      />
      <div className="container-x pt-12">
        <AmbientVideo
          src="/videos/karachi-rooftop-solar.mp4"
          poster="/videos/karachi-rooftop-solar-poster.jpg"
          label="Rooftop solar panels installed by MAT Energy, overlooking Karachi"
          className="aspect-video w-full rounded-lg bg-ink-100 object-cover lg:aspect-[21/9]"
        />
      </div>
      <div className="container-x divide-y divide-ink-100">
        {projects.map((p) => (
          <article key={p.slug} id={p.slug} className="grid scroll-mt-36 gap-10 py-16 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="grid gap-3 sm:grid-cols-2">
              {p.photos.map((photo, i) => {
                // A lone photo, or the first of three, spans the full column.
                const wide = p.photos.length === 1 || (p.photos.length === 3 && i === 0);
                return (
                  <div
                    key={photo.src}
                    className={`relative overflow-hidden rounded-lg bg-ink-100 ${wide ? "aspect-[16/9] sm:col-span-2" : "aspect-[4/3]"}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes={wide ? "(min-width: 1024px) 700px, 100vw" : "(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"}
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>
            <div className="lg:pt-2">
              <p className="text-sm font-semibold text-brand-700">
                {p.type} · {p.location} · {formatProjectDate(p.date)}
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{p.title}</h2>
              <h3 className="mt-6 text-sm font-semibold text-ink-900">What we installed</h3>
              <ul className="mt-3 space-y-2.5 text-ink-600">
                {p.equipment.map((e) => (
                  <li key={e} className="flex gap-2.5">
                    <Check className="mt-1 size-4 shrink-0 text-brand-600" aria-hidden />
                    {e}
                  </li>
                ))}
              </ul>
              <a
                href={p.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                View on Instagram
              </a>
            </div>
          </article>
        ))}
      </div>
      <CtaBand
        title="Want a system like these?"
        text={`Tell us about your property and we'll design a system around your bill and roof. Or call ${site.phoneDisplay}.`}
      />
    </>
  );
}
