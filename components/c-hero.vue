<template>
  <div class="c-hero">
    <l-wrapper>
      <l-grid horizontal="right">
        <div class="_cell  u-3/5@desktop">
          <slot></slot>
        </div>
      </l-grid>
    </l-wrapper>
  </div>
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
  @import "~assets/styles/imports";

  .c-hero {
    text-align: right;
    background-color: rgba($neutral-100,.5);
    padding-top: $unit-xxl*2;
    padding-bottom: $unit-xxl*2;
    box-shadow: inset 0 -1px 0 0 $neutral-80;
  }

</style>
