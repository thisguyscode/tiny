<template>
  <section class="c-project-group-intro" :id="'project-group-' + index + '-top'">
    <l-wrapper>
      <div class="c-project-group-intro__grid  o-grid">
        <div class="c-project-group-intro__header  o-grid__cell  u-2/5@tablet">
          <div class="o-grid o-grid--flush">

            <!-- Main group title cell -->
            <div class="o-grid__cell  u-2/3 u-1/1@tablet">
              
              <l-affix
                className="c-project-group-intro__sticky-header"
                :relativeElementSelector="'#p-work__project-group-' + index"
                :z="200"
                :offset="{top: 104, bottom: 0}">

                <!-- Must use template to show contents before affix js has loaded on client -->
                <template scope="props" slot="contents">
                  <h3 class="c-project-group-intro__title u-margin-bottom-none">
                    <c-baselines class="c-project-group-intro__title-baselines"></c-baselines>
                    <span class="c-project-group-intro__index   o-heading  o-heading--gamma  u-margin-bottom-none">{{ index }}. </span>
                    <span class="c-project-group-intro__name   o-heading  o-heading--gamma  u-margin-bottom-none">{{ name }}</span>
                    <c-link
                      class="c-project-group-intro__scrollLink"
                      :scrollToSelector="'#p-work__project-group-' + index">
                      <template slot="linkText">Go back to start of {{name}} projects</template>
                    </c-link>
                  </h3>
                </template>

              </l-affix>
            </div><!--END Main group title cell -->
            
            <div class="o-grid__cell  u-1/3 u-1/2@tablet" v-if="link">
              
              <c-button
                class="c-project-group-intro__button"
                size="sm"
                type="ghost"
                intent="quiet"
                icon="external-link"
                :externalLink="link">
                <span class="u-hide-tablet">Visit </span>Website
              </c-button>

            </div>

          </div>
        </div>

        <div class="o-grid__cell  u-3/5@tablet">
          <p class="c-project-group-intro__description  o-text o-text--paragraph">
            {{ description }}
          </p>
        </div>

      </div>
    </l-wrapper>
  </section>
</template>

<script>
import cButton from '~/components/c-button'
import cBaselines from '~/components/c-baselines'
import lAffix from '~/components/layout/l-affix'
export default {
  components: {
    cButton,
    cBaselines,
    lAffix
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    projectGroup: {
      type: Object,
      required: true
    }
  },
  computed: {
    name: function () {
      return this.projectGroup.name
    },
    link: function () {
      return this.projectGroup.link
    },
    description: function () {
      return this.projectGroup.description
    }
  }
}
</script>


<style lang="scss" scoped>
/* ========================================================================
  # SCOPED STYLES
======================================================================== */

/* Variables (redefine global variable dependencies)
======================================================================== */
// Layout
$navbar-padding-y:         $unit-xs;

$link-padding-y: $unit-xs;
$link-padding-x: $unit-sm;



/* Base class
======================================================================== */
.c-project-group-intro {
  position: relative;
  text-align: left;
  
  @include mq($from: tablet) {
    margin-bottom: $unit-xxl;
  }

}

/* Child classes
======================================================================== */
.c-project-group-intro__grid {
  align-items: flex-start;
}


.c-project-group-intro__header {
  position: relative;
  @include mq($from: desktop) {
    margin-bottom: $unit-md;
  }
}


.c-project-group-intro__title {
  transition: background-color .2s ease;
  display: flex;
  position: relative;
  left: -1px;

  @include mq($from: tablet) {
    margin-left: -$page-padding-tablet;
    margin-bottom: $unit-sm;
  }
  @include mq($from: desktop) {
    margin-left: -$page-padding-desktop;
    margin-bottom: $unit-sm;
  }
  @include mq($from: wide) {
    margin-left: -$page-padding-wide;
  }
}


.c-project-group-intro__name {
  padding-right: $unit-sm;
  @include mq($until: tablet) {
    display: inline-block;
  }
  @include mq($from: tablet) {
    transition: box-shadow .4s ease, color .4s ease;
  }
}


.c-project-group-intro__index {
  margin-right: 1px;
  transition: color .4s ease;
  min-width: $page-padding-mobile;
  padding-right: $unit-xs;
  position: relative;
  color: $neutral-30;
  
  @include mq($from: tablet) {
    transition: color .4s ease;
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


.c-project-group-intro__button {
  @include mq($until: tablet) {
    position: absolute;
    right: 0;
    top: 0;
    display: inline-block;
    width: auto;
  }
}

.c-project-group-intro__description {
  color: $neutral-30;
  @include mq($until: tablet) {
    margin-bottom: $unit-xl;
  }
}


.c-project-group-intro__title-baselines {
  display: none;
}

.c-project-group-intro__scrollLink {
  display: none;
}

.c-project-group-intro__index,
.c-project-group-intro__name {
  transition: padding .2s ease, top .2s ease;
}

.c-project-group-intro__name,
.c-project-group-intro__index {
  @include mq($until: tablet) {
    padding-top: $unit-sm;
    padding-bottom: $unit-sm;
  }
}

.c-project-group-intro__sticky-header {
  &.affix {

    .c-project-group-intro__scrollLink {
      display: initial;
    }

    .c-project-group-intro__title-baselines {
      display: initial;
    }

    .c-project-group-intro__name,
    .c-project-group-intro__index {
      @include vr-reset;
      padding: $unit-xs;
      color: $neutral-00;
    }

    .c-project-group-intro__title {
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        box-shadow: inset 0 0 0 1px $neutral-00;
        z-index: 1;
        pointer-events: none;
      }
      background-color: $neutral-100;
      position: relative;
    }

    .c-project-group-intro__name {
      padding-right: $unit-xs;
      // box-shadow: inset 1px 0 0 0 $neutral-90;
      position: relative;

      @include mq($until: tablet) {
        padding-right: $unit-xs;
      }
      @include mq($from: tablet) {
        padding-right: $unit-md;
        padding-left: $unit-sm;
      }
    }

    .c-project-group-intro__index {
      padding-left: $unit-sm;
    }
  }

  &.affix-bottom {
    opacity: 0;
  }
}

</style>
