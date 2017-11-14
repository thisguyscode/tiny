<template>
  <l-header-primary class="c-site-header">
    
    <c-baselines></c-baselines>

    <nav class="c-site-header__nav" :class="navClass" :style="navStyle()">
      <l-wrapper>
        <ul class="l-grid  l-grid--flush">

          <!-- LOGO -->
          <li class="l-grid__cell  u-1/4  u-2/5@mobile" v-scroll-to="'#page-top'">
            <nuxt-link class="c-site-header__logo-wrapper" to="/">
              <c-logo class="c-site-header__logo" size="md"></c-logo>
            </nuxt-link>
          </li><!--END- LOGO -->

          <li class="c-site-header__link-wrapper  l-grid__cell  u-text--align-right  u-1/4  u-1/5@mobile" v-scroll-to="'#page-top'">
            <nuxt-link class="c-site-header__link" to="/work/">
              <span class="c-site-header__link-text  o-text o-text--sm">
                work
              </span>
            </nuxt-link>
          </li>

          <li class="c-site-header__link-wrapper  l-grid__cell  u-text--align-right  u-1/4  u-1/5@mobile" v-scroll-to="'#page-top'">
            <nuxt-link class="c-site-header__link" to="/profile/">
              <span class="c-site-header__link-text  o-text o-text--sm">
                profile
              </span>
            </nuxt-link>
          </li>

          <li class="c-site-header__link-wrapper  l-grid__cell  u-text--align-right  u-1/4  u-1/5@mobile" v-scroll-to="'#page-top'">
            <nuxt-link class="c-site-header__link" to="/contact/">
              <span class="c-site-header__link-text  o-text o-text--sm">
                contact
              </span>
            </nuxt-link>
          </li>

        </ul>
      </l-wrapper>
    </nav>
  </l-header-primary>
</template>

<script>
import cLogo from '~/components/c-logo'
import lHeaderPrimary from '~/components/layout/l-header-primary'
import detectContrast from '~/utils/detectContrast'
export default {
  components: {
    lHeaderPrimary,
    cLogo
  },
  computed: {
    currentColor: function () {
      return this.$store.state.currentColor
    },
    navClass: function () {
      return {
        'c-site-header__nav--light': this.contrast === 'light',
        'c-site-header__nav--dark': this.contrast === 'dark'
      }
    }
  },
  methods: {
    contrast: function () {
      return detectContrast(this.currentColor)
    },
    navStyle: function () {
      if (this.contrast === 'light') {
        // return 'border-bottom-color: ' + this.currentColor + ';'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/* ========================================================================
  # SCOPED STYLES
======================================================================== */


/* Base class
======================================================================== */
.c-site-header {
}


/* Child classes
======================================================================== */

.c-site-header__nav {
  transition: border-color .2s ease;
  background-color: $neutral-100;
  border-bottom: 1px solid $neutral-00;
  border-top: 1px solid $neutral-00;
  margin-top: -1px;

}

.c-site-header__link,
.c-site-header__logo-wrapper {
  display: block;
  padding-top: $unit-md;
  padding-bottom: $unit-md - $unit-sm;
  width: 100%;
  text-decoration: none;
}

.c-site-header__logo-wrapper {
  height: 100%;
  overflow: hidden;
  &:hover {
    background-color: rgba($neutral-00, .05);
    > .c-site-header__logo {
      transform: scale(1.4);
    }
  }
}

.c-site-header__logo {
  width: 100%;
  transition: transform .1s ease;
  transform-origin: 0 40%;
}


.c-site-header__link {
  &:after,
  &:before {
    content: '';
    position: absolute;
    top: $unit-md;
    bottom: $unit-md;
    background-color: $neutral-80;
  }
}
.c-site-header__link-wrapper {
  > .c-site-header__link {
    &:before {
      left: 0;
      width: 1px;
    }
  }
  &:last-of-type {
    > .c-site-header__link {
      &:after {
        right: 0;
        width: 1px;
      }
    }
  }
}


.c-site-header__link-text {
  font-weight: $font-weight-semi;
  display: inline;
  position: relative;
}

.c-site-header__link {
  transition: color .3s ease;
  color: $neutral-50;
  text-align: center;

  &.nuxt-link-active {
    &:not(.c-site-header__logo-wrapper) {
      > .c-site-header__link-text {
        background: $neutral-00;
        color: $neutral-100;
      }
    }
  }
  &:hover {
    background-color: rgba($neutral-00, .05);
  }
}
</style>
