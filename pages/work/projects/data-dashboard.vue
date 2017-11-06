<template>
  <section>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">What Can I Say?</h1>
        <p class="o-text o-text--paragraph">Not much. I don't know if I can really say anything about this project as it's not yet live. I was responsible for producing the high-fidelity mockup of a national level data dashboard. The primary deliverable was a massive 80+ screen InVision prototype, but I think all I can share are the heavily censored screenshots below.</p>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg" class="u-text--align-center">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/data-dashboard/001.jpg'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg" class="u-text--align-center">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/data-dashboard/002.jpg'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg" class="u-text--align-center">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/data-dashboard/003.jpg'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg" class="u-text--align-center">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/data-dashboard/004.jpg'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

  </section>
</template>

<script>
import cDeviceFrame from '~/components/c-device-frame'
export default {
  components: {
    cDeviceFrame
  }
}
</script>

<style lang="scss" scoped>
</style>
