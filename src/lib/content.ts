// ============================================================
// COPY DEL SITIO — español (es) e inglés (en)
// Todo el texto visible vive aquí para editarse fácilmente.
// ============================================================

export type Locale = "es" | "en";

export interface ServiceItem {
  id: string;
  icon: string; // clave del ícono en Icons.tsx
  title: string;
  description: string;
  price: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TestimonialItem {
  name: string;
  date: string;
  stars: number;
  text: string;
}

const es = {
  locale: "es" as Locale,
  langSwitch: { label: "EN", href: "/en", title: "English version" },

  nav: {
    items: [
      { label: "Servicios", href: "#servicios" },
      { label: "Membresía", href: "#membresia" },
      { label: "Nosotros", href: "#por-que-elegirnos" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Preguntas", href: "#preguntas" },
      { label: "Ubicación", href: "#ubicacion" },
    ],
    cta: "Agendar cita",
  },

  emergency: {
    text: "¿Emergencia dental? Te atendemos hoy mismo.",
    cta: "Llámanos ahora",
  },

  hero: {
    badge: "Clínica dental en Mexicali, B.C.",
    headline: "Tu sonrisa sana empieza aquí",
    subheadline:
      "En Dentissimo cuidamos tu salud bucal con tecnología avanzada, un equipo de especialistas y un trato cálido que te hará olvidar el miedo al dentista. Cada visita, una experiencia positiva.",
    ctaPrimary: "Agenda tu cita por WhatsApp",
    ctaSecondary: "Conoce nuestros servicios",
    imageAlt: "Paciente sonriendo en Dentissimo Clínica Dental en Mexicali",
  },

  trust: [
    { value: "+10", label: "años de experiencia" }, // [VERIFICAR] año real de fundación
    { value: "+5,000", label: "pacientes atendidos" }, // [RELLENAR] dato real
    { value: "4.9★", label: "calificación en Google" }, // [RELLENAR] rating real
    { value: "💳", label: "Aceptamos tarjetas" },
  ],

  services: {
    title: "Nuestros servicios",
    subtitle:
      "Tratamientos seguros y efectivos, explicados con claridad y sin letras chiquitas. Tu primera valoración es gratis.",
    cta: "Me interesa este servicio",
    items: [
      {
        id: "blanqueamiento",
        icon: "sparkle",
        title: "Blanqueamiento dental",
        description:
          "Recupera el blanco natural de tus dientes en una sola sesión, con resultados visibles y sin dañar tu esmalte.",
        price: "Precio a consultar",
      },
      {
        id: "implantes",
        icon: "implant",
        title: "Implantes dentales",
        description:
          "Reemplaza piezas perdidas con implantes que se ven y se sienten como dientes naturales. Vuelve a comer y sonreír con confianza.",
        price: "Precio a consultar",
      },
      {
        id: "cirugia",
        icon: "surgery",
        title: "Cirugía oral",
        description:
          "Extracciones de muelas del juicio y procedimientos quirúrgicos con anestesia segura y recuperación guiada paso a paso.",
        price: "Precio a consultar",
      },
      {
        id: "carillas",
        icon: "veneer",
        title: "Carillas y coronas",
        description:
          "Corrige forma, color y alineación de tu sonrisa con carillas y coronas de porcelana de alta estética.",
        price: "Precio a consultar",
      },
    ] as ServiceItem[],
  },

  why: {
    title: "¿Por qué elegir Dentissimo?",
    subtitle: "Más que un consultorio, un equipo comprometido con tu bienestar.",
    items: [
      {
        icon: "tech",
        title: "Tecnología avanzada",
        text: "Equipo moderno de diagnóstico y tratamiento para procedimientos más precisos, rápidos y cómodos.",
      },
      {
        icon: "heart",
        title: "Trato cálido y sin juicios",
        text: "Sabemos que ir al dentista impone. Te explicamos todo con calma y avanzamos a tu ritmo, sin regaños.",
      },
      {
        icon: "shield",
        title: "Enfoque preventivo",
        text: "Preferimos ayudarte a evitar problemas que solo tratarlos. Cuidamos tu salud bucal a largo plazo.",
      },
      {
        icon: "doctor",
        title: "Especialistas certificados",
        text: "Cada tratamiento lo realiza un profesional con la especialidad adecuada, no un 'todólogo'.",
      },
      {
        icon: "clock",
        title: "Horarios accesibles",
        text: "Abrimos de lunes a sábado, con horario extendido entre semana para que no faltes al trabajo.",
      },
      {
        icon: "pin",
        title: "Cerca de la frontera",
        text: "A minutos de la garita de Calexico. Atendemos pacientes de ambos lados de la frontera, en español e inglés.",
      },
    ],
  },

  dentist: {
    title: "Conoce a tu dentista",
    name: "Dra. Valeria Cárdenas Ruiz", // [VERIFICAR] Nombre inventado — reemplazar por el real
    credential: "Cédula profesional: 0000000", // [RELLENAR] cédula real
    specialty: "Cirujana Dentista · Especialidad en Rehabilitación Oral e Implantes",
    bio: "La Dra. Valeria fundó Dentissimo con una idea muy simple: que nadie salga del dentista con más miedo del que traía al entrar. Egresada de la UABC con especialidad en rehabilitación oral, lleva más de 10 años devolviendo sonrisas en Mexicali. Le encanta explicar cada tratamiento con peras y manzanas, y presume que sus pacientes más nerviosos son hoy los que llegan más contentos a consulta.", // [VERIFICAR] Bio inventada — ajustar con datos reales
    imageAlt: "Dra. Valeria Cárdenas, dentista en Dentissimo Mexicali",
  },

  beforeAfter: {
    title: "Resultados que hablan por sí solos",
    subtitle: "Desliza para comparar el antes y el después de casos reales de nuestros pacientes.",
    beforeLabel: "Antes",
    afterLabel: "Después",
    cases: [
      { title: "Blanqueamiento dental", alt: "blanqueamiento dental en Mexicali" },
      { title: "Carillas de porcelana", alt: "carillas dentales en Mexicali" },
      { title: "Implante dental", alt: "implante dental en Mexicali" },
    ],
    note: "*Los resultados pueden variar según cada paciente.",
  },

  testimonials: {
    title: "Lo que dicen nuestros pacientes",
    subtitle: "Reseñas reales de Google de pacientes como tú.",
    linkText: "Ver todas las reseñas en Google",
    // [RELLENAR] Reemplazar por reseñas REALES copiadas del perfil de Google Business
    items: [
      {
        name: "María G.",
        date: "Hace 2 meses",
        stars: 5,
        text: "Excelente atención, la doctora me explicó todo mi tratamiento con mucha paciencia. Me daba pavor el dentista y aquí me sentí en confianza desde el primer día.",
      },
      {
        name: "Carlos R.",
        date: "Hace 3 meses",
        stars: 5,
        text: "Me hice un blanqueamiento y quedé fascinado con el resultado. Instalaciones muy limpias y modernas. 100% recomendado.",
      },
      {
        name: "Jennifer M.",
        date: "Hace 1 mes",
        stars: 5,
        text: "I drive from Calexico for my appointments. Great prices compared to the US, the staff speaks English and the quality is excellent!",
      },
    ] as TestimonialItem[],
  },

  pricing: {
    title: "Promoción del mes",
    highlight: "Primera valoración GRATIS",
    text: "Ven a conocernos sin compromiso. En tu primera visita revisamos tu salud bucal, resolvemos tus dudas y te damos un plan de tratamiento claro, con precios por escrito y opciones de pago.",
    bullets: [
      "Revisión completa y diagnóstico",
      "Plan de tratamiento por escrito",
      "Precios claros, sin sorpresas",
      "Aceptamos tarjetas de crédito y débito",
    ],
    cta: "Quiero mi valoración gratis",
    note: "*Promoción sujeta a cambios. Pregunta por las promociones vigentes del mes.", // [RELLENAR] promos reales del mes
  },

  membership: {
    badge: "Nueva membresía",
    title: "Membresía Dentissimo",
    subtitle: "Cuida tu sonrisa durante todo el año, para ti y para tus pequeños.",
    bullets: [
      "2 limpiezas dentales sin costo al año",
      "10% de descuento en tratamientos selectos",
      "Incluye a los niños con Dentissimo Kids",
      "Vigencia de 12 meses desde tu compra",
    ],
    price: "$1,000 MXN",
    priceNote: "un solo pago al año",
    cta: "Quiero mi membresía",
    waMsg: "Hola, me interesa la Membresía Dentissimo",
    note: "*Pregunta por los tratamientos participantes al agendar tu cita.",
    cardTagline: "Cuida tu sonrisa durante todo el año",
    cardName: "Nombre:",
    cardExpires: "Vence en:",
  },

  faq: {
    title: "Preguntas frecuentes",
    subtitle: "Lo que todos preguntan antes de agendar (y está bien preguntar).",
    items: [
      {
        q: "¿Duele el tratamiento?",
        a: "Trabajamos con anestesia moderna y técnicas mínimamente invasivas para que sientas la menor molestia posible. Si algo te preocupa, dínoslo: vamos a tu ritmo y te explicamos cada paso antes de hacerlo.",
      },
      {
        q: "¿Cuánto cuesta una consulta?",
        a: "Tu primera valoración es GRATIS. Ahí revisamos tu caso y te damos un presupuesto claro y por escrito antes de iniciar cualquier tratamiento. Sin compromisos ni sorpresas.",
      },
      {
        q: "¿Aceptan tarjeta?",
        a: "Sí, aceptamos tarjetas de crédito y débito, además de efectivo. Pregúntanos también por opciones para pagar tu tratamiento en partes.",
      },
      {
        q: "¿Atienden urgencias dentales?",
        a: "Sí. Si tienes dolor fuerte, una fractura o una emergencia, llámanos y haremos lo posible por atenderte el mismo día.",
      },
      {
        q: "¿Cuánto dura un tratamiento?",
        a: "Depende de cada caso: un blanqueamiento puede resolverse en una sesión, mientras que un implante lleva varias citas. En tu valoración gratuita te damos tiempos estimados claros para tu caso.",
      },
      {
        q: "¿Atienden pacientes de Estados Unidos / Calexico?",
        a: "¡Claro! Estamos a minutos de la garita de Calexico, hablamos inglés y muchos de nuestros pacientes cruzan la frontera para atenderse con nosotros a precios mucho más accesibles que en EE.UU.",
      },
      {
        q: "¿Necesito cita o puedo llegar directo?",
        a: "Te recomendamos agendar por WhatsApp para asegurar tu lugar y evitar esperas. Si es una urgencia, llámanos y te haremos espacio lo antes posible.",
      },
      {
        q: "¿Atienden niños?",
        a: "Sí, atendemos a toda la familia. Nos encanta que los niños tengan una primera experiencia positiva con el dentista, sin miedo y sin llanto (bueno, casi siempre).",
      },
    ] as FaqItem[],
  },

  form: {
    title: "Solicita tu cita",
    subtitle: "Llena estos datos y te contactamos por WhatsApp para confirmar tu horario.",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    phoneLabel: "Teléfono",
    phonePlaceholder: "(686) 000 0000",
    serviceLabel: "Servicio de interés",
    serviceOptions: [
      "Valoración general (gratis)",
      "Blanqueamiento dental",
      "Implantes dentales",
      "Cirugía oral",
      "Carillas y coronas",
      "Urgencia dental",
      "Otro",
    ],
    scheduleLabel: "Horario preferido",
    scheduleOptions: ["Mañana (10:00–14:00)", "Tarde (16:00–20:00)", "Sábado (9:00–15:00)"],
    submit: "Enviar por WhatsApp",
    disclaimer: "Al enviar, se abrirá WhatsApp con tu mensaje listo. No guardamos tus datos.",
    waIntro: "Hola, quiero agendar una cita.",
    waName: "Nombre",
    waPhone: "Teléfono",
    waService: "Servicio",
    waSchedule: "Horario preferido",
  },

  location: {
    title: "¿Dónde estamos?",
    subtitle: "Fácil de llegar, con estacionamiento disponible.",
    addressTitle: "Dirección",
    referencesTitle: "Cómo llegar",
    references:
      "Estamos dentro de Plaza Aria, sobre la Calzada Rotario Internacional, Local 12. A unos minutos del centro de Mexicali y de la garita de Calexico East.", // [VERIFICAR] confirmar referencias con el cliente
    parkingTitle: "Estacionamiento",
    parking: "Estacionamiento gratuito dentro de la plaza.", // [VERIFICAR]
    hoursTitle: "Horarios",
    directionsCta: "Cómo llegar en Google Maps",
    mapTitle: "Mapa de ubicación de Dentissimo Clínica Dental en Mexicali",
  },

  finalCta: {
    title: "Tu nueva sonrisa está a un mensaje de distancia",
    text: "Agenda hoy: los espacios de esta semana son limitados. Escríbenos por WhatsApp y te confirmamos tu cita en minutos.",
    cta: "Agendar mi cita ahora",
    alt: "o llámanos al",
  },

  footer: {
    tagline: "Clínica dental comprometida con tu salud bucal en Mexicali, B.C.",
    contactTitle: "Contacto",
    hoursTitle: "Horarios",
    socialTitle: "Síguenos",
    legalTitle: "Legal",
    privacy: "Aviso de privacidad",
    rights: "Todos los derechos reservados.",
  },

  thanks: {
    title: "¡Gracias! Recibimos tu solicitud",
    text: "En breve te contactaremos por WhatsApp para confirmar tu cita. Si es urgente, llámanos directamente.",
    cta: "Volver al inicio",
    home: "/",
  },
};

const en: typeof es = {
  locale: "en" as Locale,
  langSwitch: { label: "ES", href: "/", title: "Versión en español" },

  nav: {
    items: [
      { label: "Services", href: "#servicios" },
      { label: "Membership", href: "#membresia" },
      { label: "About us", href: "#por-que-elegirnos" },
      { label: "Reviews", href: "#testimonios" },
      { label: "FAQ", href: "#preguntas" },
      { label: "Location", href: "#ubicacion" },
    ],
    cta: "Book now",
  },

  emergency: {
    text: "Dental emergency? We'll see you today.",
    cta: "Call us now",
  },

  hero: {
    badge: "Dental clinic in Mexicali — minutes from Calexico",
    headline: "Quality dental care, just across the border",
    subheadline:
      "Save up to 70% compared to U.S. prices without sacrificing quality. English-speaking team, advanced technology, and a warm, judgment-free experience — only minutes from the Calexico border crossing.",
    ctaPrimary: "Book your visit on WhatsApp",
    ctaSecondary: "See our services",
    imageAlt: "Smiling patient at Dentissimo Dental Clinic in Mexicali",
  },

  trust: [
    { value: "+10", label: "years of experience" }, // [VERIFY] real founding year
    { value: "+5,000", label: "happy patients" }, // [FILL IN] real number
    { value: "4.9★", label: "Google rating" }, // [FILL IN] real rating
    { value: "💳", label: "Cards accepted (USD ok)" },
  ],

  services: {
    title: "Our services",
    subtitle:
      "Safe, effective treatments at a fraction of U.S. prices. Your first evaluation is free.",
    cta: "I'm interested",
    items: [
      {
        id: "blanqueamiento",
        icon: "sparkle",
        title: "Teeth whitening",
        description:
          "Get a visibly whiter smile in a single session, safely and without damaging your enamel.",
        price: "Ask for pricing",
      },
      {
        id: "implantes",
        icon: "implant",
        title: "Dental implants",
        description:
          "Replace missing teeth with implants that look and feel natural — at a fraction of U.S. cost.",
        price: "Ask for pricing",
      },
      {
        id: "cirugia",
        icon: "surgery",
        title: "Oral surgery",
        description:
          "Wisdom teeth extractions and surgical procedures with safe anesthesia and guided recovery.",
        price: "Ask for pricing",
      },
      {
        id: "carillas",
        icon: "veneer",
        title: "Veneers & crowns",
        description:
          "Fix the shape, color and alignment of your smile with high-aesthetic porcelain veneers and crowns.",
        price: "Ask for pricing",
      },
    ] as ServiceItem[],
  },

  why: {
    title: "Why patients cross the border to see us",
    subtitle: "Thousands of U.S. patients choose Mexicali for affordable, high-quality dental care.",
    items: [
      {
        icon: "dollar",
        title: "Save 50–70% vs. U.S. prices",
        text: "Same quality materials and standards you'd expect in the U.S., at Mexican prices. No insurance needed.",
      },
      {
        icon: "pin",
        title: "Minutes from Calexico",
        text: "We're a short drive from the Calexico East border crossing, with free parking at the plaza.",
      },
      {
        icon: "chat",
        title: "English-speaking team",
        text: "From your first WhatsApp message to your last check-up, we've got you covered in English.",
      },
      {
        icon: "tech",
        title: "Advanced technology",
        text: "Modern diagnostic and treatment equipment for precise, fast and comfortable procedures.",
      },
      {
        icon: "doctor",
        title: "Certified specialists",
        text: "Every treatment is performed by a professional with the right specialty — not a jack-of-all-trades.",
      },
      {
        icon: "shield",
        title: "Prevention first",
        text: "We'd rather help you avoid problems than just treat them. Long-term oral health is the goal.",
      },
    ],
  },

  dentist: {
    title: "Meet your dentist",
    name: "Dr. Valeria Cárdenas Ruiz", // [VERIFY] Placeholder name — replace with real one
    credential: "Professional license (cédula): 0000000", // [FILL IN] real license number
    specialty: "DDS · Specialist in Oral Rehabilitation & Implants",
    bio: "Dr. Valeria founded Dentissimo with one simple idea: nobody should leave the dentist more scared than when they walked in. A UABC graduate with a specialty in oral rehabilitation, she has spent over 10 years restoring smiles in Mexicali — many of them belonging to patients who drive down from California. She loves explaining every treatment in plain words, in English or Spanish.", // [VERIFY] Placeholder bio
    imageAlt: "Dr. Valeria Cárdenas, dentist at Dentissimo Mexicali",
  },

  beforeAfter: {
    title: "Results that speak for themselves",
    subtitle: "Drag the slider to compare real before & after cases from our patients.",
    beforeLabel: "Before",
    afterLabel: "After",
    cases: [
      { title: "Teeth whitening", alt: "teeth whitening in Mexicali" },
      { title: "Porcelain veneers", alt: "dental veneers in Mexicali" },
      { title: "Dental implant", alt: "dental implant in Mexicali" },
    ],
    note: "*Results may vary from patient to patient.",
  },

  testimonials: {
    title: "What our patients say",
    subtitle: "Real Google reviews from patients like you.",
    linkText: "See all reviews on Google",
    // [FILL IN] Replace with REAL reviews copied from the Google Business profile
    items: [
      {
        name: "Jennifer M.",
        date: "1 month ago",
        stars: 5,
        text: "I drive from Calexico for my appointments. Great prices compared to the US, the staff speaks English and the quality is excellent!",
      },
      {
        name: "Robert T.",
        date: "2 months ago",
        stars: 5,
        text: "Got two implants done here for less than half of what I was quoted in El Centro. Very professional, clean facilities, zero complaints.",
      },
      {
        name: "María G.",
        date: "2 months ago",
        stars: 5,
        text: "Excelente atención, la doctora me explicó todo mi tratamiento con mucha paciencia. Me sentí en confianza desde el primer día.",
      },
    ] as TestimonialItem[],
  },

  pricing: {
    title: "This month's special",
    highlight: "FREE first evaluation",
    text: "Come meet us with zero commitment. On your first visit we'll check your oral health, answer your questions and give you a clear written treatment plan with upfront pricing — often 50–70% below U.S. prices.",
    bullets: [
      "Full check-up and diagnosis",
      "Written treatment plan",
      "Upfront pricing, no surprises",
      "Credit & debit cards accepted (USD ok)",
    ],
    cta: "Claim my free evaluation",
    note: "*Promotion subject to change. Ask about this month's current specials.", // [FILL IN]
  },

  membership: {
    badge: "New membership",
    title: "Dentissimo Membership",
    subtitle: "Smile care all year long — for you and your kids.",
    bullets: [
      "2 free dental cleanings per year",
      "10% off select treatments",
      "Kids are covered too with Dentissimo Kids",
      "Valid for 12 months from purchase",
    ],
    price: "$1,000 MXN",
    priceNote: "≈ $55 USD, one yearly payment",
    cta: "I want the membership",
    waMsg: "Hello, I'm interested in the Dentissimo Membership",
    note: "*Ask about participating treatments when booking your visit.",
    cardTagline: "Smile care all year long",
    cardName: "Name:",
    cardExpires: "Expires:",
  },

  faq: {
    title: "Frequently asked questions",
    subtitle: "Everything U.S. patients ask before booking (and it's okay to ask).",
    items: [
      {
        q: "Do you speak English?",
        a: "Yes! Our team speaks English, from your first WhatsApp message to your appointments. You'll never feel lost in translation.",
      },
      {
        q: "How much can I really save vs. the U.S.?",
        a: "Most treatments cost 50–70% less than in California — for example, dental implants or veneers often cost a fraction of U.S. quotes, using the same quality materials. Your first evaluation is free, and you'll get written pricing before anything starts.",
      },
      {
        q: "How far are you from the border?",
        a: "We're a short drive from the Calexico East border crossing, on Calzada Rotario Internacional with free parking at the plaza. Many patients park in Calexico and cross walking, then take a quick taxi or Uber.",
      },
      {
        q: "Can I pay with U.S. cards or dollars?",
        a: "Yes. We accept credit and debit cards, and we can work with U.S. dollars. Ask us about payment options for larger treatments.",
      },
      {
        q: "Is it safe to get dental work in Mexico?",
        a: "Absolutely. Our dentists are licensed specialists, we follow strict sterilization protocols and use the same brands of materials and implants used in the U.S. Mexicali is one of the top dental tourism destinations on the border.",
      },
      {
        q: "Do treatments hurt?",
        a: "We use modern anesthesia and minimally invasive techniques so you feel as little discomfort as possible. We explain every step before doing it and go at your pace.",
      },
      {
        q: "Do you handle dental emergencies?",
        a: "Yes. If you're in pain or have a dental emergency, call us and we'll do our best to see you the same day.",
      },
      {
        q: "Do I need an appointment?",
        a: "We recommend booking via WhatsApp to guarantee your spot and avoid waiting — especially if you're crossing the border. For emergencies, just call us.",
      },
    ] as FaqItem[],
  },

  form: {
    title: "Request your appointment",
    subtitle: "Fill in your info and we'll confirm your appointment via WhatsApp.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    phoneLabel: "Phone",
    phonePlaceholder: "(760) 000 0000",
    serviceLabel: "Service you're interested in",
    serviceOptions: [
      "General evaluation (free)",
      "Teeth whitening",
      "Dental implants",
      "Oral surgery",
      "Veneers & crowns",
      "Dental emergency",
      "Other",
    ],
    scheduleLabel: "Preferred time",
    scheduleOptions: ["Morning (10 AM – 2 PM)", "Afternoon (4 PM – 8 PM)", "Saturday (9 AM – 3 PM)"],
    submit: "Send via WhatsApp",
    disclaimer: "Submitting opens WhatsApp with your message ready to send. We don't store your data.",
    waIntro: "Hello, I would like to schedule an appointment.",
    waName: "Name",
    waPhone: "Phone",
    waService: "Service",
    waSchedule: "Preferred time",
  },

  location: {
    title: "Where to find us",
    subtitle: "Easy to reach from the Calexico border, with free parking.",
    addressTitle: "Address",
    referencesTitle: "Getting here",
    references:
      "We're inside Plaza Aria on Calzada Rotario Internacional, Suite 12 — a short drive from the Calexico East border crossing.", // [VERIFY] confirm landmarks with the client
    parkingTitle: "Parking",
    parking: "Free parking available at the plaza.", // [VERIFY]
    hoursTitle: "Office hours",
    directionsCta: "Get directions on Google Maps",
    mapTitle: "Map of Dentissimo Dental Clinic in Mexicali",
  },

  finalCta: {
    title: "Your new smile is one message away",
    text: "Book today — this week's slots are limited. Message us on WhatsApp and we'll confirm your appointment in minutes.",
    cta: "Book my appointment now",
    alt: "or call us at",
  },

  footer: {
    tagline: "A dental clinic committed to your oral health in Mexicali, B.C. — minutes from Calexico.",
    contactTitle: "Contact",
    hoursTitle: "Office hours",
    socialTitle: "Follow us",
    legalTitle: "Legal",
    privacy: "Privacy notice",
    rights: "All rights reserved.",
  },

  thanks: {
    title: "Thank you! We received your request",
    text: "We'll contact you shortly via WhatsApp to confirm your appointment. If it's urgent, call us directly.",
    cta: "Back to home",
    home: "/en",
  },
};

export const content = { es, en };
export type Content = typeof es;
