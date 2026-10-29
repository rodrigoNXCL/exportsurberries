# CURRENT

Estado actual del proyecto ExportSurberries.

Fuente de verdad del estado del proyecto. Mantener sincronizado con cada cambio estructural.

---

## Fecha

2026-10-29

---

## Contexto

El cliente realizó el abono pendiente. Se reactiva el sitio y se deja operativo con normalidad.

---

## Estado actual

- Sitio operativo: todas las rutas funcionan normalmente.
- Modo mantención administrativa desactivado.
- `netlify.toml` restaurado a su configuración original (admin, APIs, portal, fichas e inglés sin bloqueo).
- `src/pages/mantenimiento.astro` se mantiene como página standalone, pero ya no se muestra al público.
- `src/components/Header.astro` se mantiene sin badge de mantención.

---

## Cambios realizados

- `netlify.toml`: restaurado desde `docs/backups/netlify.toml.2026-10-28.bak`.
- `docs/CURRENT.md`: actualizado con el estado operativo.

---

## Respaldos

- Configuración original operativa: `docs/backups/netlify.toml.2026-10-28.bak`
- Configuración del modo mantención: `docs/backups/netlify.toml.mantenimiento.2026-10-29.bak`
- Página de mantención original: `docs/backups/mantenimiento.astro.2026-10-28.bak`
- Header original: `docs/backups/Header.astro.2026-10-28.bak`

---

## Para volver a activar el modo mantención

1. Restaurar `netlify.toml` desde `docs/backups/netlify.toml.mantenimiento.2026-10-29.bak`.
2. Hacer commit y push a `main`.
3. Netlify reconstruye y publica automáticamente.

---

## Pendiente

- No requiere migraciones ni SQL.
- `docs/DECISIONS.md` no existe todavía; se recomienda crearlo y registrar allí las decisiones de arquitectura cuando corresponda.
