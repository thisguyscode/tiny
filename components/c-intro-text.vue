<template>
  <section class="c-intro-text">
    <l-wrapper>
      <l-grid>
        <div class="_cell  u-2/5@tablet">
          <h2>{{ heading }}</h2>
        </div>
        <div class="_cell  u-3/5@tablet  u-text--lower-contrast">
          <slot></slot>
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
  },
  props: {
    heading: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/styles/imports";

  .c-intro-text {
    margin-bottom: $unit-xxl;
  }

</style>
