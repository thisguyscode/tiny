import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    primaryNavHeight: null,
    projectsArray: [],
    scrollToSelector: null
  },
  mutations: {
    updatePrimaryNavHeight: (state, value) => {
      state.primaryNavHeight = value
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
