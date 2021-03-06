<template>
  <div class="c-testimonials">
    <ul class="o-grid">
      <li
        class="_entry o-grid__cell"
        v-for="testimonial in testimonials" :key="testimonial.id">
        <div class="o-grid o-grid--flush">
          <div class="_image-cell o-grid__cell u-1/5">
            <div class="_image-wrapper" :style="'background-color:' + testimonial.color">
              <c-image
                v-if="testimonial.character"
                altText="Picture of a minimal, illustated person"
                fit="cover"
                :imageSrc="testimonial.character"
              />
            </div>
          </div>
          <div class="_details-wrapper  o-grid__cell u-2/5@mobile u-1/5@tablet">
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
          <div class="o-grid__cell u-2/5@mobile u-3/5@tablet">
            <p class="o-text o-text--lg _quote">
              <span class="_quote-mark open">&ldquo;</span>
              {{ testimonial.quote }}
              <span class="_quote-mark close">&rdquo;</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>  
</template>

<script>
import detectContrast from '~/utils/detectContrast.js'

export default {
  props: {
    testimonials: {
      type: Array,
      required: true
    }
  },
  methods: {
    detectContrast: function (color) {
      return detectContrast(color)
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
