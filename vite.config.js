import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/meine-website/',
  resolve: {
    alias: {
      '@': '/src', // Dies stellt sicher, dass `@` auf das `src`-Verzeichnis zeigt
    },
  },
  server: {
    host: '0.0.0.0',  // Dies macht den Server von anderen Geräten im Netzwerk zugänglich
    port: 5173,        // Standard-Port
  },
});
