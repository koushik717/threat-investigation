import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  base: '/threat-investigation/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    exclude: [...configDefaults.exclude, 'tests/**'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@apollo/client', 'ag-grid-react', 'ag-grid-community', 'lucide-react', 'date-fns'],
          i18n: ['i18next', 'react-i18next', 'i18next-http-backend', 'i18next-browser-languagedetector'],
        },
      },
    },
  },
})
