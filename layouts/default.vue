<template>
  
  <section id="page-top">
    <div class="c-grid">
      <div class="l-wrapper  u-fill-height">
        <div class="l-grid l-grid--flush  u-fill-height">
          <div class="c-grid__column  l-grid__cell u-1/5"></div>
          <div class="c-grid__column  l-grid__cell u-1/5"></div>
          <div class="c-grid__column  l-grid__cell u-1/5"></div>
          <div class="c-grid__column  l-grid__cell u-1/5"></div>
          <div class="c-grid__column  l-grid__cell u-1/5"></div>
        </div>
      </div>
    </div>

    <nuxt/>

  </section>
  
</template>

<script>
export default {
  scrollToTop: false,
  components: {
  },
  data: () => {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/imports";

.c-grid {
  z-index: z("grid", "base");
  position: absolute;
  width: 100%;
  height: 100%;
}
.c-grid__column {
  box-shadow: inset -1px 0 0 $grid-lines-color;
  height: 100%;

  &:first-of-type {
    box-shadow: inset -1px 0 0 $grid-lines-color, inset 1px 0 0 $grid-lines-color;
  }
}

</style>
