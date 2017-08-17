// var throttle = require('lodash/throttle')
import Vue from 'vue'

export default function ({store}) {
  /*
  ** Define a global event bus */
  var EventBus = new Vue()
  Object.defineProperties(Vue.prototype, {
    $bus: {
      get: function () {
        return EventBus
      }
    }
  })

  /*
  ** Limit global event listeners to client render */
  window.onNuxtReady(() => {
    // Update the scroll data in the store and
    // emit event with global event bus
    var ticking = false
    function resetTick () {
      ticking = false
    }
    function onScroll () {
      store.commit('updateScroll')
      EventBus.$emit('isScrolling')
      requestTick()
    }
    function onResize () {
      store.commit('updateWindowWidth')
      store.commit('updateScroll')
      EventBus.$emit('isResizing')
      requestTick()
    }
    function requestTick () {
      if (!ticking) {
        requestAnimationFrame(resetTick)
      }
      ticking = true
    }

    window.addEventListener('scroll', onScroll, false)
    window.addEventListener('resize', onResize, false)
  })
}
