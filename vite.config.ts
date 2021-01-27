const fs = require('fs')
const path = require('path')
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const getScssAdditional = (...paths) => {
  return paths.reduce((acc, curr) => {
    return acc + fs.readFileSync(curr, 'utf-8')
  }, '')
}

export default defineConfig({
  plugins: [vue()],

  alias: {
    '@': path.resolve(__dirname, 'src')
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: getScssAdditional(
          'src/style/variables.scss'
        )
      }
    }
  } 
})
