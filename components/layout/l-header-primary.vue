<template>
  <div class="l-header-primary" ref="headerPrimary">
    <div class="_actual">
      <slot></slot>
    </div>
    <div class="_placeholder"></div>
  </div>
</template>

<style lang="scss" scoped>
  
  // Import variables and global settings
  @import "~assets/styles/imports";
  
  .l-header-primary {
    text-align: left;
  }

  ._actual,
  ._placeholder {
    height: $header-primary-height;
  }

  ._actual {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
  }
  
  ._placeholder {
    display: block;
  }

</style>
