// Set de íconos SVG inline (sin dependencias externas).
// Se usan por clave: <Icon name="sparkle" />

const paths: Record<string, JSX.Element> = {
  tooth: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 3.5c-2.5 0-4 2-4 4.5 0 4 2 6 2.5 9 .3 1.8.5 3.5 1.75 3.5S9 18.5 9.5 16.5c.4-1.6 1.2-2.5 2.5-2.5s2.1.9 2.5 2.5c.5 2 1 4 2.25 4S18.2 18.8 18.5 17c.5-3 2.5-5 2.5-9 0-2.5-1.5-4.5-4-4.5-1.8 0-3 1-5 1s-3.2-1-5-1z"
    />
  ),
  sparkle: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 15l.9 2.6L22.5 18.5l-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9L19 15z"
    />
  ),
  implant: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 3h6M9.5 6h5M10 9h4M10.5 12h3M11 15h2M12 15v6M9.5 19.5L12 21l2.5-1.5"
    />
  ),
  surgery: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v6m0 0l3-3m-3 3L9 6m3 3v3m-7 4.5A2.5 2.5 0 017.5 14H10m9 2.5a2.5 2.5 0 00-2.5-2.5H14m-9 7l4.5-4.5M19 21l-4.5-4.5"
    />
  ),
  veneer: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 8c0-2 1.5-4 4-4h8c2.5 0 4 2 4 4v2c0 2-1.5 3-4 3H8c-2.5 0-4-1-4-3V8zM8 13v5a2 2 0 002 2h4a2 2 0 002-2v-5"
    />
  ),
  tech: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
  heart: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  ),
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  ),
  doctor: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7zM12 14v3m-1.5 1.5h3"
    />
  ),
  clock: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  pin: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  ),
  dollar: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
  chat: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  ),
  phone: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  ),
  check: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />,
  brush: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 4l6 2 9 9-2.5 2.5L7 8.5 4 4zM14 17.5c0 1.933-1.567 3.5-3.5 3.5S7 19.433 7 17.5c0-1.5 1-2 1.75-3.25L11 17l3 .5z"
    />
  ),
  braces: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12c2.5-4.5 6-7 9-7s6.5 2.5 9 7M3 12c2.5 4.5 6 7 9 7s6.5-2.5 9-7M5.5 9.5v5M9 7.2v9.6M15 7.2v9.6M18.5 9.5v5"
    />
  ),
  root: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 3.5c-2.5 0-4 2-4 4.5 0 3.5 1.8 5.5 2.3 8.3.3 1.7.5 4.2 1.9 4.2 1.3 0 1.4-2.3 1.8-4.2.4-1.7 1.1-2.8 2-2.8s1.6 1.1 2 2.8c.4 1.9.5 4.2 1.8 4.2 1.4 0 1.6-2.5 1.9-4.2.5-2.8 2.3-4.8 2.3-8.3 0-2.5-1.5-4.5-4-4.5-1.6 0-2.6.8-4 .8s-2.4-.8-4-.8zM12 7v6.5"
    />
  ),
  card: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  ),
};

export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.tooth}
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function StarIcon({ className = "h-5 w-5", filled = true }: { className?: string; filled?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}
