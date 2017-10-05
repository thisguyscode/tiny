import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  observer: true,
  attempt: 1,
  adapter: {
    // loaded ({ bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error, Init }) {
    loaded ({ el }) {
      const srcSet = el.getAttribute('data-ss')
      el.setAttribute('srcset', srcSet)
    }
  }
})
