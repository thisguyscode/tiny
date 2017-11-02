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
  overflow: hidden;
  position: relative;
  display: block;
  margin-bottom: $unit-md;
  font-size: 0;
}



/* Style modifiers
======================================================================== */
.c-box--bordered {
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    box-shadow: inset 0 0 0 1px rgba($neutral-00, .2), 0 1px $neutral-70;
  }
}

.c-box--filled {
  background-color: $neutral-90;
}


/* Layout modifiers
======================================================================== */
.c-box--padded {
  padding: $unit-md;
  @include mq($from: mobile) {
    padding: $unit-lg;
  }
  @include mq($from: tablet) {
    padding: $unit-xl;
  }
}

</style>
