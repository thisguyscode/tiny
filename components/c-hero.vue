<template>
  <div class="c-hero">
    <l-wrapper>
      <c-image
        v-if="bgImageSrc"
        :lazy="false"
        class='_background-image'
        fit="cover"
        :class="bgImageClass"
        :style="'opacity: ' + bgImageOpacity"
        :imageSrc="bgImageSrc"
      />
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
  
  
  

  .c-hero {
    text-align: right;
    overflow: hidden;
    background-color: rgba($darkest,.5);
    min-height: $unit-xxl*2;
    box-shadow: inset 0 -1px 0 0 $neutral-80;
    position: relative;
    color: $lightest;
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
    padding-top: $unit-xxl;
    padding-bottom: $unit-xxl;
    text-shadow: 0 2px 10px rgba($darkest, .7);
  }

</style>
