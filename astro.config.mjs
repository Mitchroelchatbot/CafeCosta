// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cafecosta.nl',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // Bedanktpagina's horen niet in Google
      filter: (page) => !page.includes('/bedankt') && !page.includes('/gesolliciteerd'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
