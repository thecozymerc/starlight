// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'CozyMerc',
      logo: {
        src: '/logo4.png',          // make sure public/logo4.png exists
        alt: 'CozyMerc — Home',
      },
      customCss: ['./src/styles/brand.css'], // <-- add our CSS below
      // Remove the starter sidebar groups entirely
      // (we're also hiding the sidebar via CSS)
      sidebar: [],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/thecozymerc/starlight' },
      ],
    }),
  ],
});
