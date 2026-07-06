// Logo de Dentissimo recreado en SVG: contorno de diente con raíces
// cruzadas, trazo azul marino con sombra turquesa desfasada.
// Si prefieres usar el archivo original del logo, reemplaza este
// componente por: <Image src="/images/logo.png" ... />

const NAVY = "#212657";
const TURQUOISE = "#5bc6d9";

export function LogoMark({
  className = "h-10 w-10",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const front = light ? "#ffffff" : NAVY;
  const d =
    "M62 92 C30 70 10 52 10 34 C10 18 22 8 36 8 C44 8 48 12 50 15 C52 12 56 8 64 8 C78 8 90 18 90 34 C90 52 70 70 38 92";

  return (
    <svg viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d={d} transform="translate(7 5)" stroke={TURQUOISE} strokeWidth="7" strokeLinecap="round" />
      <path d={d} stroke={front} strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-10 w-10" light={light} />
      <span
        className={`font-heading text-xl font-semibold leading-none tracking-tight ${light ? "text-white" : "text-navy-900"}`}
      >
        Dentissimo
        <span className={`block pt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] ${light ? "text-primary-300" : "text-primary-500"}`}>
          Clínica Dental
        </span>
      </span>
    </span>
  );
}
