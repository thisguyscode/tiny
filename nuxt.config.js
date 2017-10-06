module.exports = {
  router: {
    // base: ''
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
    {
      src: '~/plugins/picturefill.js',
      ssr: false
    },
    // {
    //   src: '~/plugins/global-events.js',
    //   ssr: false
    // },
    {
      src: '~/plugins/vue-affix.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-awesome.js',
      ssr: false
    }
  ],
  modules: [
    // Simple usage
    // '@nuxtjs/pwa'
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

      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg)$/')
      config.module.rules.splice(config.module.rules.indexOf(rule), 1)

      config.module.rules.push({
        test: /\.(tiff|webp)$/i,
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
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'img/[name].[hash:3].[ext]'
            }
          }
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     // name: '[name].[ext]',
          //     gifsicle: {
          //       interlaced: false
          //     },
          //     optipng: {
          //       optimizationLevel: 7
          //     },
          //     pngquant: {
          //       quality: '65-90',
          //       speed: 4
          //     },
          //     mozjpeg: {
          //       progressive: true,
          //       quality: 65
          //     }
          //   }
          // }
        ]
      })
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
