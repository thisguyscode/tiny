<template>
  <div class="c-testimonials">
    <!-- <h2 class="o-heading o-heading--beta">Testimonials</h2> -->
    <l-grid list>
      <li
        class="_entry l-grid__cell"
        v-for="testimonial in testimonials" :key="testimonial.id"
        @click="change(testimonial)">
        <l-grid>
          <div class="_image-cell l-grid__cell u-1/5">
            <div class="_image-wrapper" :style="'background-color:' + testimonial.color">
              <c-image
                v-if="testimonial.character"
                fit="cover"
                :imageSrc="testimonial.character"
              />
            </div>
          </div>
          <div class="_details-wrapper  l-grid__cell u-2/5@mobile u-1/5@tablet">
            <span 
              v-if="testimonial.color"
              class="o-text _name"
              :class="'c-testimonials__name--' + detectContrast(testimonial.color)"
              :style="
                'background-color:' + testimonial.color
              ">
              {{ testimonial.name }}
            </span>
            <span 
              v-else
              class="o-text _name">
              {{ testimonial.name }}
            </span>
            <p class="o-text _role">{{ testimonial.role }}</p>
            <p class="o-text _company">@{{ testimonial.company }}</p>
          </div>
          <div class="l-grid__cell u-2/5@mobile u-3/5@tablet">
            <p class="o-text o-text--lg _quote">
              <span class="_quote-mark open">&ldquo;</span>
              {{ testimonial.quote }}
              <span class="_quote-mark close">&rdquo;</span>
            </p>
          </div>
        </l-grid>
      </li>
    </l-grid>
  </div>  
</template>

<script>
import lGrid from '~/components/layout/l-grid'
import detectContrast from '~/utils/detectContrast.js'

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
    detectContrast: function (color) {
      return detectContrast(color)
    },
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

    @include mq($until: mobile) {
      margin-bottom: $unit-sm;
    }
    
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

  ._details-wrapper {
    @include mq($until: tablet) {
      margin-bottom: $unit-sm;
    }
  }
  
  ._quote {
    font-style: italic;
    display: inline;
    position: relative;
    z-index: 1;
  }

  ._quote-mark {
    font-family: serif;
    font-size: 9rem;
    line-height: 0;
    display: inline-block;
    color: $clr-primary;
    position: absolute;
    z-index: -1;
    opacity: .1;
    &.open {
      top: 2rem;
      left: -$unit-md;
      @include mq($from: mobile) {
        left: -$unit-lg;
      }
    }
    &.close {
      bottom: -1.5rem;
      right: -$unit-lg;
    }
  }

  ._entry {
    margin-bottom: $unit-md;
    @include mq($from: mobile) {
      margin-bottom: $unit-xl;
    }
    @include mq($from: tablet) {
      margin-bottom: $unit-xxl;
    }
  }

  ._role,
  ._company {
    color: $neutral-30;
  }

  .c-testimonials__name {

  }
  .c-testimonials__name--light {
    color: $lightest;
  }
  .c-testimonials__name--dark {
    color: $darkest;
  }
</style>
