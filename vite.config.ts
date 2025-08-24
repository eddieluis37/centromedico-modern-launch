// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'   // si no usas swc: '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { componentTagger } from 'lovable-tagger' // si no lo usas puedes quitar esta import

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  // Para tu subdominio root usa '/'
  // Si en algún momento prefieres rutas relativas (más portátil), cambia a './'
  const base = process.env.VITE_BASE ?? '/'

  return {
    base,
    plugins: [
      react(),
      isDev && componentTagger()
    ].filter(Boolean),

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },

    server: {
      host: true,
      port: 5173,
      strictPort: false
    },

    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]'
        }
      }
    },

    optimizeDeps: {
      // include: []
    }
  }
})
