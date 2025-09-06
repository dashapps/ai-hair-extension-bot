import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// Make remark-typography optional to avoid build issues
// If it fails to load, we proceed without it.
let remarkPlugins = [];
try {
  const { default: remarkTypography } = await import("remark-typography");
  remarkPlugins.push(remarkTypography);
} catch (e) {
  console.warn("remark-typography not loaded:", e?.message || e);
}

// https://astro.build/config
export default defineConfig({
  site: "https://ai-hair-extension-selling-platform.netlify.app/",
  markdown: {
    remarkPlugins,
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
