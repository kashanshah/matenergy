"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-ink-900 text-xs text-ink-300 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <p>Solar energy solutions for homes and businesses in Karachi</p>
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="inline-flex items-center gap-1.5 hover:text-white">
              <Phone className="size-3.5" aria-hidden /> Call support 24/7: {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Mail className="size-3.5" aria-hidden /> {site.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-b border-ink-200 bg-white">
        <div className="container-x flex h-18 items-center justify-between gap-6">
          <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
            <Image
              src="/images/mat-energy-logo.png"
              alt={`${site.name} – ${site.tagline}`}
              width={1087}
              height={354}
              priority
              className="h-11 w-auto sm:h-12"
            />
          </Link>
          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active = pathname === item.href || (item.href !== "/services/" && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`px-3 py-2 text-sm font-medium transition hover:text-brand-700 ${
                        active ? "text-brand-700" : "text-ink-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/get-a-quote/"
              className="hidden rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 sm:inline-flex"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-md text-ink-800 ring-1 ring-ink-200 xl:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-18 overflow-y-auto bg-white xl:hidden md:top-27">
          <nav aria-label="Mobile" className="container-x py-6">
            <ul className="divide-y divide-ink-100">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-lg font-semibold text-ink-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3">
              <Link
                href="/get-a-quote/"
                onClick={() => setOpen(false)}
                className="rounded-md bg-brand-600 px-6 py-3.5 text-center font-semibold text-white"
              >
                Get a quote
              </Link>
              <a
                href={site.phoneHref}
                className="rounded-md px-6 py-3.5 text-center font-semibold text-ink-900 ring-1 ring-ink-200"
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
