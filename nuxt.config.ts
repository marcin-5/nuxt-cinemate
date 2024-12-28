// https://nuxt.com/docs/api/configuration/nuxt-config
if (!process.env.ACCESS_TOKEN) {
  throw new Error('ACCESS_TOKEN environment variable is not defined')
}

export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    accessToken: process.env.ACCESS_TOKEN || '',
  },
})
