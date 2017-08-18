<template>
  <div class="l-header-primary">
    <div class="__inner">
      <slot></slot>
    </div>
    <div class="__placeholder"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  
  @import "~assets/styles/imports";
  
  .l-header-primary {
    padding-left: $unit-xxl;
    padding-right: $unit-xxl;
  }

  .__inner {
    height: $header-primary-height;
    position: fixed;
  }
  .__placeholder {
    height: $header-primary-height;
    display: block;
  }

</style>
