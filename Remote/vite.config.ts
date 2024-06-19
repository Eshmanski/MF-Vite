import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from  '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "Counter",
      filename:  "remoteEntry.js",
      exposes: {
        "./Counter": "./src/components/Counter.vue",
      },
      shared: [ "vue" ],
    }),
  ],
  build: {
    target: "ES2022",
  }
})

