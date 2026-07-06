// ============================================================
// CMS: fusiona el contenido del Google Sheet con los defaults.
//
// Pestañas que lee del sheet (todas opcionales):
//   general     → datos de contacto, horarios, rating, redes
//   secciones   → prender/apagar secciones (seccion | mostrar)
//   textos      → cualquier texto de la página (clave | es | en)
//   servicios   → lista de servicios (reemplaza la default)
//   porque      → lista de "por qué elegirnos"
//   testimonios → reseñas de pacientes
//   faq         → preguntas frecuentes
//
// La estructura exacta de columnas está documentada en el README
// y en la carpeta plantilla-cms/ (CSVs listos para importar).
// ============================================================

import { content, type Content, type Locale, type ServiceItem, type FaqItem, type TestimonialItem } from "./content";
import { SITE } from "./site";
import { fetchSheetRows, isShown } from "./sheets";

// ---------- Datos de contacto (editables desde la pestaña "general") ----------

export interface HoursRow {
  es: string;
  en: string;
  value: string;
  valueEn: string;
}

export interface SiteData {
  name: string;
  url: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  fullAddress: string;
  instagram: string;
  instagramHandle: string;
  facebook: string;
  googleReviewsUrl: string;
  rating: number;
  reviewCount: number;
  geo: { lat: number; lng: number };
  hours: HoursRow[];
  mapsEmbedUrl: string;
  mapsDirectionsUrl: string;
}

// ---------- Secciones que se pueden prender/apagar ----------

export type SectionKey =
  | "urgencias"
  | "barra_confianza"
  | "servicios"
  | "por_que_elegirnos"
  | "dentista"
  | "antes_despues"
  | "testimonios"
  | "promocion"
  | "membresia"
  | "formulario"
  | "faq"
  | "ubicacion"
  | "cta_final";

export type Visibility = Record<SectionKey, boolean>;

const DEFAULT_VISIBILITY: Visibility = {
  urgencias: true,
  barra_confianza: true,
  servicios: true,
  por_que_elegirnos: true,
  dentista: true,
  antes_despues: true,
  testimonios: true,
  promocion: true,
  membresia: true,
  formulario: true,
  faq: true,
  ubicacion: true,
  cta_final: true,
};

export interface PageData {
  t: Content;
  site: SiteData;
  visible: Visibility;
}

// ---------- Helpers ----------

function defaultSiteData(): SiteData {
  const fullAddress = `${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}, B.C., México`;
  return withMapUrls({
    name: SITE.name,
    url: SITE.url,
    phone: SITE.phone,
    phoneDisplay: SITE.phoneDisplay,
    whatsappNumber: SITE.whatsappNumber,
    fullAddress,
    instagram: SITE.social.instagram,
    instagramHandle: SITE.social.instagramHandle,
    facebook: SITE.social.facebook,
    googleReviewsUrl: SITE.googleReviewsUrl,
    rating: SITE.rating,
    reviewCount: SITE.reviewCount,
    geo: { lat: SITE.geo.lat, lng: SITE.geo.lng },
    hours: SITE.hours.map((h) => ({ ...h })),
    mapsEmbedUrl: "",
    mapsDirectionsUrl: "",
  });
}

function withMapUrls(site: SiteData): SiteData {
  const q = encodeURIComponent(`${site.name}, ${site.fullAddress}`);
  site.mapsEmbedUrl = `https://www.google.com/maps?q=${q}&output=embed`;
  site.mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
  return site;
}

/** Escribe un valor en una ruta tipo "hero.headline" o "trust.0.value". */
function setDeep(obj: unknown, path: string, value: string): void {
  const parts = path.split(".");
  let current = obj as Record<string, unknown>;
  for (let i = 0; i < parts.length - 1; i++) {
    const next = current?.[parts[i]];
    if (next === null || typeof next !== "object") return; // ruta inválida: se ignora
    current = next as Record<string, unknown>;
  }
  const last = parts[parts.length - 1];
  if (current && typeof current === "object" && typeof current[last] !== "object") {
    current[last] = value;
  }
}

