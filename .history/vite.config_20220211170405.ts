import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join, resolve } from "path"; // https://vitejs.dev/config/export
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src', },
    ]
  }
});