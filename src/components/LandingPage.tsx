import Header from "./Header";
import EmergencyBanner from "./EmergencyBanner";
import Hero from "./Hero";
import TrustBar from "./TrustBar";
import Services from "./Services";
import WhyUs from "./WhyUs";
import Dentist from "./Dentist";
import Membership from "./Membership";
import BeforeAfter from "./BeforeAfter";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import AppointmentForm from "./AppointmentForm";
import Faq from "./Faq";
import LocationMap from "./LocationMap";
import FinalCta from "./FinalCta";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import JsonLd from "./JsonLd";
import { getPageData } from "@/lib/cms";
import type { Locale } from "@/lib/content";

// Landing completa. El mismo componente renderiza / (es) y /en (en).
// El contenido y la visibilidad de cada sección vienen del CMS
// (Google Sheets) con respaldo en los textos de src/lib/content.ts.
export default async function LandingPage({ locale }: { locale: Locale }) {
  const { t, site, visible } = await getPageData(locale);

  return (
    <>
      <JsonLd site={site} />
      {visible.urgencias && <EmergencyBanner t={t} site={site} />}
      <Header t={t} site={site} />
      <main>
        <Hero t={t} site={site} />
        {visible.barra_confianza && <TrustBar t={t} />}
        {visible.servicios && <Services t={t} site={site} />}
        {visible.por_que_elegirnos && <WhyUs t={t} />}
        {visible.dentista && <Dentist t={t} />}
        {visible.membresia && <Membership t={t} site={site} />}
        {visible.antes_despues && <BeforeAfter t={t} />}
        {visible.testimonios && <Testimonials t={t} site={site} />}
        {visible.promocion && <Pricing t={t} site={site} />}
        {visible.formulario && <AppointmentForm t={t} site={site} />}
        {visible.faq && <Faq t={t} />}
        {visible.ubicacion && <LocationMap t={t} site={site} />}
        {visible.cta_final && <FinalCta t={t} site={site} />}
      </main>
      <Footer t={t} site={site} />
      <WhatsAppFloat locale={locale} site={site} />
    </>
  );
}
