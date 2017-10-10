<template>
  <div class="c-baselines"></div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  // Import variables and global settings
  @import "~assets/styles/imports";

  $baseline-size: 1;
  $background-size: $px-line-height;
  $overlay-clr: $neutral-80;

  // Create a mixin for showing the baseline
  .c-baselines {
    // Sets a baseline every half rhythm.
    // animation: baseline 4s forwards;
    background-size: 100% ($background-size + px);
    background-repeat: repeat-y;
    background-position: 0 0;
    background-image: linear-gradient(
      $neutral-90,
      transparent ($baseline-size) + px,
      transparent ($background-size / 2 - $baseline-size) + px,
      $neutral-90 ($background-size / 2 - $baseline-size) + px,
      $neutral-90 ($background-size / 2) + px,
      transparent ($background-size / 2) + px,
      transparent ($background-size - $baseline-size) + px,
      $neutral-90 ($background-size - $baseline-size) + px,
      $neutral-90 ($background-size ) + px
    );
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    transform: translateZ(0);
    // background-color: red;
    // &:after,
    &:before {
      content: '';
      pointer-events: none;
      animation: fader 2s forwards;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      background-position: 0 0;
      background-size: 0 ($background-size + px);
      background-repeat: repeat-y;
      transform: translateZ(0);
    }
    &:before {
      right: 0;
      background-image: linear-gradient(
        $overlay-clr,
        transparent ($baseline-size) + px,
        transparent ($background-size / 2 - $baseline-size) + px,
        $overlay-clr ($background-size / 2 - $baseline-size) + px,
        $overlay-clr ($background-size / 2) + px,
        transparent ($background-size / 2) + px,
        transparent ($background-size - $baseline-size) + px,
        $overlay-clr ($background-size - $baseline-size) + px,
        $overlay-clr ($background-size) + px
      );
    }
    // &:after {
    //   right: 33%;
    //   background-image: linear-gradient(
    //     $yellow,
    //     transparent ($baseline-size) + px,
    //     transparent ($background-size / 2 - $baseline-size) + px,
    //     $yellow ($background-size / 2 - $baseline-size) + px,
    //     $yellow ($background-size / 2) + px,
    //     transparent ($background-size / 2) + px,
    //     transparent ($background-size - $baseline-size) + px,
    //     $yellow ($background-size - $baseline-size) + px,
    //     $yellow ($background-size) + px
    //   );
    // }
  }

  @keyframes fader {
    0% {
      background-position: 0 0;
      background-size: 0 ($background-size + px);
    }
    // 20% {
    //   // background-position: 0 0;
    //   // background-size: 20% ($background-size + px);
    // }
    50% {
      background-size: 50% ($background-size + px);
    }
    // 90% {
    //   // background-size: 20% ($background-size + px);
    // }
    100% {
      background-position: 100% 0;
      background-size: 0 ($background-size + px);
    }
  }
</style>
