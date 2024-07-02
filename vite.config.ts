import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

const env = loadEnv("all", process.cwd());
const BASE_PUBLIC_API_URL = env["VITE_BASE_PUBLIC_API_URL"];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@service": path.resolve(__dirname, "./src/service"),
      "@constants": path.resolve(__dirname, "./src/constants"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: BASE_PUBLIC_API_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
