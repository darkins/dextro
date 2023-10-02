import { defineConfig } from "astro/config";
// import NetlifyCMS from "astro-netlify-cms";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://dextro.netlify.app",
  integrations: [mdx(), sitemap()],
});
