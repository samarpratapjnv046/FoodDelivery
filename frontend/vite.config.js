// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     open: true,
//     fs: {
//       strict: false
//     },
//     historyApiFallback: true // 👈 ADD THIS
//   },
//   build: {
//     outDir: 'dist'
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // fix your local port if needed
  },
  build: {
    outDir: 'build'
  },
  base: '/',  // set base path
  resolve: {
    alias: {
      '@': '/src',
    },
  }
})
