<template>
  <div class="l-affix">
    <div class="_actual" ref="jsActual">
      <f-no-ssr>
        <affix
          :style="'z-index:' + z"
          v-on:affixtop="affixTopHandler"
          v-on:affixbottom="affixBottomHandler"
          v-on:affix="affixHandler"
          :class="[className, classObject]"
          :offset="offset"
          :relative-element-selector="relativeElementSelector">
          <slot name="contents"></slot>
        </affix>
      </f-no-ssr>
    </div>
    <div ref="jsPlaceholder" class="_placeholder">
      <slot name="contents"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      newOffset: {
        top: '',
        bottom: ''
      }
    }
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
          top: 80,
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
      this.$refs.jsPlaceholder.style.visibility = 'hidden'
      this.$refs.jsActual.style.visibility = 'visible'
    },
    removePlaceholderHeight () {
      this.$refs.jsPlaceholder.style.visibility = 'visible'
      this.$refs.jsActual.style.visibility = 'hidden'
    },
    affixTopHandler () {
      this.removePlaceholderHeight()
    },
    affixBottomHandler () {
      this.setPlaceholderHeight()
    },
    affixHandler () {
      this.setPlaceholderHeight()
    }
  },
  mounted () {
    this.newOffset = {
      top: this.offset.top + this.placeholder.clientHeight,
      bottom: this.offset.bottom
    }
    this.removePlaceholderHeight()
  }
}
</script>

<style lang="scss" scoped>
  $transition-duration: 1s;
  $transition-easing: ease;

  .fade-enter-active, .fade-leave-active {
    transition: opacity $transition-duration $transition-easing
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }

  .l-affix {
    position: relative;
  }

  .vue-affix {
    width: auto;
    transition: opacity .1s ease;

    &.affix-bottom {
      opacity: 0;
    }
  }

  ._actual {
    height: 0;
    overflow: visible;
    position: relative;
  }
  ._placeholder {
    position: relative;
    display: block;
  }

  .--full-width {
    width: 100%;
  }

</style>
