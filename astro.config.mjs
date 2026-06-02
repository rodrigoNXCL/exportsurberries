// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  // ✅ MODO SERVER (Obligatorio para APIs)
  output: 'static',
  site: 'https://exportsurberries.com',
  adapter: netlify(),
  base: '/',
  vite: {
    server: {
      host: true,
      port: 4321,
      strictPort: true,
      // ✅ CONFIGURACIÓN CORS PARA DESARROLLO LOCAL
      cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
      }
    },
    build: {
      minify: true,
      sourcemap: false,
      assetsInlineLimit: 4096
    }
  }
});