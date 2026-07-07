import { SITE } from "@/lib/site";
import type { SiteData } from "@/lib/cms";

// Schema markup JSON-LD tipo Dentist para SEO local.
// Google lo usa para el panel de negocio y resultados enriquecidos.
export default function JsonLd({ site }: { site: SiteData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.name,
    url: SITE.url,
    telephone: site.phone,
    image: `${SITE.url}/images/equipo.jpg`,
    priceRange: "$$",
    currenciesAccepted: "MXN, USD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "16:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    // [RELLENAR] Rating y número de reseñas reales de Google Business
    // (editable desde la pestaña "general" del Google Sheet: rating y num_resenas)
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating,
      reviewCount: site.reviewCount,
    },
    sameAs: [site.instagram, site.facebook],
    areaServed: [
      { "@type": "City", name: "Mexicali" },
      { "@type": "City", name: "Calexico" },
    ],
    description: `Clínica dental en Mexicali, B.C. Blanqueamiento, implantes, cirugía oral, carillas y coronas. Dirección: ${site.fullAddress}`,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
