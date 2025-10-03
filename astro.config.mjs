// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'CozyMerc',
      logo: {
        src: '/logo4.png',       // must exist at public/logo4.png
        alt: 'CozyMerc',
        replacesTitle: true,     // <-- swaps out the text
      },
      sidebar: [],
    }),
  ],
});
