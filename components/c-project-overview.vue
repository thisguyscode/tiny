<template>
  <section class="c-project-overview" :id="sectionId">
    <l-wrapper>
      
      <l-grid>
        
        <div class="_details-wrapper  l-grid__cell u-2/5@tablet">
          
          <l-grid>
            <!-- Title cell -->
            <div class="l-grid__cell  u-2/3 u-1/2@tablet">
              <h3 class="_title  o-heading o-heading--delta">
                <span class="_index" :style="indexStyle">{{ index }}. </span>
                <span class="_name">{{ name }}</span>
              </h3>
            </div>

            <!-- Just the line (desktop only) -->
            <div class="_line  l-grid__cell  u-1/2" :style="lineStyle"></div>
            
            <!-- Details -->
            <div class="c-project-overview__details-cell  l-grid__cell">
              <l-grid class="u-margin-bottom-sm">
                <div class="l-grid__cell  u-1/2@tablet">
                  
                  <div v-if="role" class="_detail-group">
                    <h4 class="c-project-overview__subheading  o-heading o-heading--zeta">Role</h4>
                    <p class="c-project-overview__detail  o-text o-text--sm">{{ role }}</p>
                  </div>

                  <div v-if="role" class="_detail-group">
                    <h4 class="c-project-overview__subheading  o-heading o-heading--zeta">Tech</h4>
                    <ul class="u-list-bare">
                      <li v-for="tech in techs" :key="tech.id">
                        <p class="c-project-overview__detail  o-text o-text--sm">{{ tech }}</p>
                      </li>
                    </ul>
                  </div>

                </div>

                <div class="l-grid__cell  u-1/2@tablet">
                  
                  <div v-if="date" class="_detail-group">
                    <h4 class="c-project-overview__subheading  o-heading o-heading--zeta">Date</h4>
                    <p class="c-project-overview__detail  o-text o-text--sm">{{ date }}</p>
                  </div>

                  <div v-if="skills" class="_detail-group">
                    <h4 class="c-project-overview__subheading  o-heading o-heading--zeta">Skills</h4>
                    <ul class="u-list-bare">
                      <li v-for="skill in skills" :key="skill.id">
                        <p class="c-project-overview__detail  o-text o-text--sm">{{ skill }}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </l-grid>

            </div>
            <div class="l-grid__cell u-1/3 u-1/2@tablet">
              <div class="_button-wrapper">
                <c-button 
                  :relativeLink="linkTo"
                  :inlineStyle="buttonStyle"
                  :iconInlineStyle="viewIconStyle"
                  type="ghost"
                  icon="eye">
                  View<span class="u-hide-mobile"> Project</span>
                </c-button>
              </div>
            </div>
          </l-grid>

        </div>

        <div class="l-grid__cell u-3/5@tablet">
          <div class="_image-wrapper" :class="imgWrapperClass" :style="'background-color:' + color">
            <c-image
              v-if="imgSrc"
              :fit="imgClass"
              :imageSrc="imgSrc"
              :desktop=".7"
              :wide=".6"
            />
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
      if (this.project.imgClass === 'cover') {
        return 'cover'
      } else if (this.project.imgClass === 'contain') {
        return 'contain'
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

  .c-project-overview__detail {
    color: $neutral-30;
  }

  .c-project-overview__details-cell {
    @include mq($until: tablet) {
      display: none
    }
  }
  

  .c-project-overview {
    position: relative;
    text-align: left;
    margin-bottom: $unit-xxl;
    @include mq($from: tablet) {
      margin-bottom: $unit-xxl;
    }
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  ._title {
    // @include vr($font-display, $font-size-md);
    display: flex;
    margin-bottom: $unit-sm;

    @include mq($from: tablet) {
      // @include vr($font-display, $font-size-lg);
      margin-left: -$page-padding-tablet;
      // margin-bottom: $unit-sm;
    }
    @include mq($from: desktop) {
      // @include vr($font-display, $font-size-xl);
      margin-left: -$page-padding-desktop;
      margin-bottom: $unit-sm;
    }
    @include mq($from: wide) {
      margin-left: -$page-padding-wide;
    }
  }

  ._button-wrapper {
    @include mq($until: tablet) {
      // position: absolute;
      // bottom: 0;
      // left: 0;
      // right: 0;
      // padding: $page-padding-mobile;
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
  ._name {
    padding-right: $unit-sm;
  }

  .c-project-overview__subheading {
    margin-bottom: 0;
    font-weight: $font-weight-semi;
  }
  ._detail {
    color: $neutral-50;
  }

  .c-project-overview__subheading,
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
