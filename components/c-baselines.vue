<template>
  <div class="c-baselines o-liner"></div>
</template>

<script>
export default {}
</script>

<style lang="scss">
/* ========================================================================
  # SCOPED STYLES
======================================================================== */


/* Variables
======================================================================== */
$baseline-size: 1;
$background-size: $rhythm / 2;
$baseline-color: rgba($neutral-00, .08);



/* Base class
======================================================================== */
.c-baselines {
  pointer-events: none;
  background-size: 100% $background-size;
  background-repeat: repeat-y;
  background-position: 0 0;
  @if ($show-baseline == true) {
    background-image: linear-gradient(
      to bottom,
      $baseline-color $baseline-size + px,
      transparent $baseline-size + px,
      transparent
    );
  }
}

		
</style>
