<template>
  
  <section id="page-top" class="page">

    <!-- <div class="overlay-wrapper">
      <div class="overlay" ref="overlay">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div> -->

    <c-gridlines></c-gridlines>
    <c-baselines></c-baselines>

    <c-site-header></c-site-header>
    
    <nuxt/>

    <c-footer></c-footer>

  </section>
  
</template>

<script>
import cGridlines from '~/components/c-gridlines'
import cSiteHeader from '~/components/c-site-header'
import cBaselines from '~/components/c-baselines'
import cFooter from '~/components/c-footer'
import lWrapper from '~/components/layout/l-wrapper'
import lMainContent from '~/components/layout/l-main-content'

export default {
  scrollToTop: false,
  components: {
    cGridlines,
    cSiteHeader,
    cBaselines,
    cFooter,
    lWrapper,
    lMainContent
  }
}
</script>

<style lang="scss" scoped>
  
  // Import variables and global settings
  @import "~assets/styles/imports";

  .l-main-content {
    
  }
  .page {
    position: relative;
    overflow: hidden;
  }

  $animation-settings: 1s steps(24, start) forwards;
  
  .overlay-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    z-index: 9998
  }

  .overlay {
    position: absolute;
    width: 100%;
    // top: $unit-sm;
    left: 0;
    animation: tick-tock $animation-settings;

    > span {
      animation: tick-tock-fade .3s .7s forwards;
      height: $unit-sm;
      display: block;
      width: 100%;
      z-index: -1;
    }
    > span:nth-of-type(1) {
      background-color: rgba($neutral-00, .1);
    }
    > span:nth-of-type(2) {
      background-color: rgba($neutral-00, .3);
    }
    > span:nth-of-type(3) {
      background-color: rgba($neutral-00, .5);
    }
    > span:nth-of-type(4) {
      background-color: rgba($neutral-00, .7);
    }
    > span:nth-of-type(5) {
      background-color: rgba($clr-primary, 1);
      // box-shadow: inset 0 -2px 0 0 $clr-primary;
    }
    
    &:after {
      content: '';
      position: absolute;
      top: $unit-sm*5;
      left: 0;
      width: 100%;
      display: block;
      height: 10000vh;
      background-color: $neutral-95;
      animation: tick-tock-fade .3s .7s forwards;
    }
  }
 
  @keyframes tick-tock {
    from {
      transform: translateY(0) translateZ(0);
    }
    to {
      transform: translateY($unit-sm*48) translateZ(0);
    }
  }
  @keyframes tick-tock-fade {
    0% {
      opacity: 100%;
    }
    100% {
      opacity: 0;
    }
  }
    
</style>
