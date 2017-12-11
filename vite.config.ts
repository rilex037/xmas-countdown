import { defineConfig } from 'vite';

export default defineConfig({
  root: 'app',
  build: {
    outDir: '../dist',
  },
  server: {
    host: '0.0.0.0',
    port: 80,
  },
});
