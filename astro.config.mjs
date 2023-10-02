import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://dextro.netlify.app",
  integrations: [mdx(), sitemap()],
  image: {
    service: sharpImageService(),
    domains: ["astro.build"],
  },
});
