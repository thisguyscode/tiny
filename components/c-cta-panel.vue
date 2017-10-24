<template>
  <section class="c-cta-panel">
    <l-wrapper>
      <l-grid>
        <div class="l-grid__cell  u-3/5@tablet">
          <l-grid>
            <div class="l-grid__cell  u-1/1">
              <h1 class="o-heading o-heading--beta">{{ mainCtaHeading }}</h1>
            </div>
            <div class="l-grid__cell  u-2/3@tablet">
              <p class="c-cta-panel__main-body-text o-text o-text--paragraph">{{ mainCtaBodyText }}</p>
            </div>
            <div class="l-grid__cell  u-1/3@tablet">
            </div>
            <div class="l-grid__cell  u-1/3@tablet">
              <c-button
                class="_main-cta-button"
                type="solid"
                :content="mainCtaButton">
              </c-button>
            </div>
          </l-grid>
        </div>
        <div class="l-grid__cell u-1/5"></div>
        <div class="_subCtaWrapper  l-grid__cell  u-1/5@tablet  u-text--lower-contrast">
          <h2 class="o-heading o-heading--gamma">{{ subCtaHeading }}</h2>
          <c-button
            class="_sub-cta-button u-margin-bottom-none"
            type="ghost"
            :content="subCtaButton">
          </c-button>
        </div>
      </l-grid>
    </l-wrapper>
  </section>
</template>

<script>

  import cButton from '~/components/c-button'
  import lWrapper from '~/components/layout/l-wrapper'
  import lGrid from '~/components/layout/l-grid'
  export default {
    components: {
      cButton,
      lWrapper,
      lGrid
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

  

  .c-cta-panel {
    position: relative;
    text-align: left;
    padding-top: $unit-xl;
    padding-bottom: $unit-lg;
    background-color: rgba($neutral-100,.5);
    box-shadow: inset 0 1px 0 0 $neutral-80, inset 0 -1px 0 0 $clr-primary;

    @include mq($from: tablet) {
      padding-top: $unit-xl;
      padding-bottom: $unit-xl;
    }
    
    @include mq($from: desktop) {
      padding-top: $unit-xxl + $unit-md;
      padding-bottom: $unit-xxl + $unit-md;
    }
  }

  .c-cta-panel__main-body-text {
    color: $neutral-30;
  }

  ._main-cta-button {
    @include mq($until: tablet) {
      margin-bottom: $paragraph-trailer*2;
    }
    @include mq($from: tablet) {
      margin-bottom: 0;
    }
  }

  ._sub-cta-button {
    float: right;
  }

  ._subCtaWrapper {
    color: $neutral-00;
    @include mq($from: tablet) {
      text-align: right;
    }
  }

</style>
