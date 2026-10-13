// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // TODO: set to the real domain once known (used for canonical URLs and share images)
  site: "https://adapta.example",
  vite: {
    plugins: [tailwindcss()],
  },
});
