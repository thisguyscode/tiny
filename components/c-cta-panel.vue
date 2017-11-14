<template>
  <section class="c-cta-panel">
    
    <c-baselines></c-baselines>
    
    <l-wrapper>
      <div class="o-grid o-grid--flush">
        <div class="o-grid__cell  u-3/5@tablet">
          <div class="o-grid o-grid--flush">
            <div class="o-grid__cell  u-1/1">
              <h1 class="o-heading o-heading--beta">{{ mainCtaHeading }}</h1>
            </div>
            <div class="o-grid__cell  u-2/3@tablet">
              <p class="c-cta-panel__main-body-text o-text o-text--paragraph">{{ mainCtaBodyText }}</p>
            </div>
            <div class="o-grid__cell  u-1/3@tablet">
            </div>
            <div class="o-grid__cell  u-1/3@tablet">
              <c-button
                class="c-cta-panel__main-cta-button"
                type="solid"
                :content="mainCtaButton">
              </c-button>
            </div>
          </div>
        </div>
        <div class="o-grid__cell u-1/5"></div>
        <div class="c-cta-panel__sub-cta-wrapper  o-grid__cell  u-1/5@tablet">
          <h2 class="o-heading o-heading--gamma">{{ subCtaHeading }}</h2>
          <c-button
            class="c-cta-panel__sub-cta-button u-margin-bottom-none"
            type="ghost"
            :content="subCtaButton">
          </c-button>
        </div>
      </div>
    </l-wrapper>
  </section>
</template>

<script>
import cButton from '~/components/c-button'
export default {
  components: {
    cButton
  },
  props: {
    mainCtaHeading: {
      type: String,
      required: true
    },
    mainCtaBodyText: {
      type: String,
      required: true
    },
    mainCtaButton: {
      type: String,
      required: true
    },
    subCtaHeading: {
      type: String,
      required: true
    },
    subCtaButton: {
      type: String,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>

/* Base Class
======================================================================== */
.c-cta-panel {
  position: relative;
  text-align: left;
  padding-top: $unit-xl;
  padding-bottom: $unit-lg;
  background-color: $semi-transparent-background;
  box-shadow: inset 0 1px 0 0 $neutral-50, inset 0 -1px 0 0 $neutral-00;

  @include mq($from: tablet) {
    padding-top: $unit-xl;
    padding-bottom: $unit-xl;
  }
  
  @include mq($from: desktop) {
    padding-top: $unit-xxl + $unit-md;
    padding-bottom: $unit-xxl + $unit-md;
  }
}


/* Child Classes
======================================================================== */
.c-cta-panel__main-body-text {
  color: $neutral-30;
}

.c-cta-panel__main-cta-button {
  @include mq($until: tablet) {
    margin-bottom: $paragraph-trailer*2;
  }
  @include mq($from: tablet) {
    margin-bottom: 0;
  }
}

.c-cta-panel__sub-cta-button {
  float: right;
}

.c-cta-panel__sub-cta-wrapper {
  color: $neutral-00;
  @include mq($from: tablet) {
    text-align: right;
  }
}

</style>
