export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    siteUrl: process.env.SITE_URL
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: "Josh | Hi, I'm a visual designer, based in Lagos",
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'I’m passionate about solving business problems &amp; crafting beautiful experiences using design.'
      },
      {
        name: 'theme-color',
        property: 'theme-color',
        content: '#EA5F3A'
      },
      {
        name: 'apple-mobile-web-app-title',
        property: 'apple-mobile-web-app-title',
        content: "Josh | Hi, I'm a visual designer, based in Lagos"
      },
      {
        name: 'og:title',
        property: 'og:title',
        content: "Josh | Hi, I'm a visual designer, based in Lagos"
      },
      {
        name: 'og:site_name',
        property: 'og:site_name',
        content: "Josh's Portfolio "
      },
      {
        name: 'og:image',
        property: 'og:image',
        content:
          process.env.SITE_URL + '/webclip.png'
      },
      {
        name: 'twitter:title',
        property: 'og:title',
        content: "Josh | Hi, I'm a visual designer, based in Lagos"
      },
      {
        name: 'twitter:site_name',
        property: 'og:site_name',
        content: "Josh's Portfolio "
      },
      {
        name: 'twitter:description',
        property: 'twitter:description',
        content: 'I’m passionate about solving business problems &amp; crafting beautiful experiences using design.'
      },
      {
        name: 'twitter:image',
        content: process.env.SITE_URL + '/webclip.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg' }
    ],
    script: [{
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'
    },
    {
      src: '/override-alert.js'
    },
    {
      src: '/webflow.js'
    }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/webflow.css',
    '@/assets/css/joshs.webflow.css',
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/webflow.client',
    '@/plugins/prototypes'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module'
  ],

  pageTransition: 'transition-page',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
