<template>
  <div class="c-baselines o-liner"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
/* ========================================================================
  # SCOPED STYLES
======================================================================== */


/* Variables
======================================================================== */
$baseline-size: 1;
$background-size: $rhythm / 2;
$baseline-color: $neutral-90;



/* Base class
======================================================================== */
.c-baselines {
  pointer-events: none;
  transform: translateZ(0);
  background-size: 100% $background-size;
  background-repeat: repeat-y;
  background-position: 0 0;
  background-image: linear-gradient(
    to bottom,
    $baseline-color $baseline-size + px,
    transparent $baseline-size + px,
    transparent
  );
}

		
</style>
