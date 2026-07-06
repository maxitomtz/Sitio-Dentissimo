import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: { absolute: "Dentist in Mexicali, Mexico — Minutes from Calexico | Dentissimo Dental Clinic" },
  description:
    "Save 50–70% on dental care in Mexicali, just across the Calexico border. English-speaking dentists. Teeth whitening, implants, oral surgery, veneers & crowns. Free first evaluation.",
  alternates: {
    canonical: "/en",
    languages: { "es-MX": "/", "en-US": "/en" },
  },
  openGraph: {
    locale: "en_US",
    title: "Dentist in Mexicali — Minutes from Calexico | Dentissimo",
    description:
      "Save 50–70% on dental care just across the Calexico border. English-speaking team, free first evaluation.",
  },
};

// Refresca el contenido desde el Google Sheet cada 5 minutos (ISR).
export const revalidate = 300;

export default function HomePageEn() {
  return <LandingPage locale="en" />;
}
