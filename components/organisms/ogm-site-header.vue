<template>
<div class="ogm-site-header">

  <mlc-glasses></mlc-glasses>
  
  <!-- name -->
  <div class="__name">
    <img src="~assets/images/logo-name.svg"/>
  </div>
  
  <!-- tagline -->
  <h2 class="__tagline  u-text--low-contrast">digital interface designer</h2>

  <mlc-site-nav :isStyled="contentReached"></mlc-site-nav>

</div>

</template>

<script>
import mlcSiteNav from '~components/molecules/mlc-site-nav'
import mlcGlasses from '~components/molecules/mlc-glasses'

export default {
  scrollToTop: false,
  components: {
    mlcSiteNav,
    mlcGlasses
  },
  props: {
    contentReached: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style lang="scss" scoped>

/* NOTE
** There are various styles being added inline to the glasses as they are
** scrolled past. These styles are removed once the element reaches the end
** of the transition (in both directions).
*/

/* Import project settings
   ====================================================================== */
@import "~assets/styles/imports/imports";


/* Local variables
   ====================================================================== */
$name-max-width: 292px;


/* Base component class
   ====================================================================== */
.ogm-site-header {
  @include inner-border (bottom, 1px, high);
  z-index: z("site-header", "base");
  position: relative;
  background-color: $neutral-00;
  text-align: center;
  padding: $unit-xxl $unit-md;

  @include mq($from: tablet) {
    padding: $unit-xxl;
  }
  
  @include mq($from: tablet) {
    padding: $unit-xxl*2;
  }
}


/* Name
   ====================================================================== */
.__name {
  width: $name-max-width/2;
  min-height: $unit-xxl;
  margin-left: auto;
  margin-right: auto;
  // margin-bottom: $unit-md;

  @include mq($from: desktop) {
    min-height: $unit-xxl*2;
    width: $name-max-width;
  }

}


/* Tagline
   ====================================================================== */
.__tagline {
  @include vr($font-display, $font-size-lg);
  margin-bottom: 0;

  @include mq($from: desktop) {
    @include vr($font-display, $font-size-xl);
    margin-bottom: $unit-xl;
  }
}

</style>
