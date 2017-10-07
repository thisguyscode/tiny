<template>
  <div class="_hero" :style="'background-color: ' + color">

    <l-wrapper>
      <l-grid class="_hero-grid">

        <!-- Hero text panel -->
        <div class="_hero-text-cell _cell u-2/5@tablet">
          <div class="_hero-text-wrapper" :style="'color:' + color">
           
            <transition name="slide-from-left">
              <div v-if="transitionEnd">

                <!-- Group -->
                <f-link
                  class="_project-group"
                  :class="textClass"
                  :externalLink="project.groupLink">
                  {{ project.group }}
                  <c-icon class="_icon" name="external-link"></c-icon>
                </f-link>
                <!-- Title -->
                <h1
                  class="_project-title"
                  :class="textClass">
                  {{ project.name }}
                </h1>

              </div>
            </transition>

          </div>
        </div><!--END Hero text panel -->
        
        <!-- Hero image panel -->
        <div class="_hero-image-cell _cell u-3/5@tablet" :class="imgClass">
          <div class="_hero-image-reference" :class="imgWrapperClass">
            <div class="_hero-image-wrapper">
              <transition name="slide-from-right">
                <c-image
                  :lazy="false"
                  v-if="transitionEnd"
                  :fit="imgClass"
                  :imageSrc="project.imgSrc"
                />
              </transition>
            </div>
          </div>
        </div>


      </l-grid>
    </l-wrapper>
  </div><!--END Hero -->
  
</template>

<script>
  import fLink from '~/components/functional/f-link'
  import lGrid from '~/components/layout/l-grid'
  import lWrapper from '~/components/layout/l-wrapper'
  import cIcon from '~/components/c-icon'
  import cImage from '~/components/c-image'
  export default {
    components: {
      lGrid,
      fLink,
      lWrapper,
      cIcon,
      cImage
    },
    data: () => {
      return {
        textClass: '',
        imgClass: '',
        imgWrapperClass: ''
      }
    },
    props: {
      project: {
        type: Object,
        required: true
      },
      color: {
        type: String,
        required: true,
        default: function () {
          return this.project.color
        }
      },
      transitionEnd: {
        type: Boolean
      }
    },
    methods: {
      setTextClass: function (project) {
        if (project.contrastingColor === 'light') {
          return '_text-light'
        } else if (project.contrastingColor === 'dark') {
          return '_text-dark'
        }
      },
      setImgClass: function (project) {
        if (project.imgClass === 'cover') {
          return 'cover'
        } else if (project.imgClass === 'contain') {
          return 'contain'
        }
      },
      setImgWrapperClass: function (project) {
        if (project.imgWrapperClass === 'padded') {
          return 'padded'
        }
      }
    },
    watch: {
      '$route' (to, from) {
        var self = this
        setTimeout(function () {
          self.textClass = self.setTextClass(self.project)
          self.imgClass = self.setImgClass(self.project)
          self.imgWrapperClass = self.setImgWrapperClass(self.project)
        }, 400)
      }
    },
    mounted () {
      var self = this
      setTimeout(function () {
        self.textClass = self.setTextClass(self.project)
        self.imgClass = self.setImgClass(self.project)
        self.imgWrapperClass = self.setImgWrapperClass(self.project)
      }, 100)
    }
  }
</script>

<style lang="scss" scoped>

 $transition-duration: .8s;
 $transition-easing: ease-out;

  // Import variables and global settings
  @import "~assets/styles/imports";

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

    &.cover {
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
    
    &.padded {
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
    
    &.cover {
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
    color: inherit;
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
