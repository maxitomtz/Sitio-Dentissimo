# Dentissimo Clínica Dental — Sitio web

Sitio web de [Dentissimo Clínica Dental](https://dentissimo.mx) (Mexicali, B.C.), construido con **Next.js 14 (App Router) + Tailwind CSS**, listo para deploy en **Vercel**. Sin base de datos: los formularios abren WhatsApp con el mensaje ya armado, y todo el contenido se puede editar desde un **Google Sheet** (ver abajo).

## Estructura

```
src/
├── app/
│   ├── page.tsx                  # Landing en español (/)
│   ├── en/page.tsx               # Landing en inglés (/en) — dental tourism
│   ├── gracias/page.tsx          # Página de gracias (conversiones ES)
│   ├── en/thank-you/page.tsx     # Página de gracias (conversiones EN)
│   ├── aviso-de-privacidad/      # Aviso de privacidad
│   ├── layout.tsx                # Metadata global, fuentes, GA4/Meta Pixel
│   ├── sitemap.ts / robots.ts    # SEO
│   └── icon.svg                  # Favicon (logo Dentissimo)
├── components/                   # Secciones de la landing (Membership.tsx = membresía)
└── lib/
    ├── site.ts                   # ⭐ Datos del negocio por defecto
    ├── content.ts                # ⭐ Copy por defecto en español e inglés
    ├── sheets.ts                 # Lectura del Google Sheet (CSV público)
    └── cms.ts                    # Fusiona el sheet con los defaults
plantilla-cms/                    # CSVs para crear el Google Sheet (importar 1 por pestaña)
```

**Regla de oro:** el contenido se edita en el **Google Sheet** (sin tocar código ni re-deployar). Si el sheet no está configurado, el sitio usa los defaults de `src/lib/site.ts` y `src/lib/content.ts`.

## Correr localmente

```bash
npm install
npm run dev        # → http://localhost:3000
```

Build de producción:

```bash
npm run build
npm start
```

## 🚀 Deploy en Vercel (paso a paso)

1. Crea un repositorio en GitHub y sube el proyecto:
   ```bash
   git init
   git add .
   git commit -m "Sitio Dentissimo"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/dentissimo-web.git
   git push -u origin main
   ```
2. Entra a [vercel.com](https://vercel.com) (inicia sesión con GitHub) → **Add New… → Project** → importa el repo. Vercel detecta Next.js solo; no cambies nada.
3. *(Opcional, para el CMS)* En la pantalla de importación o en **Settings → Environment Variables**, agrega `GOOGLE_SHEET_ID` con el ID de tu sheet.
4. Clic en **Deploy**. En ~1 minuto tienes una URL tipo `dentissimo-web.vercel.app`.
5. Cada `git push` a `main` publica automáticamente.
6. **Dominio propio:** Vercel → Settings → Domains → agrega `dentissimo.mx` y sigue las instrucciones de DNS. Después actualiza `SITE.url` en `src/lib/site.ts`.

Alternativa sin GitHub: `npm i -g vercel && vercel --prod` desde esta carpeta.

## 📝 CMS con Google Sheets (editar el sitio sin tocar código)

El sitio lee su contenido de un Google Sheet cada **5 minutos**. Desde ahí se puede editar cualquier texto, dato de contacto, y **prender/apagar o agregar elementos** (servicios, testimonios, preguntas, secciones completas).

### Configuración inicial (una sola vez)

1. Crea un Google Sheet nuevo en [sheets.new](https://sheets.new).
2. Crea 7 pestañas con estos nombres exactos (minúsculas): `general`, `secciones`, `textos`, `servicios`, `porque`, `testimonios`, `faq`.
3. Importa el CSV correspondiente de la carpeta `plantilla-cms/` en cada pestaña: **Archivo → Importar → Subir → "Reemplazar hoja actual"**. Quedan prellenadas con el contenido actual del sitio.
4. Compártelo: **Compartir → Cualquier persona con el enlace → Lector**.
5. Copia el ID del sheet (la parte larga de la URL: `docs.google.com/spreadsheets/d/`**`ESTE_ID`**`/edit`).
6. En Vercel → Settings → Environment Variables → agrega `GOOGLE_SHEET_ID` = ese ID → **Redeploy** (solo esta primera vez).

Para probarlo localmente: copia `.env.example` a `.env.local` y pon ahí el ID.

### Qué controla cada pestaña

| Pestaña | Qué hace | Columnas |
|---|---|---|
| `general` | Teléfono, WhatsApp, dirección, redes, horarios, rating | `campo`, `valor`, `valor_en` |
| `secciones` | Prende/apaga secciones completas con SI/NO | `seccion`, `mostrar` |
| `textos` | Cualquier texto de la página (títulos, botones, bio…) | `clave`, `es`, `en` |
| `servicios` | Lista de servicios: agrega/quita filas libremente | `mostrar`, `icono`, `titulo`, `descripcion`, `precio` + `_en` |
| `porque` | Diferenciadores de "¿Por qué elegirnos?" | `mostrar`, `icono`, `titulo`, `texto` + `_en` |
| `testimonios` | Reseñas: agrega/quita filas libremente | `mostrar`, `nombre`, `fecha`, `estrellas`, `texto` + `_en` |
| `faq` | Preguntas frecuentes: agrega/quita filas libremente | `mostrar`, `pregunta`, `respuesta` + `_en` |

Notas:
- **Agregar un elemento** = agregar una fila. **Ocultarlo** = poner `NO` en la columna `mostrar` (sin borrar la fila).
- En `secciones`, los nombres válidos son: `urgencias`, `barra_confianza`, `servicios`, `por_que_elegirnos`, `dentista`, `membresia`, `antes_despues`, `testimonios`, `promocion`, `formulario`, `faq`, `ubicacion`, `cta_final`.
- En `textos`, la columna `clave` es la ruta del texto (ej. `hero.headline`, `membership.price`, `trust.0.value`). Las claves más útiles ya vienen en la plantilla; cualquier campo de `src/lib/content.ts` funciona.
- Íconos disponibles para `servicios` y `porque`: `tooth`, `sparkle`, `implant`, `surgery`, `veneer`, `tech`, `heart`, `shield`, `doctor`, `clock`, `pin`, `dollar`, `chat`, `phone`, `check`, `card`.
- Los cambios tardan **máx. 5 minutos** en verse (no hace falta re-deployar).
- Si una pestaña se borra o queda vacía, esa parte del sitio usa sus textos por defecto: el sheet nunca puede "tirar" el sitio.

## 🎨 Branding

Colores tomados del logo oficial (definidos en `tailwind.config.ts`): azul marino `#212657` (`navy-900`) y turquesa `#5bc6d9` (`primary-400`), con blanco de fondo. Títulos en Poppins (similar al logotipo), cuerpo en Inter. El sitio usa el **isotipo original** con fondo transparente: `public/images/logo-mark.png` (fondos claros) y `logo-mark-light.png` (fondos oscuros), renderizados desde `src/components/Logo.tsx`. El favicon (`src/app/icon.jpg`) es el isotipo original sobre azul marino.

## ✅ Checklist

### 📷 Fotos (en `public/images/`) — ya con imágenes reales

| Archivo | Contenido | Se usa en |
|---|---|---|
| `equipo.jpg` | Foto real del equipo | Hero + imagen de Open Graph (redes) |
| `recepcion.jpg` | Recepción de la clínica | Sección "Conoce a tu equipo" |
| `before/after-1..3.jpg` | 3 casos reales de ortodoncia | Sliders antes/después |
| `publi-ortodoncia.jpg` | Flyer promo ortodoncia -20% | Sección de promociones (**reemplazar cada mes** con la promo vigente, mismo nombre de archivo o actualizar la clave `pricing.promoImage` en el sheet) |
| `logo-mark.png` / `logo-mark-light.png` | Isotipo original con fondo transparente | Header, footer, membresía y favicon (`src/app/icon.jpg`) |
| `logo-original.jpg` / `logo-isotipo.jpg` | Archivos fuente del logo (respaldo) | — |

Pendientes opcionales: retratos individuales de los doctores (para ampliar "Conoce a tu equipo").

### 📝 Datos a confirmar

- [ ] **Teléfono:** el sitio usa (686) 478 4662, pero los flyers dicen (686) 429 2463 — confirmar cuál (se corrige en la pestaña `general` del sheet)
- [ ] `src/lib/site.ts` → `url` (dominio real), `geo.lat`/`geo.lng` (coordenadas exactas del pin), `social.facebook` (URL exacta)
- [ ] **Doctores:** nombres y cédulas reales (pestaña `textos`, claves `dentist.*`)
- [ ] **Barra de confianza:** años de experiencia, # de pacientes, rating reales (pestaña `textos`, claves `trust.*`)
- [ ] **Testimonios:** copiar 3–6 reseñas REALES de Google Business (pestaña `testimonios`)
- [ ] **Membresía:** confirmar precio y condiciones vigentes (pestaña `textos`, claves `membership.*`)
- [ ] **Precios:** los servicios usan los precios del flyer (jul 2026); actualizarlos desde la pestaña `servicios` del sheet cuando cambien

### 📊 Analytics (`src/app/layout.tsx`)

- [ ] **Google Analytics 4:** descomentar el bloque y pegar el ID `G-XXXXXXXXXX`
- [ ] **Meta Pixel:** descomentar el bloque y pegar el Pixel ID
- [ ] Conversiones: registrar como conversión las visitas a `/gracias` y `/en/thank-you`

### ⚖️ Legal

- [ ] Revisar el aviso de privacidad (`src/app/aviso-de-privacidad/page.tsx`) con un asesor legal

## Funcionalidades incluidas

- Landing completa ES (`/`) + versión EN (`/en`) orientada a dental tourism (Calexico)
- **CMS con Google Sheets:** textos, datos, listas y visibilidad de secciones editables sin código
- **Sección de Membresía Dentissimo** (2 limpiezas + 10% desc. por $1,000/año) con tarjeta visual
- Botón flotante de WhatsApp con pulso, click-to-call, banner de urgencias
- Agendador sin backend: el formulario arma el mensaje y abre WhatsApp, luego redirige a `/gracias`
- Slider comparativo antes/después (táctil, mouse y teclado)
- SEO local: metadata optimizada, JSON-LD tipo `Dentist`, Open Graph, `sitemap.xml`, `robots.txt`, hreflang ES/EN
- Mobile-first, botones táctiles ≥48px, `next/image`, fuentes Inter + Poppins con `next/font`
#   D e n t i s s i m o  
 