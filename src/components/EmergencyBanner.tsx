import { Icon } from "./Icons";
import type { Content } from "@/lib/content";
import type { SiteData } from "@/lib/cms";

// Banner de urgencias dentales con click-to-call.
export default function EmergencyBanner({ t, site }: { t: Content; site: SiteData }) {
  return (
    <div className="bg-navy-900 px-4 py-2.5 text-center">
      <a
        href={`tel:${site.phone}`}
        className="inline-flex min-h-[32px] flex-wrap items-center justify-center gap-x-2 text-sm font-medium text-white"
      >
        <Icon name="phone" className="h-4 w-4 text-primary-400" />
        <span>{t.emergency.text}</span>
        <span className="font-bold underline decoration-primary-400 underline-offset-2">
          {t.emergency.cta}: {site.phoneDisplay}
        </span>
      </a>
    </div>
  );
}
