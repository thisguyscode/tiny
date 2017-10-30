import Vuex from 'vuex'
import getProjectsArray from '~/utils/getProjectsArray'

const store = () => new Vuex.Store({
  state: {
    primaryNavHeight: null,
    showDetails: false,
    projectsArray: [],
    scrollToSelector: null,
    messageSent: false,
    currentColor: ''
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
      var htmlTag = document.documentElement
      htmlTag.style.backgroundColor = string
      state.currentColor = string
    },
    resetCurrentColor: (state) => {
      var htmlTag = document.documentElement
      htmlTag.style.backgroundColor = ''
      state.currentColor = ''
    }
  }
})

export default store
