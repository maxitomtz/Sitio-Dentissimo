"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { waLink, WA_DEFAULT_MSG_ES, WA_DEFAULT_MSG_EN } from "@/lib/site";
import type { Content } from "@/lib/content";
import type { SiteData } from "@/lib/cms";

export default function Header({ t, site }: { t: Content; site: SiteData }) {
  const [open, setOpen] = useState(false);
  const waMsg = t.locale === "es" ? WA_DEFAULT_MSG_ES : WA_DEFAULT_MSG_EN;
  const waHref = waLink(waMsg, site.whatsappNumber);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={t.locale === "es" ? "/" : "/en"} aria-label={site.name}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {t.nav.items.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-primary-600">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={t.langSwitch.href}
            title={t.langSwitch.title}
            className="flex h-12 items-center rounded-lg px-3 text-sm font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-primary-600"
          >
            🌐 {t.langSwitch.label}
          </Link>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-12 items-center rounded-xl bg-navy-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-800 sm:flex"
          >
            {t.nav.cta}
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-12 w-12 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-50 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden" aria-label="Menú móvil">
          {t.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3.5 text-base font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-700"
            >
              {item.label}
            </a>
          ))}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex h-12 items-center justify-center rounded-xl bg-navy-900 text-base font-semibold text-white"
          >
            {t.nav.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
