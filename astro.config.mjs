import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://casaepiscina.com.br",
  trailingSlash: "always",
  integrations: [mdx(), tailwind(), sitemap()],

  build: {
    inlineStylesheets: "always",
  },

  vite: {
    build: {
      cssCodeSplit: false,
    },
  },

  adapter: cloudflare()
});