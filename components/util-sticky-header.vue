<template>
  <div class="util-sticky-header">
    <!-- <div class="__waypoint" ref="jsWaypointTop"></div> -->
    <div class="__element-placeholder" ref="jsElementPlaceholder"></div>
    <div class="__sticky-bar" :class="cssStickyBar" ref="jsStickyBar">
      <div class="u-wrapper">
        <div class="__element" ref="jsElement" :class="cssElement">
          <slot></slot>
        </div>
      </div>
    </div>
    <!-- <div class="__waypoint" ref="jsWaypointBottom"></div> -->
  </div>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1
    },
    position: {
      type: String,
      default: 'left'
    },
    waypointTop: {
      type: Element,
      required: true
    },
    waypointBottom: {
      type: Element,
      required: false
    }
  },
  data: () => {
    return {
      isReached: false,
      isPassed: false
    }
  },
  computed: {
    cssStickyBar () {
      return [
        '--level-' + this.level,
        {
          's-is-fixed': this.isReached
        }
      ]
    },
    cssElement () {
      return {
        '--left': this.position === 'left',
        '--right': this.position === 'right'
      }
    },
    scrollPosition () {
      return this.$store.state.scrollPosition
    },
    stickyBar () {
      return this.$refs.jsStickyBar
    },
    element () {
      return this.$refs.jsElement
    },
    elementHeight () {
      return this.element.clientHeight
    },
    placeholder () {
      return this.$refs.jsElementPlaceholder
    },
    offsetTop () {
      if (this.level === 1) {
        return 0
      } else if (this.level === 2) {
        return this.$store.state.sticky.Level_1
      } else if (this.level === 3) {
        return this.$store.state.sticky.Level_1
      }
    }
  },
  mounted () {
    this.set()
    this.updateStore()
    this.$bus.$on('isResizing', () => {
      this.set()
      this.updateStore()
    })
  },
  methods: {
    fix () {
      this.isReached = true
      this.placeholder.style.height = this.elementHeight
    },
    unFix () {
      this.isReached = false
      this.placeholder.style.height = 0
    },
    hide () {
      this.isPassed = true
      this.stickyBar.style.top = -elementHeight
    },
    unHide () {
      this.isPassed = false
      this.stickyBar.style.top = 0
    },
    set () {
      if (this.scrollPosition <= this.waypointTop) {
        this.unFix()
      } else {
        this.fix()
      }
      if (this.scrollPosition <= this.waypointBottom) {
        this.unHide()
      } else {
        this.hide()
      }
    },
    updateStore () {
      this.$store.commit('updateStickyLevel_' + level, this.elementHeight)
    }
  }
}
</script>

<style lang="scss" scoped>
  
  .__sticky-bar {
    width: 100%;
    position: relative;
    transition: top 1s ease;

    &.s-is-fixed {
      position: fixed;
    }
  }
  
  .__element {
    position: absolute;

    &.--left {
      left: 0;
    }

    &.--right {
      right: 0;
    }
  }
</style>
