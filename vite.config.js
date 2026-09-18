import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the built site works when hosted at
  // https://<username>.github.io/<repo-name>/ via GitHub Pages.
  base: './',
})
