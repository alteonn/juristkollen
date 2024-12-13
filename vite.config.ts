import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk size limit
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        // Simpler chunking strategy
        manualChunks: {
          'vendor': [
            'react',
            'react-dom',
            'react-router-dom',
            'lucide-react',
            '@supabase/supabase-js',
            'marked',
            'react-helmet-async'
          ]
        }
      }
    },
    // Basic minification settings
    minify: true,
    // Disable sourcemap for production
    sourcemap: false,
    // Target modern browsers
    target: 'es2020'
  },
  // Development server configuration
  server: {
    port: 5173,
    host: true,
    strictPort: true
  },
  // Preview server configuration  
  preview: {
    port: 5173,
    host: true,
    strictPort: true
  },
  // Basic dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      '@supabase/supabase-js',
      'marked',
      'react-helmet-async'
    ]
  }
});