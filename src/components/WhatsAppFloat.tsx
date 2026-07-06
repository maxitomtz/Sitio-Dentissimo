import { WhatsAppIcon } from "./Icons";
import { waLink, WA_DEFAULT_MSG_ES, WA_DEFAULT_MSG_EN } from "@/lib/site";
import type { Locale } from "@/lib/content";
import type { SiteData } from "@/lib/cms";

// Botón flotante de WhatsApp, siempre visible, con pulso sutil.
export default function WhatsAppFloat({ locale, site }: { locale: Locale; site: SiteData }) {
  const msg = locale === "es" ? WA_DEFAULT_MSG_ES : WA_DEFAULT_MSG_EN;
  const label = locale === "es" ? "Agendar cita por WhatsApp" : "Book an appointment on WhatsApp";

  return (
    <a
      href={waLink(msg, site.whatsappNumber)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg animate-pulse-soft transition hover:scale-105 hover:bg-whatsapp-dark"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
