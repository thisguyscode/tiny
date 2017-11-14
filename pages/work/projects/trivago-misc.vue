<template>
  <section>


    <!-- MOON -->
    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Logo Collages</h1>
        <p class="o-text o-text--paragraph">As I pretty much suck at illustration the collage on the left was actually something of an achievement for me. It was an illustration for trivago's team in the Dusseldorf marathon. On the right is an illustration for an onboarding card.</p>
      </l-wrapper>
    </div>

    <!-- 1 -->
    <c-box :border="true" :filled="true" :padded="true" class="collage-image-wrapper">
      <l-wrapper size="lg">
        <div class="o-grid o-grid--xl o-grid--middle">
          <div class="o-grid__cell u-1/2@tablet">
            <c-image
              class="collage-image"
              :imageSrc="'trivago/misc/marathon.png'"
            />
          </div>
          <div class="o-grid__cell u-1/2@tablet">
            <c-image
              class="collage-image"
              :imageSrc="'trivago/misc/onboarding.png'"
            />
          </div>
        </div>
      </l-wrapper>
    </c-box>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Academy Poster</h1>
        <p class="o-text o-text--paragraph">I really enjoyed this one. It was a quiet week in the office, and one of trivago's frequent 'Academy' events was coming up, so I threw this minimal poster together.</p>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="sm">
        <c-image
          :imageSrc="'trivago/misc/academy.jpg'"
        />
      </l-wrapper>
    </c-box>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Documents Galore</h1>
        <p class="o-text o-text--paragraph">I was the go-to designer at trivago for internal docs - I asked for that responsibility. Having the occasional 'mundane' task is a great relief from the usual design work, and everything has its own challenges. I composed a lot of documents while I was at trivago.</p>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg">
        <c-image
          :imageSrc="'trivago/misc/documents.png'"
        />
      </l-wrapper>
    </c-box>
    
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.collage-image-wrapper {
  background-color: $neutral-100;
}
.collage-image {
  padding: $unit-xl;
  @include mq($from: tablet) {
    padding: $unit-xxl;
  }
}
</style>
