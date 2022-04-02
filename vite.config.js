import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    base: '/',
    mode: 'production',
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt'],
    workbox: {
      cleanupOutdatedCaches: false,
      sourcemap: true,
      importScripts: ["sw-code.js"],
    },
    registerType: 'autoUpdate',
    manifest: {
      name: 'PPDB Kabupaten Tegal',
      short_name: 'PPDB Kabupaten Tegal',
      description: 'PPDB Kabupaten Tegal',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        }
      ]
    }
  })
  ]
})
