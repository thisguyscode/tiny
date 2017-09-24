<template>
  <f-no-ssr>
    <div class="l-affix">
      <div class="_actual" ref="jsActual">
        <affix
          :style="'z-index:' + z"
          v-on:affixtop="removePlaceholderHeight"
          v-on:affixbottom="setPlaceholderHeight"
          v-on:affix="setPlaceholderHeight"
          :class="[className, classObject]"
          :offset="offset"
          :relative-element-selector="relativeElementSelector">
          <slot></slot>
        </affix>
      </div>
      <div ref="jsPlaceholder" class="_placeholder"></div>
    </div>
  </f-no-ssr>
</template>

<script>
  import fNoSsr from '~/components/functional/f-no-ssr'
  export default {
    components: {
      fNoSsr
    },
    props: {
      fullWidth: {
        type: Boolean,
        default: false
      },
      relativeElementSelector: {
        type: String,
        required: true
      },
      className: {
        type: String,
        required: false
      },
      z: {
        type: Number,
        required: false
      },
      offset: {
        type: Object,
        default: () => {
          return {
            top: 120,
            bottom: 0
          }
        }
      }
    },
    computed: {
      placeholder () {
        return this.$refs.jsPlaceholder
      },
      actual () {
        return this.$refs.jsActual
      },
      classObject: function () {
        return {
          '--full-width': this.fullWidth
        }
      }
    },
    methods: {
      setPlaceholderHeight () {
        this.$refs.jsPlaceholder.style.height = this.actual.clientHeight + 'px'
      },
      removePlaceholderHeight () {
        this.$refs.jsPlaceholder.style.height = 0
      }
    }
  }
</script>

<style lang="scss" scoped>

  // Import variables and global settings
  @import "~assets/styles/imports";

  $transition-duration: 1s;
  $transition-easing: ease;

  .fade-enter-active, .fade-leave-active {
    transition: opacity $transition-duration $transition-easing
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }

  .l-affix {
  }

  .vue-affix {
    width: auto;
    transition: opacity .1s ease;

    &.affix-bottom {
      opacity: 0;
    }
  }

  ._actual {
    position: relative;
  }
  ._placeholder {
    height: 0;
    position: relative;
    display: block;
  }

  .--full-width {
    width: 100%;
  }

</style>
