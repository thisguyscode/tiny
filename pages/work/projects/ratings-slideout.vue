<template>
  <section>
    <section>
      <h3 class="o-heading o-heading--gamma">Desktop</h3>

      <c-box :border="true" :filled="true">
        <l-height-wrapper
          :tiny="15"
          :tablet="20"
          :desktop="20"
          :wide="20">
            <c-image
              :imageSrc="'trv-rating-overview-desktop.png'"
            />
        </l-height-wrapper>
      </c-box>

      <c-box :border="true" :filled="true">
        <l-height-wrapper
          :tiny="15"
          :tablet="20"
          :desktop="20"
          :wide="20">
            <c-image
              fit="contain"
              :imageSrc="'trv-rating-overview-limited-desktop.png'"
            />
        </l-height-wrapper>
      </c-box>

      <c-box :border="true" :filled="true">
        <l-height-wrapper
          :tiny="35"
          :mobile="55"
          :tablet="60"
          :desktop="30"
          :wide="30"
          class="u-1/2@desktop">
            <c-image
              position="top-middle"
              :imageSrc="'trv-hotel-test-desktop.png'"
            />
        </l-height-wrapper>
        <l-height-wrapper
          :desktop="30"
          :wide="30"
          class="u-1/2@desktop u-hide-tablet">
            <c-image
              position="bottom-middle"
              :imageSrc="'trv-hotel-test-desktop.png'"
            />
        </l-height-wrapper>
      </c-box>

      <c-box :border="true" :filled="true">
        <l-height-wrapper
          :tiny="15"
          :tablet="20"
          :desktop="30"
          :wide="40">
            <c-image
              position="top-middle"
              :imageSrc="'trv-meta-desktop.png'"
            />
        </l-height-wrapper>
      </c-box>

    </section>

    <section>
      <h3 class="o-heading o-heading--gamma">Mobile</h3>
      
      <c-box :border="true" :filled="true">
        <l-height-wrapper
          class="u-1/2@tablet"
          :tiny="50"
          :mobile="55"
          :tablet="55"
          :desktop="60"
          :wide="60">
            <c-image
              fit="contain"
              :imageSrc="'trv-ratings-mobile.png'"
            />
        </l-height-wrapper>
        <l-height-wrapper
          class="u-1/2@tablet"
          :tiny="25"
          :mobile="30"
          :tablet="55"
          :desktop="60"
          :wide="60">
            <c-image
              fit="contain"
              :imageSrc="'trv-meta-mobile.png'"
            />
        </l-height-wrapper>
      </c-box>

    </section>

  </section>
</template>

<script>
import lHeightWrapper from '~/components/layout/l-height-wrapper'
import cBox from '~/components/c-box'
export default {
  components: {
    cBox,
    lHeightWrapper
  }
}
</script>

<style lang="scss">
</style>
