<template>
  <l-header-primary class="c-site-header">
    
    <c-baselines></c-baselines>
    <c-gridlines></c-gridlines>

    <nav class="c-site-header__nav">
      <l-wrapper>
        <ul class="l-grid  l-grid--flush">

          <!-- LOGO -->
          <li class="l-grid__cell  u-1/4  u-2/5@mobile">
            <nuxt-link class="c-site-header__logo" to="/">
              <c-logo size="sm"></c-logo>
            </nuxt-link>
          </li><!--END- LOGO -->

          <li class="l-grid__cell  u-text--align-right  u-1/4  u-1/5@mobile">
            <nuxt-link class="c-site-header__link" to="/work/">
              <span class="c-site-header__link-text  o-text">
                work
              </span>
            </nuxt-link>
          </li>

          <li class="l-grid__cell  u-text--align-right  u-1/4  u-1/5@mobile">
            <nuxt-link class="c-site-header__link" to="/profile/">
              <span class="c-site-header__link-text  o-text">
                profile
              </span>
            </nuxt-link>
          </li>

          <li class="l-grid__cell  u-text--align-right  u-1/4  u-1/5@mobile">
            <nuxt-link class="c-site-header__link" to="/contact/">
              <span class="c-site-header__link-text  o-text">
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
import cGridlines from '~/components/c-gridlines'
import cBaselines from '~/components/c-baselines'
import cLogo from '~/components/c-logo'
import lHeaderPrimary from '~/components/layout/l-header-primary'
import lWrapper from '~/components/layout/l-wrapper'
export default {
  components: {
    lHeaderPrimary,
    cGridlines,
    cBaselines,
    cLogo,
    lWrapper
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
  // overflow: hidden;
  background-color: $neutral-95;
  &:after {
    content: '';
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    box-shadow: inset 0 -1px 0 0 $clr-primary;
  }
}

.c-site-header__link,
.c-site-header__logo {
  display: block;
  padding-top: $unit-md;
  padding-bottom: $unit-md - $unit-sm;
  width: 100%;
  text-decoration: none;
}


.c-site-header__link-text {
  font-weight: $font-weight-semi;
  display: inline-block;
  &:after {
    content: '';
    background-color: $red;
  }
}

.c-site-header__link {
  transition: color .3s ease;
  color: $neutral-30;
  position: relative;
  &.nuxt-link-exact-active {
    color: $blue;
  }
  &:hover {
    &:not(.nuxt-link-exact-active) {
      color: $green;
    }
  }
}


</style>
