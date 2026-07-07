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
    imageAlt: "El equipo de especialistas de Dentissimo Clínica Dental en Mexicali",
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
      "Tratamientos seguros y efectivos, con precios claros y sin letras chiquitas. Tu primera valoración no cuesta nada.",
    cta: "Me interesa este servicio",
    items: [
      {
        id: "valoracion",
        icon: "doctor",
        title: "Valoración dental",
        description:
          "Revisión completa, diagnóstico y plan de tratamiento por escrito. Conócenos sin compromiso: tu primera visita va por nuestra cuenta.",
        price: "Sin costo",
      },
      {
        id: "limpieza",
        icon: "brush",
        title: "Limpieza dental",
        description:
          "Elimina placa y sarro, previene caries y cuida tus encías. La base de una sonrisa sana todo el año.",
        price: "Desde $500 MXN",
      },
      {
        id: "resinas",
        icon: "tooth",
        title: "Resinas (empastes)",
        description:
          "Repara caries y fracturas pequeñas con resinas del color exacto de tu diente. Nadie notará la diferencia.",
        price: "Desde $500 MXN",
      },
      {
        id: "blanqueamiento",
        icon: "sparkle",
        title: "Blanqueamiento dental",
        description:
          "Recupera el blanco natural de tus dientes en una sola sesión, con resultados visibles y sin dañar tu esmalte.",
        price: "Desde $2,000 MXN",
      },
      {
        id: "ortodoncia",
        icon: "braces",
        title: "Ortodoncia (brackets)",
        description:
          "Alinea tu sonrisa y corrige tu mordida con seguimiento especializado. Pregunta por el 20% de descuento en tu pago inicial.",
        price: "Inicio desde $3,000 MXN",
      },
      {
        id: "endodoncia",
        icon: "root",
        title: "Endodoncia",
        description:
          "Salva piezas dañadas eliminando la infección desde la raíz, sin dolor y en pocas citas.",
        price: "Desde $2,500 MXN",
      },
      {
        id: "cirugia",
        icon: "surgery",
        title: "Cirugía de muela del juicio",
        description:
          "Extracciones seguras con anestesia moderna y recuperación guiada paso a paso.",
        price: "Desde $2,000 MXN",
      },
      {
        id: "implantes",
        icon: "implant",
        title: "Implante con corona",
        description:
          "Reemplaza piezas perdidas con implantes que se ven y se sienten como dientes naturales.",
        price: "Desde $750 USD",
      },
      {
        id: "carillas",
        icon: "veneer",
        title: "Carillas y coronas",
        description:
          "Corrige forma, color y alineación de tu sonrisa con porcelana de alta estética.",
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
    title: "Conoce a tu equipo",
    name: "Equipo Dentissimo",
    credential: "Cédulas profesionales disponibles en recepción", // [RELLENAR] nombres y cédulas de los doctores
    specialty: "Odontología general · Estética · Ortodoncia · Cirugía e Implantes",
    bio: "Somos un equipo de especialistas unidos por una idea muy simple: que nadie salga del dentista con más miedo del que traía al entrar. En Dentissimo cada tratamiento lo realiza el especialista adecuado, te explicamos todo con peras y manzanas y avanzamos a tu ritmo, sin regaños. Ven a conocernos: nuestra clínica en Plaza Aria está pensada para que te sientas como en casa desde la recepción.", // [VERIFICAR] ajustar con nombres reales de los doctores
    imageAlt: "Recepción de Dentissimo Clínica Dental en Plaza Aria, Mexicali",
  },

  beforeAfter: {
    title: "Resultados que hablan por sí solos",
    subtitle: "Desliza para comparar el antes y el después de casos reales de nuestros pacientes.",
    beforeLabel: "Antes",
    afterLabel: "Después",
    cases: [
      { title: "Alineación dental (ortodoncia)", alt: "ortodoncia en Mexicali, alineación dental antes y después" },
      { title: "Ortodoncia completa", alt: "tratamiento de brackets en Mexicali, antes y después" },
      { title: "Corrección de mordida", alt: "corrección de mordida con ortodoncia en Mexicali" },
    ],
    note: "*Casos reales de pacientes de Dentissimo. Los resultados pueden variar según cada paciente.",
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
    note: "*Promociones sujetas a cambios. Pregunta por las promociones vigentes del mes.",
    orthoPromo: "Además, este mes: 20% de descuento en el pago inicial de tu tratamiento de ortodoncia.",
    promoImage: "/images/publi-ortodoncia.jpg",
    promoImageAlt: "Promoción Dentissimo: inicia tu tratamiento de ortodoncia con 20% de descuento en el pago inicial",
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
      "Valoración dental (sin costo)",
      "Limpieza dental",
      "Resinas (empastes)",
      "Blanqueamiento dental",
      "Ortodoncia (brackets)",
      "Endodoncia",
      "Cirugía de muela del juicio",
      "Implante con corona",
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
      "Estamos dentro de Plaza Aria, Local 12, sobre la Calzada Rotario Internacional (antes Blvd. Islas Agrarias). A unos minutos del centro de Mexicali y de la garita de Calexico East.",
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
    imageAlt: "The team of specialists at Dentissimo Dental Clinic in Mexicali",
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
      "Safe, effective treatments at a fraction of U.S. prices — with upfront pricing. Your first evaluation is free.",
    cta: "I'm interested",
    items: [
      {
        id: "valoracion",
        icon: "doctor",
        title: "Dental evaluation",
        description:
          "Full check-up, diagnosis and a written treatment plan. Come meet us with zero commitment — your first visit is on us.",
        price: "Free",
      },
      {
        id: "limpieza",
        icon: "brush",
        title: "Dental cleaning",
        description:
          "Removes plaque and tartar, prevents cavities and protects your gums. The foundation of a healthy smile.",
        price: "From $500 MXN (≈$28 USD)",
      },
      {
        id: "resinas",
        icon: "tooth",
        title: "Fillings (composite)",
        description:
          "Repair cavities and small fractures with tooth-colored composite. Nobody will notice the difference.",
        price: "From $500 MXN (≈$28 USD)",
      },
      {
        id: "blanqueamiento",
        icon: "sparkle",
        title: "Teeth whitening",
        description:
          "Get a visibly whiter smile in a single session, safely and without damaging your enamel.",
        price: "From $2,000 MXN (≈$110 USD)",
      },
      {
        id: "ortodoncia",
        icon: "braces",
        title: "Orthodontics (braces)",
        description:
          "Straighten your smile and fix your bite with specialist follow-up. Ask about 20% off your initial payment.",
        price: "Start from $3,000 MXN",
      },
      {
        id: "endodoncia",
        icon: "root",
        title: "Root canal",
        description:
          "Save damaged teeth by removing the infection at the root — painless and in just a few visits.",
        price: "From $2,500 MXN (≈$140 USD)",
      },
      {
        id: "cirugia",
        icon: "surgery",
        title: "Wisdom teeth removal",
        description:
          "Safe extractions with modern anesthesia and step-by-step guided recovery.",
        price: "From $2,000 MXN (≈$110 USD)",
      },
      {
        id: "implantes",
        icon: "implant",
        title: "Implant with crown",
        description:
          "Replace missing teeth with implants that look and feel natural — a fraction of U.S. quotes.",
        price: "From $750 USD",
      },
      {
        id: "carillas",
        icon: "veneer",
        title: "Veneers & crowns",
        description:
          "Fix the shape, color and alignment of your smile with high-aesthetic porcelain.",
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
    title: "Meet your team",
    name: "The Dentissimo Team",
    credential: "Professional licenses available at the front desk", // [FILL IN] doctors' names and license numbers
    specialty: "General dentistry · Cosmetic · Orthodontics · Surgery & Implants",
    bio: "We're a team of specialists united by one simple idea: nobody should leave the dentist more scared than when they walked in. At Dentissimo every treatment is performed by the right specialist, we explain everything in plain words — in English or Spanish — and we go at your pace. Come meet us: our clinic at Plaza Aria was designed to make you feel at home from the moment you walk in.", // [VERIFY] adjust with the doctors' real names
    imageAlt: "Front desk at Dentissimo Dental Clinic in Plaza Aria, Mexicali",
  },

  beforeAfter: {
    title: "Results that speak for themselves",
    subtitle: "Drag the slider to compare real before & after cases from our patients.",
    beforeLabel: "Before",
    afterLabel: "After",
    cases: [
      { title: "Teeth alignment (orthodontics)", alt: "orthodontics in Mexicali, teeth alignment before and after" },
      { title: "Full orthodontic treatment", alt: "braces treatment in Mexicali, before and after" },
      { title: "Bite correction", alt: "bite correction with orthodontics in Mexicali" },
    ],
    note: "*Real cases from Dentissimo patients. Results may vary from patient to patient.",
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
    note: "*Promotions subject to change. Ask about this month's current specials.",
    orthoPromo: "Plus, this month: 20% off the initial payment of your orthodontic treatment.",
    promoImage: "/images/publi-ortodoncia.jpg",
    promoImageAlt: "Dentissimo special: start your orthodontic treatment with 20% off the initial payment",
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
      "Dental evaluation (free)",
      "Dental cleaning",
      "Fillings (composite)",
      "Teeth whitening",
      "Orthodontics (braces)",
      "Root canal",
      "Wisdom teeth removal",
      "Implant with crown",
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
      "We're inside Plaza Aria, Suite 12, on Calzada Rotario Internacional (formerly Blvd. Islas Agrarias) — a short drive from the Calexico East border crossing.",
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
