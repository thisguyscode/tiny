import dataProjects from '~/data/projects.json'
import detectContrast from '~/utils/detectContrast.js'

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
      projects[ix].contrastingColor = detectContrast(projects[ix].color)
      /**
       * Push to projectsArray (local variable)
       */
      // projects[-1] = 5
      projectsArray.push(projects[ix])
    }
  }
  return projectsArray
}

export default getProjectsArray
