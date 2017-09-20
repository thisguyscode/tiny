<template>
  <div class="_hero">
    <l-wrapper>
      <l-grid class="_hero-grid">

        <!-- Hero text panel -->
        <div class="_hero-text-cell _cell u-2/5@tablet">
          <div class="_hero-text-wrapper">
            
            <!-- Group -->
            <f-link
              class="_project-group"
              :externalLink="project.groupLink">
              {{ project.group }}
              <c-icon name="external-link"></c-icon>
            </f-link>

            <!-- Title -->
            <h1 class="_project-title" :class="textClass" :style="'background-color:' + project.color">
              {{ project.name }}
            </h1>

          </div>
        </div><!--END Hero text panel -->
        
        <!-- Hero image panel -->
        <div class="_cell u-3/5@tablet">
          <div class="_hero-image-reference" :class="imageWrapperClass" :style="'background-color:' + project.color">
            <div class="_hero-image-wrapper">
              <img class="_hero-image" :class="imageClass" :src="require('~/assets/images/' + project.imgSrc)">
            </div>
          </div>
        </div><!--END Hero image panel -->

      </l-grid>
    </l-wrapper>
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
      }
    },
    computed: {
      /** Pass project color to setContrast() to provide perceived contrast */
      textClass: function () {
        return {
          '_text-light': this.setContrast(this.project.color) === 'light',
          '_text-dark': this.setContrast(this.project.color) === 'dark'
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
      }
    },
    methods: {
      /** Convert the #hex color code in ~/data/projects.json to an rgb value (as array) */
      hexToRgb: function (hex) {
        hex = hex.replace('#', '')
        var r = parseInt(hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16)
        var g = parseInt(hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16)
        var b = parseInt(hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16)
        var rgb = [r, g, b]
        return rgb
      },
      /**
       * Get the rgb array from hexToRgb and apply perceptual brightness calculations
       * Then return string of 'dark' or 'light' for contrasting color
       */
      setContrast: function (bgColor) {
        var rgb = this.hexToRgb(bgColor)
        var o = Math.round((
          (parseInt(rgb[0]) * 299) +
          (parseInt(rgb[1]) * 587) +
          (parseInt(rgb[2]) * 114)) / 1000)
        var textColor = (o > 125) ? 'dark' : 'light'
        return textColor
      }
    }
  }
</script>

<style lang="scss" scoped>

  // Import variables and global settings
  @import "~assets/styles/imports";

  ._hero {
    width: 100%;
    overflow: hidden;
    z-index: 90;
    position: relative;
    text-align: left;
  }

  ._hero-grid {
    // height: $unit-xxl*4;
  }

  ._hero-image-reference {
    position: relative;
    margin-right: -$page-padding-mobile;
    height: 100%;
    
    @include mq($until: tablet) {
      height: $unit-xxl*3;
      margin-left: -$page-padding-mobile;
    }
    @include mq($from: tablet) {
      margin-right: -$page-padding-tablet
    }
    @include mq($from: desktop) {
      margin-right: -$page-padding-desktop
    }
    @include mq($from: wide) {
      margin-right: -$page-padding-wide
    }
    
    &.--padded {
      padding: $unit-md;

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
    object-position: 50% 50%;
    width: 100%;
    height: 100%;
    top: $unit-md;
    top: 0;
    right: 0;
    overflow: hidden;

    @include mq($from: tablet) {
      position: absolute;
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
    padding-top: $page-padding-mobile + $unit-md;
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
  }

  ._project-title {
    @include vr($font-display, $font-size-xxl);
    text-align: left;
    display: inline;

    @include mq($from: tablet) {
      @include vr($font-display, $font-size-xxl);
    }

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
    opacity: .4;
    color: $neutral-00;
    cursor: pointer;

    @include mq($from: desktop) {
      @include vr($font-display, $font-size-xl);
      margin-bottom: $heading-trailer;
    }
    
    &:hover {
      opacity: 1;
    }
  }

  ._project-title {
    &._text-dark {
      color: $darkest;
    }
    &._text-light {
      color: $lightest;
    }
  }

</style>