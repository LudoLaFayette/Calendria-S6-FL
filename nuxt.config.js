// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase'],
  devtools: { enabled: true },
  supabase: {
    // Options
    redirect : false,//Blocage du redirect(qui fonctionne si un user ne s'est pas connecté sur le site)
    redirectOptions: {      
      login: '/calendrier',
      callback: '/confirm',
      exclude: [],
      cookieRedirect: false,
    },
    cookieOptions: {
      maxAge: 60 * 60 * 8,
      sameSite: 'lax',
      secure: true
    },
    clientOptions: {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/scss/foundations/_variables.scss";
            @import "@/scss/foundations/_mixins.scss";
          `
        }
      }
    }
  }



})
