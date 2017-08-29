import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    navHeight: 120
  },
  mutations: {
    updateNavHeight: (state, element) => {
      state.navHeight = element.clientHeight
    }
  }
})

// Implementation ??
// this.$store.commit('updateNavHeight', this.elementHeight)

export default store
