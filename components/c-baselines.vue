<template>
  <div
    class="c-baselines o-liner"
    :class="{
      'c-baselines--inverse': this.inverse === true,
      'c-baselines--heavy': this.heavy === true
    }">
  </div>
</template>


<script>
export default {
  props: {
    inverse: {
      type: Boolean,
      default: false
    },
    heavy: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style lang="scss" scoped>

/* Variables
======================================================================== */
$baseline-size: 1;
$background-size: $rhythm / 2;

$baseline-color: rgba($neutral-00, .08);
$inverse-color: rgba($neutral-100, .08);
$heavy-color: rgba($neutral-00, .4);


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

.c-baselines--inverse {
  @if ($show-baseline == true) {
    background-image: linear-gradient(
      to bottom,
      $inverse-color $baseline-size + px,
      transparent $baseline-size + px,
      transparent
    );
  }
}

// I think this is only used on the 'tests/vr' page
.c-baselines--heavy {
  @if ($show-baseline == true) {
    background-image: linear-gradient(
      to bottom,
      $heavy-color $baseline-size + px,
      transparent $baseline-size + px,
      transparent
    );
  }
}

		
</style>
