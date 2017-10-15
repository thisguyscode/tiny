var WebFont = require('webfontloader')
WebFont.load({
  loading: function () {
    console.log('loading Montserrat')
  },
  active: function () {
    console.log('loaded Montserrat')
  },
  custom: {
    families: ['Montserrat']
  }
})
window.setTimeout(function () {
  require('~/assets/styles/fonts.scss')
  console.log('fonts plugin called')
  // s.parentNode.insertBefore(wf, s)
}, 0)
