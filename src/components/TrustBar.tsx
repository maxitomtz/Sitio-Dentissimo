import type { Content } from "@/lib/content";

// Barra de confianza: experiencia, pacientes, rating, tarjetas.
export default function TrustBar({ t }: { t: Content }) {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
        {t.trust.map((item) => (
          <div key={item.label} className="text-center">
            <p className="font-heading text-3xl font-bold text-navy-900">{item.value}</p>
            <p className="mt-1 text-sm font-medium text-slate-500">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
