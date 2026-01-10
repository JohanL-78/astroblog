// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static', // 🌱 Static Site Generation for better performance and eco-friendliness
  adapter: cloudflare(), // Keep adapter for Cloudflare Pages deployment
  devToolbar: {
    enabled: false
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sanity({
      projectId: 'di83dpfu',
      dataset: 'production',
      useCdn: true, // ✅ Use CDN for static builds (faster + more eco-friendly)
      // Studio disabled in production - use manage.sanity.io instead
      // studioBasePath: '/studio',
    }),
  ],
});
