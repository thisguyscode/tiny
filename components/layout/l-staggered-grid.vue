<template>

  <section class="l-staggered-grid">
    <l-wrapper>
      <l-grid distribute="between">
        <div class="_cell  u-1/5">
          Item
        </div>
        <div class="_cell  u-1/5">
          Item
        </div>
        <div class="_cell  u-1/5">
          Item
        </div>
      </l-grid>
    </l-wrapper>
  </section>

</template>

<script>

  import lWrapper from '~/components/layout/l-wrapper'
  import lGrid from '~/components/layout/l-grid'
  export default {
    components: {
      lWrapper,
      lGrid
    }
  }

</script>

<style lang="scss" scoped>
  
  // Import variables and global settings
  

  .l-staggered-grid {
    //
  }

</style>
