import Image from "next/image";
import { WhatsAppIcon } from "./Icons";
import { waLink, WA_DEFAULT_MSG_ES, WA_DEFAULT_MSG_EN } from "@/lib/site";
import type { Content } from "@/lib/content";
import type { SiteData } from "@/lib/cms";

export default function Hero({ t, site }: { t: Content; site: SiteData }) {
  const waMsg = t.locale === "es" ? WA_DEFAULT_MSG_ES : WA_DEFAULT_MSG_EN;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      {/* Detalle decorativo turquesa del branding */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div className="relative">
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-800">
            {t.hero.badge}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl">
            {t.hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{t.hero.subheadline}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(waMsg, site.whatsappNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-whatsapp px-8 text-lg font-bold text-white shadow-lg shadow-green-200 transition hover:bg-whatsapp-dark"
            >
              <WhatsAppIcon className="h-6 w-6" />
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#servicios"
              className="inline-flex min-h-[56px] items-center justify-center rounded-2xl border-2 border-primary-200 px-8 text-lg font-semibold text-navy-800 transition hover:border-primary-400 hover:bg-primary-50"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative">
          {/* REEMPLAZAR: foto real de la clínica o del equipo sonriendo.
              Guarda la foto como public/images/hero.jpg y cambia el src a "/images/hero.jpg" */}
          <Image
            src="/images/hero.svg"
            alt={t.hero.imageAlt}
            width={600}
            height={500}
            priority
            className="w-full rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
