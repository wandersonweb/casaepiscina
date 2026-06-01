import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://casaepiscina.com.br",
  trailingSlash: "always",
  integrations: [mdx(), tailwind(), sitemap()],
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
