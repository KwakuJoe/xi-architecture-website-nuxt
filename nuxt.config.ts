// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/input.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxthq/ui',
    '@nuxt/image',
    '@hypernym/nuxt-anime'
  ],

  
})
