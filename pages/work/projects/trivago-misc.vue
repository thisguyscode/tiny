<template>
  <section>


    <!-- MOON -->
    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">The Devil's in the Detail</h1>
        <p class="o-text o-text--paragraph">Banners were a great lesson in how anal modern web designers need to be. Brand identity, pixel-pushing, image optimization and process automation, all come together to make even the most simple of banner collections.</p>
      </l-wrapper>
    </div>

    <!-- 1 -->
    <c-box :border="true" :filled="true" :padded="true" class="collage-image-wrapper">
      <l-wrapper size="lg">
        <l-grid spacing="xl" vertical="middle">
          <div class="l-grid__cell u-1/2@tablet">
            <c-image
              class="collage-image"
              :imageSrc="'trivago/misc/marathon.png'"
            />
          </div>
          <div class="l-grid__cell u-1/2@tablet">
            <c-image
              class="collage-image"
              :imageSrc="'trivago/misc/onboarding.png'"
            />
          </div>
        </l-grid>
      </l-wrapper>
    </c-box>

    <!-- MOON -->
    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">The Devil's in the Detail</h1>
        <p class="o-text o-text--paragraph">Banners were a great lesson in how anal modern web designers need to be. Brand identity, pixel-pushing, image optimization and process automation, all come together to make even the most simple of banner collections.</p>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="sm">
        <c-image
          :imageSrc="'trivago/misc/academy.jpg'"
        />
      </l-wrapper>
    </c-box>

    <!-- MOON -->
    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">The Devil's in the Detail</h1>
        <p class="o-text o-text--paragraph">Banners were a great lesson in how anal modern web designers need to be. Brand identity, pixel-pushing, image optimization and process automation, all come together to make even the most simple of banner collections.</p>
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
