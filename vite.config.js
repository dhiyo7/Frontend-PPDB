import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import {registerSW} from "virtual:pwa-register";
import Toastify from 'toastify-js'

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location) && !/lvh.me/.test(window.location)) {
  const updateSW = registerSW({
    onNeedRefresh() {
      Toastify({
        text: `<h4 style='display: inline'>An update is available!</h4>
               <br><br>
               <a class='do-sw-update'>Click to update and reload</a>  `,
        escapeMarkup: false,
        gravity: "bottom",
        onClick() {
          updateSW(true);
        }
      }).showToast();
    }
  });
}

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
