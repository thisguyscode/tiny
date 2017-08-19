<template>
  <section class="c-intro-text">
    <l-wrapper>
      <div class="l-grid  l-grid--flush">
        <div class="l-grid__cell  u-2/5@tablet">
          <h2>{{ heading }}</h2>
        </div>
        <div class="l-grid__cell  u-3/5@tablet  u-text--lower-contrast">
          <slot></slot>
        </div>
      </div>
    </l-wrapper>
  </section>
</template>

<script>
import lWrapper from '~/components/layout/l-wrapper'
export default {
  components: {
    lWrapper
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
    padding-top: $unit-xxl;
    padding-bottom: $unit-xxl;
  }

</style>
