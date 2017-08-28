<template>
  <section class="c-project-group-intro">
    <l-wrapper>
      <l-grid>
        <div class="_header  _cell  u-2/5@tablet">
          <l-grid>
            <div class="_cell">
              <l-affix
                className="_sticky-header"
                :relativeElementSelector="'#project-group-' + index"
                :z="200">
                <h3 class="_title  u-margin-bottom-none">
                  <span class="_index">{{ index }}. </span>
                  <span class="_name">{{ name }}</span>
                </h3>
              </l-affix>
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
import lAffix from '~/components/layout/l-affix'
import lGrid from '~/components/layout/l-grid'
export default {
  components: {
    cIcon,
    lWrapper,
    lGrid,
    lAffix
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

  ._title {
    @include vr($font-display, $font-size-xl);
    display: flex;
    margin-bottom: $unit-xs;

    @include mq($from: tablet) {
      @include vr($font-display, $font-size-xxl);
      margin-left: -$page-padding-tablet;
      margin-bottom: $unit-sm;
    }
    @include mq($from: desktop) {
      margin-left: -$page-padding-desktop;
      margin-bottom: $unit-sm;
    }
    @include mq($from: wide) {
      margin-left: -$page-padding-wide;
    }
  }

  ._name {
    padding-right: $unit-sm;
  }

  ._index {   
    min-width: $page-padding-mobile;
    padding-right: $unit-xs;
     
    @include mq($until: tablet) {
      padding-left: $unit-xs;
    }
    
    @include mq($from: tablet) {
      text-align: right;
      min-width: $page-padding-tablet;
    }
    @include mq($from: desktop) {
      padding-right: $unit-sm;
      min-width: $page-padding-desktop;
    }
    @include mq($from: wide) {
      min-width: $page-padding-wide;
    }
  }
  
  ._index,
  ._mobile-index {
    color: $neutral-80;
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

  ._sticky-header {
    transition: opacity .1s ease;
    &.affix {
      z-index: 1000;
      ._title {
        background-color: rgba($neutral-100,1);
      }
    }
    &.affix-bottom {
      opacity: 0;
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
