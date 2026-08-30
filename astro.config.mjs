import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️ IMPORTANTE: reemplaza "site" por el dominio final una vez lo tengas
// (ej. https://condorjoyeria.pe). Es obligatorio para que el sitemap
// y las URLs canónicas se generen correctamente.
export default defineConfig({
  site: 'https://condorjoyeria.pe',
  integrations: [sitemap()],
  compressHTML: true,
});
