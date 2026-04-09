import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                events: resolve(__dirname, 'events.html'),
                projects: resolve(__dirname, 'projects.html'),
            },
        },
    },
})
