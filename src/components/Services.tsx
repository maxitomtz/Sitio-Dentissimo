import { Icon } from "./Icons";
import { waLink } from "@/lib/site";
import type { Content } from "@/lib/content";
import type { SiteData } from "@/lib/cms";

export default function Services({ t, site }: { t: Content; site: SiteData }) {
  return (
    <section id="servicios" className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{t.services.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{t.services.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service) => (
            <a
              key={service.id}
              href={waLink(
                t.locale === "es"
                  ? `Hola, quiero agendar una cita. Me interesa: ${service.title}`
                  : `Hello, I would like to schedule an appointment. I'm interested in: ${service.title}`,
                site.whatsappNumber
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-md"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition group-hover:bg-navy-900 group-hover:text-primary-300">
                <Icon name={service.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.description}</p>
              <p className="mt-4 text-sm font-semibold text-primary-600">{service.price}</p>
              <span className="mt-2 text-sm font-semibold text-accent-600 opacity-0 transition group-hover:opacity-100">
                {t.services.cta} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
