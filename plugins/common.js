import Vue from 'vue'

/**
 * FUNCTIONAL
 */

// No SSR
import fNoSsr from '~/components/functional/f-no-ssr'
Vue.component('f-no-ssr', fNoSsr)

/**
 * LAYOUT
 */

// Wrapper
import lWrapper from '~/components/layout/l-wrapper'
Vue.component('l-wrapper', lWrapper)

// Grid
// import lGrid from '~/components/layout/l-grid'
// Vue.component('l-grid', lGrid)

/**
 * COMPONENTS
 */

// Link
import cLink from '~/components/c-link'
Vue.component('c-link', cLink)

// Baselines
import cBaselines from '~/components/c-baselines'
Vue.component('c-baselines', cBaselines)

// Image
import cImage from '~/components/c-image'
Vue.component('c-image', cImage)

// Box
import cBox from '~/components/c-box'
Vue.component('c-box', cBox)

// Icon
import cIcon from '~/components/c-icon'
Vue.component('c-icon', cIcon)
