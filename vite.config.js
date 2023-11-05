import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.jsx", //Hot Reload Fix
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@containers": "/src/containers",
      "@constants": "/src/constants",
      "@public": "./public",
    },
  },
});
