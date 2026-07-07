"use client";

import { useState } from "react";
import type { Content } from "@/lib/content";

// Slider comparativo de imagen dividida (antes/después), controlado
// con un input range accesible (arrastrable con dedo, mouse o teclado).
function CompareSlider({
  before,
  after,
  beforeLabel,
  afterLabel,
  alt,
}: {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
  alt: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className="ba-slider relative aspect-[16/9] select-none overflow-hidden rounded-2xl shadow-md">
      {/* Imagen "después" (fondo completo) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after} alt={`${afterLabel}: ${alt}`} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      {/* Imagen "antes": mismo tamaño que la de "después", recortada con clip-path
          según la posición del slider (así ambas quedan perfectamente alineadas) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={before}
        alt={`${beforeLabel}: ${alt}`}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />

      {/* Línea divisoria + manija */}
      <div className="pointer-events-none absolute inset-y-0 z-10 w-1 -translate-x-1/2 bg-white shadow" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-700 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
          </svg>
        </span>
      </div>

      <span className="absolute left-3 top-3 z-10 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-bold text-white">
        {beforeLabel}
      </span>
      <span className="absolute right-3 top-3 z-10 rounded-full bg-primary-500/90 px-3 py-1 text-xs font-bold text-white">
        {afterLabel}
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`${beforeLabel} / ${afterLabel} — ${alt}`}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize"
      />
    </div>
  );
}

export default function BeforeAfter({ t }: { t: Content }) {
  return (
    <section id="antes-despues" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{t.beforeAfter.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{t.beforeAfter.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {t.beforeAfter.cases.map((c, i) => (
            <div key={c.title}>
              <CompareSlider
                before={`/images/before-${i + 1}.jpg`}
                after={`/images/after-${i + 1}.jpg`}
                beforeLabel={t.beforeAfter.beforeLabel}
                afterLabel={t.beforeAfter.afterLabel}
                alt={c.alt}
              />
              <p className="mt-3 text-center text-sm font-semibold text-slate-700">{c.title}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-400">{t.beforeAfter.note}</p>
      </div>
    </section>
  );
}
