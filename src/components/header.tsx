"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";

// The bar carries five links; the full list lives in the menu.
const primary = ["/services/", "/projects/", "/solar-systems/", "/solar-calculator/", "/about/"];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-paper">
      <div className="container-x flex h-18 items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <Image
            src="/images/mat-energy-logo.png"
            alt={`${site.name} – ${site.tagline}`}
            width={1087}
            height={354}
            priority
            sizes="148px"
            className="h-11 w-auto sm:h-12"
          />
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav
              .filter((item) => primary.includes(item.href))
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`font-medium decoration-2 underline-offset-[6px] transition hover:text-brand-700 hover:underline ${
                      isActive(item.href) ? "text-brand-700 underline" : "text-ink-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <a href={site.phoneHref} className="hidden font-semibold text-ink-900 hover:text-brand-700 xl:inline">
            {site.phoneDisplay}
          </a>
          <Link
            href="/get-a-quote/"
            className="inline-flex min-h-11 items-center bg-brand-700 px-4 font-semibold text-white transition hover:bg-brand-800 active:scale-[0.98] sm:px-5"
          >
            Get a quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center bg-surface text-ink-900 transition hover:bg-ink-200 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div id="site-menu" className="fixed inset-x-0 bottom-0 top-18 overflow-y-auto bg-brand-900 text-white lg:hidden">
          <nav aria-label="Site" className="container-x py-8">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-1.5 font-display text-head font-bold uppercase leading-none text-white hover:text-brand-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 grid gap-3">
              <Link
                href="/get-a-quote/"
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center justify-center bg-white px-6 font-semibold text-ink-900"
              >
                Get a quote
              </Link>
              <a
                href={site.phoneHref}
                className="flex min-h-14 items-center justify-center bg-brand-800 px-6 font-semibold text-white"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
