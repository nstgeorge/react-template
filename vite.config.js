import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  plugins: [react({
    babel: {
      plugins: ['babel-plugin-macros', 'babel-plugin-styled-components']
    }
   })],
})
