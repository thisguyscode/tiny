import detectFont from '~/utils/detectFont'

// Only need to test for SF Pro Text and probably not SF Pro Display
var sanFranciscoText = detectFont('SF Pro Text')
var segoeUI = detectFont('Segoe UI')
var roboto = detectFont('Roboto')

var oxygen = detectFont('Oxygen')
var ubuntu = detectFont('Ubuntu')
var cantarell = detectFont('Cantarell')

/**
 * Attempt to detect each font in the font-stack (in order)
 * and apply the appropriate styles to adjust top offset
 *
 * Currently using same font-stack for both body and display
 * typefaces so seems a little WET ;)
 */
if (cantarell === true) {
  require('~/assets/styles/typography/body-font-ubuntu.scss')
  require('~/assets/styles/typography/display-font-ubuntu.scss')
} else if (ubuntu === true) {
  require('~/assets/styles/typography/body-font-ubuntu.scss')
  require('~/assets/styles/typography/display-font-ubuntu.scss')
} else if (oxygen === true) {
  require('~/assets/styles/typography/body-font-oxygen.scss')
  require('~/assets/styles/typography/display-font-oxygen.scss')
} else if (roboto === true) { // I'll assume that if SF Pro Text is there that SF Pro Display is too
  require('~/assets/styles/typography/body-font-roboto.scss')
  require('~/assets/styles/typography/display-font-roboto.scss')
} else if (sanFranciscoText === true) { // I'll assume that if SF Pro Text is there that SF Pro Display is too
  require('~/assets/styles/typography/body-font-san-francisco.scss')
  require('~/assets/styles/typography/display-font-san-francisco.scss')
} else if (segoeUI === true) {
  require('~/assets/styles/typography/body-font-segoe-ui.scss')
  require('~/assets/styles/typography/display-font-segoe-ui.scss')
}
