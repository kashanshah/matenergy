import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/jsonld";

type ButtonVariant = "primary" | "outline" | "light";

// One button shape on the whole site: square, flat, one fill.
const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand-700 text-white hover:bg-brand-800",
  outline: "bg-white text-ink-900 hover:bg-ink-100",
  light: "bg-white text-ink-900 hover:bg-brand-50",
};

export const buttonClass = (variant: ButtonVariant = "primary") =>
  `group inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-body font-semibold transition active:scale-[0.98] ${buttonStyles[variant]}`;

export function ButtonLink({
  variant = "primary",
  className = "",
  arrow = false,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant; arrow?: boolean }) {
  return (
    <Link {...props} className={`${buttonClass(variant)} ${className}`}>
      {children}
      {arrow && <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />}
    </Link>
  );
}

export function TextLink({ className = "", children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={`group inline-flex items-center gap-1.5 font-semibold text-brand-800 underline decoration-2 underline-offset-[6px] transition hover:text-brand-950 ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
    </Link>
  );
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function SectionHeading({
  title,
  intro,
  className = "",
}: {
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`} data-reveal>
      <h2 className="title-head">{title}</h2>
      {intro && <p className="mt-6 max-w-[52ch] text-lead leading-[1.35]">{intro}</p>}
    </div>
  );
}

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(all)} />
      <nav aria-label="Breadcrumb" className="text-small text-ink-600">
        <ol className="flex flex-wrap items-center gap-2">
          {all.map((c, i) => (
            <li key={c.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              {i === all.length - 1 ? (
                <span aria-current="page" className="text-ink-900">
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="hover:text-brand-700">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export function PageHero({
  crumbs,
  title,
  intro,
  photo,
  children,
}: {
  crumbs: Crumb[];
  title: ReactNode;
  intro?: ReactNode;
  photo?: { src: string; alt: string };
  children?: ReactNode;
}) {
  return (
    <section className="bg-surface">
      <div className="container-x pb-16 pt-10 sm:pb-24 sm:pt-14">
        <Breadcrumbs items={crumbs} />
        <div className={`mt-10 grid gap-12 sm:mt-14 ${photo ? "lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-12" : ""}`}>
          <div data-reveal>
            <h1 className="max-w-5xl text-head uppercase leading-[0.9]">{title}</h1>
            {intro && (
              <p className={`mt-8 max-w-[52ch] ${typeof intro === "string" && intro.length > 160 ? "" : "text-lead leading-[1.35]"}`}>{intro}</p>
            )}
            {children}
          </div>
          {photo && (
            <div className="relative aspect-[4/3] overflow-hidden" data-reveal>
              <Image src={photo.src} alt={photo.alt} fill priority quality={85} sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
