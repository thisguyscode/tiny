<template>
  <div class="c-gridlines">
      <l-wrapper class="u-fill-height">
        <div class="l-grid l-grid--flush  u-fill-height">
          <div class="_column  l-grid__cell u-1/5"></div>
          <div class="_column  l-grid__cell u-1/5"></div>
          <div class="_column  l-grid__cell u-1/5"></div>
          <div class="_column  l-grid__cell u-1/5"></div>
          <div class="_column  l-grid__cell u-1/5"></div>
        </div>
      </l-wrapper>
    </div>
</template>

<script>
import lWrapper from '~/components/layout/l-wrapper'
export default {
  components: {
    lWrapper
  }
}
</script>

<style lang="scss" scoped>
  
  // Import variables and global settings
  

  .c-gridlines {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  ._column {
    box-shadow: inset -1px 0 0 $grid-lines-color;
    height: 100%;

    &:first-of-type {
      box-shadow: inset -1px 0 0 $grid-lines-color, inset 1px 0 0 $grid-lines-color;
    }
  }

</style>
