// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  devToolbar: {
    enabled: false
  },
  integrations: [
    react(),
    sanity({
      projectId: 'di83dpfu',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
  ],
});
