import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/site";
import type { Content } from "@/lib/content";
import type { SiteData } from "@/lib/cms";

export default function Footer({ t, site }: { t: Content; site: SiteData }) {
  return (
    <footer className="bg-navy-950 py-14 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">{t.footer.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">{t.footer.contactTitle}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-white">
                📞 {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                💬 WhatsApp: {site.phoneDisplay}
              </a>
            </li>
            <li className="text-slate-400">📍 {site.fullAddress}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">{t.footer.hoursTitle}</h3>
          <ul className="mt-4 space-y-1.5 text-sm text-slate-400">
            {site.hours.map((h) => (
              <li key={h.es}>
                <span className="font-medium text-slate-300">{t.locale === "es" ? h.es : h.en}:</span>{" "}
                {t.locale === "es" ? h.value : h.valueEn}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">{t.footer.socialTitle}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram: {site.instagramHandle}
              </a>
            </li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Facebook: {site.name}
              </a>
            </li>
          </ul>
          <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-white">{t.footer.legalTitle}</h3>
          <ul className="mt-4 text-sm">
            <li>
              <Link href="/aviso-de-privacidad" className="hover:text-white">
                {t.footer.privacy}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-navy-800 px-4 pt-6 text-center text-xs text-slate-500 sm:px-6">
        © {new Date().getFullYear()} {SITE.name}. {t.footer.rights}
      </div>
    </footer>
  );
}
