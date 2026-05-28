import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aashay.com',
  base: '/',
  output: 'static',
  build: {
    assets: '_assets',
  },
  integrations: [
    sitemap({ customPages: ['https://aashay.com/resume/'] }),
  ],
});
