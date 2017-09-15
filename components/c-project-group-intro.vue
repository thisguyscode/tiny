<template>
  <section class="c-project-group-intro" :id="'project-group-' + index + '-top'">
    <l-wrapper>
      <l-grid class="_grid">
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
                  <f-link
                    class="_project-group-link"
                    :scrollToSelector="'#project-group-' + index + '-top'">
                    <span class="u-link-bloater"></span>
                  </f-link>
                </h3>
              </l-affix>
            </div>
            <div class="_cell u-1/2">
              <c-button :stretch="false" class="_link" type="ghost" icon="external-link" :externalLink="link">
                Visit Website
              </c-button>
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
import cButton from '~/components/c-button'
import fLink from '~/components/functional/f-link'
import lWrapper from '~/components/layout/l-wrapper'
import lAffix from '~/components/layout/l-affix'
import lGrid from '~/components/layout/l-grid'
export default {
  components: {
    cIcon,
    cButton,
    fLink,
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

  ._grid {
    align-items: flex-start;
  }
  ._title {
    @include vr($font-display, $font-size-xl);
    transition: background-color .2s ease;
    display: flex;
    margin-bottom: $unit-xs;
    left: -1px;

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
    transition: padding-left .4s ease, box-shadow .4s ease, color .4s ease;
    padding-right: $unit-sm;
  }

  ._index {
    margin-right: 1px;
    transition: color .4s ease;
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
    z-index: 900;

    @include mq($until: tablet) {
      position: absolute;
      right: 0;
      top: -50%;
      display: inline-block;
      width: auto;
    }

    &:hover {
      color: $neutral-00;
    }
  }

  ._project-group-link {
    display: none;
  }

  ._sticky-header {
    &.affix {
      ._project-group-link {
        display: initial;
      }
      ._title {
        @if ($show-baseline == true) {
          @include vr-baseline;
        }
        background-color: $neutral-95;
        @include mq($from: tablet) {
          box-shadow: inset 0 0 0 1px $neutral-80;
        }
      }
      ._name {
        padding-left: $unit-xs;
        box-shadow: inset 1px 0 0 0 $neutral-90;

        @include mq($until: tablet) {
          padding-right: $unit-xs;
        }
        @include mq($from: tablet) {
          padding-left: $unit-sm;
        }
      }
      ._name,
      ._index {
        color: $neutral-00;
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
    margin-bottom: $unit-md;
  }

</style>
