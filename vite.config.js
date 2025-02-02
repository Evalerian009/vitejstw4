import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command, mode }) => {
  const plugins = [
    react(),
    tailwindcss(),
  ]

  if (command === 'serve') {
    // Dev specific config
    return {
      plugins,
      // Add dev specific options here
    }
  } else {
    // Build specific config
    return {
      plugins,
      // Add build specific options here
    }
  }
})