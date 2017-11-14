<template>
  <div class="c-hero">
    <c-baselines></c-baselines>
    <c-image
      v-if="bgImageSrc"
      class='c-hero__background-image  o-liner'
      :imageSrc="bgImageSrc"
      :class="bgImageClass"
      :altText="bgImageAltText"
      :style="'opacity: ' + bgImageOpacity"
      :lazy="false"
      fit="cover"
    />
    <l-wrapper>
      <div class="c-hero__text-wrapper u-4/5@tablet u-3/5@desktop">
        <slot></slot>
      </div>
    </l-wrapper>
  </div>
</template>

<script>
export default {
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

/* Variables
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
  color: $neutral-00;
  min-height: $unit-xxl*2;

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
  float: right;
  padding-top: $unit-xxl;
  padding-bottom: $unit-xxl;
}

</style>
