import detectFont from '~/utils/detectFont'

var appleSystemFont = detectFont('-apple-system')
var systemUiFont = detectFont('system-ui')
var blinkMacSystemFont = detectFont('BlinkMacSystemFont')
var segoeUI = detectFont('Segoe UI')

if (appleSystemFont === true) {
  require('~/assets/styles/typography/font-apple-system.scss')
}

if (systemUiFont === true) {
  require('~/assets/styles/typography/font-system-ui.scss')
}

if (blinkMacSystemFont === true) {
  require('~/assets/styles/typography/font-blink-mac-system.scss')
}

if (segoeUI === true) {
  require('~/assets/styles/typography/font-segoe-ui.scss')
}
