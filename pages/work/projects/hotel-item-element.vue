<template>
  <section>
    
    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Iterate, Iterate & Iterate Some More</h1>
        <p class="o-text o-text--paragraph">I no longer have access to most of the images from this project as it was a while ago now. So here are just a couple of shots to give you an idea. We (the trivago design team) were tasked with redesigning the hotel item element which populates the results list. The images below show the compositions that I came up with. Ultimately a combination of ideas from everyone's work was used and many versions were (A/B) tested.</p>
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

    <c-box :border="true" :padded="true" class="desktop-box">
      <l-wrapper size="lg" class="u-text--align-center">
        <div class="o-grid o-grid--flush">
          <div class="o-grid__cell u-1/2@tablet">
            <c-image
              :imageSrc="'trivago/hotel-item/item-evolution-desktop-02.jpg'"
            />
          </div>
          <div class="o-grid__cell u-1/2@tablet">
            <c-image
              :imageSrc="'trivago/hotel-item/item-evolution-desktop-01.jpg'"
            />
          </div>
        </div>
      </l-wrapper>
    </c-box>

  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.desktop-box {
  background-color: #e6e6e6;
}
</style>
