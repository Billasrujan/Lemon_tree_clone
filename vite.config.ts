import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Lemon_tree_clone/',  // Add this to ensure assets are served correctly
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
