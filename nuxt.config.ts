// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            url: process.env.url || 'http://localhost',
            socketPort: 3001
        }
    },
    nitro: {
        preset: 'node-server',
        plugins: [
            './plugins/socket.io.server'
        ]
    }
})
