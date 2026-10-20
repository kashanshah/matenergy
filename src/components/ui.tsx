import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/jsonld";

type ButtonVariant = "primary" | "sun" | "outline" | "ghost" | "white";

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand-500 text-white shadow-lg shadow-brand-500/25 hover:bg-brand-600",
  sun: "bg-sun-500 text-white shadow-lg shadow-sun-500/25 hover:bg-sun-600",
  outline: "bg-white text-ink-900 ring-1 ring-ink-200 hover:ring-brand-400 hover:text-brand-700",
  ghost: "text-brand-700 hover:text-brand-800",
  white: "bg-white text-ink-900 hover:bg-brand-50",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  arrow = false,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant; arrow?: boolean }) {
  return (
    <Link
      {...props}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${buttonStyles[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />}
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
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-8 text-ink-500">{intro}</p>}
    </div>
  );
}

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(all)} />
      <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((c, i) => (
            <li key={c.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="size-3.5 text-ink-300" aria-hidden />}
              {i === all.length - 1 ? (
                <span aria-current="page" className="font-medium text-ink-700">
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
  eyebrow,
  title,
  intro,
  children,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-gradient-to-b from-brand-50/70 to-white">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-sun-200/40 blur-3xl" />
      <div className="container-x relative py-14 sm:py-20">
        <Breadcrumbs items={crumbs} />
        {eyebrow && <span className="eyebrow mt-8">{eyebrow}</span>}
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-500">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
