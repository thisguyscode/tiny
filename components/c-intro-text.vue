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
export default {
  props: {
    heading: {
      type: String,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>

/* Base Class
======================================================================== */
.c-intro-text {
  margin-bottom: $unit-xxl;
}

</style>
