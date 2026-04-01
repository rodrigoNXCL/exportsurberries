import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Configuración i18n base
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  output: 'static',
  base: '/',
});