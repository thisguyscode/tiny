<template>
  <!-- <transition name="u-transition-fade"> -->
    <div v-if="transitionEnd" class="c-project-nav-panel" :class="panelClass">
      <nuxt-link
        class="c-project-nav-panel__link"
        :to="'/work/projects/' + project.slug + '/'"
      >
        <div
          class="c-project-nav-panel__image-wrapper  o-liner"
          :class="imgWrapperClass"
          :style="
            'background-color: ' + project.color
          "
        >
          <c-image
            v-if="project.imgSrc"
            :fit="project.imgClass"
            :alt="project.imgAltText"
            :imageSrc="project.imgSrc"
          />
        </div>

        <div class="c-project-nav-panel__content">
          
          <!-- label -->
          <div class="c-project-nav-panel__label-wrapper">
            <div
              class="c-project-nav-panel__label  o-text"
              :class="textClass"
              :style="'background-color: ' + project.color + ';'">
            
              <!-- previous -->
              <c-icon
                v-if="direction === 'previous'"
                class="c-project-nav-panel__label-icon  c-project-nav-panel__label-icon--previous"
                name="arrow-left">
              </c-icon>
              <span v-if="direction === 'previous'">Previous <span class="c-project-nav-panel__string-project">project</span></span>

              <!-- next -->
              <span v-if="direction === 'next'">Next <span class="c-project-nav-panel__string-project">project</span></span>
              <c-icon
                v-if="direction === 'next'"
                class="c-project-nav-panel__label-icon  c-project-nav-panel__label-icon--next"
                name="arrow-right">
              </c-icon>

            </div>
          </div><!--END label -->

          <div class="c-project-nav-panel__group-title-wrapper">
            <h4
              class="c-project-nav-panel__group-title  o-heading o-heading--delta"
              :class="textClass"
              :style="'color: ' + project.color">
              {{ project.group }}
            </h4>
          </div>

          <div class="c-project-nav-panel__project-title-wrapper">
            <h3
              class="c-project-nav-panel__project-title  o-heading o-heading--gamma"
              :class="textClass"
              :style="'color: ' + project.color">
              {{ project.name }}
            </h3>
          </div>
        </div>

      </nuxt-link>
    </div>
  <!-- </transition> -->
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
    },
    transitionEnd: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    panelClass: function () {
      return {
        'c-project-nav-panel--previous': this.direction === 'previous',
        'c-project-nav-panel--next': this.direction === 'next'
      }
    },
    textClass: function () {
      return {
        'project-color-is-light': this.project.contrastingColor === 'light',
        'project-color-is-dark': this.project.contrastingColor === 'dark'
      }
    },
    imgWrapperClass: function () {
      return {
        'c-project-nav-panel__image-wrapper--padded': this.project.imgWrapperClass === 'padded'
      }
    }
    // setScrollTo: function () {
    //   this.$store.commit('setScrollTo', '#' + this.current.slug)
    // }
  }
}
</script>


<style lang="scss" scoped>
/* ========================================================================
  # SCOPED STYLES
======================================================================== */

/* Variables
======================================================================== */
// Layout
$label-icon-gutter: $unit-xs;


/* Base class
======================================================================== */ 
.c-project-nav-panel {
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: $unit-md;
  padding-bottom: $unit-md;
  min-height: $unit-xxl*3;

  &:hover,
  &:active {
    .c-project-nav-panel__image-wrapper {
      opacity: 1;
      @include mq($from: desktop) {
        filter: grayscale(0);
      }
    }
  }

  @include mq($from: desktop) {
    padding-top: $unit-lg;
    padding-bottom: $unit-lg;
    min-height: $unit-xxl*3;
  }
  
}

.c-project-nav-panel--previous {
  padding-left: $unit-lg;
  padding-right: $unit-xxl;
  text-align: left;
}

.c-project-nav-panel--next {
  padding-right: $unit-lg;
  padding-left: $unit-xxl;
  text-align: right;
}



/* Link (wrapped around everything)
======================================================================== */ 
.c-project-nav-panel__link {
  text-decoration: none;
}



/* Image wrapper
======================================================================== */ 
.c-project-nav-panel__image-wrapper {
  transition: filter .1s ease, opacity .1s ease;
  opacity: .8;

  @include mq($from: desktop) {
    filter: grayscale(100%);
  }
}

.c-project-nav-panel__image-wrapper--padded {
  padding: $unit-sm;
  @include mq($from: tablet) {
    padding: $unit-md;
  }
}



/* Content wrapper
======================================================================== */
.c-project-nav-panel__content {
  position: relative;
}



/* Titles
======================================================================== */ 
.c-project-nav-panel__group-title-wrapper {
  margin-bottom: $unit-sm;
}

.c-project-nav-panel__group-title,
.c-project-nav-panel__project-title {
  display: inline;
  &.project-color-is-dark {
    background-color: $darkest;
  }
  &.project-color-is-light {
    background-color: $lightest;
  }
}



/* Label
======================================================================== */ 
.c-project-nav-panel__label-wrapper {
  margin-bottom: $unit-md;
}

.c-project-nav-panel__label {
  display: inline;
  &.project-color-is-dark {
    // background-color: $darkest;
    color: $darkest;
  }
  &.project-color-is-light {
    // background-color: $lightest;
    color: $lightest;
  }
}

.c-project-nav-panel__label-icon {
  height: .8em;
  width: auto;
}

.c-project-nav-panel__label-icon--previous {
  margin-right: $label-icon-gutter;
}

.c-project-nav-panel__label-icon--next {
  margin-left: $label-icon-gutter;
}



/* MISC
======================================================================== */ 
.c-project-nav-panel__string-project {
  font-weight: $font-weight-regular;

  @include mq($until: tablet) {
    display: none;
  }
}

  
</style>
