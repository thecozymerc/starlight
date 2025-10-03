// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'CozyMerc'
      // (No sidebar, no customCss yet — keep it minimal so build succeeds)
    }),
  ],
});
