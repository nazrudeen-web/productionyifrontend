import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "server",
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
  site: "https://youtubersincome.com",
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      external: ['react-dom/server.browser'],
    },
    resolve: {
      alias: {
        'react-dom/server.browser': 'react-dom/server',
      },
    },
  },
});
