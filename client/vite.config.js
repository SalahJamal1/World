// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://world-q468.vercel.app",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
