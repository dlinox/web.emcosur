// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //incluir bootstrap
  devtools: { enabled: true },
  css: ['~/assets/styles/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/scss/_variables.scss" as *;'
        }
      }
    }
  },

  modules: [
    'nuxt-swiper',
    'nuxt-feather-icons'
    
  ],

})
