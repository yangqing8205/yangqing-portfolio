import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        motionLab: resolve(import.meta.dirname, "motion-lab/index.html"),
        bingelingo: resolve(import.meta.dirname, "work/bingelingo/index.html"),
      },
    },
  },
});