function pick(row: Record<string, string>, esKey: string, enKey: string, locale: Locale): string {
  const es = row[esKey] ?? "";
  const en = row[enKey] ?? "";
  return locale === "en" ? en || es : es;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ---------- Aplicación de cada pestaña ----------

function applyGeneral(site: SiteData, rows: Record<string, string>[]): void {
  for (const row of rows) {
    const campo = (row.campo ?? "").toLowerCase();
    const valor = row.valor ?? "";
    const valorEn = row.valor_en ?? "";
    if (!valor) continue;

    switch (campo) {
      case "telefono": {
        const digits = valor.replace(/[^\d+]/g, "");
        site.phone = digits.startsWith("+") ? digits : `+${digits}`;
        break;
      }
      case "telefono_mostrar":
        site.phoneDisplay = valor;
        break;
      case "whatsapp":
        site.whatsappNumber = valor.replace(/\D/g, "");
        break;
      case "direccion":
        site.fullAddress = valor;
        withMapUrls(site);
        break;
      case "instagram":
        if (valor.startsWith("http")) {
          site.instagram = valor;
          site.instagramHandle = `@${valor.replace(/\/$/, "").split("/").pop()}`;
        } else {
          site.instagramHandle = valor.startsWith("@") ? valor : `@${valor}`;
          site.instagram = `https://www.instagram.com/${valor.replace("@", "")}`;
        }
        break;
      case "facebook":
        site.facebook = valor;
        break;
      case "link_resenas_google":
        site.googleReviewsUrl = valor;
        break;
      case "rating":
        site.rating = parseFloat(valor) || site.rating;
        break;
      case "num_resenas":
        site.reviewCount = parseInt(valor, 10) || site.reviewCount;
        break;
      case "horario_semana":
        site.hours[0] = { ...site.hours[0], value: valor, valueEn: valorEn || valor };
        break;
      case "horario_sabado":
        site.hours[1] = { ...site.hours[1], value: valor, valueEn: valorEn || valor };
        break;
      case "horario_domingo":
        site.hours[2] = { ...site.hours[2], value: valor, valueEn: valorEn || valor };
        break;
    }
  }
}

function applySecciones(visible: Visibility, rows: Record<string, string>[]): void {
  for (const row of rows) {
    const key = (row.seccion ?? "").toLowerCase().trim() as SectionKey;
    if (key in visible) {
      visible[key] = isShown(row.mostrar);
    }
  }
}

function applyTextos(t: Content, rows: Record<string, string>[], locale: Locale): void {
  for (const row of rows) {
    const clave = row.clave ?? "";
    if (!clave) continue;
    const valor = pick(row, "es", "en", locale);
    if (valor) setDeep(t, clave, valor);
  }
}

function applyServicios(t: Content, rows: Record<string, string>[], locale: Locale): void {
  const items: ServiceItem[] = rows
    .filter((row) => isShown(row.mostrar) && (row.titulo ?? "").trim())
    .map((row) => ({
      id: slugify(row.titulo),
      icon: row.icono || "tooth",
      title: pick(row, "titulo", "titulo_en", locale),
      description: pick(row, "descripcion", "descripcion_en", locale),
      price: pick(row, "precio", "precio_en", locale) || (locale === "es" ? "Precio a consultar" : "Ask for pricing"),
    }));

  if (items.length === 0) return;
  t.services.items = items;

  // Mantiene el dropdown del formulario sincronizado con los servicios.
  t.form.serviceOptions =
    locale === "es"
      ? ["Valoración general (gratis)", ...items.map((s) => s.title), "Urgencia dental", "Otro"]
      : ["General evaluation (free)", ...items.map((s) => s.title), "Dental emergency", "Other"];
}

function applyPorque(t: Content, rows: Record<string, string>[], locale: Locale): void {
  const items = rows
    .filter((row) => isShown(row.mostrar) && (row.titulo ?? "").trim())
    .map((row) => ({
      icon: row.icono || "check",
      title: pick(row, "titulo", "titulo_en", locale),
      text: pick(row, "texto", "texto_en", locale),
    }));
  if (items.length > 0) t.why.items = items;
}

function applyTestimonios(t: Content, rows: Record<string, string>[], locale: Locale): void {
  const items: TestimonialItem[] = rows
    .filter((row) => isShown(row.mostrar) && (row.texto ?? "").trim())
    .map((row) => ({
      name: row.nombre || "Paciente",
      date: pick(row, "fecha", "fecha_en", locale),
      stars: Math.min(5, Math.max(1, parseInt(row.estrellas, 10) || 5)),
      text: pick(row, "texto", "texto_en", locale),
    }));
  if (items.length > 0) t.testimonials.items = items;
}

function applyFaq(t: Content, rows: Record<string, string>[], locale: Locale): void {
  const items: FaqItem[] = rows
    .filter((row) => isShown(row.mostrar) && (row.pregunta ?? "").trim())
    .map((row) => ({
      q: pick(row, "pregunta", "pregunta_en", locale),
      a: pick(row, "respuesta", "respuesta_en", locale),
    }));
  if (items.length > 0) t.faq.items = items;
}

// ---------- Punto de entrada ----------

export async function getPageData(locale: Locale): Promise<PageData> {
  // Clon profundo para no mutar los defaults entre requests.
  const t = structuredClone(content[locale]);
  const site = defaultSiteData();
  const visible = { ...DEFAULT_VISIBILITY };

  if (!process.env.GOOGLE_SHEET_ID) {
    return { t, site, visible };
  }

  const [general, secciones, textos, servicios, porque, testimonios, faq] = await Promise.all([
    fetchSheetRows("general"),
    fetchSheetRows("secciones"),
    fetchSheetRows("textos"),
    fetchSheetRows("servicios"),
    fetchSheetRows("porque"),
    fetchSheetRows("testimonios"),
    fetchSheetRows("faq"),
  ]);

  if (general) applyGeneral(site, general);
  if (secciones) applySecciones(visible, secciones);
  if (textos) applyTextos(t, textos, locale);
  if (servicios) applyServicios(t, servicios, locale);
  if (porque) applyPorque(t, porque, locale);
  if (testimonios) applyTestimonios(t, testimonios, locale);
  if (faq) applyFaq(t, faq, locale);

  return { t, site, visible };
}
