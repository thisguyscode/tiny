<template>
  <div class="l-wrapper" :class="baseClassArray">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'md'
    }
  },
  computed: {
    baseClassArray: function () {
      return [
        'l-wrapper--' + this.size
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

/* Base Class
======================================================================== */  
.l-wrapper {
  display: block;
  position: relative;
  height: 100%;
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;

  padding-left: $page-padding-mobile;
  padding-right: $page-padding-mobile;

  @include mq($from: tablet) {
    padding-left: $page-padding-tablet;
    padding-right: $page-padding-tablet;
  }
  @include mq($from: desktop) {
    padding-left: $page-padding-desktop;
    padding-right: $page-padding-desktop;
  }
  @include mq($from: wide) {
    padding-left: $page-padding-wide;
    padding-right: $page-padding-wide;
  }
}


/* Size Modifiers
======================================================================== */  

/**
 * 1. Standard font-size is still legible at this width.
 * 2. The standard max-width defined in the project variables
 * 3. Standard max-width with a little extra
 */
.l-wrapper--sm {
  max-width: 50rem; /*[1]*/
}

.l-wrapper--md {
  max-width: $content-max-width; /*[2]*/
}

.l-wrapper--lg {
  max-width: calc(#{$content-max-width} + #{$unit-xxl*4}); /*[3]*/
}

</style>
