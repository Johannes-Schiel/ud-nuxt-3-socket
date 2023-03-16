// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    plugins: [
        './plugins/socket.io'
    ],
    modules: [
        '@pinia/nuxt',
        './modules/socket'
    ],
})
