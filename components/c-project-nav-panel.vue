<template>
  <nuxt-link
    :to="'/work/projects/' + project.slug"
    class="
      _panel
    "
    :class="panelClass"
  >
    <div
      class="_image-wrapper"
      :class="imgWrapperClass"
      :style="
        'background-color: ' + project.color
      "
    >
      <img
        v-if="project.imgSrc"
        class="_image _image-previous"
        :class="imgClass"
        :src="require('~/assets/images/' + project.imgSrc)"
      >
    </div>

    <div class="_panel-content">
      <div
        class="_label"
        :class="labelClass">
        <c-icon v-if="direction === 'previous'" class="_icon" name="arrow-left"></c-icon>
        <span>Previous <span class="_string-project">project</span></span>
        <c-icon v-if="direction === 'next'" class="_icon" name="arrow-right"></c-icon>
      </div>

      <h4
        class="_group-title"
        :class="textClass"
        :style="'color: ' + project.color">
        {{ project.group }}
      </h4>
      <h3
        class="_title"
        :class="textClass"
        :style="'color: ' + project.color">
        {{ project.name }}
      </h3>
    </div>

  </nuxt-link>
</template>

<script>
import cIcon from '~/components/c-icon'
export default {
  components: {
    cIcon
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    direction: {
      type: String,
      required: true
    }
  },
  computed: {
    panelClass: function () {
      return {
        '_panel-previous': this.direction === 'previous',
        '_panel-next': this.direction === 'next'
      }
    },
    textClass: function () {
      return {
        '--text-light': this.project.contrastingColor === 'light',
        '--text-dark': this.project.contrastingColor === 'dark'
      }
    },
    imgWrapperClass: function () {
      return {
        '--padded': this.project.imgWrapperClass === 'padded'
      }
    },
    imgClass: function () {
      return {
        '--cover': this.project.imgClass === 'cover'
      }
    },
    labelClass: function () {
      return {
        '_label-previous': this.direction === 'previous',
        '_label-next': this.direction === 'next',
        '--light': this.project.contrastingColor === 'light',
        '--dark': this.project.contrastingColor === 'dark'
      }
    },
    setScrollTo: function () {
      this.$store.commit('setScrollTo', '#' + this.current.slug)
    }
  }
}
</script>

<style lang="scss" scoped>
  // Import variables and global settings
  @import "~assets/styles/imports";
  
  .c-project-nav-panels {
    // position: relative;
  }

  ._panel {
    width: 100%;
    height: 100%;
    position: relative;
    text-decoration: none;
    padding-top: $unit-md;
    padding-bottom: $unit-md;
    padding-left: $page-padding-mobile;
    padding-right: $page-padding-mobile;
    min-height: $unit-xxl*3;

    &:hover,
    &:active {
      ._image-wrapper {
        opacity: 1;
        @include mq($from: desktop) {
          filter: grayscale(0);
        }
      }
    }

    @include mq($from: tablet) {
      padding-left: $page-padding-tablet;
      padding-right: $page-padding-tablet;
    }

    @include mq($from: desktop) {
      padding-top: $unit-lg;
      padding-bottom: $unit-lg;
      padding-left: $page-padding-desktop;
      padding-right: $page-padding-desktop;
      min-height: $unit-xxl*4;
    }

    @include mq($from: wide) {
      padding-left: $page-padding-wide;
      padding-right: $page-padding-wide;
    }
  }

  ._panel-previous {
    text-align: left;
  }

  ._panel-next {
    text-align: right;
  }

  ._image-wrapper {
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: filter .1s ease, opacity .1s ease;
    opacity: .8;
    
    @include mq($from: desktop) {
      filter: grayscale(100%);
    }

    &.--padded {
      padding: $unit-sm;
      
      @include mq($from: tablet) {
        padding: $unit-md;
      }

      @include mq($from: tablet) {
        padding: $unit-xl;
      }
    }
  }

  ._image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: 50% 50%;

    &.--cover {
      object-fit: cover;
    }
  }

  ._panel-content {
    position: relative;
  }
  ._icon {
    height: .8em;
  }

  ._label {
    @include vr($font-body, $font-size-sm);
    font-weight: $font-weight-semi;
    margin-bottom: $heading-trailer;
    display: inline-block;
    white-space: nowrap;
    padding-left: $unit-xs;
    padding-right: $unit-xs;

    &.--light {
      color: $lightest;
      background-color: $darkest;
    }

    &.--dark {
      color: $darkest;
      background-color: $lightest;
    }

    @include mq($from: tablet) {
      @include vr($font-body, $font-size-md);
      margin-bottom: $heading-trailer;
      display: inline-block;
      white-space: nowrap;
    }
    
    @include mq($from: desktop) {
      margin-bottom: $paragraph-trailer;
    }
  }

  ._label-next {
    float: right;
    margin-left: 100%;
    ._icon {
      margin-left: $unit-xs;
    }
  }
  ._label-previous {
    float: left;
    margin-right: 100%;
    ._icon {
      margin-right: $unit-xs;
    }
  }

  ._string-project {
    font-weight: $font-weight-regular;

    @include mq($until: tablet) {
      display: none;
    }
  }


  ._title {
    @include vr($font-display, $font-size-xxl);

    @include mq($from: desktop) {
      @include vr($font-display, $font-size-xxxl);
    }
  }

  ._panel-next {
    ._group-title {
      float: right;
      margin-left: 100%;
    }
  }

  ._panel-previous {
    ._group-title {
      float: left;
      margin-right: 100%;
    }
  }

  ._group-title {
    // opacity: .5;
  }

  ._group-title,
  ._title {
    display: inline;
    
    &.--text-light {
      background-color: $lightest;
    }

    &.--text-dark {
      background-color: $darkest;
    }

  }
  
</style>
