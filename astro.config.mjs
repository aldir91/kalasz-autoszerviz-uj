import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: írd át az ügyfél tényleges domainjére
export default defineConfig({
  site: 'https://kalaszauto.hu',
  integrations: [sitemap()],
});
