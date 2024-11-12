import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});


export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Exposes the server
    port: process.env.PORT || 3000  // Render uses PORT env variable
  }
})