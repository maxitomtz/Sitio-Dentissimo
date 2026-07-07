import Image from "next/image";
import { Icon, WhatsAppIcon } from "./Icons";
import { waLink } from "@/lib/site";
import type { Content } from "@/lib/content";
import type { SiteData } from "@/lib/cms";

export default function Pricing({ t, site }: { t: Content; site: SiteData }) {
  const waMsg =
    t.locale === "es"
      ? "Hola, quiero agendar mi primera valoración gratis"
      : "Hello, I would like to book my free first evaluation";

  return (
    <section id="promociones" className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-4 sm:px-6 lg:grid-cols-5">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-navy-900 p-8 text-white shadow-xl sm:p-12 lg:col-span-3">
          <p className="text-sm font-bold uppercase tracking-widest text-primary-200">{t.pricing.title}</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t.pricing.highlight}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-primary-50">{t.pricing.text}</p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {t.pricing.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2.5 text-sm font-medium">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          <p className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-primary-100">
            <Icon name="braces" className="h-5 w-5 shrink-0 text-primary-300" />
            {t.pricing.orthoPromo}
          </p>

          <div>
            <a
              href={waLink(waMsg, site.whatsappNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-white px-8 text-lg font-bold text-navy-900 shadow-lg transition hover:bg-primary-50"
            >
              <WhatsAppIcon className="h-6 w-6 text-whatsapp" />
              {t.pricing.cta}
            </a>
          </div>
          <p className="mt-4 text-xs text-primary-200">{t.pricing.note}</p>
        </div>

        {/* Flyer de la promoción vigente (reemplazable cada mes en public/images/) */}
        <div className="lg:col-span-2">
          <Image
            src={t.pricing.promoImage}
            alt={t.pricing.promoImageAlt}
            width={540}
            height={675}
            className="h-full w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
