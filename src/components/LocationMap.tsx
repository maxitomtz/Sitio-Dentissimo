import { Icon } from "./Icons";
import type { Content } from "@/lib/content";
import type { SiteData } from "@/lib/cms";

export default function LocationMap({ t, site }: { t: Content; site: SiteData }) {
  return (
    <section id="ubicacion" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{t.location.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{t.location.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl shadow-md">
            <iframe
              src={site.mapsEmbedUrl}
              title={t.location.mapTitle}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0 lg:h-full lg:min-h-[420px]"
            />
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <Icon name="pin" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold text-navy-900">{t.location.addressTitle}</h3>
                <p className="mt-1 text-slate-600">{site.fullAddress}</p>
                <p className="mt-2 text-sm text-slate-500">{t.location.references}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <Icon name="card" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold text-navy-900">{t.location.parkingTitle}</h3>
                <p className="mt-1 text-slate-600">{t.location.parking}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <Icon name="clock" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold text-navy-900">{t.location.hoursTitle}</h3>
                <ul className="mt-1 space-y-1 text-slate-600">
                  {site.hours.map((h) => (
                    <li key={h.es} className="flex justify-between gap-6 text-sm">
                      <span className="font-medium">{t.locale === "es" ? h.es : h.en}</span>
                      <span>{t.locale === "es" ? h.value : h.valueEn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <Icon name="phone" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold text-navy-900">{t.locale === "es" ? "Teléfono" : "Phone"}</h3>
                <a href={`tel:${site.phone}`} className="mt-1 inline-block font-semibold text-primary-600 hover:text-primary-700">
                  {site.phoneDisplay}
                </a>
              </div>
            </div>

            <a
              href={site.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border-2 border-primary-200 px-6 font-semibold text-navy-800 transition hover:border-primary-400 hover:bg-primary-50"
            >
              <Icon name="pin" className="h-5 w-5" />
              {t.location.directionsCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
