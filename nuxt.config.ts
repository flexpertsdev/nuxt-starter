export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  // Add this for GitHub integration
  runtimeConfig: {
    public: {
      content: {
        previewToken: process.env.NUXT_CONTENT_PREVIEW_TOKEN
      }
    }
  }
})
