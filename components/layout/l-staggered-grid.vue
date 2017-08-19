<template>
  <section class="l-staggered-grid">
    <l-wrapper>
      <div class="l-grid l-grid--flush l-grid--between">
        <div class="l-grid__cell  u-1/5">
          Item
        </div>
        <div class="l-grid__cell  u-1/5">
          Item
        </div>
        <div class="l-grid__cell  u-1/5">
          Item
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
  }
}
</script>

<style>
  
</style>
