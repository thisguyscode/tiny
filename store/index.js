import Vuex from 'vuex'
import dataProjects from '~/data/projects.json'

function getProjectsArray () {
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
      /**
       * Push to projectsArray (local variable)
       */
      projectsArray.push(projects[project])
    }
  }
  /** Commit this array to the store */
  return projectsArray
}

const store = () => new Vuex.Store({
  state: {
    primaryNavHeight: null,
    projectsArray: [],
    scrollToSelector: null,
    messageSent: false,
    savedColor: '#999'
  },
  actions: {
    async getProjects ({commit}) {
      const projects = await getProjectsArray()
      commit('setProjectsArray', projects)
      console.log('project gotten')
    }
  },
  mutations: {
    setProjectsArray: (state, array) => {
      state.projectsArray = array
    },
    saveColor: (state, color) => {
      state.savedColor = color
    },
    updatePrimaryNavHeight: (state, value) => {
      state.primaryNavHeight = value
    },
    setMessageSent: (state, boolean) => {
      state.messageSent = boolean
    },
    setScrollTo: (state, selector) => {
      state.scrollToSelector = selector
    },
    removeScrollTo: (state) => {
      state.scrollToSelector = null
    }
  }
})

// Implementation ??
// this.$store.commit('updateNavHeight', this.elementHeight)

export default store
