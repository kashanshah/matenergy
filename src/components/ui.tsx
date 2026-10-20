import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/jsonld";

type ButtonVariant = "primary" | "outline" | "light";

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand-700 text-white hover:bg-brand-800",
  outline: "bg-white text-ink-900 ring-1 ring-inset ring-ink-300 hover:ring-ink-900",
  light: "bg-white text-ink-900 hover:bg-brand-50",
};

export const buttonClass = (variant: ButtonVariant = "primary") =>
  `group inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition ${buttonStyles[variant]}`;

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
      {arrow && <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />}
    </Link>
  );
}

export function TextLink({ className = "", children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={`group inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-800 ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
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
  kicker,
  title,
  intro,
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-8 text-ink-500">{intro}</p>}
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
                <span aria-current="page" className="text-ink-700">
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
  children,
}: {
  crumbs: Crumb[];
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-ink-100 bg-ink-50">
      <div className="container-x py-12 sm:py-16">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-600">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
