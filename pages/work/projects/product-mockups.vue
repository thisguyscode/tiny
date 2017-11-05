<template>
  <section>
    
    <!-- CRITEO -->
    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">T</h1>
        <p class="o-text o-text--paragraph">P</p>
      </l-wrapper>
    </div>

    <!-- 1 -->
    <c-box :border="true" :filled="true">
        <!-- <l-grid spacing="xl"> -->
          <!-- <div class="l-grid__cell"> -->
            <c-image
              fit="cover"
              :imageSrc="'socialcops/product-mockups/main.png'"
            />
          <!-- </div> -->
        <!-- </l-grid> -->
    </c-box>

  </section>
</template>

<script>
import cCode from '~/components/c-code'
export default {
  components: {
    cCode
  }
}
</script>

<style lang="scss" scoped>
</style>
