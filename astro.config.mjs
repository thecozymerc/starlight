// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'CozyMerc',
      sidebar: [],                         // no starter sidebar
      customCss: ['./src/styles/brand.css'] // <-- load our CSS
    }),
  ],
});
