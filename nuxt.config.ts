// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            url: process.env.url || 'http://localhost',
            socketPort: Number(process.env.socketPort) || 3001
        }
    },
    plugins: [
        './plugins/socket.io'
    ],
    modules: [
        '@pinia/nuxt',
    ],
    nitro: {
        preset: 'node-server',
        plugins: [
            './plugins/socket.io.server'
        ]
    }
})
