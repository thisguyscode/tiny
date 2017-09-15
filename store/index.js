import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    currentProject: {},
    projectsArray: []
  },
  mutations: {
    updateProjectsArray: (state, array) => {
      state.projectsArray = array
    },
    updateCurrentProject: (state, project) => {
      state.currentProject = project
    }
  }
})

// Implementation ??
// this.$store.commit('updateNavHeight', this.elementHeight)

export default store
