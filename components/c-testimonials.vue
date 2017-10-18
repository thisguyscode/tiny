<template>
  <div class="c-testimonials">
    <!-- <h2 class="o-heading o-heading--beta">Testimonials</h2> -->
    <l-grid list>
      <li
        class="_entry _cell"
        v-for="testimonial in testimonials" :key="testimonial.id"
        @click="change(testimonial)">
        <l-grid>
          <div class="_image-cell _cell u-1/5">
            <div class="_image-wrapper">
              <c-image
                v-if="testimonial.character"
                fit="cover"
                :imageSrc="testimonial.character"
              />
            </div>
          </div>
          <div class="_cell u-2/5@mobile u-1/5@tablet">
            <p class="o-text _name">{{ testimonial.name }}</p>
            <p class="o-text  u-text--low-contrast">{{ testimonial.role }}</p>
            <p class="o-text  u-text--low-contrast">@{{ testimonial.company }}</p>
          </div>
          <div class="_cell u-2/5@mobile u-3/5@tablet">
            <p class="o-text o-text--lg _quote"><span class="_quote-mark open">&ldquo;</span>{{ testimonial.quote }}<span class="_quote-mark close">&rdquo;</span></p>
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
  
  

  .c-testimonials {
    text-align: left;
  }
  ._image-cell {
    position: relative;
  }
  ._name {
    color: $clr-primary;
    font-weight: $font-weight-semi;
  }
  ._heading {
    margin-bottom: $paragraph-trailer;
  }
  ._image-wrapper {
    width: $unit-xl;
    height: $unit-xl;
    border-radius: 100%;
    overflow: hidden;

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
  
  ._quote {
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
