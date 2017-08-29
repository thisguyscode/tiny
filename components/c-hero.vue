<template>
  <div class="c-hero">
    <img 
      v-if="bgImageSrc"
      class="_background-image"
      :class="bgImageClass"
      :style="'opacity: ' + bgImageOpacity"
      :src="require('~/assets/images/' + bgImageSrc)">
    <l-wrapper>
      <l-grid horizontal="right">
        <div class="_text-wrapper  _cell  u-3/5@desktop">
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
  
  // Import variables and global settings
  @import "~assets/styles/imports";

  .c-hero {
    text-align: right;
    overflow: hidden;
    background-color: rgba($neutral-100,.5);
    padding-top: $unit-xxl;
    padding-bottom: $unit-xxl;
    min-height: $unit-xxl*2;
    box-shadow: inset 0 -1px 0 0 $neutral-80;
    position: relative;
    @include mq($from: tablet) {
      min-height: $unit-xxl*5;
    }
  }

  ._background-image {
    position: absolute;
    opacity: .4;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: 50% 50%;
  }

  ._background-image--top {
    object-position: 50% 0;
  }

  ._background-image--bottom {
    object-position: 50% 100%;
  }

  ._text-wrapper {
    text-shadow: 0 2px 10px rgba($neutral-95, .7);
  }

</style>
