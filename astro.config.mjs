// @ts-check
import { defineConfig } from 'astro/config';

// ✅ Adapter para Netlify
import netlify from '@astrojs/netlify';

export default defineConfig({
  // ✅ MODO ESTÁTICO - HTML/CSS/JS puro (más rápido y compatible)
  output: 'static',
  
  // ✅ URL del sitio para SEO y canonical URLs
  site: 'https://exportsurberries.com',
  
  // ✅ Adapter de Netlify para redirects y headers
  adapter: netlify(),
  
  // ✅ Base path vacío para dominio raíz
  base: '/',
  
  // ✅ Configuración de Vite para producción
  vite: {
    server: {
      host: true,
      port: 4321,
      strictPort: true
    },
    build: {
      minify: true,
      sourcemap: false,
      assetsInlineLimit: 4096
    }
  }
});