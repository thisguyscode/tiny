<template>
  <h1 class="c-logo  o-heading u-margin-bottom-none" :class="baseClassObject">
    <span class="c-logo__decoration-text">./</span>
    <span class="c-logo__main-text">tiny</span>
    <span class="c-logo__decoration-text">/</span>
  </h1>
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
    baseClassObject: function () {
      return {
        'o-heading--zeta': this.size === 'sm',
        'o-heading--delta': this.size === 'md',
        'o-heading--gamma': this.size === 'lg'
      }
    }
  }
}
</script>


<style lang="scss" scoped>
/* ========================================================================
  # SCOPED STYLES
======================================================================== */

/* Global variable dependencies
======================================================================== */

/* Base class
======================================================================== */
.c-logo {

}

/* Child classes
======================================================================== */
.c-logo__decoration-text {
  color: $neutral-60;
}
.c-logo__main-text {
  color: $neutral-00;
}
</style>
