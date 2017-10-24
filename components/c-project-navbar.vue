<template>
  <nav class="c-project-navbar" :style="'background-color:' + color" :class="baseClass">
    <l-wrapper>
      <l-grid>
        
        <!-- PREVIOUS -->
        <nuxt-link
          :to="'/work/projects/' + previous.slug + '/'"
          :class="linkClass"
          class="
            c-project-navbar__link
            c-project-navbar__link--previous
            l-grid__cell
            u-1/3 u-1/5@tablet
          "
        >
          <span class="c-project-navbar__link-text o-text u-vr-reset">
            <c-icon class="c-project-navbar__icon c-project-navbar__icon--previous" name="arrow-left"></c-icon>
            <span>
              Previous <span class="c-project-navbar__string-project">project</span>
            </span>
          </span>
        </nuxt-link><!--END previous -->
        
        <!-- NEXT -->
        <nuxt-link
          :to="'/work/projects/' + next.slug + '/'"
          :class="linkClass"
          class="
            c-project-navbar__link
            c-project-navbar__link--next
            l-grid__cell
            u-1/3 u-1/5@tablet
          "
        >
          <span class="c-project-navbar__link-text o-text u-vr-reset">
            <span>
              Next <span class="c-project-navbar__string-project">project</span>
            </span>
            <c-icon class="c-project-navbar__icon c-project-navbar__icon--next" name="arrow-right"></c-icon>
          </span>
        </nuxt-link><!--END next -->
        
        <!-- SPACER -->
        <div class="u-2/5@tablet"></div>

        <!-- CLOSE -->
        <nuxt-link
          @click.native="setScrollTo"
          :class="linkClass"
          :to="'/'"
          class="
            c-project-navbar__link
            c-project-navbar__link--close
            l-grid__cell
            u-1/3 u-1/5@tablet
          "
        >
          <span class="c-project-navbar__link-text o-text u-vr-reset">
            <span>Close</span>
            <c-icon class="c-project-navbar__icon c-project-navbar__icon--close" name="close"></c-icon>
          </span>
        </nuxt-link><!--END close -->

        <div class="l-grid__cell u-0  u-2/5@tablet"></div>
        <div class="l-grid__cell u-1/3  u-1/5@tablet"></div>
      </l-grid>
    </l-wrapper>
  </nav>
</template>

<script>
  import lGrid from '~/components/layout/l-grid'
  import lWrapper from '~/components/layout/l-wrapper'
  import cIcon from '~/components/c-icon'

  export default {
    components: {
      lGrid,
      lWrapper,
      cIcon
    },
    props: {
      color: {
        type: String
      },
      current: {
        type: Object
      },
      next: {
        type: Object
      },
      previous: {
        type: Object
      }
    },
    computed: {
      baseClass: function () {
        return {
          'dark': this.current.contrastingColor === 'dark',
          'light': this.current.contrastingColor === 'light'
        }
      },
      linkClass: function () {
        return {
          'disabled': !this.current.contrastingColor,
          'project-color-is-dark': this.current.contrastingColor === 'dark',
          'project-color-is-light': this.current.contrastingColor === 'light'
        }
      }
    },
    methods: {
      setScrollTo: function () {
        this.$store.commit('setScrollTo', this.current.slug)
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
// Layout
$navbar-padding-y: $unit-xs;
$navbar-inner-height: $unit-md;
$navbar-height: $navbar-padding-y*2 + $navbar-inner-height;
$icon-gutter: $unit-xs;



/* Base class
======================================================================== */
.c-project-navbar {
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: box-shadow .8s ease, background-color .8s ease;
  &.dark {
    box-shadow: inset 0 1px 0 0 rgba($neutral-100, .2);
  }
  &.light {
    box-shadow: inset 0 1px 0 0 rgba($neutral-00, .2);
  }
}



/* Link
======================================================================== */
.c-project-navbar__link {
  padding-top: $navbar-padding-y;
  padding-bottom: $navbar-padding-y;
  color: $neutral-100;
  transition: color .8s ease;

  &.disabled {
    pointer-events: none;
  }

  &.project-color-is-dark {
    color: $darkest;
  }

  &.project-color-is-light {
    color: $lightest;
  }

  &:hover {
    .c-project-navbar__icon--previous {
      transform: translateX(-$unit-xs);
    }
    .c-project-navbar__icon--next {
      transform: translateX($unit-xs);
    }
    .c-project-navbar__icon--close {
      transform: scale(1.2);
    }
    &.project-color-is-dark {
      background-color: rgba($darkest, .1)
    }

    &.project-color-is-light {
      background-color: rgba($lightest, .1)
    }
  }
}

.c-project-navbar__link--previous {
  text-align: left;
}
.c-project-navbar__link--next {
  text-align: right;
}
.c-project-navbar__link--close {
  text-align: right;
}
.c-project-navbar__link-text {
  font-weight: $font-weight-semi;
}



/* Icon
======================================================================== */
.c-project-navbar__icon {
  height: 1.2em;
  vertical-align: text-top;
  transition: transform .2s ease;
}

.c-project-navbar__icon--previous {
  margin-right: $icon-gutter;
}

.c-project-navbar__icon--next {
  margin-left: $icon-gutter;
}

.c-project-navbar__icon--close {
  margin-left: $icon-gutter;
}



/* Misc
======================================================================== */
.c-project-navbar__string-project {
  opacity: .7;
  font-weight: $font-weight-regular;
  @include mq($until: desktop) {
    display: none;
  }
}

</style>
