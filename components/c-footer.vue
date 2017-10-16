<template>
  <footer class="c-footer">
    <small class="u-text--low-contrast"><span class="u-text--lower-contrast">Made by </span>Jamie Mitchell</small>
  </footer>
</template>

<script>
</script>

<style lang="scss" scoped>
  
  
  

  .c-footer {
    padding-top: $page-padding-mobile;
    padding-bottom: $page-padding-mobile;

    @include mq($from: tablet) {
      padding-top: $page-padding-tablet;
      padding-bottom: $page-padding-tablet;
    }
    @include mq($from: desktop) {
      padding-top: $page-padding-desktop;
      padding-bottom: $page-padding-desktop;
    }
    @include mq($from: wide) {
      padding-top: $page-padding-wide;
      padding-bottom: $page-padding-wide;
    }
  }

</style>
