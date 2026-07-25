import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://restraunt-app-backend.onrender.coms://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
