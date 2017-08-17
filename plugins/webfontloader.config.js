// webfontloader run on initial page load

var WebFont = require('webfontloader')

WebFont.load({
  google: {
    families: ['Open Sans:400,400i,600,600i'],
    timeout: 2000
  }
})
