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

Colores tomados del logo oficial (definidos en `tailwind.config.ts`): azul marino `#212657` (`navy-900`) y turquesa `#5bc6d9` (`primary-400`), con blanco de fondo. Títulos en Poppins (similar al logotipo), cuerpo en Inter. El logo está recreado en SVG en `src/components/Logo.tsx` — si prefieres el archivo original, guárdalo como `public/images/logo.png` y reemplaza el componente.

## ✅ Checklist de placeholders a reemplazar

### 📷 Fotos (en `public/images/`)

Reemplazar cada `.svg` placeholder por la foto real en `.jpg`/`.webp` y actualizar la ruta en el componente indicado:

| Archivo actual | Foto real necesaria | Componente a actualizar |
|---|---|---|
| `hero.svg` | Foto del equipo en recepción o paciente sonriendo (≈1200×1000) | `src/components/Hero.tsx` |
| `dentist.svg` | Retrato profesional del/la dentista (vertical, ≈960×1120) | `src/components/Dentist.tsx` |
| `before-1.svg` / `after-1.svg` | Caso real de blanqueamiento (mismas dimensiones entre sí) | `src/components/BeforeAfter.tsx` |
| `before-2.svg` / `after-2.svg` | Caso real de carillas | `src/components/BeforeAfter.tsx` |
| `before-3.svg` / `after-3.svg` | Caso real de implante | `src/components/BeforeAfter.tsx` |
| `og.png` | Imagen para compartir en redes (exactamente 1200×630, con logo) | `src/app/layout.tsx` (si cambia el nombre) |

> ⚠️ En los pares antes/después, ambas fotos deben tener el **mismo encuadre y tamaño** para que el slider comparativo se vea bien.

### 📝 Datos a confirmar

- [ ] **Teléfono:** el sitio usa (686) 478 4662, pero el flyer de la membresía dice (686) 429 2463 — confirmar cuál es el correcto (se corrige en la pestaña `general` del sheet)
- [ ] `src/lib/site.ts` → `url` (dominio real), `geo.lat`/`geo.lng` (coordenadas exactas del pin), `social.facebook` (URL exacta)
- [ ] **Dentista:** nombre real, cédula y bio (hoy "Dra. Valeria Cárdenas Ruiz" es INVENTADO — editable en el sheet, pestaña `textos`)
- [ ] **Barra de confianza:** años de experiencia, # de pacientes, rating reales (pestaña `textos`, claves `trust.*`)
- [ ] **Testimonios:** copiar 3–6 reseñas REALES de Google Business (pestaña `testimonios`)
- [ ] **Membresía:** confirmar precio y condiciones vigentes (pestaña `textos`, claves `membership.*`)
- [ ] **Ubicación:** confirmar referencias (Plaza Aria) y estacionamiento

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
