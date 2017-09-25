<template>
  <div class="_hero" :style="'background-color: ' + color">

<transition name="slide">
<div v-if="transitionEnd">

    <l-wrapper>
      <l-grid class="_hero-grid">

        
        <!-- Hero text panel -->
        <div class="_hero-text-cell _cell u-2/5@tablet">
          <div class="_hero-text-wrapper">
            <transition name="slide">
              <div class="transition-wrapper" v-if="transitionEnd">
                <!-- Group -->
                <f-link
                  v-if="transitionEnd"
                  class="_project-group"
                  :class="textClass"
                  :style="'color:' + color"
                  :externalLink="project.groupLink">
                  {{ project.group }}
                  <c-icon class="_icon" name="external-link"></c-icon>
                </f-link>
                <!-- Title -->
                <h1
                  v-if="transitionEnd"
                  class="_project-title"
                  :class="textClass"
                  :style="'color:' + color">
                  {{ project.name }}
                </h1>
              </div>
            </transition>
          </div>
        </div><!--END Hero text panel -->
        
        <!-- Hero image panel -->
        <div class="_hero-image-cell _cell u-3/5@tablet" :class="heroImageCellClass">
          <div class="_hero-image-reference" :class="imageWrapperClass">
            <div class="_hero-image-wrapper">
              <img v-if="project.imgSrc" class="_hero-image" :class="imageClass" :src="require('~/assets/images/' + project.imgSrc)">
            </div>
          </div>
        </div><!--END Hero image panel -->


      </l-grid>
    </l-wrapper>


    </div>
    </transition>

  </div><!--END Hero -->
  
</template>

<script>
  import fLink from '~/components/functional/f-link'
  import lGrid from '~/components/layout/l-grid'
  import lWrapper from '~/components/layout/l-wrapper'
  import cIcon from '~/components/c-icon'
  export default {
    components: {
      lGrid,
      fLink,
      lWrapper,
      cIcon
    },
    props: {
      project: {
        type: Object,
        required: true
      },
      color: {
        type: String,
        required: true
      },
      transitionEnd: {
        type: Boolean
      }
    },
    computed: {
      textClass: function () {
        return {
          '_text-light': this.project.contrastingColor === 'light',
          '_text-dark': this.project.contrastingColor === 'dark'
        }
      },
      imageWrapperClass: function () {
        return {
          '--padded': this.project.imgWrapperClass === 'padded'
        }
      },
      imageClass: function () {
        return {
          '--cover': this.project.imgClass === 'cover'
        }
      },
      heroImageCellClass: function () {
        return {
          '--cover': this.project.imgClass === 'cover'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

 $transition-duration: .2s;
 $transition-easing: ease;

  // Import variables and global settings
  @import "~assets/styles/imports";

  .slide-leave-active {
    transition: transform .2s
  }
  .slide-enter-active {
    transition: transform .2s
  }
  .slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(-200%);
  }

  ._hero {
    min-height: $unit-xxl*3;
    width: 100%;
    overflow: hidden;
    z-index: 90;
    position: relative;
    text-align: left;
    background-color: rgba($darkest, .5);
    transition: background-color $transition-duration $transition-easing;
  }


  ._hero-grid {
    // height: $unit-xxl*4;
  }

  ._hero-image-cell {
    position: relative;
    
    @include mq($until: tablet) {
      height: $unit-xl*3;
      position: static;
      order: 1;
    }

    &.--cover {
      position: static;
    }
  }

  ._hero-image-reference {
    // margin-right: -$page-padding-mobile;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    
    @include mq($until: tablet) {
      // margin-left: -$page-padding-mobile;
    }
    @include mq($from: tablet) {
      
      // margin-right: -$page-padding-tablet
    }
    @include mq($from: desktop) {
      // margin-right: -$page-padding-desktop
    }
    @include mq($from: wide) {
      // margin-right: -$page-padding-wide
    }
    
    &.--padded {
      padding: $unit-md;

      @include mq($until: tablet) {
        top: $page-padding-mobile;
        right: $page-padding-mobile;
        bottom: $page-padding-mobile;
        left: $page-padding-mobile;
      }

      @include mq($from: tablet) {
        padding: $unit-xl;
      }
      @include mq($from: desktop) {
        padding: $unit-xl;
      }
      @include mq($from: wide) {
        padding: $unit-xxl;
      }
    }
  }

  ._hero-image-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
  }

  ._hero-image {
    object-fit: contain;
    object-position: 50% 0%;
    width: 100%;
    height: 100%;
    top: $unit-md;
    top: 0;
    right: 0;
    overflow: hidden;

    @include mq($from: tablet) {
      position: absolute;
      object-position: 50% 50%;
    }
    
    &.--cover {
      @include mq($from: tablet) {
        // transform: rotate(6deg) scale(1.4);
        transform-origin: 0 100%;
      }
      object-fit: cover;
    }
  }


  ._hero-text-wrapper {
    padding-top: 0;
    padding-bottom: $page-padding-mobile;
    height: 100%;
    z-index: 100;
    position: relative;
    
    @include mq($from: tablet) {
      min-height: $unit-xxl*4;
      padding-top: $page-padding-tablet;
      padding-bottom: $page-padding-tablet;
      padding-right: 50%;
      margin-right: -66.66%;
    }
    @include mq($from: desktop) {
      min-height: $unit-xxl*5;
      padding-top: $page-padding-desktop;
      padding-bottom: $page-padding-desktop;
    }
  }

  ._hero-text-background {
    @include mq($from: tablet) {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  ._hero-text-cell {
    height: 100%;
    @include mq($until: tablet) {
      min-height: $unit-xl*4;
      order: 2;
    }
  }

  ._project-title {
    @include vr($font-display, $font-size-xxl);
    text-align: left;
    display: inline;

    @include mq($from: desktop) {
      @include vr($font-display, $font-size-xxxl);
    }
  }

  ._project-group {
    @include vr($font-display, $font-size-lg);
    margin-right: 100%;
    white-space: nowrap;
    margin-bottom: $heading-trailer;
    text-decoration: none;
    // opacity: .4;
    cursor: pointer;

    @include mq($from: desktop) {
      @include vr($font-display, $font-size-xl);
      margin-bottom: $heading-trailer;
    }
    
    &:hover {
      // opacity: 1;
    }
  }

  ._project-group,
  ._project-title {
    transition: background-color $transition-duration $transition-easing, color $transition-duration $transition-easing;
    &._text-dark {
      background-color: $darkest;
    }
    &._text-light {
      background-color: $lightest;
    }
  }

  ._icon {
    height: .7em;
  }

</style>
