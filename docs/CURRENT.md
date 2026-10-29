# CURRENT

Estado actual del proyecto ExportSurberries.

Fuente de verdad del estado del proyecto. Mantener sincronizado con cada cambio estructural.

---

## Fecha

2026-10-28

---

## Contexto

El cliente no está cumpliendo con el pago del servicio. Se solicitó que el sitio muestre únicamente el logo y el mensaje `SITIO EN MANTENCIÓN ADMINISTRATIVA`, sin navegación, sin contenido adicional y sin etiquetas junto al logo.

---

## Estado actual

- Modo mantención administrativa activo.
- Todas las rutas del sitio muestran únicamente la página `/mantenimiento`.
- La página muestra solo:
  - Logo de Exportadora Sur Berries.
  - Mensaje `SITIO EN MANTENCIÓN ADMINISTRATIVA`.
- La página de mantención incluye `noindex, nofollow`.
- Se revirtió el badge junto al logo en `src/components/Header.astro` (queda sin aviso).
- No se elimina contenido del proyecto; solo se bloquea su visualización pública mediante redirects.

---

## Archivos modificados

- `netlify.toml`: todas las rutas redirigen a `/mantenimiento`, con excepciones para logo, favicon, robots, sitemap y assets.
- `src/pages/mantenimiento.astro`: página mínima con solo logo y mensaje.
- `src/components/Header.astro`: revertido a su versión original, sin badge.

## Archivos creados

- `docs/backups/Header.astro.2026-10-28.bak`
- `docs/backups/netlify.toml.2026-10-28.bak`
- `docs/backups/mantenimiento.astro.2026-10-28.bak`
- `docs/CURRENT.md`

---

## Respaldo

Respaldos de los archivos originales previos a los cambios en:

- `docs/backups/Header.astro.2026-10-28.bak`
- `docs/backups/netlify.toml.2026-10-28.bak`
- `docs/backups/mantenimiento.astro.2026-10-28.bak`

---

## Pendiente / para reactivar

- Para reactivar el sitio: restaurar `netlify.toml` desde `docs/backups/netlify.toml.2026-10-28.bak` y volver a desplegar.
- No requiere migraciones ni SQL.
- `docs/DECISIONS.md` no existe todavía; se recomienda crearlo y registrar allí las decisiones de arquitectura cuando corresponda.
