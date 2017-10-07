// webfontloader run on initial page load

var WebFont = require('webfontloader')

WebFont.load({
  google: {
    families: ['Open Sans:300,300i,600,600i', 'Montserrat:600']
  },
  timeout: 2000
})
