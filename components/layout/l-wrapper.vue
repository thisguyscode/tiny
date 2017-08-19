<template>
  <div class="l-wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  
  // Import variables and global settings
  @import "~assets/styles/imports";
  
  .l-wrapper {
    display: block;
    position: relative;
    max-width: $content-max-width;
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

</style>
