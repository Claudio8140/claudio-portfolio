import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/claudio-portfolio", (pour github deploiement)
  base: process.env.VITE_BASE_PATH || "/claudio-portfolio",
})
