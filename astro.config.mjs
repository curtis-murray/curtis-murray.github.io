import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
 site: 'http://www.curtismurray.tech',
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
  outDir: './docs',
});
