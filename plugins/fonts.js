import detectFont from '~/utils/detectFont'

// Only need to test for SF Pro Text and probably not SF Pro Display
var sanFranciscoText = detectFont('SF Pro Text')
var segoeUI = detectFont('Segoe UI')
var roboto = detectFont('Roboto')

var oxygen = detectFont('Oxygen')
var ubuntu = detectFont('Ubuntu')
var cantarell = detectFont('Cantarell')

var helveticaNeue = detectFont('Helvetica Neue')
var helvetica = detectFont('Helvetica')

var lucidaGrande = detectFont('Lucida Grande')
var trebuchet = detectFont('Trebuchet MS')

/**
 * Attempt to detect each font in the font-stack (in order)
 * and apply the appropriate styles to adjust top offset
 *
 * Currently using same font-stack for both body and display
 * typefaces so seems a little WET ;)
 */

if (sanFranciscoText === true) { // I'll assume that if SF Pro Text is there that SF Pro Display is too
  require('~/assets/styles/typography/body-font-san-francisco.scss')
  require('~/assets/styles/typography/display-font-san-francisco.scss')
} else if (segoeUI === true) {
  require('~/assets/styles/typography/body-font-segoe-ui.scss')
  require('~/assets/styles/typography/display-font-segoe-ui.scss')
} else if (roboto === true) { // I'll assume that if SF Pro Text is there that SF Pro Display is too
  require('~/assets/styles/typography/body-font-roboto.scss')
  require('~/assets/styles/typography/display-font-roboto.scss')
} else if (oxygen === true) {
  require('~/assets/styles/typography/body-font-oxygen.scss')
  require('~/assets/styles/typography/display-font-oxygen.scss')
} else if (ubuntu === true) {
  require('~/assets/styles/typography/body-font-ubuntu.scss')
  require('~/assets/styles/typography/display-font-ubuntu.scss')
} else if (cantarell === true) {
  require('~/assets/styles/typography/body-font-ubuntu.scss')
  require('~/assets/styles/typography/display-font-ubuntu.scss')
} else if (helveticaNeue === true) {
  require('~/assets/styles/typography/body-font-helvetica-neue.scss')
  require('~/assets/styles/typography/display-font-helvetica-neue.scss')
} else if (helvetica === true) {
  require('~/assets/styles/typography/body-font-helvetica.scss')
  require('~/assets/styles/typography/display-font-helvetica.scss')
} else if (lucidaGrande === true) {
  require('~/assets/styles/typography/body-font-lucida-grande.scss')
  require('~/assets/styles/typography/display-font-lucida-grande.scss')
} else if (trebuchet === true) {
  require('~/assets/styles/typography/body-font-trebuchet.scss')
  require('~/assets/styles/typography/display-font-trebuchet.scss')
}
