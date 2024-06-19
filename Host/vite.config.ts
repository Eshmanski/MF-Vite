import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from  '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'app',
      remotes: {
        remoteApp: "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: ['vue'],
    })

  ],
  build: {
    target: "ES2022",
  }
})
