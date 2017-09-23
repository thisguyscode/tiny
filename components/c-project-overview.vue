<template>
  <section class="c-project-overview" :id="sectionId">
    <l-wrapper>
      <l-grid>
        <div class="_details-wrapper  _cell u-2/5@tablet">
          <l-grid>
            <div class="_cell  u-1/2@tablet">
              <h3 class="_title">
                <span class="_index" :style="indexStyle">{{ index }}. </span>
                <span class="_name">{{ name }}</span>
              </h3>
            </div>
            <div class="_line  _cell  u-1/2@tablet" :style="lineStyle"></div>
            <div class="_cell">
              <l-grid class="u-margin-bottom-sm">
                <div v-if="skills" class="_detail-group  _cell  u-1/2@tablet">
                  <h4 class="_subheading">Skills</h4>
                  <ul class="u-list-bare">
                    <li v-for="skill in skills" :key="skill.id">
                      <p class="_detail">{{ skill }}</p>
                    </li>
                  </ul>
                </div>
                <div v-if="techs" class="_detail-group  _cell  u-1/2@tablet">
                  <h4 class="_subheading">Tech</h4>
                  <ul class="u-list-bare">
                    <li v-for="tech in techs" :key="tech.id">
                      <p class="_detail">{{ tech }}</p>
                    </li>
                  </ul>
                </div>
                <div v-if="role" class="_detail-group  _cell  u-1/2@tablet">
                  <h4 class="_subheading">Role</h4>
                  <p class="_detail">{{ role }}</p>
                </div>
                <div v-if="date" class="_detail-group  _cell  u-1/2@tablet">
                  <h4 class="_subheading">Date</h4>
                  <p class="_detail">{{ date }}</p>
                </div>
              </l-grid>
              <div class="_cell u-1/2@tablet">
                <div class="_button-wrapper">
                  <c-button 
                    :relativeLink="linkTo"
                    :inlineStyle="buttonStyle"
                    :iconInlineStyle="viewIconStyle"
                    :onClick="onVisit"
                    :onClickArg="onVisitArg"
                    type="ghost"
                    icon="eye">
                    View Project
                  </c-button>
                </div>
              </div>
            </div>
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
import cButton from '~/components/c-button'
import lWrapper from '~/components/layout/l-wrapper'
import lGrid from '~/components/layout/l-grid'
export default {
  components: {
    cIcon,
    cButton,
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
    },
    onVisit: {
      type: Function
    },
    onVisitArg: {
      required: false
    }
  },
  computed: {
    sectionId: function () {
      return this.project.slug
    },
    name: function () {
      return this.project.name
    },
    linkTo: function () {
      return '/work/projects/' + this.project.slug + '/'
    },
    color: function () {
      return this.project.color
    },
    date: function () {
      return this.project.date
    },
    role: function () {
      return this.project.role
    },
    skills: function () {
      return this.project.skills
    },
    techs: function () {
      return this.project.techs
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
    },
    viewIconStyle: function () {
      return 'color:' + this.project.color + ';'
    },
    buttonStyle: function () {
      return 'box-shadow:' + 'inset 0 0 0 1px' + this.project.color + ';'
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
  ._title {
    @include vr($font-display, $font-size-md);
    display: flex;
    margin-bottom: $unit-xs;

    @include mq($from: tablet) {
      @include vr($font-display, $font-size-lg);
      margin-left: -$page-padding-tablet;
      margin-bottom: $unit-sm;
    }
    @include mq($from: desktop) {
      @include vr($font-display, $font-size-xl);
      margin-left: -$page-padding-desktop;
      margin-bottom: $unit-sm;
    }
    @include mq($from: wide) {
      margin-left: -$page-padding-wide;
    }
  }

  ._button-wrapper {
    @include mq($until: tablet) {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: $page-padding-mobile;
      z-index: 100;
    }
  }
  ._button {
    padding: $unit-xs $unit-md;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @include mq($until: tablet) {
      background: $neutral-95;
    }

  }
  ._button_text {
    @include vr($font-body, $font-size-sm);
    @include vr-reset;
    font-weight: 600;
    color: $neutral-00;
  }
  ._button_icon {
    margin-right: $unit-xs;
  }
  ._name {
    padding-right: $unit-sm;
  }

  ._subheading {
    font-weight: 600;
    @include vr($font-body, $font-size-sm);
  }
  ._detail {
    @include vr($font-body, $font-size-sm);
    color: $neutral-50;
  }

  ._subheading,
  ._detail {
    // margin-bottom: $unit-sm;
    padding-right: $unit-sm;
  }

  ._detail-group {
    margin-bottom: $unit-sm;
    @include mq($until: tablet) {
      display: none;
    }
  }

  ._index {   
    min-width: $page-padding-mobile;
    padding-right: $unit-xs;
     
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

  $line-width: 3px;

  ._line {
    position: relative;
    top: $unit-sm;
    margin-top: -$line-width;
    height: $line-width;

    @include mq($until: tablet) {
      display: none;
    }
  }
  ._index,
  ._mobile-index {
    text-transform: uppercase;
  }
  
  ._mobile-index {
    @include mq($from: tablet) {
      display: none;
    }
  }

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
    height: $unit-xl*6;
    text-align: center;

    @include mq($until: tablet) {
      margin-left: -$page-padding-mobile;
      margin-right: -$page-padding-mobile;
    }
    
    @include mq($from: tablet){
      height: $unit-xl*8;
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
    padding: $unit-md;
    
    @include mq($from: desktop) {
      padding: $unit-xl;
    }
    
    @include mq($from: desktop) {
      padding: $unit-xxl;
    }
  }

</style>
