<template>

  <nuxt-link v-if="relativeLink" :to="relativeLink" v-scroll-to="scrollToSelector">
    <slot></slot>
  </nuxt-link>
  
  <f-no-ssr v-else-if="scrollToSelector" >
    <a class="f-link" v-scroll-to="scrollToSelector">
      <slot></slot>
    </a>
  </f-no-ssr>

  <a v-else-if="externalLink" :href="externalLink" target="_blank" rel="noopener">
    <slot></slot>
  </a>

</template>

<script>
import fNoSsr from '~/components/functional/f-no-ssr'
export default {
  components: {
    fNoSsr
  },
  props: {
    relativeLink: {
      type: String,
      default: null
    },
    externalLink: {
      type: String,
      default: null
    },
    scrollToSelector: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
  .f-link {
    cursor: pointer;
  }
</style>
