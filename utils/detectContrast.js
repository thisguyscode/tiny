/** Convert the #hex color code in ~/data/projects.json to an rgb value (as array) */
function hexToRgb (hex) {
  hex = hex.replace('#', '')
  var r = parseInt(hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16)
  var g = parseInt(hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16)
  var b = parseInt(hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16)
  var rgb = [r, g, b]
  return rgb
}

/**
 * Get the rgb array from hexToRgb and apply perceptual brightness calculations
 * Then return string of 'dark' or 'light' for contrasting color
 */
const detectContrast = (testColor) => {
  var rgb = hexToRgb(testColor)

  var red = parseInt(rgb[0])
  var green = parseInt(rgb[1])
  var blue = parseInt(rgb[2])

  var redMagicNumber = 241
  var greenMagicNumber = 691
  var blueMagicNumber = 68
  var divisor = redMagicNumber + greenMagicNumber + blueMagicNumber

  var p = Math.sqrt(((red * red * redMagicNumber) + (green * green * greenMagicNumber) + (blue * blue * blueMagicNumber)) / divisor)
  var x = 100 * p / 255
  var o = Math.round(x)

  var contrastingColor = (o > 60) ? 'dark' : 'light'
  return contrastingColor
}

export default detectContrast
