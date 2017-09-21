module.exports = {
  router: {
    base: '/'
    // scrollBehavior: function (to, from, savedPosition) {
    //   if (savedPosition) return savedPosition
    //   return false
    // }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: './tiny/',
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'Content-Security-Policy', content: 'default-src https:' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global Styles
  */
  css: [
    {
      src: '~assets/styles/global.scss',
      lang: 'scss'
    }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#e9494f',
    failedColor: 'red',
    height: '4px'
  },
  generate: {
    /*
    ** Generate routes from 'linkTo' in project data file
    */
    routes: function () {
      var routesArray = []
      const projectData = require('./data/projects.json')
      var projectGroups = projectData.projectGroups
      for (var projectGroup in projectGroups) {
        var projects = projectGroups[projectGroup].projects
        for (var project in projects) {
          routesArray.push('/work/projects/' + projects[project].slug)
        }
      }
      return routesArray
    }
  },
  plugins: [
    '~/plugins/vue-scrollto.js',
    '~/plugins/no-ssr.js',
    {
      src: '~/plugins/global-events.js',
      ssr: false
    },
    {
      src: '~/plugins/webfontloader.config.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-affix.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-awesome.js',
      ssr: false
    }
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'webfontloader'
    ],
    postcss: [],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      const cssLoader = config.module.rules.find((loader) => loader.test.toString() === '/\\.scss$/')
      cssLoader.use.splice(2, 0, {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      })
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
