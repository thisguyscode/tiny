<template>

  <nuxt-link class="f-link" :class="baseClassObject" v-if="relativeLink" :to="relativeLink">
    <slot></slot>
  </nuxt-link>
  
  <span v-else-if="scrollToSelector">
    <f-no-ssr>
      <a class="f-link" :class="baseClassObject" v-scroll-to="{ el: scrollToSelector, offset: -176 }">
        <span class="o-link-bloater"></span>
      </a>
    </f-no-ssr>
    <slot></slot>
  </span>

  <a class="f-link" :class="baseClassObject" v-else-if="externalLink" :href="externalLink" target="_blank" rel="noopener">
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
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    baseClassObject: function () {
      return {
        'f-link--inline': this.inline === true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  
  .f-link {
    cursor: pointer;
    position: static;
    text-decoration: none;
  }
  
  .f-link--inline {
    transition: background-color .1s ease, color .1s ease;
    display: inline;
    background-color: rgba($blue, .2);
    box-shadow: 0 1px $blue;
    &:hover {
      color: contrasting-color($blue, $lightest, $darkest);
      background-color: rgba($blue, .8);
    }
  }

</style>
