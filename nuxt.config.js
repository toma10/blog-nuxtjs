import { allPosts } from './lib/post-queries'
import config from './config'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: config.title,
    titleTemplate: config.titleTemplate,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: config.defaultDescription
      },
      {
        name: 'msapplication-TileColor',
        content: '#2b5797'
      },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/images/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/manifest.json'
      },
      {
        rel: 'mask-icon',
        href: '/images/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#5850ec' },
  /*
   ** Global CSS
   */
  css: ['~/css/app.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
      })
    }
  },
  generate: {
    async routes() {
      const posts = await allPosts()

      const routes = posts.map((post) => {
        return {
          route: `/posts/${post.slug}`,
          payload: {
            post
          }
        }
      })

      return Promise.resolve(routes)
    }
  }
}
