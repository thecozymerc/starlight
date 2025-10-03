// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'CozyMerc',
      // Empty sidebar removes the default groups. (If this errors, just delete the `sidebar` line.)
      sidebar: [],
      // Load our CSS to control logo size & hide the sidebar
      customCss: ['./src/styles/brand.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/thecozymerc/starlight' },
      ],
    }),
  ],
});
/* ---------- Logo: replace title text with your logo and constrain size ---------- */

/* This targets the brand link in the header and swaps in your logo image */
header .site-title a,
.sl-nav-brand a {
  display: inline-block;
  width: 160px;          /* <— change width as you like */
  height: 28px;          /* <— sets the logo HEIGHT (constrained) */
  background: url('/logo4.png') no-repeat left center;
  background-size: contain;
  text-indent: -9999px;  /* hide the text “CozyMerc” but keep it accessible */
  overflow: hidden;
  line-height: 28px;     /* keep header layout stable */
}

/* Optional: if your template also renders an <img> brand, force its height */
header img[alt*="CozyMerc"] {
  height: 28px;
  width: auto;
}

/* ---------- Sidebar: hide everywhere ---------- */
:root { --sl-sidebar-width: 0px; }

.sl-sidebar,
.sl-mobile-nav {
  display: none !important;
}

/* Make main content span the full width now that sidebar is gone */
.sl-container {
  grid-template-columns: 1fr !important;
}
