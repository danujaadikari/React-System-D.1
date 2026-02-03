import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration file
// This tells Vite how to handle React files
export default defineConfig({
  plugins: [react()],
})
