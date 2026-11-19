// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: cambiar `site` por el dominio definitivo (p. ej. https://sutara.house)
// y quitar `base` si la web no cuelga de /sutara-web/ en GitHub Pages.
const site = process.env.SITE_URL ?? 'https://sutara.house';
// En GitHub Pages sin dominio propio la web cuelga de /<repo>/; el workflow pasa BASE_PATH.
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
