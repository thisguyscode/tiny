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
          :tiny="40"
          :mobile="60"
          :tablet="60"
          :desktop="60"
          :wide="60">
            <c-image
              position="top-middle"
              :imageSrc="'trv-hotel-test-desktop.png'"
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
              :imageSrc="'trv-meta-desktop.png'"
            />
        </l-height-wrapper>
      </c-box>
    </section>

    <section>
      <h3 class="o-heading o-heading--gamma">Mobile</h3>
      <div class="o-image-wrapper o-image-wrapper--16:9">
        <c-image
          fit="contain"
          position="center"
          :imageSrc="'trv-meta-mobile.png'"
        />
      </div>
      <div class="o-image-wrapper o-image-wrapper--16:9">
        <c-image
          fit="contain"
          :imageSrc="'trv-ratings-mobile.png'"
        />
      </div>
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
