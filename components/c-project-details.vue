<template>
  <div
    class="c-project-details">

    <l-wrapper class="c-project-details__inner">
      
      <!-- heading-wrapper -->
      <div
        class="c-project-details__heading-wrapper"
        @click="handleDetails"
        :class="{'active': showDetails}">

        <span class="o-heading o-heading--delta">Project details</span>
        
        <span
          v-if="showDetails"
          class="c-project-details__heading-trigger  o-text o-text--lg">
          <span class="c-project-details__heading-trigger-text">
            Hide
          </span>
          <c-icon class="c-project-details__heading-trigger-icon" name="chevron-up"></c-icon>
        </span>

        <span
          v-else
          class="c-project-details__heading-trigger  o-text o-text--lg">
          <span class="c-project-details__heading-trigger-text">
            Show
          </span>
          <c-icon class="c-project-details__heading-trigger-icon" name="chevron-down"></c-icon>
        </span>

      </div><!--END heading-wrapper -->
      
      <!-- grid-wrapper -->
      <div
        class="c-project-details__grid-wrapper"
        :class="{ 'visible': showDetails }">

        <l-grid>

          <!-- objective cell -->
          <div class="c-project-details__objective-cell l-grid__cell u-2/5@tablet">
            <h4 class="c-project-details__subheading  o-heading o-heading--zeta">Objective</h4>
            <p
              v-if="transitionEnd"
              class="c-project-details__overview-string  o-text o-text--lg">
              {{ project.objective }}
            </p>
          </div><!--END objective-cell -->

          <!-- details cell -->
          <div class="l-grid__cell u-3/5@tablet">
            <l-grid>
              
              <!-- column -->
              <div class="c-project-details__list-column l-grid__cell u-1/3@tablet">
                <l-grid>
                  <div class="c-project-details__group  l-grid__cell u-2/5@mobile u-1/1@tablet">
                    <h4 class="o-heading o-heading--zeta">Date</h4>
                    <!-- <transition name="fade"> -->
                      <p
                        v-if="transitionEnd"
                        class="c-project-details__item c-project-details__item-string  o-text">
                        {{ project.date }}
                      </p>
                    <!-- </transition> -->
                  </div>
                  <div class="c-project-details__group  l-grid__cell u-2/5@mobile u-1/1@tablet">
                    <h4 class="o-heading o-heading--zeta">Role</h4>
                    <!-- <transition name="fade"> -->
                      <p
                        v-if="transitionEnd"
                        class="c-project-details__item c-project-details__item-string  o-text">
                        {{ project.role }}
                      </p>
                    <!-- </transition> -->
                  </div>
                </l-grid>
              </div><!--END column -->


              <!-- column -->
              <div class="c-project-details__list-column l-grid__cell u-2/5@mobile u-1/3@tablet">
                <h4 class="o-heading o-heading--zeta">Tech</h4>
                <ul
                  v-if="transitionEnd"
                  class="c-project-details__group  u-list-bare">
                  <li
                    v-for="tech in project.techs"
                    :key="tech.id"
                    class="tech-wrapper">

                    <c-tech-icon :name="tech"/>

                    <span class="c-project-details__item-string  c-project-details__tech-string  o-text">{{ tech }}</span>

                  </li>
                </ul>
              </div><!--END column -->

              <!-- column -->
              <div class="c-project-details__list-column l-grid__cell u-2/5@mobile u-1/3@tablet">
                <h4 class="o-heading o-heading--zeta">Skills</h4>
                <!-- <transition name="fade"> -->
                  <ul
                    v-if="transitionEnd"
                    class="c-project-details__group u-list-bare">
                    <li
                      v-for="skill in project.skills"
                      class="c-project-details__item"
                      :key="skill.id">
                      <span class="c-project-details__item-string  o-text">{{ skill }}</span>
                    </li>
                  </ul>
                <!-- </transition> -->
              </div><!--END column -->

            </l-grid>
          </div><!--END details cell -->
        </l-grid>
      </div><!--END grid-wrapper -->
    </l-wrapper>
  </div><!--END Hero -->
  
