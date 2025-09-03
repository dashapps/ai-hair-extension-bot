import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";
import remarkTypography from "remark-typography";

// https://astro.build/config
export default defineConfig({
  site: "https://foxi.netlify.app/",
  markdown: {
    remarkPlugins: [remarkTypography],
  },
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
