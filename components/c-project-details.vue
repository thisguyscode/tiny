<template>
  <div class="c-project-details" :style="'border-bottom: 1px solid ' + color">

    <l-wrapper>
      
      <div class="_heading-wrapper" @click="handleDetails" :class="{'active': showDetails}">
        <span class="_heading">Project details</span>
        <span class="_heading-trigger" v-if="showDetails">
          <span class="_heading-trigger-text">Hide</span>
          <c-icon class="_heading-trigger-icon" name="chevron-up"></c-icon>
        </span>
        <span v-if="!showDetails" class="_heading-trigger">
          <span class="_heading-trigger-text">Show</span>
          <c-icon class="_heading-trigger-icon" name="chevron-down"></c-icon>
        </span>
      </div>
      
      <div class="_grid-wrapper" :class="{ 'visible': showDetails }">
        <l-grid>

          <div class="_objective-cell _cell u-2/5@tablet">
            <h4>Objective</h4>
            <transition name="fade">
              <p v-if="transitionEnd">{{ project.objective }}</p>
            </transition>
          </div>

          <div class="_cell u-3/5@tablet">
            <l-grid>
              <div class="_list-column _cell u-1/3@tablet">
                <l-grid>
                  <div class="_group _cell u-2/5@mobile u-1/1@tablet">
                    <h4>Date</h4>
                    <transition name="fade">
                      <p v-if="transitionEnd" class="_item">{{ project.date }}</p>
                    </transition>
                  </div>
                  <div class="_group _cell u-2/5@mobile u-1/1@tablet">
                    <h4>Role</h4>
                    <transition name="fade">
                      <p v-if="transitionEnd" class="_item">{{ project.role }}</p>
                    </transition>
                  </div>
                </l-grid>
              </div>
              <div class="_list-column _cell u-2/5@mobile u-1/3@tablet">
                <h4>Skills</h4>
                <transition name="fade">
                  <ul v-if="transitionEnd" class="_group u-list-bare">
                    <li class="_item" v-for="skill in project.skills" :key="skill.id">
                      {{ skill }}
                    </li>
                  </ul>
                </transition>
              </div>
              <div class="_list-column _cell u-2/5@mobile u-1/3@tablet">
                <h4>Tech</h4>
                <transition name="fade">
                  <ul v-if="transitionEnd" class="_group u-list-bare">
                    <li class="_item" v-for="tech in project.techs" :key="tech.id">
                      {{ tech }}
                    </li>
                  </ul>
                </transition>
              </div>
            </l-grid>
          </div>
        </l-grid>
      </div>
    </l-wrapper>
  </div><!--END Hero -->
  
</template>

<script>
  import lGrid from '~/components/layout/l-grid'
  import lWrapper from '~/components/layout/l-wrapper'
  import cIcon from '~/components/c-icon'
  export default {
    data: () => {
      return {
        showDetails: false
      }
    },
    components: {
      lGrid,
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
    methods: {
      handleDetails: function () {
        this.$store.commit('toggleDetails')
        this.showDetails = this.$store.state.showDetails
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
    },
    mounted () {
      this.showDetails = this.$store.state.showDetails
    }
  }
</script>

<style lang="scss" scoped>

 $transition-duration: .2s;
 $transition-easing: ease;

  // Import variables and global settings
  @import "~assets/styles/imports";

  .c-project-details {
    text-align: left;
    padding-top: $unit-md;
    transition: border-color .8s ease;
    @include mq($from: tablet) {
      padding-top: $unit-lg;
    }
    // padding-bottom: $unit-md;
    background-color: rgba($neutral-100, .3);
  }
  ._heading-trigger-text {
    margin-right: $unit-xs;
  }

  ._heading-trigger-icon {
    height: .8em;
    color: $red;
  }

  ._grid-wrapper {
    @include mq($until: tablet) {
      display: none;
      &.visible {
        display: initial;
      }
    }
  }

  ._heading-wrapper {
    cursor: pointer;
    padding-bottom: $heading-trailer;
    &.active {
      box-shadow: inset 0 -1px 0 0 $neutral-90;
      margin-bottom: $paragraph-trailer;
    }
    @include mq($from: tablet) {
      display: none;
    }
  }
  ._heading {
    @include vr($font-display, $font-size-xl);
  }
  ._heading-trigger {
    @include vr($font-body, $font-size-lg);
    float: right;
  }
  ._objective-cell {
    @include mq($from: tablet) {
      padding-right: $unit-lg;
    }
  }

  ._list-column {
    @include mq($from: tablet) {
      padding-right: $unit-md;
    }
  }

  ._item {
    @include vr($font-body, $font-size-sm);
    margin-bottom: $unit-sm;
  }

  ._group {
    @include vr-reset;
    display: inline-block;
    padding-bottom: 0;
    margin-bottom: $paragraph-trailer;
  }

</style>
