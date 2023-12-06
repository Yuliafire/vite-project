import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default defineConfig({
  base: process.env.NODE_ENV === 'production'
    ? '/http://yuliafire.github.io/vite-project/'    

    : '/',
  // other configurations...
  plugins: [react()]
})

