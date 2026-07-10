import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://www.contablesecg.com',
  output: 'static',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});