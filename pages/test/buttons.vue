<template>
  <section class="p-buttons">
    <l-wrapper>
      <l-grid>
        
        
        <div class="l-grid__cell  u-1/5@tablet">
          
          <!-- Submit -->
          <h1 class="o-heading o-heading--gamma">Submit</h1>
          <c-button
            icon="eye"
            type="solid"
            :submit="true">
            Submit
          </c-button>
          <c-button
            icon="eye"
            type="ghost"
            :submit="true">
            Submit
          </c-button>

          <!-- Linked -->
          <h1 class="o-heading o-heading--gamma">Linked</h1>
          <c-button
            icon="eye"
            type="ghost"
            relativeLink="/test/vr/">
            Go to VR
          </c-button>
        </div>

        <!-- Spacer -->
        <div class="l-grid__cell u-1/5@tablet"></div>

        <!-- Regular -->
        <div class="l-grid__cell  u-1/5@tablet">
          <h1 class="o-heading o-heading--gamma">Sizes</h1>
          <c-button
            icon="lightbulb-o"
            type="ghost"
            size="sm">
            Small
          </c-button>
          <c-button
            icon="lightbulb-o"
            type="ghost"
            size="md">
            Medium
          </c-button>
          <c-button
            icon="lightbulb-o"
            type="ghost"
            size="lg">
            Large
          </c-button>
        </div>

        <!-- Spacer -->
        <div class="l-grid__cell u-1/5@tablet"></div>

        <!-- Variants -->
        <div class="l-grid__cell  u-1/5@tablet">
          <h1 class="o-heading o-heading--gamma">Variants</h1>
          <c-button
            icon="lightbulb-o"
            type="ghost"
            intent="go"
            size="sm">
            Go ghost
          </c-button>
          <c-button
            icon="lightbulb-o"
            type="solid"
            intent="go"
            size="md">
            Go solid
          </c-button>
          <c-button
            icon="lightbulb-o"
            type="ghost"
            intent="danger"
            size="lg">
            Danger ghost
          </c-button>
          <c-button
            icon="lightbulb-o"
            type="solid"
            intent="danger"
            size="lg">
            Danger solid
          </c-button>
          <c-button
            icon="lightbulb-o"
            type="ghost"
            intent="quiet"
            size="lg">
            Quiet ghost
          </c-button>
          <c-button
            icon="lightbulb-o"
            type="solid"
            intent="quiet"
            size="lg">
            Quiet solid
          </c-button>
        </div>

      </l-grid>
    </l-wrapper>

  </section>
</template>


<script>
import lGrid from '~/components/layout/l-grid'
import lWrapper from '~/components/layout/l-wrapper'
import cButton from '~/components/c-button'
export default {
  components: {
    cButton,
    lGrid,
    lWrapper
  }
}
</script>


<style lang="scss" scoped>
.p-buttons {
  text-align: left;
  padding-top: $unit-xxl;
  padding-bottom: $unit-xxl;
}

</style>
