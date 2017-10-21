import detectFont from '~/utils/detectFont'

var appleSystemFont = detectFont('-apple-system')
var systemUiFont = detectFont('system-ui')
var blinkMacSystemFont = detectFont('BlinkMacSystemFont')
var segoeUI = detectFont('Segoe UI')

/**
 * Attempt to detect each font in the font-stack (in order)
 * and apply the appropriate styles to adjust top offset
 *
 * Currently using same font-stack for both body and display
 * typefaces so seems a little WET ;)
 */

if (appleSystemFont === true) {
  require('~/assets/styles/typography/body-font-apple-system.scss')
  require('~/assets/styles/typography/display-font-apple-system.scss')
} else if (systemUiFont === true) {
  require('~/assets/styles/typography/body-font-system-ui.scss')
  require('~/assets/styles/typography/display-font-system-ui.scss')
} else if (blinkMacSystemFont === true) {
  require('~/assets/styles/typography/body-font-blink-mac-system.scss')
  require('~/assets/styles/typography/display-font-blink-mac-system.scss')
} else if (segoeUI === true) {
  require('~/assets/styles/typography/body-font-segoe-ui.scss')
  require('~/assets/styles/typography/display-font-segoe-ui.scss')
}
