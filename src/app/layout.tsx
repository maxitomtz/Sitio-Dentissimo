import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#212657",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Dentista en Mexicali | Dentissimo Clínica Dental",
    template: "%s | Dentissimo Clínica Dental",
  },
  description:
    "Clínica dental en Mexicali, B.C. Blanqueamiento, implantes dentales, cirugía oral, carillas y coronas. Primera valoración gratis. Agenda por WhatsApp.",
  keywords: [
    "dentista en Mexicali",
    "clínica dental Mexicali",
    "blanqueamiento dental Mexicali",
    "implantes dentales Mexicali",
    "cirugía oral Mexicali",
    "carillas dentales Mexicali",
    "coronas dentales Mexicali",
    "dentist Mexicali",
    "dental clinic near Calexico",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: "en_US",
    siteName: SITE.name,
    title: "Dentista en Mexicali | Dentissimo Clínica Dental",
    description:
      "Tu sonrisa sana empieza aquí. Blanqueamiento, implantes, cirugía oral, carillas y coronas en Mexicali. Primera valoración gratis.",
    images: [
      {
        // REEMPLAZAR: public/images/og.png por una foto real de la clínica (1200×630)
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Dentissimo Clínica Dental en Mexicali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        {children}

        {/*
          ============================================================
          GOOGLE ANALYTICS 4 — descomentar y [PEGAR ID AQUÍ] (G-XXXXXXXXXX)
          ============================================================
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `}
          </Script>

          Nota: agregar arriba →  import Script from "next/script";
        */}

        {/*
          ============================================================
          META PIXEL (Facebook/Instagram Ads) — descomentar y [PEGAR ID AQUÍ]
          ============================================================
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'PEGAR_PIXEL_ID_AQUI');
              fbq('track', 'PageView');
            `}
          </Script>
        */}
      </body>
    </html>
  );
}
