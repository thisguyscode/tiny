import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    currentProject: {}
  },
  mutations: {
    updateCurrentProject: (state, project) => {
      state.currentProject = project
    }
  }
})

// Implementation ??
// this.$store.commit('updateNavHeight', this.elementHeight)

export default store
