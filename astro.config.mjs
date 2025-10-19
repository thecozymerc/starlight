// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'CozyMerc',
      sidebar: [],                           // keep sidebar empty
      customCss: ['./src/styles/brand.css'], // your branding CSS
      components: {
        // use our sitewide legal banner everywhere
        Banner: './src/components/SitewideBanner.astro'
      }
    })
  ]
});
