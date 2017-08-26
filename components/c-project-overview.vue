<template>
  <section class="c-project-overview">
    <h3 class="_index" :style="indexStyle">{{ index }}.</h3>
    <l-wrapper>
      <l-grid>
        <div class="_details-wrapper  _cell u-2/5@tablet">
          <l-grid>
            <div class="_cell  u-1/2@tablet">
              <h3 class="_title"><span class="_mobile-index" :style="indexStyle">{{ index }}. </span>{{ name }}</h3>
            </div>
            <div class="_line  _cell  u-1/2@tablet" :style="lineStyle"></div>
          </l-grid>
        </div>
        <div class="_cell u-3/5@tablet">
          <div class="_image-wrapper" :class="imgWrapperClass" :style="'background-color:' + color">
            <img class="_image" :class="imgClass" :src="require('~/assets/images/' + imgSrc)"/>
          </div>
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
      type: String,
      required: true
    },
    project: {
      type: Object,
      required: true
    }
  },
  // data: () => {
  //   return {
  //     imgSrc: this.project.imgSrc
  //   }
  // },
  computed: {
    name: function () {
      return this.project.name
    },
    linkTo: function () {
      return this.project.linkTo
    },
    color: function () {
      return this.project.color
    },
    date: function () {
      return this.project.date
    },
    skills: function () {
      return this.project.skills
    },
    tech: function () {
      return this.project.tech
    },
    imgSrc: function () {
      return this.project.imgSrc
    },
    imgClass: function () {
      return {
        '_image--cover': this.project.imgClass === 'cover'
      }
    },
    imgWrapperClass: function () {
      return {
        '_image-wrapper--padded': this.project.imgWrapperClass === 'padded'
      }
    },
    indexStyle: function () {
      return 'color:' + this.project.color + ';'
    },
    lineStyle: function () {
      return 'background-color:' + this.project.color + ';'
    }
  }
}
</script>

<style lang="scss" scoped>

  // Import variables and global settings
  @import "~assets/styles/imports";

  .c-project-overview {
    position: relative;
    text-align: left;
    margin-bottom: $unit-xl;
  }
  ._title,
  ._index {
    @include vr($font-display, $font-size-md);

    @include mq($from: tablet) {
      @include vr($font-display, $font-size-lg);
    }
    @include mq($from: desktop) {
      @include vr($font-display, $font-size-xl);
    }
  }

  $line-width: 3px;

  ._line {
    position: relative;
    top: $unit-sm;
    margin-top: -$line-width;
    height: $line-width;
  }
  ._index,
  ._mobile-index {
    text-transform: uppercase;
  }
  ._index {
    width: $page-padding-mobile;
    position: absolute;
    left: 0;
    text-align: right;
    display: none;
    
    @include mq($from: tablet) {
      display: initial;
      padding-right: $unit-xs;
      width: $page-padding-tablet;
    }
    @include mq($from: desktop) {
      padding-right: $unit-sm;
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

  ._index,
  ._details-wrapper {
    @include mq($from: tablet) {
      padding-top: $unit-sm;
      padding-bottom: $unit-sm;
    }
  }

  ._image {
    object-fit: contain;
    object-position: 50% 50%;
    width: 100%;
    height: 100%;
  }

  ._image--cover {
    object-fit: cover;
  }

  ._image-wrapper {
    position: relative;
    height: $unit-xl*8;
    text-align: center;

    @include mq($until: tablet) {
      margin-left: -$page-padding-mobile;
      margin-right: -$page-padding-mobile;
    }
    
    @include mq($from: tablet){
      margin-right: -$page-padding-tablet;
    }

    @include mq($from: desktop){
      margin-right: -$page-padding-desktop;
    }

    @include mq($from: wide){
      margin-right: -$page-padding-wide;
    }
  }

  ._image-wrapper--padded {
    padding: $unit-xl;

    @include mq($from: desktop) {
      padding: $unit-xxl;
    }
  }

</style>
