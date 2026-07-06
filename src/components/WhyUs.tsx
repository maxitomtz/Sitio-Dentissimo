import { Icon } from "./Icons";
import type { Content } from "@/lib/content";

export default function WhyUs({ t }: { t: Content }) {
  return (
    <section id="por-que-elegirnos" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{t.why.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{t.why.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-primary-300">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-base font-bold text-navy-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
