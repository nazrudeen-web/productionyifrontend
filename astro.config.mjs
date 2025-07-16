import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  output: "server",
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
  site: "https://youtubersincome.com",
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      // 🔥 Prevent Cloudflare from bundling the browser-only version
      external: ['react-dom/server.browser'],
    },
    resolve: {
      alias: {
        // 🔁 Redirect any accidental import of browser build to server version
        'react-dom/server.browser': 'react-dom/server',
      },
    },
  },
});
