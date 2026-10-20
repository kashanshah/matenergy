import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/ui";
import { CtaBand } from "@/components/blocks";
import { AmbientVideo } from "@/components/ambient-video";
import { ProjectGallery } from "@/components/project-gallery";
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
      <div className="container-x pt-16 sm:pt-24">
        <AmbientVideo
          src="/videos/karachi-rooftop-solar.mp4"
          poster="/videos/karachi-rooftop-solar-poster.jpg"
          label="Rooftop solar panels installed by MAT Energy, overlooking Karachi"
          className="block aspect-video w-full bg-ink-900 object-cover"
          eager
        />
      </div>
      <div className="container-x space-y-24 py-24 sm:space-y-32 sm:py-32">
        {projects.map((p) => {
                    return (
            <article
              key={p.slug}
              id={p.slug}
              className="grid scroll-mt-28 gap-10 lg:grid-cols-12 lg:gap-8"
            >
              <div className="lg:col-span-7" data-reveal>
                <ProjectGallery
                  title={`${p.size} kW ${p.type.toLowerCase()} system, ${p.location}`}
                  place={`${p.title}, ${p.location}, ${formatProjectDate(p.date)}`}
                  photos={p.photos}
                />
              </div>
              <div className="lg:col-span-4 lg:col-start-9" data-reveal>
                <p className="font-semibold text-ink-700">
                  {p.type} · {p.location} · {formatProjectDate(p.date)}
                </p>
                <h2 className="mt-3 text-lead uppercase leading-none">
                  {p.title}
                </h2>
                <h3 className="mt-8 font-sans text-body font-semibold tracking-normal">
                  What we installed
                </h3>
                <ul className="mt-3 space-y-2">
                  {p.equipment.map((e) => (
                    <li key={e} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-[0.6em] size-2 shrink-0 bg-brand-500"
                      />
                      {e}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block font-semibold text-brand-800 underline decoration-2 underline-offset-[6px] hover:text-brand-950"
                >
                  View on Instagram
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <CtaBand
        title="Want a system like these?"
        text={`Tell us about your property and we'll design a system around your bill and roof. Or call ${site.phoneDisplay}.`}
      />
    </>
  );
}
