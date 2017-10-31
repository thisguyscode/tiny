<template>
  <div class="c-hero">
    <c-image
      v-if="bgImageSrc"
      :lazy="false"
      class='c-hero__background-image  o-liner'
      fit="cover"
      :class="bgImageClass"
      :style="'opacity: ' + bgImageOpacity"
      :imageSrc="bgImageSrc"
    />
    <l-wrapper>
      <l-grid horizontal="right">
        <div class="c-hero__text-wrapper  l-grid__cell  u-4/5@tablet u-3/5@desktop">
          <slot></slot>
        </div>
      </l-grid>
    </l-wrapper>
  </div>
</template>

<script>
import lWrapper from '~/components/layout/l-wrapper'
import lGrid from '~/components/layout/l-grid'
export default {
  components: {
    lWrapper,
    lGrid
  },
  props: {
    bgImageSrc: {
      type: String,
      required: false
    },
    bgImagePosition: {
      type: String,
      required: false
    },
    bgImageOpacity: {
      type: Number,
      required: false
    }
  },
  computed: {
    image: function () {
      return require('~/assets/images/' + this.bgImageSrc)
    },
    bgImageClass: function () {
      return {
        '_background-image--top': this.bgImagePosition === 'top',
        '_background-image--bottom': this.bgImagePosition === 'bottom'
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

// Sizes
$unit-xxl:        $unit-xxl;

// Colors
$lighest:         $lightest;
$darkest:         $darkest;
$neutral-80:      $neutral-80;


/* Local variables
======================================================================== */
$background-color: $semi-transparent-background;
$border: inset 0 -1px 0 0 $neutral-00;
  

/* Base class
======================================================================== */
.c-hero {
  position: relative;
  text-align: right;
  overflow: hidden;
  background-color: $background-color;
  box-shadow: $border;
  // color: contrasting-color($background-color, $lightest, $darkest);
  color: $neutral-00;
  min-height: $unit-xxl*2;
  // margin-bottom: -1px;
  // margin-top: -1px;

  @include mq($from: tablet) {
    min-height: $unit-xxl*5;
  }
}


/* Child classes
======================================================================== */
.c-hero__background-image {
  opacity: .4;
}

.c-hero__text-wrapper {
  padding-top: $unit-xxl;
  padding-bottom: $unit-xxl;
  // text-shadow: 0 2px 10px rgba($darkest, .7);
}

</style>
