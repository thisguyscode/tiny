<template>
  <div class="l-header-primary">
    <div class="_actual" ref="headerPrimary">
      <slot></slot>
    </div>
    <div class="_placeholder"></div>
  </div>
</template>
<script>
export default {
  mounted () {
    this.$store.commit('updatePrimaryNavHeight', this.$refs.headerPrimary.clientHeight)
  }
}
</script>

<style lang="scss" scoped>
  
  // Import variables and global settings
  @import "~assets/styles/imports";
  
  .l-header-primary {
    text-align: left;
    z-index: 9000;
    position: relative;
    margin-top: -1px;
  }

  ._actual,
  ._placeholder {
    height: $header-primary-height;
  }

  ._actual {
    position: fixed;
    z-index: 9000;
    top: 0;
    left: 0;
    width: 100%;
  }
  
  ._placeholder {
    display: block;
  }

</style>
