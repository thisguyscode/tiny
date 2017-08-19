<template>
  <div class="c-hero">
    <l-wrapper>
      <slot></slot>
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
@import "~assets/styles/imports";

  .c-hero {
    text-align: right;
    background-color: rgba($neutral-100,.5);
    padding-top: $unit-xxl*2;
    padding-bottom: $unit-xxl*2;
    box-shadow: inset 0 -1px 0 0 $neutral-80;
  }

</style>
