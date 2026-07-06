// ============================================================
// LECTURA DE GOOGLE SHEETS (sin API key, sin backend)
//
// El sitio lee el contenido desde un Google Sheet compartido como
// "Cualquier persona con el enlace: Lector". Cada pestaña del sheet
// se descarga como CSV usando el endpoint público `gviz`.
//
// - Si GOOGLE_SHEET_ID no está configurado, el sitio usa los textos
//   por defecto de src/lib/content.ts (funciona igual que siempre).
// - Los cambios en el sheet se reflejan solos en máx. 5 minutos
//   (revalidate: 300) sin necesidad de re-deploy.
// ============================================================

const SHEET_ID = process.env.GOOGLE_SHEET_ID;

// Cada cuántos segundos se refresca el contenido desde el sheet.
export const CMS_REVALIDATE_SECONDS = 300;

/** Parser de CSV que soporta comillas, comas y saltos de línea dentro de celdas. */
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          cell += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cell += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      cell = "";
      rows.push(row);
      row = [];
    } else {
      cell += char;
    }
  }
  if (cell !== "" || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

/**
 * Descarga una pestaña del sheet y la regresa como lista de objetos
 * { encabezado: valor }. Regresa null si el sheet no está configurado,
 * la pestaña no existe o hay cualquier error (el sitio usa sus defaults).
 */
export async function fetchSheetRows(sheetName: string): Promise<Record<string, string>[] | null> {
  if (!SHEET_ID) return null;

  try {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
    const res = await fetch(url, { next: { revalidate: CMS_REVALIDATE_SECONDS } });
    if (!res.ok) return null;

    const text = await res.text();
    // Si el sheet no es público o la pestaña no existe, Google regresa HTML.
    if (text.trim().startsWith("<")) return null;

    const rows = parseCsv(text).filter((r) => r.some((c) => c.trim() !== ""));
    if (rows.length < 2) return null;

    const headers = rows[0].map((h) => h.trim().toLowerCase());
    return rows.slice(1).map((r) =>
      Object.fromEntries(headers.map((h, i) => [h, (r[i] ?? "").trim()]))
    );
  } catch {
    return null;
  }
}

/** Interpreta la columna "mostrar": vacío o SI = visible; NO/FALSE/0/OFF = oculto. */
export function isShown(value: string | undefined): boolean {
  if (!value) return true;
  return !["no", "false", "0", "off", "ocultar"].includes(value.trim().toLowerCase());
}
