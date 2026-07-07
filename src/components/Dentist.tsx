import Image from "next/image";
import type { Content } from "@/lib/content";

export default function Dentist({ t }: { t: Content }) {
  return (
    <section id="dentista" className="bg-primary-50 py-16 lg:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Image
            src="/images/recepcion.jpg"
            alt={t.dentist.imageAlt}
            width={480}
            height={600}
            className="w-full max-w-sm mx-auto rounded-3xl shadow-lg"
          />
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{t.dentist.title}</h2>
          <p className="mt-6 font-heading text-2xl font-bold text-primary-600">{t.dentist.name}</p>
          <p className="mt-1 text-base font-semibold text-slate-700">{t.dentist.specialty}</p>
          <p className="mt-1 text-sm text-slate-500">{t.dentist.credential}</p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{t.dentist.bio}</p>
        </div>
      </div>
    </section>
  );
}
