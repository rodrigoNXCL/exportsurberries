# CURRENT

Estado actual del proyecto ExportSurberries.

Fuente de verdad del estado del proyecto. Mantener sincronizado con cada cambio estructural.

---

## Fecha

2026-10-28

---

## Contexto

El cliente no está cumpliendo con el pago del servicio. Se solicitó dejar visible en el sitio un aviso de mantención administrativa, sin eliminar ni bloquear contenido, funcionalidades, portal de clientes ni APIs.

---

## Cambio realizado hoy

- Aviso visible junto al logo del sitio en `src/components/Header.astro`.
- Texto en español: `MANTENCIÓN ADMINISTRATIVA`.
- Texto en inglés (rutas `/en/*`): `ADMINISTRATIVE MAINTENANCE`.
- Implementado como badge/píldora junto al logo, bilingüe y responsive.
- No se redirige ni se bloquea ninguna ruta.
- No se modifican páginas, contenido, portal, APIs, analytics ni base de datos.
- El badge aparece en todas las páginas que usan `src/layouts/Layout.astro`.
- No aparece en `/portal/*` (layout propio) ni en `/mantenimiento` (página standalone).

---

## Respaldo

- Archivo original (previo al cambio) respaldado en:
  `docs/backups/Header.astro.2026-10-28.bak`
- Fuente del respaldo: `git show HEAD:src/components/Header.astro`.

---

## Archivos modificados

- `src/components/Header.astro`

## Archivos creados

- `docs/backups/Header.astro.2026-10-28.bak`
- `docs/CURRENT.md`

---

## Pendiente

- Ejecutar `npm run build` y desplegar en Netlify para reflejar el cambio en producción.
- No requiere migraciones ni SQL.
- `docs/DECISIONS.md` no existe todavía; se recomienda crearlo y registrar allí las decisiones de arquitectura cuando corresponda.