</template>

<script>
  import lGrid from '~/components/layout/l-grid'
  import lWrapper from '~/components/layout/l-wrapper'
  import cIcon from '~/components/c-icon'
  import cTechIcon from '~/components/c-tech-icon'
  export default {
    data: () => {
      return {
        showDetails: false
      }
    },
    components: {
      lGrid,
      lWrapper,
      cIcon,
      cTechIcon
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
/* ========================================================================
  # SCOPED STYLES
======================================================================== */

/* Global variable dependencies
======================================================================== */
// Sizes
$unit-xs: $unit-xs;
$unit-sm: $unit-sm;
$unit-md: $unit-md;
$unit-lg: $unit-lg;

// Colors
$clr-primary: $clr-primary;
$lightest:    $lightest;
$darkest:     $darkest;
$blue:        $blue;
$yellow:      $yellow;

/* Local variables
======================================================================== */
$transition-duration: .2s;
$transition-easing: ease;

.c-project-details {
  position: relative;
  text-align: left;
  padding-top: $unit-md;
  transition: border-color .8s ease;
  margin-bottom: -1px;
  border-bottom: 1px solid $neutral-00;
  @include mq($from: tablet) {
    padding-top: $unit-lg;
  }
  background-color: $semi-transparent-background;
}
.c-project-details__heading-trigger-text {
  margin-right: $unit-xs;
}

.c-project-details__heading-trigger-icon {
  height: .8em;
  color: $clr-primary;
}

.c-project-details__grid-wrapper {
  @include mq($until: tablet) {
    display: none;
    &.visible {
      display: initial;
    }
  }
}

.c-project-details__heading-wrapper {
  cursor: pointer;
  padding-bottom: $heading-trailer;
  &.active {
    box-shadow: 0 1px 0 0 $neutral-60;
    margin-bottom: $paragraph-trailer;
  }
  @include mq($from: tablet) {
    display: none;
  }
}
.c-project-details__heading-trigger {
  float: right;
}
.c-project-details__objective-cell {
  @include mq($from: tablet) {
    padding-right: $unit-lg;
  }
}

.c-project-details__list-column {
  @include mq($from: tablet) {
    padding-right: $unit-md;
  }
}

.c-project-details__item {
  margin-bottom: $unit-sm;
  &:last-of-type {
    margin-bottom: 0;
  }
}

.c-project-details__group {
  // @include vr-reset;
  display: inline-block;
  padding-bottom: 0;
  margin-bottom: $unit-md;
}

.tech-wrapper {
  display: flex;
  margin-bottom: $unit-sm;
}

.c-project-details__tech-icon-wrapper {
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  padding-left: $unit-xs;
  padding-right: $unit-xs;
  text-align: center;
  height: $unit-md;
  width: $unit-md;
  display: inline-block;
  margin-right: $unit-xs;
  &.ps {
    background-color: $blue;
    > .c-project-details__tech-icon-text {
      color: contrasting-color($blue, $lightest, $darkest)
    }
  }
  &.ai {
    background-color: $yellow;
    > .c-project-details__tech-icon-text {
      color: contrasting-color($yellow, $lightest, $darkest)
    }
  }
}

.c-project-details__tech-icon {
  height: 100%;
  width: auto;
}

.c-project-details__tech-icon-text {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  transform: translateY(-50%);
  font-family: $font-display;
  font-weight: $font-weight-semi;
  display: inline-block;
}

.c-project-details__tech-string {
  display: inline-block;
}

.c-project-details__overview-string {
  margin-bottom: $unit-md;
}

.c-project-details__item-string,
.c-project-details__overview-string {
  color: $neutral-40;
}


.c-project-details__subheading {
  margin-bottom: $unit-sm;
}

// .c-project-details__inner {
//   margin-bottom: -1px;
// }
</style>
