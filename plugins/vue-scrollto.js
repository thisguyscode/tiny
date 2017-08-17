import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 700,
  easing: 'ease-in-out',
  offset: 0,
  cancelable: true,
  onDone: false,
  onCancel: false
})
