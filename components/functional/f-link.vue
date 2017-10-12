<template>

  <nuxt-link class="f-link" v-if="relativeLink" :to="relativeLink">
    <slot></slot>
  </nuxt-link>
  
  <span v-else-if="scrollToSelector" class="f-link">
    <f-no-ssr>
      <a v-scroll-to="scrollToSelector">
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
    position: relative;
  }
</style>
