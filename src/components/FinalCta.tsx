import { WhatsAppIcon } from "./Icons";
import { waLink, WA_DEFAULT_MSG_ES, WA_DEFAULT_MSG_EN } from "@/lib/site";
import type { Content } from "@/lib/content";
import type { SiteData } from "@/lib/cms";

export default function FinalCta({ t, site }: { t: Content; site: SiteData }) {
  const waMsg = t.locale === "es" ? WA_DEFAULT_MSG_ES : WA_DEFAULT_MSG_EN;

  return (
    <section className="bg-gradient-to-br from-navy-900 to-primary-800 py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.finalCta.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">{t.finalCta.text}</p>
        <a
          href={waLink(waMsg, site.whatsappNumber)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-[60px] items-center justify-center gap-3 rounded-2xl bg-whatsapp px-10 text-lg font-bold text-white shadow-xl transition hover:bg-whatsapp-dark"
        >
          <WhatsAppIcon className="h-7 w-7" />
          {t.finalCta.cta}
        </a>
        <p className="mt-5 text-primary-200">
          {t.finalCta.alt}{" "}
          <a href={`tel:${site.phone}`} className="font-bold text-white underline underline-offset-4">
            {site.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
