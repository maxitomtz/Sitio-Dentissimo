// ============================================================
// DATOS DEL NEGOCIO — Dentissimo Clínica Dental
// Toda la información de contacto vive aquí. Si algo cambia
// (teléfono, horarios, redes), se edita SOLO en este archivo.
// ============================================================

export const SITE = {
  name: "Dentissimo Clínica Dental",
  shortName: "Dentissimo",
  // [RELLENAR] Cambiar por el dominio real cuando se conecte en Vercel
  url: "https://dentissimo.mx",

  phone: "+526864784662",
  phoneDisplay: "(686) 478 4662",
  whatsappNumber: "526864784662",

  address: {
    street: "Calz. Rotario Internacional 3661, Local 12",
    colonia: "21395",
    city: "Mexicali",
    state: "Baja California",
    zip: "21395",
    country: "MX",
  },

  // [VERIFICAR] Coordenadas aproximadas de Calz. Rotario Internacional 3661, Mexicali.
  // Obtener las exactas: en Google Maps, clic derecho sobre el pin > copiar coordenadas.
  geo: {
    lat: 32.6021,
    lng: -115.3999,
  },

  social: {
    instagram: "https://www.instagram.com/dentissimo.mx",
    instagramHandle: "@dentissimo.mx",
    // [VERIFICAR] Confirmar la URL exacta de la página de Facebook
    facebook: "https://www.facebook.com/dentissimo.mx",
  },

  // [RELLENAR] Link "Escribir reseña / Ver reseñas" del perfil de Google Business
  googleReviewsUrl: "https://www.google.com/maps/search/Dentissimo+Cl%C3%ADnica+Dental+Mexicali",

  // [VERIFICAR] Datos inventados como base — confirmar con el cliente
  foundedYear: 2015,
  rating: 4.9,
  reviewCount: 120,

  hours: [
    { es: "Lunes a Viernes", en: "Monday – Friday", value: "10:00–14:00 y 16:00–20:00", valueEn: "10:00 AM – 2:00 PM & 4:00 PM – 8:00 PM" },
    { es: "Sábado", en: "Saturday", value: "9:00–15:00", valueEn: "9:00 AM – 3:00 PM" },
    { es: "Domingo", en: "Sunday", value: "Cerrado", valueEn: "Closed" },
  ],
} as const;

export function waLink(message: string, number: string = SITE.whatsappNumber): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT_MSG_ES = "Hola, quiero agendar una cita";
export const WA_DEFAULT_MSG_EN = "Hello, I would like to schedule an appointment";

export const fullAddress = `${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}, B.C., México`;

// URL de Google Maps embebido (no requiere API key)
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `Dentissimo Clínica Dental, ${fullAddress}`
)}&output=embed`;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `Dentissimo Clínica Dental, ${fullAddress}`
)}`;
