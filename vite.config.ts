// vite-project/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//for cords problem on browsers
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.tanzibfit.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});