<template>
  <div class="c-box" :class="baseClassObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    border: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: false
    },
    filled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    baseClassObject: function () {
      return {
        'c-box--bordered': this.border === true,
        'c-box--padded': this.padded === true,
        'c-box--filled': this.filled === true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/* ========================================================================
  # SCOPED STYLES
======================================================================== */

/* Variables
======================================================================== */



/* Base class
======================================================================== */
.c-box {
  // overflow: hidden;
  position: relative;
  display: block;
  font-size: 0;
}


/* Child classes
======================================================================== */
.c-box__caption {
  color: $neutral-30;
  text-align: center;
  display: block;
}


/* Style modifiers
======================================================================== */
.c-box--bordered {
  &:after {
    pointer-events: none;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 0 -1px $neutral-70, inset 0 -1px $neutral-70, 0 1px $neutral-100;
  }
}

.c-box--filled {
  background-color: $neutral-90;
}


/* Layout modifiers
======================================================================== */
.c-box--padded {
  padding-top: $unit-md;
  padding-bottom: $unit-md;
  @include mq($from: mobile) {
    padding-top: $unit-lg;
    padding-bottom: $unit-lg;
  }
  @include mq($from: tablet) {
    padding-top: $unit-xl;
    padding-bottom: $unit-xl;
  }
}
</style>
