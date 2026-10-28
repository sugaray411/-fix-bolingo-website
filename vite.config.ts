import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// `vite build --mode artifact` makes a copy with relative asset paths for
// hosting as a claude.ai Artifact (see scripts/make_artifact.py).
export default defineConfig(({ mode }) => ({
  base: mode === "artifact" ? "./" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    outDir: mode === "artifact" ? "dist-artifact" : "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
        },
      },
    },
  },
}));
