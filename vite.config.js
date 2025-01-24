import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [react(), visualizer({ open: true }),],
  build: {
    chunkSizeWarningLimit: 100, // Définir la limite à 100 KB par exemple
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Diviser les bibliothèques externes dans un chunk
          }
          if (id.includes('src/components/')) {
            return 'components'; // Diviser les composants dans leur propre chunk
          }
        },
      },
    },
  },
});
