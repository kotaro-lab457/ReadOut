import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  server: {
    port: 9000,
  },
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, "./src/components"),
      "@Pages": path.resolve(__dirname, "./src/pages"),
      "@Atoms": path.resolve(__dirname, "./src/ui/atoms"),
      "@Molecules": path.resolve(__dirname, "./src/ui/molecules"),
      "@Organisms": path.resolve(__dirname, "./src/ui/organisms"),
      "@Templates": path.resolve(__dirname, "./src/ui/templates"),
    },
  },
  define: {
    global: "window"
  }
});