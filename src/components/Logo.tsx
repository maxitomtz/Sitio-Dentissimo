/* eslint-disable @next/next/no-img-element */
// Logo de Dentissimo: isotipo ORIGINAL del cliente (PNG con fondo
// transparente, generado a partir de imagenes/dentissimo logo.jpg).
// - /images/logo-mark.png        → navy + turquesa, para fondos claros
// - /images/logo-mark-light.png  → blanco + turquesa, para fondos oscuros
// Los archivos fuente están en public/images/logo-original.jpg y logo-isotipo.jpg.

export function LogoMark({
  className = "h-10 w-10",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <img
      src={light ? "/images/logo-mark-light.png" : "/images/logo-mark.png"}
      alt=""
      aria-hidden="true"
      className={`${className} object-contain`}
      draggable={false}
    />
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
