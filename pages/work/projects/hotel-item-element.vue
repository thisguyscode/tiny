<template>
  <section>
    
    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Iterate, Iterate & Iterate Some More</h1>
        <p class="o-text o-text--paragraph">I seem to have misplaced most of the images from this project as it was a while ago now. So here are just a couple of shots to give you an idea. We (the trivago design team) were tasked with redesigning the hotel item element which populates the results list. The images below show the compositions that I came up with. Ultimately a combination of ideas from everyone's work was used and many versions were (A/B) tested.</p>
      </l-wrapper>
    </div>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Mobile</h1>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true">
      <c-image
        :imageSrc="'trivago/hotel-item/item-evolution-mobile.jpg'"
      />
    </c-box>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Desktop</h1>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg" class="u-text--align-center">
        <l-grid>
          <div class="l-grid__cell u-1/2@tablet">
            <c-image
              :imageSrc="'trivago/hotel-item/item-evolution-desktop-02.jpg'"
            />
          </div>
          <div class="l-grid__cell u-1/2@tablet">
            <c-image
              :imageSrc="'trivago/hotel-item/item-evolution-desktop-01.jpg'"
            />
          </div>
        </l-grid>
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

<style>

</style>
