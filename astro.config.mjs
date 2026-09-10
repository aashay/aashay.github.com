import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { existsSync } from 'node:fs';

// /Resume (capital R) is a legacy URL. On a case-sensitive filesystem (Linux,
// including the GitHub Pages build runner) it needs an explicit redirect to
// /resume/. On a case-insensitive filesystem (macOS default) the path already
// resolves to public/resume/, and generating Resume/index.html would overwrite
// the real page, so the redirect is skipped there.
const caseSensitiveFs = !existsSync(new URL('./PUBLIC', import.meta.url));

export default defineConfig({
  site: 'https://aashay.com',
  base: '/',
  output: 'static',
  redirects: caseSensitiveFs ? { '/Resume': '/resume/' } : {},
  build: {
    assets: '_assets',
  },
  integrations: [
    sitemap({ customPages: ['https://aashay.com/resume/'] }),
  ],
});
