<template>
  <div class="l-wrapper" :class="baseClassObject">
    <slot></slot>
  </div>
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
        'l-wrapper--sm': this.size === 'sm',
        'l-wrapper--md': this.size === 'md',
        'l-wrapper--lg': this.size === 'lg'
      }
    }
  }
}
</script>

<style lang="scss" scoped>  
.l-wrapper {
  display: block;
  position: relative;
  height: 100%;
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;

  padding-left: $page-padding-mobile;
  padding-right: $page-padding-mobile;

  @include mq($from: tablet) {
    padding-left: $page-padding-tablet;
    padding-right: $page-padding-tablet;
  }
  @include mq($from: desktop) {
    padding-left: $page-padding-desktop;
    padding-right: $page-padding-desktop;
  }
  @include mq($from: wide) {
    padding-left: $page-padding-wide;
    padding-right: $page-padding-wide;
  }
}

.l-wrapper--sm {
  max-width: 50rem;
}

.l-wrapper--md {
  max-width: $content-max-width;
}

.l-wrapper--lg {
  max-width: calc(#{$content-max-width} + #{$unit-xxl*4});
}

</style>
