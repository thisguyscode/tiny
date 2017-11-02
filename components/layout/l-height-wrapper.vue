<template>
  <div
    class="l-height-wrapper"
    ref="baseElement">
    <slot></slot>
  </div>
</template>

<script>
import breakpoints from '~/assets/styles/breakpoints.js'
export default {
  props: {
    tiny: {
      type: Number,
      default: 10
    },
    mobile: {
      type: Number,
      default: 20
    },
    tablet: {
      type: Number,
      default: 30
    },
    desktop: {
      type: Number,
      default: 40
    },
    wide: {
      type: Number,
      default: 50
    }
  },
  methods: {
    handleResize: function () {
      this.updateHeight()
    },
    updateHeight: function () {
      var self = this
      var windowWidth = window.innerWidth
      var element = this.$refs.baseElement
      if (windowWidth >= self.breakpoints.wide) {
        element.style.height = self.wide + 'rem'
      } else if (windowWidth >= self.breakpoints.desktop) {
        element.style.height = self.desktop + 'rem'
      } else if (windowWidth >= self.breakpoints.tablet) {
        element.style.height = self.tablet + 'rem'
      } else if (windowWidth >= self.breakpoints.mobile) {
        element.style.height = self.mobile + 'rem'
      } else if (windowWidth >= self.breakpoints.tiny) {
        element.style.height = self.tiny + 'rem'
      }
    }
  },
  computed: {
    breakpoints: function () {
      return breakpoints.breakpoints
    }
  },
  mounted () {
    this.updateHeight()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleResize)
  }
}
</script>

<style lang="scss" scoped>
.l-height-wrapper {
  position: relative;
  display: block;
  
  height: 10rem;

  @include mq($from: mobile) {
    height: 20rem;
  }
  @include mq($from: tablet) {
    height: 30rem;
  }
  @include mq($from: desktop) {
    height: 30rem;
  }
  @include mq($from: wide) {
    height: 30rem;
  }
}
</style>
