import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    windowWidth: null,
    scrollPosition: null,
    navHeight: null,
    sticky: {
      Level_1: null,
      Level_2: null,
      Level_3: null
    }
  },
  mutations: {
    updateScroll: (state) => {
      state.scrollPosition = window.scrollY
    },
    updateWindowWidth: (state) => {
      state.windowWidth = window.innerWidth
    },
    updateNavHeight: (state, number) => {
      state.navHeight = number
    },
    updateStickyLevel_1: (state, number) => {
      state.sticky.Level_1 = number
    },
    updateStickyLevel_2: (state, number) => {
      state.sticky.Level_2 = number
    },
    updateStickyLevel_3: (state, number) => {
      state.sticky.Level_3 = number
    }
  }
})

export default store
