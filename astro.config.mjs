import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwind from '@astrojs/tailwind';

import react from "@astrojs/react";

export default defineConfig({
  output: "server",
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
  site: 'https://youtubersincome.com',
  integrations: [tailwind(), react()],
});