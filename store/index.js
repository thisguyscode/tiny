import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    currentProject: {},
    projectsArray: [],
    scrollToSelector: null
  },
  mutations: {
    updateProjectsArray: (state, array) => {
      state.projectsArray = array
    },
    updateCurrentProject: (state, project) => {
      state.currentProject = project
    },
    setScrollTo: (state, selector) => {
      state.scrollToSelector = selector
    },
    removeScrollTo: (state) => {
      state.scrollToSelector = null
    },
    setProjectsArray: (state, array) => {
      state.projectsArray = array
    }
  }
})

// Implementation ??
// this.$store.commit('updateNavHeight', this.elementHeight)

export default store
