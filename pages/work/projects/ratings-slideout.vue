<template>
  <section>
    <section>
      <h3 class="o-heading o-heading--gamma">Desktop</h3>
      <div class="o-image-wrapper o-image-wrapper--xl">
        <c-image
          :imageSrc="'trv-hotel-test-desktop.png'"
        />
      </div>
      <div class="o-image-wrapper o-image-wrapper--xl o-image-wrapper--padded">
        <c-image
          :makeResponsive="false"
          :imageSrc="'logo-gulp.png'"
        />
      </div>
      <div class="o-image-wrapper o-image-wrapper--xl o-image-wrapper--padded">
        <c-image
          :imageSrc="'trv-banners.png'"
        />
      </div>
      <div class="o-image-wrapper o-image-wrapper--xl o-image-wrapper--padded">
        <c-image
          :imageSrc="'trv-banners.png'"
        />
      </div>
    </section>
    <section>
      <h3 class="o-heading o-heading--gamma">Mobile</h3>
      <div class="o-image-wrapper o-image-wrapper--lg o-image-wrapper--padded">
        <c-image
          :imageSrc="'trv-banners.png'"
        />
      </div>
      <div class="o-image-wrapper o-image-wrapper--lg o-image-wrapper--padded">
        <c-image
          :imageSrc="'trv-banners.png'"
        />
      </div>
      <div class="o-image-wrapper o-image-wrapper--lg o-image-wrapper--padded">
        <c-image
          :imageSrc="'trv-banners.png'"
        />
      </div>
    </section>

  </section>
</template>

<script>
export default {
  components: {
    // lWrapper
  }
}
</script>

<style lang="scss">
</style>
