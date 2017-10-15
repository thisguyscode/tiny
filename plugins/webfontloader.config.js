// webfontloader run on initial page load

var WebFont = require('webfontloader')

WebFont.load({
  custom: {
    families: ['Open Sans:n3,n6,i3', 'Montserrat:n6']
  },
  timeout: 2000
})
