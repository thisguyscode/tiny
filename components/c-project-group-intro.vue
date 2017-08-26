<template>
  <section class="c-project-group-intro">
    <h2 class="_index">{{ index }}.</h2>
    <l-wrapper>
      <l-grid>
        <div class="_header  _cell  u-margin-bottom-sm  u-2/5@tablet">
          <l-grid>
            <div class="_cell">
              <h2 class="_name"><span class="_mobile-index">{{ index }}. </span>{{ name }}</h2>
            </div>
            <div class="_cell u-1/2">
              <a class="_link" :href="link" target="_blank" rel="noopener">
                <span class="_link-content">
                  <c-icon vertical class="_link_icon" name="external-link"></c-icon>
                  <span class="_link_text">Visit Website</span>
                </span>
              </a>
            </div>
          </l-grid>
        </div>
        <div class="_cell  u-3/5@tablet">
          <p class="u-text--lower-contrast">{{ description }}</p>
        </div>
      </l-grid>
    </l-wrapper>
  </section>
</template>

<script>
import cIcon from '~/components/c-icon'
import lWrapper from '~/components/layout/l-wrapper'
import lGrid from '~/components/layout/l-grid'
export default {
  components: {
    cIcon,
    lWrapper,
    lGrid
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    projectGroup: {
      type: Object,
      required: true
    }
  },
  computed: {
    name: function () {
      return this.projectGroup.name
    },
    link: function () {
      return this.projectGroup.link
    },
    description: function () {
      return this.projectGroup.description
    }
  }
}
</script>

<style lang="scss" scoped>

  // Import variables and global settings
  @import "~assets/styles/imports";

  .c-project-group-intro {
    position: relative;
    text-align: left;
    
    @include mq($from: tablet) {
      margin-bottom: $unit-xxl;
    }

  }
  
  ._index,
  ._mobile-index {
    color: $neutral-80;
  }

  ._index {
    width: $page-padding-mobile;
    position: absolute;
    left: 0;
    text-align: right;
    padding-right: $unit-sm;
    display: none;
    
    @include mq($from: tablet) {
      display: initial;
      width: $page-padding-tablet;
    }
    @include mq($from: desktop) {
      width: $page-padding-desktop;
    }
    @include mq($from: wide) {
      width: $page-padding-wide;
    }
  }
  ._mobile-index {
    @include mq($from: tablet) {
      display: none;
    }
  }

  $link-padding-y: $unit-xs;
  $link-padding-x: $unit-sm;

  ._link {
    text-align: center;
    margin-bottom: $heading-trailer;
    text-decoration: none;
    transition: $link-transition;
    display: block;
    padding: $link-padding-y $link-padding-x;
    background-color: $neutral-90;
    box-shadow: inset 1px 0 0 $red, inset 0 0 0 1px $neutral-90;
    // margin-left: -$link-padding-x;

    @include mq($until: tablet) {
      position: absolute;
      right: 0;
      bottom: 0;
    }

    &:hover {
      color: $neutral-00;
    }
  }

  ._link-content {
    @include vr($font-body, $font-size-md);
    @include vr-reset;
    font-weight: 600;
    display: flex;
    justify-content: center;
    color: $neutral-60;
    
    @include mq($until: tablet) {
      flex-direction: row-reverse;
    }
  }

  ._link_icon {
    color: $red;
    height: auto;
    margin-right: $unit-xs;

    @include mq($until: tablet) {
      margin-left: $unit-sm;
      margin-right: 0;
    }
  }

  ._link_text {
  }

  ._name {
    @include mq($until: tablet) {
      display: inline-block;
    }
  }
  ._header {
    position: relative;
  }

</style>
