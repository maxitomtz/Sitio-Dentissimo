import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { SITE } from "@/lib/site";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "¡Gracias por tu solicitud!",
  robots: { index: false, follow: false },
};

// Página de conversión: aquí llegan los usuarios después de enviar el
// formulario. Ideal para registrar conversiones en Google Ads / GA4 / Meta.
export default function GraciasPage() {
  const t = content.es;

  return (
    <main className="flex min-h-screen items-center justify-center bg-primary-50 px-4">
      <div className="max-w-md rounded-3xl bg-white p-10 text-center shadow-xl">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <h1 className="mt-6 text-2xl font-extrabold text-slate-900">{t.thanks.title}</h1>
        <p className="mt-3 text-slate-600">{t.thanks.text}</p>
        <a href={`tel:${SITE.phone}`} className="mt-4 inline-block font-bold text-primary-600">
          {SITE.phoneDisplay}
        </a>
        <div className="mt-8">
          <Link
            href={t.thanks.home}
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-primary-600 px-8 font-semibold text-white transition hover:bg-primary-700"
          >
            {t.thanks.cta}
          </Link>
        </div>
      </div>
    </main>
  );
}
