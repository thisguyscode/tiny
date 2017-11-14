<template>
  <div class="l-affix">
    <div class="l-affix__actual" ref="jsActual">
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
    <div ref="jsPlaceholder" class="l-affix__placeholder">
      <slot name="contents"></slot>
    </div>
  </div>
</template>

<script>
export default {
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
    placeholder: function () {
      return this.$refs.jsPlaceholder
    },
    actual: function () {
      return this.$refs.jsActual
    },
    classObject: function () {
      return {
        'l-affix--full-width': this.fullWidth
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
    this.removePlaceholderHeight()
  }
}
</script>


<style lang="scss" scoped>

/* Base Class
======================================================================== */
.l-affix {
  position: relative;
}


/* Modifiers
======================================================================== */
.l-affix--full-width {
  width: 100%;
}


/* Child Classes
======================================================================== */
.l-affix__actual {
  height: 0;
  overflow: visible;
  position: relative;
}

.l-affix__placeholder {
  position: relative;
  display: block;
}

</style>
