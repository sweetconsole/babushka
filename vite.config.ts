import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [ react()],
  base: "/babushka/dist/",
  css: {
    postcss: {
      plugins: [
        autoprefixer({})
      ]
    }
  },
})
