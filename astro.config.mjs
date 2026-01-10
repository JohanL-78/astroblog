// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  devToolbar: {
    enabled: false
  },
  integrations: [
    react(),
    sanity({
      projectId: 'di83dpfu',
      dataset: 'production',
      useCdn: false,
      // Studio disabled in production - use manage.sanity.io instead
      // studioBasePath: '/studio',
    }),
  ],
});
