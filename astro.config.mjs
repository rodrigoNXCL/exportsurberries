// @ts-check
import { defineConfig } from 'astro/config';

// ✅ Adapter para Netlify (opcional en static, pero recomendado para features extra)
import netlify from '@astrojs/netlify';

export default defineConfig({
  // ✅ MODO ESTÁTICO - Genera HTML/CSS/JS puro (más rápido y compatible)
  output: 'static',
  
  // ✅ URL del sitio para canonical URLs, sitemap, SEO
  site: 'https://exportsurberries.com',
  
  // ✅ Adapter de Netlify para redirects, headers, etc.
  adapter: netlify(),
  
  // ✅ Base path (dejar vacío para dominio raíz)
  base: '/',
  
  // ✅ Configuración de integraciones
  integrations: [],
  
  // ✅ Configuración de Vite
  vite: {
    server: {
      host: true,
      port: 4321,
      strictPort: true
    },
    build: {
      // Optimizaciones de producción
      minify: true,
      sourcemap: false,
      // Assets configuraciones
      assetsInlineLimit: 4096 // 4KB
    },
    // Optimizar dependencias
    optimizeDeps: {
      include: ['@astrojs/netlify']
    }
  },
  
  // ✅ Configuración de Markdown (si usas .md files en el futuro)
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },
  
  // ✅ Configuración de imágenes Astro
  image: {
    endpoint: '/api/image' // Endpoint para optimización de imágenes
  },
  
  // ✅ Configuración de i18n (para futuro soporte multi-idioma más avanzado)
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false // /en/ para inglés, / para español
    }
  }
});