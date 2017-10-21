<template>
  <div class="c-gridlines o-liner">
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
  
  .c-gridlines {
    pointer-events: none;
  }

  ._column {
    height: 100%;
    @include mq($from: tablet) {
      box-shadow: inset 1px 0 0 $grid-lines-color;
      &:last-of-type {
        box-shadow: inset -1px 0 0 $grid-lines-color, inset 1px 0 0 $grid-lines-color;
      }
    }

  }

</style>
