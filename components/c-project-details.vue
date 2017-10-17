<template>
  <div
    class="c-project-details"
    :style="'border-bottom: 1px solid ' + color">

    <l-wrapper>
      
      <!-- heading-wrapper -->
      <div
        class="c-project-details__heading-wrapper"
        @click="handleDetails"
        :class="{'active': showDetails}">

        <span class="o-heading o-heading--delta">Project details</span>
        
        <span
          v-if="showDetails"
          class="c-project-details__heading-trigger">
          <span class="c-project-details__heading-trigger-text  o-text">
            Hide
          </span>
          <c-icon class="c-project-details__heading-trigger-icon" name="chevron-up"></c-icon>
        </span>

        <span
          v-else
          class="c-project-details__heading-trigger">
          <span class="c-project-details__heading-trigger-text  o-text">
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
          <div class="c-project-details__objective-cell _cell u-2/5@tablet">
            <h4>Objective</h4>
            <p
              v-if="transitionEnd"
              class="c-project-details__overview-string  o-text o-text--xl">
              {{ project.objective }}
            </p>
          </div><!--END objective-cell -->

          <!-- details cell -->
          <div class="_cell u-3/5@tablet">
            <l-grid>
              
              <!-- column -->
              <div class="c-project-details__list-column _cell u-1/3@tablet">
                <l-grid>
                  <div class="c-project-details__group  u-vr-reset  _cell u-2/5@mobile u-1/1@tablet">
                    <h4>Date</h4>
                    <!-- <transition name="fade"> -->
                      <p
                        v-if="transitionEnd"
                        class="c-project-details__item c-project-details__item-string  o-text">
                        {{ project.date }}
                      </p>
                    <!-- </transition> -->
                  </div>
                  <div class="c-project-details__group  u-vr-reset  _cell u-2/5@mobile u-1/1@tablet">
                    <h4>Role</h4>
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
              <div class="c-project-details__list-column _cell u-2/5@mobile u-1/3@tablet">
                <h4>Skills</h4>
                <!-- <transition name="fade"> -->
                  <ul
                    v-if="transitionEnd"
                    class="c-project-details__group  u-vr-reset  u-list-bare">
                    <li
                      v-for="skill in project.skills"
                      class="c-project-details__item  o-text"
                      :key="skill.id">
                      <span class="c-project-details__item-string">{{ skill }}</span>
                    </li>
                  </ul>
                <!-- </transition> -->
              </div><!--END column -->

              <!-- column -->
              <div class="c-project-details__list-column _cell u-2/5@mobile u-1/3@tablet">
                <h4>Tech</h4>
                <ul
                  v-if="transitionEnd"
                  class="c-project-details__group  u-vr-reset  u-list-bare">
                  <li
                    v-for="tech in project.techs"
                    :key="tech.id"
                    class="tech-wrapper">
                    
                    <span
                      v-if="tech === 'Adobe Photoshop'"
                      class="c-project-details__tech-icon-wrapper ps">
                      <span class="c-project-details__tech-icon-text">Ps</span>
                    </span>
                    
                    <span
                      v-else-if="tech === 'Adobe Illustrator'"
                      class="c-project-details__tech-icon-wrapper ai">
                      <span class="c-project-details__tech-icon-text">Ai</span>
                    </span>

                    <span class="c-project-details__item-string  c-project-details__tech-string  o-text">{{ tech }}</span>

                  </li>
                </ul>
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
  text-align: left;
  padding-top: $unit-md;
  transition: border-color .8s ease;
  margin-top: -1px;
  @include mq($from: tablet) {
    padding-top: $unit-lg;
  }
  background-color: rgba($neutral-100, .3);
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
    box-shadow: inset 0 -1px 0 0 $neutral-90;
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
}

.c-project-details__group {
  @include vr-reset;
  display: inline-block;
  padding-bottom: 0;
  margin-bottom: $paragraph-trailer;
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
.c-project-details__tech-icon-text {
  font-weight: $font-weight-semi;
  height: 100%;
  display: inline-block;
}
.c-project-details__tech-string {
  display: inline-block;
}

.c-project-details__item-string,
.c-project-details__overview-string {
  // color: $neutral-40;
}

</style>
