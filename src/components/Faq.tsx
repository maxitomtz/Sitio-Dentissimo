"use client";

import { useState } from "react";
import type { Content } from "@/lib/content";

export default function Faq({ t }: { t: Content }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="preguntas" className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{t.faq.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{t.faq.subtitle}</p>
        </div>

        <div className="mt-10 space-y-3">
          {t.faq.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-base font-semibold text-navy-900">{item.q}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`h-5 w-5 shrink-0 text-primary-600 transition-transform ${open ? "rotate-180" : ""}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {open && (
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed text-slate-600">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
