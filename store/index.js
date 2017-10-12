import Vuex from 'vuex'
import getProjectsArray from '~/utils/getProjectsArray'
// import getImagesContext from '~/utils/setImagesContext'

const store = () => new Vuex.Store({
  state: {
    primaryNavHeight: null,
    showDetails: false,
    projectsArray: [],
    scrollToSelector: null,
    messageSent: false,
    savedColor: '#999',
    images: [],
    imagesContext: require.context('~/assets/images/', true, /\.(png|jpe?g|gif|svg|tiff|webp)$/i)
  },
  actions: {
    // nuxtServerInit ({ commit }) {
    //   const imagesContext = getImagesContext()
    //   console.log(imagesContext)
    //   commit('setImagesContext', imagesContext)
    // },
    async getProjects ({commit}) {
      const projects = await getProjectsArray()
      commit('setProjectsArray', projects)
    }
  },
  mutations: {
    addImage: (state, image) => {
      state.images.push(image)
    },
    setProjectsArray: (state, array) => {
      state.projectsArray = array
    },
    setImagesContext: (state, object) => {
      state.imagesContext = object
    },
    toggleDetails: (state) => {
      state.showDetails = !state.showDetails
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
