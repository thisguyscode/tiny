<template>
  <footer class="c-footer" :style="'background-color:' + this.$store.state.currentColor">
    <small class="c-footer__text o-text o-text--sm" :class="textClass">
      <span class="">Made by </span>
      <span class="c-footer__name">Jamie Mitchell</span>
    </small>
  </footer>
</template>

<script>
import detectContrast from '~/utils/detectContrast'
export default {
  computed: {
    textClass: function () {
      return 'c-footer__text--' + detectContrast(this.$store.state.currentColor)
    }
  }
}
</script>

<style lang="scss" scoped>

  .c-footer {
    color: contrasting-color($clr-primary, $darkest, lightest);
    padding-top: $unit-md;
    padding-bottom: $unit-md;
    background-color: $clr-primary;

    // @include mq($from: tablet) {
    //   padding-top: $page-padding-tablet;
    //   padding-bottom: $page-padding-tablet;
    // }
    // @include mq($from: desktop) {
    //   padding-top: $page-padding-desktop;
    //   padding-bottom: $page-padding-desktop;
    // }
    // @include mq($from: wide) {
    //   padding-top: $page-padding-wide;
    //   padding-bottom: $page-padding-wide;
    // }
  }
  .c-footer__text {
    opacity: .7;
  }

  .c-footer__text--light {
    color: $lightest;
  }

  .c-footer__text--dark {
    color: $darkest;
  }

  .c-footer__name {
    font-weight: $font-weight-bold;
  }

</style>
