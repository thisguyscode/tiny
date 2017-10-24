import Vuex from 'vuex'
import getProjectsArray from '~/utils/getProjectsArray'

const store = () => new Vuex.Store({
  state: {
    primaryNavHeight: null,
    showDetails: false,
    projectsArray: [],
    scrollToSelector: null,
    messageSent: false,
    currentColor: '#4786eb'
  },
  actions: {
    async getProjects ({commit}) {
      const projects = await getProjectsArray()
      commit('setProjectsArray', projects)
    }
  },
  mutations: {
    setProjectsArray: (state, array) => {
      state.projectsArray = array
    },
    toggleDetails: (state) => {
      state.showDetails = !state.showDetails
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
    setCurrentColor: (state, string) => {
      state.currentColor = string
    },
    resetCurrentColor: (state) => {
      state.currentColor = '#4786eb'
    }
  }
})

export default store
