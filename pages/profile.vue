<template>

  <div class="p-profile">
    
    <div class="l-content">
      <div class="l-wrapper">

        <h1>profile</h1>
        <h2>profile</h2>
        <h3>profile</h3>
        <h4 class="u-margin-bottom">profile</h4>
        <p>Testing testing testing</p>
        <p>Testing testing testing</p>
      
      </div>

      <div class="_filler"></div>

    </div>
  </div>

</template>

<script>
  import cGridlines from '~/components/c-gridlines'
  export default {
    scrollToTop: false,
    layout: 'default',
    components: {
      cGridlines
    }
  }

</script>

<style lang="scss" scoped>
  @import "~assets/styles/imports";
  .p-profile {
    text-align: left;
  }

  ._filler {
    height: 2000px;
  }

  .l-content {
    position: relative;
    padding-top: $page-padding-mobile;
    
    @include mq($from: tablet) {
      padding-top: $page-padding-tablet;
    }
    @include mq($from: desktop) {
      padding-top: $page-padding-desktop;
    }
    @include mq($from: wide) {
      padding-top: $page-padding-wide;
    }
  }

</style>
