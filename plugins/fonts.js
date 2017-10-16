import detectFont from '~/utils/detectFont'

var appleSystemFont = detectFont('-apple-system')
var systemUiFont = detectFont('system-ui')
var blinkMacSystemFont = detectFont('BlinkMacSystemFont')
var segoeUI = detectFont('Segoe UI')

/**
 * Attempt to detect each font in the font-stack (in order)
 * and apply the styles that match to adjust top offset
 */
if (appleSystemFont === true) {
  require('~/assets/styles/typography/font-apple-system.scss')
} else if (systemUiFont === true) {
  require('~/assets/styles/typography/font-system-ui.scss')
} else if (blinkMacSystemFont === true) {
  require('~/assets/styles/typography/font-blink-mac-system.scss')
} else if (segoeUI === true) {
  require('~/assets/styles/typography/font-segoe-ui.scss')
}
