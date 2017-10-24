<template>

  <nuxt-link class="f-link" v-if="relativeLink" :to="relativeLink">
    <slot></slot>
  </nuxt-link>
  
  <span v-else-if="scrollToSelector">
    <f-no-ssr>
      <a class="f-link" v-scroll-to="{ el: scrollToSelector, offset: -176 }">
        <span class="u-link-bloater"></span>
      </a>
    </f-no-ssr>
    <slot></slot>
  </span>

  <a v-else-if="externalLink" :href="externalLink" target="_blank" rel="noopener">
    <slot></slot>
  </a>

  <a v-else>
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
      required: false
    },
    externalLink: {
      type: String,
      required: false
    },
    scrollToSelector: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
  
  .f-link {
    cursor: pointer;
    color: inherit;
    position: static;
    text-decoration: none;
  }

</style>
