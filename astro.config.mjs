// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'CozyMerc',
      sidebar: [],                           // remove starter left-nav groups
      customCss: ['./src/styles/brand.css'], // load our CSS (logo + hide sidebars)
    }),
  ],
});
