import dataProjects from '~/data/projects.json'

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
function setContrast (bgColor) {
  var rgb = hexToRgb(bgColor)
  var o = Math.round((
    (parseInt(rgb[0]) * 299) +
    (parseInt(rgb[1]) * 587) +
    (parseInt(rgb[2]) * 114)) / 1000)
  var textColor = (o > 125) ? 'dark' : 'light'
  return textColor
}

const getProjectsArray = () => {
  var projectGroups = dataProjects.projectGroups
  var projectsArray = []
  for (var i = 0; i < projectGroups.length; i++) {
    var projects = projectGroups[i].projects
    for (var ix = 0; ix < projects.length; ix++) {
      /**
       * Add the new properties .group and .groupLink to each project
       * from their parent projectGroup
       */
      projects[ix].key = ix
      projects[ix].group = projectGroups[i].name
      projects[ix].groupLink = projectGroups[i].link
      /** Set contrasting color */
      projects[ix].contrastingColor = setContrast(projects[ix].color)
      /**
       * Push to projectsArray (local variable)
       */
      // projects[-1] = 5
      projectsArray.push(projects[ix])
      console.log(projectsArray)
    }
  }
  return projectsArray
}

export default getProjectsArray
