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
}
