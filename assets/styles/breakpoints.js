/* ========================================================================
  # BREAKPOINTS
======================================================================== */

/**
 * Unitless values will be converted by sass-mq to px. The associate sass-warn
 * error has been surpressed.
 *
 * When these values are used in JS 'px' should be added as a string
 * where necessary
 */

module.exports = {
  breakpoints: {
    tiny: 320,
    mobile: 540,
    tablet: 740,
    desktop: 1000,
    wide: 1300
  }
}
