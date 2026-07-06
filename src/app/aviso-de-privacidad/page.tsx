import type { Metadata } from "next";
import Link from "next/link";
import { SITE, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Aviso de privacidad de Dentissimo Clínica Dental, Mexicali, B.C.",
};

export default function AvisoPrivacidadPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/" className="text-sm font-semibold text-primary-600 hover:text-primary-700">
        ← Volver al inicio
      </Link>
      <h1 className="mt-6 text-3xl font-extrabold text-slate-900">Aviso de privacidad</h1>

      <div className="prose-sm mt-8 space-y-5 leading-relaxed text-slate-600">
        <p>
          <strong>{SITE.name}</strong>, con domicilio en {fullAddress}, es responsable del tratamiento de los datos
          personales que nos proporciones, conforme a la Ley Federal de Protección de Datos Personales en Posesión de
          los Particulares.
        </p>
        <h2 className="text-lg font-bold text-slate-900">¿Qué datos recabamos?</h2>
        <p>
          Los datos que nos compartes voluntariamente al contactarnos por WhatsApp, teléfono o nuestro formulario web:
          nombre, teléfono y servicio de interés. Este sitio web no almacena tus datos en ninguna base de datos propia.
        </p>
        <h2 className="text-lg font-bold text-slate-900">¿Para qué usamos tus datos?</h2>
        <p>
          Únicamente para agendar y confirmar tus citas, darte seguimiento a tus tratamientos y, si lo autorizas,
          enviarte recordatorios y promociones.
        </p>
        <h2 className="text-lg font-bold text-slate-900">Derechos ARCO</h2>
        <p>
          Puedes ejercer tus derechos de Acceso, Rectificación, Cancelación y Oposición contactándonos al teléfono{" "}
          <a href={`tel:${SITE.phone}`} className="font-semibold text-primary-600">
            {SITE.phoneDisplay}
          </a>{" "}
          o directamente en nuestra clínica.
        </p>
        <h2 className="text-lg font-bold text-slate-900">Cambios al aviso</h2>
        <p>
          Cualquier modificación a este aviso de privacidad se publicará en esta misma página.
        </p>
        {/* [VERIFICAR] Este texto es una base genérica. Se recomienda revisarlo con un asesor legal. */}
        <p className="text-xs text-slate-400">Última actualización: julio de 2026.</p>
      </div>
    </main>
  );
}
