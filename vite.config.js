import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  base: "",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        diapos: resolve(__dirname, "diapos.html"),
      },
    },
  },
});
