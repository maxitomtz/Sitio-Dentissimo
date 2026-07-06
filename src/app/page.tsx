import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: { absolute: "Dentista en Mexicali | Dentissimo Clínica Dental" },
  description:
    "Clínica dental en Mexicali, B.C. ✓ Blanqueamiento ✓ Implantes dentales ✓ Cirugía oral ✓ Carillas y coronas. Primera valoración GRATIS. Agenda tu cita por WhatsApp hoy.",
  alternates: {
    canonical: "/",
    languages: { "es-MX": "/", "en-US": "/en" },
  },
};

// Refresca el contenido desde el Google Sheet cada 5 minutos (ISR).
export const revalidate = 300;

export default function HomePage() {
  return <LandingPage locale="es" />;
}
