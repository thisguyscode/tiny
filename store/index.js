import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    primaryNavHeight: null,
    projectsArray: [],
    scrollToSelector: null,
    messageSent: false,
    savedColor: '#999'
  },
  mutations: {
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
    },
    setProjectsArray: (state, array) => {
      state.projectsArray = array
    }
  }
})

// Implementation ??
// this.$store.commit('updateNavHeight', this.elementHeight)

export default store
