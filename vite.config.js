import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Build optimizations for SEO and performance
  build: {
    // Enable tree shaking
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    
    // Chunk size optimizations
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react'],
          utils: ['react-icons']
        }
      }
    },
    
    // Asset optimization
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    
    // Source maps for production debugging
    sourcemap: false
  },
  
  // Development server optimizations
  server: {
    host: true,
    port: 5173,
    strictPort: false,
  },
  
  // Preview server for production testing
  preview: {
    host: true,
    port: 4173,
    strictPort: false,
  },
  
  // Define global constants
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    __SITE_URL__: JSON.stringify('https://www.brawex.co.uk'),
    __COMPANY_EMAIL__: JSON.stringify('contact@brawex.co.uk')
  }
})
