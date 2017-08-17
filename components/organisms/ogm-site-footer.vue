<template>
  <div class="ogm-site-footer">
    <p class="__caption">Made with 
      <mlc-icon class="__icon" name="heart"></mlc-icon>
      by Jamie Mitchell
    </p>
  </div>
</template>

<script>
import mlcIcon from '~components/molecules/mlc-icon'
export default {
  components: {
    mlcIcon
  }
}
</script>

<style lang="scss" scoped>


/* NOTES
** None
*/

/* Import project settings
   ====================================================================== */
@import "~assets/styles/imports/imports";


/* Local variables
   ====================================================================== */


/* Base component class
   ====================================================================== */
.ogm-site-footer {
  padding: $unit-md;
  background-color: $neutral-100;
  color: $neutral-50;
  @include mq($from: desktop) {
    // padding: $unit-xxl*2 $unit-md;
  }
}

/* --
   ====================================================================== */

.__caption {
  @include vr($font-body, $font-size-sm);
  @include vr-reset;
}

.__icon {
  height: .8em;
}
  
</style>
