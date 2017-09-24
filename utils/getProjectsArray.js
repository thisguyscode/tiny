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
  /** Create a flat array of all the projects */
  var projectGroups = dataProjects.projectGroups
  var projectsArray = []
  for (var projectGroup in projectGroups) {
    var projects = projectGroups[projectGroup].projects
    for (var project in projects) {
      /**
       * Add the new properties .group and .groupLink to each project
       * from their parent projectGroup
       */
      projects[project].group = projectGroups[projectGroup].name
      projects[project].groupLink = projectGroups[projectGroup].link
      /** Set contrasting color */
      projects[project].contrastingColor = setContrast(projects[project].color)
      /**
       * Push to projectsArray (local variable)
       */
      projectsArray.push(projects[project])
    }
  }
  /** Commit this array to the store */
  return projectsArray
}

export default getProjectsArray
