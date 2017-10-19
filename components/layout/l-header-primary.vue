<template>
  <div class="l-header-primary">
    <div class="l-header-primary__actual" ref="headerPrimary">
      <slot></slot>
    </div>
    <div class="l-header-primary__placeholder"></div>
  </div>
</template>
<script>
export default {
  mounted () {
    this.$store.commit('updatePrimaryNavHeight', this.$refs.headerPrimary.clientHeight)
  }
}
</script>

<style lang="scss">
  
  
  
  
  .l-header-primary {
    text-align: left;
    z-index: 9000;
    position: relative;
    margin-top: -1px;
  }

  .l-header-primary__actual,
  .l-header-primary__placeholder {
    height: $header-primary-height;
  }

  .l-header-primary__actual {
    position: fixed;
    z-index: 9000;
    top: 0;
    left: 0;
    width: 100%;
  }
  
  .l-header-primary__placeholder {
    display: block;
  }

</style>
