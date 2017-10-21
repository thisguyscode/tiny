<template>
  <section class="c-intro-text">
    <l-wrapper>
      <l-grid>
        <div class="l-grid__cell  u-2/5@tablet">
          <h2 class="o-heading o-heading--gamma">{{ heading }}</h2>
        </div>
        <div class="l-grid__cell  u-3/5@tablet  u-text--lower-contrast">
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
  

  .c-intro-text {
    margin-bottom: $unit-xxl;
  }

</style>
