const nodeExternals = require('webpack-node-externals')

module.exports = {
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
      /** Make sure SCSS runs through postcss */
      const cssLoader = config.module.rules.find((loader) => loader.test.toString() === '/\\.scss$/')
      cssLoader.use.splice(2, 0, {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      })

      // Remove default image rule
      const imageRule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg)$/')
      config.module.rules.splice(config.module.rules.indexOf(imageRule), 1)

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
