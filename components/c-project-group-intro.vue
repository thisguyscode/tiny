<template>
  <section class="c-project-group-intro" :id="'project-group-' + index + '-top'">
    <l-wrapper>
      <l-grid class="c-project-group-intro__grid">
        <div class="c-project-group-intro__header  l-grid__cell  u-2/5@tablet">
          <l-grid>

            <!-- Main group title cell -->
            <div class="l-grid__cell">
              
              <l-affix
                className="c-project-group-intro__sticky-header"
                :relativeElementSelector="'#p-work__project-group-' + index"
                :z="200"
                :offset="{top: 120, bottom: 0}">

                <!-- Must use template to show contents before affix js has loaded on client -->
                <template scope="props" slot="contents">
                  <h3 class="c-project-group-intro__title u-margin-bottom-none">
                    <c-baselines class="c-project-group-intro__title-baselines"></c-baselines>
                    <span class="c-project-group-intro__index   o-heading  o-heading--gamma  u-margin-bottom-none">{{ index }}. </span>
                    <span class="c-project-group-intro__name   o-heading  o-heading--gamma  u-margin-bottom-none">{{ name }}</span>
                    <f-link
                      class="c-project-group-intro__scrollLink">
                      <!-- :scrollToSelector="'#project-group-' + index + '-top'" -->
                      <span class="u-link-bloater"></span>
                    </f-link>
                  </h3>
                </template>

              </l-affix>
            </div><!--END Main group title cell -->
            
            <div class="l-grid__cell u-1/2">
              <c-button :stretch="false" class="c-project-group-intro__button" type="ghost" icon="external-link" :externalLink="link">
                Visit Website
              </c-button>
            </div>

          </l-grid>
        </div>

        <div class="l-grid__cell  u-3/5@tablet">
          <p class="o-text o-text--paragraph">{{ description }}</p>
        </div>

      </l-grid>
    </l-wrapper>
  </section>
</template>

<script>
import cIcon from '~/components/c-icon'
import cButton from '~/components/c-button'
import cBaselines from '~/components/c-baselines'
import fLink from '~/components/functional/f-link'
import lWrapper from '~/components/layout/l-wrapper'
import lAffix from '~/components/layout/l-affix'
import lGrid from '~/components/layout/l-grid'
export default {
  components: {
    cIcon,
    cButton,
    cBaselines,
    fLink,
    lWrapper,
    lGrid,
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
  margin-bottom: $unit-md;
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
  color: $neutral-80;
  
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
  z-index: 900;
  @include mq($until: tablet) {
    position: absolute;
    right: 0;
    top: 0;
    display: inline-block;
    width: auto;
  }
}


.c-project-group-intro__title-baselines {
  display: none;
  // @include mq($from: tablet) {
  //   left: -$page-padding-tablet;
  // }
  // @include mq($from: desktop) {
  //   left: -$page-padding-desktop;
  // }
  // @include mq($from: wide) {
  //   left: -$page-padding-wide;
  // }
}


.c-project-group-intro__scrollLink {
  display: none;
}

.c-project-group-intro__index,
.c-project-group-intro__name {
  transition: padding .2s ease, top .2s ease;
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
      background-color: $neutral-95;
      box-shadow: inset 0 0 0 1px $neutral-80;
    }

    .c-project-group-intro__name {
      padding-right: $unit-xs;
      box-shadow: inset 1px 0 0 0 $neutral-90;
      position: relative;

      @include mq($until: tablet) {
        padding-right: $unit-xs;
      }
      @include mq($from: tablet) {
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
