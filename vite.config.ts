import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@store": path.resolve(__dirname, "src/store"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@shared-types": path.resolve(__dirname, "src/types"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
