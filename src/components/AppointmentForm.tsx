"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { WhatsAppIcon } from "./Icons";
import { waLink } from "@/lib/site";
import type { Content } from "@/lib/content";
import type { SiteData } from "@/lib/cms";

// Agendador simple sin backend: arma el mensaje de WhatsApp con los
// datos del formulario, abre wa.me y redirige a la página de gracias
// (útil para medir conversiones con GA4/Meta Pixel).
export default function AppointmentForm({ t, site }: { t: Content; site: SiteData }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(t.form.serviceOptions[0]);
  const [schedule, setSchedule] = useState(t.form.scheduleOptions[0]);

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = [
      t.form.waIntro,
      `• ${t.form.waName}: ${name}`,
      `• ${t.form.waPhone}: ${phone}`,
      `• ${t.form.waService}: ${service}`,
      `• ${t.form.waSchedule}: ${schedule}`,
    ].join("\n");

    window.open(waLink(message, site.whatsappNumber), "_blank", "noopener,noreferrer");
    router.push(t.locale === "es" ? "/gracias" : "/en/thank-you");
  }

  return (
    <section id="agendar" className="bg-primary-50 py-16 lg:py-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <div className="rounded-3xl border border-primary-100 bg-white p-6 shadow-lg sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">{t.form.title}</h2>
          <p className="mt-2 text-slate-600">{t.form.subtitle}</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-700">
                {t.form.nameLabel}
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.form.namePlaceholder}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-slate-700">
                {t.form.phoneLabel}
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.form.phonePlaceholder}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-slate-700">
                {t.form.serviceLabel}
              </label>
              <select id="service" value={service} onChange={(e) => setService(e.target.value)} className={inputClass}>
                {t.form.serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="schedule" className="mb-1.5 block text-sm font-semibold text-slate-700">
                {t.form.scheduleLabel}
              </label>
              <select id="schedule" value={schedule} onChange={(e) => setSchedule(e.target.value)} className={inputClass}>
                {t.form.scheduleOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="flex min-h-[56px] w-full items-center justify-center gap-3 rounded-2xl bg-whatsapp text-lg font-bold text-white shadow-lg shadow-green-100 transition hover:bg-whatsapp-dark"
            >
              <WhatsAppIcon className="h-6 w-6" />
              {t.form.submit}
            </button>
            <p className="text-center text-xs text-slate-400">{t.form.disclaimer}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
