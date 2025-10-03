// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'CozyMerc',
      customCss: ['./src/styles/brand.css'], // load our logo CSS
      sidebar: [], // optional: removes starter sidebar sections
    }),
  ],
});
