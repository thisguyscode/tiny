const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  router: {
    base: '/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: './tiny/',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
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
    color: '#25c163',
    failedColor: '#e9494f',
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
          routesArray.push('/work/projects/' + projects[project].slug + '/')
        }
      }
      return routesArray
    }
  },
  plugins: [
    '~/plugins/vue-scrollto.js',
    '~/plugins/no-ssr.js',
    '~/plugins/image.js',
    '~/plugins/vue-awesome.js',
    {
      src: '~/plugins/fonts.js',
      ssr: false
    },
    {
      src: '~/plugins/picturefill.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-affix.js',
      ssr: false
    }
  ],
  modules: [
    ['nuxt-sass-resources-loader', './assets/styles/imports.scss'],
    ['@nuxtjs/pwa', {
      icon: {
        sizes: [ 512, 192, 380 ]
      }
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: [],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      /** List all shared variables files */
      const sharedVariableFiles = [
        path.resolve(__dirname, 'assets/styles/breakpoints.js')
      ]
      /** Define the sass-vars-loader with options */
      const sassVarsLoader = {
        loader: '@epegzz/sass-vars-loader',
        options: {
          files: sharedVariableFiles
        }
      }
      /** Run .scss files through sass-vars-loader before anything else */
      const scssLoader = config.module.rules.find((loader) => loader.test.toString() === '/\\.scss$/')
      scssLoader.use.splice(5, 0, sassVarsLoader)

      /** Run .vue files' scss through sass-vars-loader before anything else */
      const vueLoader = config.module.rules.find((loader) => loader.test.toString() === '/\\.vue$/')
      vueLoader.options.loaders.scss.splice(5, 0, sassVarsLoader)

      /** Remove default image rule */
      const imageRule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg)$/')
      config.module.rules.splice(config.module.rules.indexOf(imageRule), 1)

      /** Push new image rule */
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|tiff|webp|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'img/[name].[hash:3].[ext]'
            }
          }
        ]
      })
      if (ctx.isServer) {
        /** Dunno why but this allows vue-awesome icons to be rendered server-side */
        config.externals = [
          nodeExternals({
            whitelist: [/\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/, /es6-promise/]
          })
        ]
      }
      if (ctx.isClient) {
        /** Remove sourcemap from es6-promise on client */
        config.module.rules.push({
          test: /\.js$/,
          include: /node_modules\/es6-promise/,
          loader: 'strip-sourcemap-loader'
        })
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
