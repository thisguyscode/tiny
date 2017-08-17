import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    scrollPosition: null
  },
  mutations: {
    updateScroll: (state) => {
      state.scrollPosition = window.scrollY
    }
  }
})

export default store
