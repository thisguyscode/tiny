<template>
  <div class="c-project-hero" :style="'background-color: ' + color">

    <l-wrapper>
      <l-grid class="c-project-hero-grid">

        <!-- Hero text panel -->
        <div class="c-project-hero-text-cell l-grid__cell u-2/5@tablet">
          <div class="c-project-hero-text-wrapper" :style="'color:' + color">
           
            <transition name="fade">
              <div v-if="transitionEnd">

                <div class="c-project-hero__group-title-wrapper">

                <!-- Group -->
                  <f-link
                    class="c-project-hero__group-title  o-heading o-heading--delta"
                    :class="setTextClass(project)"
                    :externalLink="project.groupLink">
                    {{ project.group }}
                    <c-icon
                      v-if="project.group"
                      class="c-project-hero__group-title-icon"
                      name="external-link">
                    </c-icon>
                  </f-link>
                </div>

                <!-- Title -->
                <div class="c-project-hero__project-title-wrapper">
                  <h1
                    class="c-project-hero__project-title  o-heading o-heading--beta"
                    :class="setTextClass(project)">
                    {{ project.name }}
                  </h1>
                </div>

              </div>
            </transition>

          </div>
        </div><!--END Hero text panel -->
        
        <!-- Hero image panel -->
        <transition name="fade">
          <div v-if="transitionEnd" class="c-project-hero-image-cell l-grid__cell u-3/5@tablet" :class="setImgClass(project)">
            <div class="c-project-hero-image-reference  o-liner" :class="setImgWrapperClass(project)">
              <div class="c-project-hero-image-wrapper">
                <c-image
                  v-if="project.imgSrc"
                  :lazy="false"
                  :fit="setImgClass(project)"
                  :imageSrc="project.imgSrc"
                />
              </div>
            </div>
          </div>
        </transition>


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
          return 'project-color-is-dark'
        } else if (project.contrastingColor === 'dark') {
          return 'project-color-is-light'
        }
      },
      setImgClass: function (project) {
        if (project.imgClass) {
          return project.imgClass
        }
      },
      setImgWrapperClass: function (project) {
        if (project.imgWrapperClass === 'padded') {
          return 'padded'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
/* ========================================================================
  # SCOPED STYLES
======================================================================== */

/* Variables
======================================================================== */
$transition-duration: .8s;
$transition-easing: ease-out;
  


/* Base class
======================================================================== */
.c-project-hero {
  // margin-top: -1px;
  min-height: $unit-xxl*2;
  width: 100%;
  overflow: hidden;
  position: relative;
  text-align: left;
  background-color: rgba($darkest, .5);
  transition: background-color $transition-duration $transition-easing;
}



/* Image
======================================================================== */
.c-project-hero-image-cell {
  position: relative;

  &.cover {
    position: static;
  }
  
  @include mq($until: tablet) {
    height: $unit-xl*2;
    position: static;
    order: 1;
  }  
}


.c-project-hero-image-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
}


.c-project-hero-image-reference {    
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



/* Text
======================================================================== */
.c-project-hero-text-wrapper {
  padding-top: 0;
  padding-bottom: $page-padding-mobile;
  height: 100%;
  position: relative;
  z-index: 1;
  
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

.c-project-hero-text-cell {
  height: 100%;
  @include mq($until: tablet) {
    min-height: $unit-xl*4;
    order: 2;
  }
}


.c-project-hero__group-title {
  display: inline;
  white-space: nowrap;
  &:hover {
    // opacity: 1;
  }
}

.c-project-hero__project-title {
  display: inline;
}

.c-project-hero__group-title-wrapper {
  margin-bottom: $heading-trailer;
}

.c-project-hero__group-title,
.c-project-hero__project-title {
  &.project-color-is-light {
    background-color: $darkest;
  }
  &.project-color-is-dark {
    background-color: $lightest;
  }
}


.c-project-hero__group-title-icon {
  height: .7em;
}

</style>
