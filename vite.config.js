// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // This allows access from all network interfaces
    // Or specify a specific IP
    host: '192.168.18.24',
  }
})