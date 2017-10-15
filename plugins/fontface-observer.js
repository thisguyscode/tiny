var FontFaceObserver = require('fontfaceobserver')

var fontA = new FontFaceObserver('Montserrat')
var fontB = new FontFaceObserver('Open Sans')

Promise.all([fontA.load(), fontB.load()]).then(function () {
  document.documentElement.className = ''
})
