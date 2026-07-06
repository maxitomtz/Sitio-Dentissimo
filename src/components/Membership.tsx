import { Icon, WhatsAppIcon } from "./Icons";
import { LogoMark } from "./Logo";
import { waLink } from "@/lib/site";
import type { Content } from "@/lib/content";
import type { SiteData } from "@/lib/cms";

// Sección de la Membresía Dentissimo (basada en el flyer de la clínica):
// 2 limpiezas sin costo + 10% de descuento en tratamientos selectos.
export default function Membership({ t, site }: { t: Content; site: SiteData }) {
  const m = t.membership;

  return (
    <section id="membresia" className="relative overflow-hidden bg-navy-950 py-16 lg:py-24">
      {/* Marca de agua con el diente del logo, como en el flyer */}
      <LogoMark
        light
        className="pointer-events-none absolute -right-16 top-1/2 h-96 w-96 -translate-y-1/2 opacity-[0.06]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-primary-400/15 px-4 py-1.5 text-sm font-semibold text-primary-300">
            {m.badge}
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">{m.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">{m.subtitle}</p>

          <ul className="mt-6 space-y-3">
            {m.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-slate-200">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-400/20 text-primary-300">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          <p className="mt-7 font-heading text-4xl font-bold text-primary-300">
            {m.price}
            <span className="ml-2 align-middle text-base font-medium text-slate-400">{m.priceNote}</span>
          </p>

          <a
            href={waLink(m.waMsg, site.whatsappNumber)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-whatsapp px-8 text-lg font-bold text-white shadow-lg transition hover:bg-whatsapp-dark"
          >
            <WhatsAppIcon className="h-6 w-6" />
            {m.cta}
          </a>
          <p className="mt-4 text-xs text-slate-500">{m.note}</p>
        </div>

        {/* Tarjeta de membresía recreada en CSS (como la del flyer) */}
        <div className="mx-auto w-full max-w-md">
          <div className="-rotate-3 overflow-hidden rounded-2xl bg-white shadow-2xl shadow-primary-400/10 transition hover:rotate-0">
            <div className="p-7">
              <p className="font-heading text-2xl font-bold uppercase leading-tight tracking-wide">
                <span className="text-navy-900">Membresía</span>
                <br />
                <span className="text-primary-400">Dentissimo</span>
              </p>
              <p className="mt-1.5 text-xs text-slate-500">{m.cardTagline}</p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-[11px] font-bold text-navy-900">{m.cardName}</p>
                  <div className="mt-1 h-8 rounded-md border border-slate-200 bg-slate-50" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-navy-900">{m.cardExpires}</p>
                  <div className="mt-1 h-8 w-2/3 rounded-md border border-slate-200 bg-slate-50" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between bg-navy-900 px-7 py-3.5">
              <span className="flex items-center gap-2">
                <LogoMark light className="h-7 w-7" />
                <span className="font-heading text-sm font-semibold text-white">
                  Dentissimo
                  <span className="block text-[8px] font-medium uppercase tracking-[0.18em] text-primary-300">
                    Clínica Dental
                  </span>
                </span>
              </span>
              <span className="font-heading text-sm font-bold tracking-wide text-primary-300">+ KIDS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
