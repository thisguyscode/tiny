<template>
  <div class="c-testimonials">
    <h2 class="_heading">Testimonials</h2>
    <l-grid list>
      <li
        class="_entry _cell"
        v-for="testimonial in testimonials" :key="testimonial.id"
        @click="change(testimonial)">
        <l-grid>
          <div class="_image-cell _cell u-1/5">
            <img class="_image" :src="require('~/assets/images/' + testimonial.character)">
          </div>
          <div class="_cell u-2/5@mobile u-1/5@tablet">
            <p class="_detail _name">{{ testimonial.name }}</p>
            <p class="_detail  u-text--low-contrast">{{ testimonial.role }}</p>
            <p class="_detail  u-text--low-contrast">@{{ testimonial.company }}</p>
          </div>
          <div class="_cell u-2/5@mobile u-3/5@tablet">
            <p class="_quote"><span class="_quote-mark open">&ldquo;</span>{{ testimonial.quote }}<span class="_quote-mark close">&rdquo;</span></p>
          </div>
        </l-grid>
      </li>
    </l-grid>
  </div>  
</template>

<script>
import lGrid from '~/components/layout/l-grid'
export default {
  components: {
    lGrid
  },
  props: {
    testimonials: {
      type: Array,
      required: true
    }
  },
  methods: {
    change: function (to) {
      console.log(to)
    }
  }
}
</script>

<style lang="scss" scoped>
  // Import variables and global settings
  @import "~assets/styles/imports";

  .c-testimonials {
    text-align: left;
  }
  ._image-cell {
    position: relative;
  }
  ._name {
    color: $red;
    font-weight: $font-weight-semi;
  }
  ._heading {
    margin-bottom: $paragraph-trailer;
  }
  ._image {
    width: $unit-xl;
    height: $unit-xl;
    object-fit: cover;
    border-radius: 100%;

    @include mq($from: mobile) {
      position: absolute;
      top: 0;
      left: 0;
    }
    @include mq($from: tablet) {
      width: $unit-xxl;
      height: $unit-xxl;
    }
  }

  ._detail {
    @include vr($font-body, $font-size-sm);
    @include mq($from: desktop) {
      @include vr($font-body, $font-size-md);
    }
  }
  ._quote {
    @include vr($font-body, $font-size-lg);
    font-style: italic;
    position: relative;
  }

  ._quote-mark {
    font-family: $font-display;
    font-size: $font-size-xxxl;
    line-height: 0;
    display: inline-block;
    color: $neutral-80;
    &.open {
      position: absolute;
      top: $unit-sm;
      left: -$unit-md;
    }
    &.close {
      top: auto;
      position: relative;
      top: $unit-sm;
      right: -$unit-xs;
    }
  }

  ._entry {
    margin-bottom: $unit-md;
    @include mq($from: tablet) {
      margin-bottom: $unit-xl;
    }
  }
</style>
