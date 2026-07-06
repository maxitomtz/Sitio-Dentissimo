import { StarIcon } from "./Icons";
import type { Content } from "@/lib/content";
import type { SiteData } from "@/lib/cms";

export default function Testimonials({ t, site }: { t: Content; site: SiteData }) {
  return (
    <section id="testimonios" className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{t.testimonials.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{t.testimonials.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((review) => (
            <figure key={review.name} className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex gap-0.5 text-accent-500" aria-label={`${review.stars} de 5 estrellas`}>
                {Array.from({ length: review.stars }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between">
                <span className="text-sm font-bold text-navy-900">{review.name}</span>
                <span className="text-xs text-slate-400">{review.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center gap-2 font-semibold text-primary-600 underline decoration-primary-200 underline-offset-4 hover:text-primary-700"
          >
            {t.testimonials.linkText} →
          </a>
        </div>
      </div>
    </section>
  );
}
